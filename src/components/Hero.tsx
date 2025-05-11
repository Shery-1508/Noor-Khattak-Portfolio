import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';

const Hero = () => {
  return (
    <>
      <SEOHead 
        title="Top Karachi Advocate & Legal Counsel" 
        description="I am Advocate Noor Z. Khattak - Senior Legal Counsel in Karachi with 25+ years of distinguished experience in corporate law, banking regulations, and commercial litigation in the High Court of Sindh, Pakistan."
        keywords="lawyer Karachi, advocate Sindh Pakistan, wakeel in Karachi, high court lawyer, corporate lawyer Pakistan, banking regulations counsel, commercial litigation Karachi, legal services Sindh, best lawyer in Karachi, top wakeel in Karachi"
        />
      
      <div className="relative pt-28 pb-16 md:pt-36 md:pb-28 bg-gradient-to-r from-primary-900 to-primary-800 text-white overflow-hidden">
        {/* Decorative design elements */}
        <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full opacity-10">
          <div className="w-full h-full bg-hero-pattern bg-no-repeat bg-cover"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="container-custom relative z-10 px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 animate-slide-up">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="h-px w-8 md:w-10 bg-secondary-400 mr-3 md:mr-4"></div>
                <p className="text-secondary-400 font-medium uppercase tracking-wider text-xs sm:text-sm">Providing Legal Excellence Since 1998</p>
              </div>
              
              <h1 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-3 md:mb-4 leading-tight">
                I Provide Expert Legal Counsel <br className="hidden sm:block" />
                <span className="text-secondary-400">for Complex Challenges</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-serif text-gray-200 mb-4 md:mb-6 font-light">
                Senior Advocate & Trusted Wakeel with 25+ Years of Experience
              </h2>
              
              <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed max-w-xl">
                I specialize in corporate law, banking regulations, and high-stakes commercial litigation 
                in the High Court of Sindh. I provide expert legal representation with strategic 
                counsel that balances your business objectives with robust legal protection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                <Link to="/contact" className="btn bg-secondary-500 hover:bg-secondary-400 text-white font-medium transition-all shadow-premium-hover transform hover:-translate-y-1 text-center py-3 px-6">
                  Request Consultation
                </Link>
                <Link to="/about" className="btn border border-white/30 hover:bg-white/10 text-white font-medium transition-all text-center py-3 px-6">
                  Learn More About Me
                </Link>
              </div>
              
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center text-white font-medium text-sm">HC</div>
                  <div className="w-10 h-10 rounded-full bg-secondary-600 flex items-center justify-center text-white font-medium text-sm">SB</div>
                  <div className="w-10 h-10 rounded-full bg-secondary-700 flex items-center justify-center text-white font-medium text-sm">PB</div>
                </div>
                <div className="sm:ml-4">
                  <p className="text-sm text-gray-300">I am registered with High Court of Sindh, State Bank of Pakistan, Pakistan Bar Council</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center mb-8 md:mb-0 animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-secondary-400 to-secondary-600 opacity-75 blur-sm"></div>
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-premium border-4 border-white/20">
                  <img 
                    src="/Noor_Khattak.jpeg" 
                    alt="Advocate Noor Z. Khattak - Best Lawyer in Karachi" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-8 md:pt-10">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary-400 mb-1 md:mb-2">25+</div>
              <p className="text-xs sm:text-sm text-gray-300">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary-400 mb-1 md:mb-2">500+</div>
              <p className="text-xs sm:text-sm text-gray-300">Cases Handled</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary-400 mb-1 md:mb-2">75%</div>
              <p className="text-xs sm:text-sm text-gray-300">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary-400 mb-1 md:mb-2">100+</div>
              <p className="text-xs sm:text-sm text-gray-300">Corporate Clients</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero; 