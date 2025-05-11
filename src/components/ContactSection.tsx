import { useState, useEffect } from 'react';
import type { FormEvent, ChangeEvent } from 'react';

// Define the type for the window global with our custom properties
declare global {
  interface Window {
    submitGoogleForm: (formData: any) => boolean;
    formConfig: {
      fields: {
        name: string;
        email: string;
        phone: string;
        subject: string;
        message: string;
      };
      messages: {
        success: string;
        error: string;
      };
    };
  }
}

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [googleFormsLoaded, setGoogleFormsLoaded] = useState(false);

  // Load the Google Forms scripts when component mounts
  useEffect(() => {
    // Add timestamp to prevent caching
    const timestamp = new Date().getTime();
    
    if (!document.querySelector('script[src^="/config.js"]')) {
      // Load config.js only if not already loaded
      const configScript = document.createElement('script');
      configScript.src = `/config.js?v=${timestamp}`;
      configScript.async = true;

      // Load sendform.js after config
      configScript.onload = () => {
        if (!document.querySelector('script[src^="/sendform.js"]')) {
          const sendFormScript = document.createElement('script');
          sendFormScript.src = `/sendform.js?v=${timestamp}`;
          sendFormScript.async = true;
          sendFormScript.onload = () => setGoogleFormsLoaded(true);
          document.body.appendChild(sendFormScript);
        } else {
          setGoogleFormsLoaded(true);
        }
      };

      document.body.appendChild(configScript);
    } else {
      // Scripts already loaded
      if (document.querySelector('script[src^="/sendform.js"]')) {
        setGoogleFormsLoaded(true);
      } else {
        const sendFormScript = document.createElement('script');
        sendFormScript.src = `/sendform.js?v=${timestamp}`;
        sendFormScript.async = true;
        sendFormScript.onload = () => setGoogleFormsLoaded(true);
        document.body.appendChild(sendFormScript);
      }
    }

    // No cleanup - we want to keep the scripts loaded across the site
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      if (googleFormsLoaded && window.submitGoogleForm) {
        // Submit using Google Forms integration
        const success = window.submitGoogleForm(formData);
        
        if (success) {
          setFormStatus('success');
          // Reset form
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
          });
          
          // Reset form status after 5 seconds
          setTimeout(() => {
            setFormStatus('idle');
          }, 5000);
        } else {
          setFormStatus('error');
        }
      } else {
        // Fallback submission method
        console.log('Google Forms integration not loaded, using fallback');
        
        // Create a hidden iframe for submission
        const iframe = document.createElement('iframe');
        iframe.name = 'hidden-frame';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        
        // Create a form element
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'https://docs.google.com/forms/d/e/1FAIpQLScr-HTqHWhKP9Yj7fdFCXmDrkbiIZgH6mA6jIhXluR2jzRSkA/formResponse';
        form.target = 'hidden-frame';
        
        // Add form fields
        const fields = {
          'entry.2005620554': formData.name,
          'entry.1045781291': formData.email,
          'entry.1166974658': formData.phone,
          'entry.839337160': formData.subject,
          'entry.229144636': formData.message
        };
        
        // Create input fields
        Object.entries(fields).forEach(([name, value]) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = name;
          input.value = String(value);
          form.appendChild(input);
        });
        
        // Submit the form
        document.body.appendChild(form);
        form.submit();
        
        // Cleanup
        setTimeout(() => {
          document.body.removeChild(form);
          document.body.removeChild(iframe);
        }, 1000);
        
        setFormStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        
        // Reset form status after 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h2 className="font-serif text-primary mb-4 relative z-10">Contact Me</h2>
            <div className="absolute -bottom-2 left-0 right-0 h-3 bg-secondary-300/30 -z-10 transform -rotate-1"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule a consultation to discuss your legal needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-serif text-primary mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 mr-4 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">My Phone</h4>
                  <p className="text-gray-600">
                    <a href="tel:+923332276821" className="hover:text-primary transition-colors">
                      +92 333 2276821
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="tel:+922135685596" className="hover:text-primary transition-colors">
                      021-5685596
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 mr-4 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">My Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:noorzameen.advocate@gmail.com" className="hover:text-primary transition-colors">
                      noorzameen.advocate@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 mr-4 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">My Office Address</h4>
                  <p className="text-gray-600">
                    M/s. Ata-ur-Rehman & Co. Advocates<br />
                    206-207, Al-Ameera Centre,<br />
                    Shahrah-e-Iraq, Saddar<br />
                    Karachi, Pakistan
                  </p>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-lg font-medium mb-3 text-primary">Office Hours</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-serif text-primary mb-6">Send Me a Message</h3>
            
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition-colors"
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Your subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Please describe how I can help you..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className={`btn ${
                  formStatus === 'submitting' 
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'btn-primary hover:bg-primary/90'
                } w-full transform transition-transform duration-300 ${formStatus !== 'submitting' ? 'hover:-translate-y-1' : ''}`}
              >
                {formStatus === 'submitting' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>
              
              {/* Hidden iframe for Google Form submission */}
              <iframe name="hidden-iframe" style={{ display: 'none' }}></iframe>
              
              {formStatus === 'success' && (
                <div className="bg-green-100 text-green-700 p-4 rounded-md animate-fadeIn">
                  <div className="flex">
                    <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p>Your message has been sent successfully. I'll get back to you soon.</p>
                  </div>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="bg-red-100 text-red-700 p-4 rounded-md animate-fadeIn">
                  <div className="flex">
                    <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p>There was an error sending your message. Your message was still sent, but please contact me directly if you don't hear back.</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 