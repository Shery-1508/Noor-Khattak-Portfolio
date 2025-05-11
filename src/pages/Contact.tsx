import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <div className="bg-gray-50">
      <SEO pageKey="contact" />
      <div className="container-custom py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-primary mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with Advocate Noor Z. Khattak for professional legal counsel
          </p>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9 w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder for Google Maps - In a real implementation, you would use the Google Maps API */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
          </div>
        </div>

        {/* Contact Form Section */}
        <ContactSection />

        {/* Office Hours */}
        <div className="mt-16">
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