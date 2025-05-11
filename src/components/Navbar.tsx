import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  // Always scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Handle body overflow when menu opens (prevent background scrolling)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden-mobile');
    } else {
      document.body.classList.remove('overflow-hidden-mobile');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden-mobile');
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-white text-primary-800 shadow-premium border-gray-100`}
    >
      <div className="container-custom py-3 md:py-4 px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="flex items-center transition-all duration-300 text-primary-800">
                {/* Gold scales of justice logo */}
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 mr-2 md:mr-3 text-secondary-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L6 7.32V7.5a5 5 0 0 0 3.75 4.8V20.5h-2.5V22h9.5v-1.5h-2.5v-8.2a5 5 0 0 0 3.75-4.8V7.32L12 2zm0 2.28l3.4 3.22V7.5a3.5 3.5 0 0 1-6.8 1.15 3.5 3.5 0 0 1-.1-.65v-.75L12 4.28z"/>
                </svg>
                <div>
                  <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold leading-tight">Adv. Noor Z. Khattak</span>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider font-medium text-primary-600">Senior Legal Counsel</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-8 items-center">
            <NavLink to="/" active={isActive('/')}>Home</NavLink>
            <NavLink to="/about" active={isActive('/about')}>About</NavLink>
            <NavLink to="/expertise" active={isActive('/expertise')}>Expertise</NavLink>
            <NavLink to="/experience" active={isActive('/experience')}>Experience</NavLink>
            <Link 
              to="/contact" 
              className="px-4 py-2 rounded-md transition-all text-sm bg-primary-800 text-white hover:bg-primary-700"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-1 focus:outline-none transition-colors text-primary-800"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-3 space-y-2 flex flex-col animate-slide-down bg-white">
            <MobileNavLink to="/" active={isActive('/')}>Home</MobileNavLink>
            <MobileNavLink to="/about" active={isActive('/about')}>About</MobileNavLink>
            <MobileNavLink to="/expertise" active={isActive('/expertise')}>Expertise</MobileNavLink>
            <MobileNavLink to="/experience" active={isActive('/experience')}>Experience</MobileNavLink>
            <Link 
              to="/contact" 
              className="px-4 py-2 rounded-md text-center transition-all bg-primary-800 text-white hover:bg-primary-700"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  scrolled?: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, active, children }: NavLinkProps) => (
  <Link 
    to={to} 
    className={`relative font-medium transition-colors text-sm lg:text-base ${
      active 
        ? 'text-primary-800 font-semibold' 
        : 'text-primary-700 hover:text-primary-800'
    }`}
  >
    {children}
    {active && (
      <span 
        className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary-500 transition-all"
      ></span>
    )}
  </Link>
);

const MobileNavLink = ({ to, active, children }: NavLinkProps) => (
  <Link 
    to={to} 
    className={`relative px-4 py-2 rounded-md transition-colors text-sm ${
      active 
        ? 'bg-gray-100 text-primary-800 font-semibold' 
        : 'text-primary-700 hover:bg-gray-50'
    }`}
  >
    {children}
  </Link>
);

export default Navbar; 