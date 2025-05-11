import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

type ExpertiseItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ExpertiseSection = () => {
  const [animatedIndex, setAnimatedIndex] = useState<number | null>(null);
  
  // Auto-animate expertise items sequence
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedIndex(prev => {
        if (prev === null || prev >= expertiseItems.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const expertiseItems: ExpertiseItem[] = [
    {
      title: "Strategic Legal Risk Management",
      description: "I provide comprehensive legal risk analysis and mitigation strategies for businesses.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Family Law & Personal Matters",
      description: "I provide compassionate representation for divorce, custody, and inheritance matters with sensitivity and discretion.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Corporate Governance & Compliance",
      description: "I establish robust governance frameworks and ensure regulatory compliance for organizations.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Banking & Financial Regulations",
      description: "I offer expert guidance on banking regulations and financial compliance frameworks.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
    {
      title: "Commercial Contract Negotiation",
      description: "I provide strategic contract drafting and negotiation to protect your interests.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Mergers & Acquisitions Advisory",
      description: "I deliver comprehensive legal support for complex M&A transactions.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      ),
    },
    {
      title: "Real Estate & Property Law",
      description: "I provide legal guidance on property transactions, disputes, and development projects.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
  ];

  // Interactive statistics with counting animation
  const stats = [
    { value: 25, label: "Years Experience", symbol: "+" },
    { value: 500, label: "Cases Handled", symbol: "+" },
    { value: 90, label: "Success Rate", symbol: "%" },
    { value: 100, label: "Corporate Clients", symbol: "+" }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="font-serif text-primary mb-4 relative z-10">My Legal Expertise</h2>
            <div className="absolute -bottom-2 left-0 right-0 h-3 bg-secondary-300/30 -z-10 transform -rotate-1"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I provide strategic legal counsel across a range of specialized practice areas to 
            protect your interests and advance your business objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <div 
              key={index}
              className={`bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-500 flex flex-col items-center text-center
                ${animatedIndex === index ? 'transform -translate-y-2 shadow-xl' : ''}`}
              onMouseEnter={() => setAnimatedIndex(index)}
            >
              <div className={`text-primary mb-4 transform transition-transform duration-500 ${animatedIndex === index ? 'scale-110' : ''}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="mt-auto pt-4">
                <Link 
                  to={`/expertise#${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} 
                  className="inline-flex items-center text-primary hover:text-secondary-500 transition-colors"
                  aria-label={`View details about ${item.title} services`}
                >
                  <span>Explore {item.title.split(' ')[0]} Services</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Stats Counter */}
        <div className="mt-20 py-12 px-6 bg-primary rounded-xl shadow-lg text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 flex items-center justify-center">
                  <span>{stat.value}</span>
                  <span className="text-secondary-400">{stat.symbol}</span>
                </div>
                <p className="text-sm text-gray-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/expertise" 
            className="btn btn-primary inline-flex items-center group"
          >
            <span>Explore All My Services</span>
            <svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection; 