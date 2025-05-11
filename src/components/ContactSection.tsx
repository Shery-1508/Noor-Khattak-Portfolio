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
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <h3 className="text-2xl font-serif text-primary mb-6">Send Message</h3>
      
      <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            placeholder="What can I help you with?"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition-colors"
            placeholder="Please provide details about your legal inquiry..."
          ></textarea>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-500">* Required fields</span>
          </div>
          <button
            type="submit"
            disabled={formStatus === 'submitting'}
            className={`
              px-6 py-3 bg-primary text-white rounded-md shadow-sm
              hover:bg-primary-700 transition-colors 
              ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}
            `}
          >
            {formStatus === 'submitting' ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : 'Send Message'}
          </button>
        </div>
        
        {/* Form Status Messages */}
        {formStatus === 'success' && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md text-green-700 animate-fade-in">
            <div className="flex">
              <svg className="h-5 w-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{(window.formConfig?.messages?.success) || 'Your message has been sent successfully. We\'ll get back to you soon.'}</span>
            </div>
          </div>
        )}
        
        {formStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-700 animate-fade-in">
            <div className="flex">
              <svg className="h-5 w-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{(window.formConfig?.messages?.error) || 'There was an error submitting the form. Your message was still sent, but please contact us directly if you don\'t hear back.'}</span>
            </div>
          </div>
        )}
      </form>
      
      {/* Hidden iframe for form submission - keep this */}
      <iframe name="hidden-iframe" style={{ display: 'none' }}></iframe>
    </div>
  );
};

export default ContactSection; 