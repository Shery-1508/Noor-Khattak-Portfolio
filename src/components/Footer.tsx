import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start mb-4">
              <svg className="w-6 h-6 mr-2 text-secondary-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L6 7.32V7.5a5 5 0 0 0 3.75 4.8V20.5h-2.5V22h9.5v-1.5h-2.5v-8.2a5 5 0 0 0 3.75-4.8V7.32L12 2zm0 2.28l3.4 3.22V7.5a3.5 3.5 0 0 1-6.8 1.15 3.5 3.5 0 0 1-.1-.65v-.75L12 4.28z"/>
              </svg>
              <h3 className="text-xl font-serif">Adv. Noor Z. Khattak</h3>
            </div>
            <p className="mb-2">Top Lawyer & Wakeel in Karachi</p>
            <p className="mb-2">Senior Legal Counsel - High Court of Sindh</p>
            <p className="mb-2">Member, Pakistan Bar Council</p>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-serif mb-4">Contact Karachi's Best Lawyer</h3>
            <p className="mb-2">
              <a href="mailto:noorzameen.advocate@gmail.com" className="hover:text-accent transition-colors flex items-center justify-center sm:justify-start">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                noorzameen.advocate@gmail.com
              </a>
            </p>
            <p className="mb-2">
              <a href="tel:+923332276821" className="hover:text-accent transition-colors flex items-center justify-center sm:justify-start">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                +92 333 2276821
              </a>
            </p>
            <p className="mb-2 flex flex-col items-center sm:items-start">
              <span className="flex items-center mb-1">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                Karachi Law Office:
              </span>
              M/s. Ata-ur-Rehman & Co. Advocates<br />
              206-207, Al-Ameera Centre,<br />
              Shahrah-e-Iraq, Saddar<br />
              Karachi, Pakistan
            </p>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-serif mb-4">Legal Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-accent transition-colors inline-flex items-center">
                  <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors inline-flex items-center">
                  <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                  About Your Karachi Lawyer
                </Link>
              </li>
              <li>
                <Link to="/expertise" className="hover:text-accent transition-colors inline-flex items-center">
                  <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                  Legal Expertise
                </Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-accent transition-colors inline-flex items-center">
                  <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                  Legal Experience
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors inline-flex items-center">
                  <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                  Contact Your Wakeel
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Adv. Noor Z. Khattak - Best Lawyer and Wakeel in Karachi. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">Providing expert legal services in corporate law, banking regulations, and commercial litigation across Karachi and Pakistan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 