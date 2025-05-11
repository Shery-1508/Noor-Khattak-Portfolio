import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const Contact = () => {
  // Create structured data for local business with contact info
  const contactData = {
    "@type": "LocalBusiness",
    "name": "Adv. Noor Z. Khattak Legal Office",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "M/s. Ata-ur-Rehman & Co. Advocates, 206-207, Al-Ameera Centre, Shahrah-e-Iraq, Saddar",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "postalCode": "74400",
      "addressCountry": "PK"
    },
    "telephone": "+92 XXX XXXXXXX",
    "email": "contact@example.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "14:00"
      }
    ]
  };

  return (
    <div className="bg-gray-50">
      <SEO pageKey="contact" />
      <StructuredData type="localBusiness" customData={contactData} />
      <div className="container-custom py-20">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-primary mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with Advocate Noor Z. Khattak for professional legal counsel
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Map Section - Now in the left column */}
          <div className="order-1 lg:order-1">
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h2 className="text-2xl font-serif text-primary mb-4">Our Location</h2>
              <div className="aspect-w-16 aspect-h-9 w-full h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                {/* Placeholder for Google Maps - In a real implementation, you would use the Google Maps API */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="mt-2">
                      M/s. Ata-ur-Rehman & Co. Advocates<br />
                      206-207, Al-Ameera Centre,<br />
                      Shahrah-e-Iraq, Saddar<br />
                      Karachi, Pakistan
                    </p>
                    <p className="mt-2 text-primary">
                      For a live map, the Google Maps API would be implemented here.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Quick Contact Info */}
              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2">Quick Contact:</h3>
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+923332276821" className="hover:text-primary transition-colors">+92 333 2276821</a>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:noorzameen.advocate@gmail.com" className="hover:text-primary transition-colors">noorzameen.advocate@gmail.com</a>
                </div>
                
                <div className="mt-6 p-4 bg-primary-50 border border-primary-100 rounded-lg">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-primary mb-1">Need quick assistance?</h4>
                      <p className="text-sm text-gray-600">
                        Use the contact form to receive a prompt response from Adv. Noor Khattak. 
                        Your message will be sent directly to the lawyer's office.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section - Now in the right column */}
          <div className="order-2 lg:order-2 relative">
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 lg:hidden flex flex-col items-center animate-bounce">
              <span className="text-primary font-medium mb-1">Contact Form Below</span>
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <ContactSection />
          </div>
        </div>

        {/* Office Hours */}
        <div className="mt-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="font-serif text-primary text-2xl mb-6 text-center">Office Hours</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Weekdays</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Monday:</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Tuesday:</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Wednesday:</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Thursday:</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Friday:</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Weekends</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Saturday:</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">Appointments</h3>
                  <p className="text-gray-700">
                    Outside of regular office hours, consultations are available by appointment only.
                    Please contact us to schedule a meeting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 