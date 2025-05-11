import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { useState } from 'react';

const Expertise = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const toggleTab = (index: number) => {
    if (activeTab === index) {
      setActiveTab(null);
    } else {
      setActiveTab(index);
    }
  };

  const expertiseAreas = [
    {
      title: "Strategic Legal Risk Management",
      description: "Comprehensive analysis and mitigation strategies for identifying and managing legal risks that could impact your business operations.",
      details: [
        "Conduct comprehensive legal risk assessments",
        "Develop strategic risk mitigation frameworks",
        "Implement preventive legal protocols",
        "Provide ongoing risk management guidance",
        "Create crisis management plans and procedures"
      ]
    },
    {
      title: "Family Law & Personal Matters",
      description: "Compassionate and effective representation for family legal matters, with a focus on achieving favorable outcomes while minimizing emotional stress.",
      details: [
        "Handle divorce and separation proceedings",
        "Negotiate child custody and guardianship arrangements",
        "Draft and review marriage contracts and prenuptial agreements",
        "Resolve inheritance and succession planning matters",
        "Mediate family disputes with sensitivity and discretion"
      ]
    },
    {
      title: "Corporate Governance & Compliance",
      description: "Establishing robust governance frameworks to ensure your organization operates in compliance with all applicable laws and regulations.",
      details: [
        "Design corporate governance structures",
        "Develop compliance policies and procedures",
        "Conduct compliance audits and assessments",
        "Provide director and officer training",
        "Establish ethical business practice guidelines"
      ]
    },
    {
      title: "Banking & Financial Regulations",
      description: "Expert guidance on navigating the complex regulatory landscape governing banking and financial services in Pakistan.",
      details: [
        "Provide State Bank of Pakistan regulatory compliance",
        "Implement FATF compliance frameworks",
        "Advise on anti-money laundering regulations",
        "Structure financial products and services",
        "Conduct regulatory due diligence"
      ]
    },
    {
      title: "Commercial Contract Negotiation",
      description: "Strategic contract drafting and negotiation to protect your interests and create clear, enforceable agreements.",
      details: [
        "Draft and review commercial agreements",
        "Negotiate favorable contract terms",
        "Develop standard contract templates",
        "Resolve contract disputes and breaches",
        "Create service level agreements"
      ]
    },
    {
      title: "Mergers & Acquisitions Advisory",
      description: "Comprehensive legal support for complex corporate transactions, from due diligence to integration planning.",
      details: [
        "Conduct legal due diligence",
        "Structure transaction frameworks",
        "Draft and negotiate acquisition agreements",
        "Manage regulatory approvals",
        "Advise on post-acquisition integration"
      ]
    },
    {
      title: "Dispute Resolution Strategy",
      description: "Effective approaches to resolving commercial disputes through negotiation, mediation, arbitration, or litigation.",
      details: [
        "Develop pre-litigation strategy",
        "Represent clients in High Court proceedings",
        "Facilitate commercial mediations",
        "Manage arbitration processes",
        "Negotiate favorable settlements"
      ]
    },
    {
      title: "Real Estate & Property Law",
      description: "Legal guidance on property transactions, disputes, and development projects in Pakistan's complex real estate market.",
      details: [
        "Draft and review property agreements",
        "Conduct title due diligence",
        "Resolve boundary and ownership disputes",
        "Advise on commercial lease arrangements",
        "Provide guidance on land development regulations"
      ]
    },
    {
      title: "Industry-Specific Legal Advisory",
      description: "Specialized legal guidance tailored to the unique regulatory requirements and challenges of specific industries.",
      details: [
        "Banking and financial services",
        "Real estate and construction",
        "Technology and telecommunications",
        "Shipping and maritime",
        "Manufacturing and industrial"
      ]
    }
  ];

  // Create structured data for services
  const servicesData = {
    "@type": "ProfessionalService",
    "name": "Adv. Noor Z. Khattak Legal Services",
    "serviceType": "Legal Services",
    "offers": expertiseAreas.map(area => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": area.title,
        "description": area.description
      }
    }))
  };

  // Success stories with client testimonials
  const successStories = [
    {
      title: "Family Inheritance Resolution",
      clientType: "Family Business",
      challenge: "Complex inheritance dispute between family members threatening to divide a multi-generational business",
      solution: "Facilitated a fair asset division while preserving the core family business through structured mediation",
      result: "Preserved family relationships and business continuity while ensuring equitable distribution of assets",
      testimonial: "Adv. Khattak managed to resolve what seemed like an impossible situation. Our family business survived intact while family members received fair settlements."
    },
    {
      title: "Corporate Governance Restructuring",
      clientType: "Mid-sized Manufacturing Company",
      challenge: "Outdated governance structure creating compliance risks and operational inefficiencies",
      solution: "Comprehensive governance review and implementation of modern corporate structure",
      result: "30% reduction in compliance costs and improved operational decision-making",
      testimonial: "The new governance framework has transformed our company's operations and significantly reduced our regulatory risks."
    },
    {
      title: "Child Custody Resolution",
      clientType: "High-profile Family",
      challenge: "Contentious custody dispute with international jurisdiction complications",
      solution: "Negotiated a comprehensive co-parenting agreement focusing on the child's best interests",
      result: "Amicable resolution that avoided lengthy court battles and protected the child's well-being",
      testimonial: "Adv. Khattak's compassionate approach helped us focus on our child's needs above our differences."
    }
  ];

  return (
    <div className="bg-gray-50">
      <SEO pageKey="expertise" />
      <StructuredData type="professionalService" customData={servicesData} />
      <div className="container-custom py-20">
        {/* Page Header with animated text */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h1 className="font-serif text-primary mb-4 relative z-10">Legal Expertise Areas</h1>
            <div className="absolute -bottom-2 left-0 right-0 h-3 bg-secondary-300/30 -z-10 transform -rotate-1"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeIn">
            Specialized legal services to protect your interests and support your business objectives
          </p>
        </div>

        {/* Interactive Expertise Selection */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {expertiseAreas.map((area, index) => (
            <button 
              key={index}
              onClick={() => toggleTab(index)}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                activeTab === index 
                  ? 'bg-primary text-white shadow-md transform -translate-y-1' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              aria-pressed={activeTab === index}
              aria-label={`Show details about ${area.title}`}
            >
              {area.title}
            </button>
          ))}
        </div>

        {/* Featured Expertise (if selected) */}
        {activeTab !== null && (
          <div className="mb-16 bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary animate-slideIn">
            <button 
              onClick={() => setActiveTab(null)}
              className="float-right text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="font-serif text-primary text-2xl mb-4">{expertiseAreas[activeTab].title}</h2>
            <p className="text-gray-600 mb-6 text-lg">{expertiseAreas[activeTab].description}</p>
            
            <h3 className="font-medium text-lg mb-4">My Approach:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {expertiseAreas[activeTab].details.map((detail, idx) => (
                <li key={idx} className="animate-fadeIn" style={{animationDelay: `${idx * 0.1}s`}}>{detail}</li>
              ))}
            </ul>
            
            <div className="mt-6 text-center">
              <a href="/contact" className="inline-block px-6 py-3 bg-secondary-500 text-white rounded-md hover:bg-secondary-600 transition-colors">
                Discuss Your {expertiseAreas[activeTab].title.split(' ')[0]} Needs
              </a>
            </div>
          </div>
        )}

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <h2 className="font-serif text-primary text-2xl mb-4">{area.title}</h2>
              <p className="text-gray-600 mb-6">{area.description}</p>
              
              <h3 className="font-medium text-lg mb-4">Our Approach:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {area.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-primary text-3xl mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results for real clients facing complex legal challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="bg-primary text-white p-4">
                  <h3 className="font-bold text-xl">{story.title}</h3>
                  <p className="text-white/80 text-sm">{story.clientType}</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm uppercase text-gray-500 font-medium mb-1">Challenge:</h4>
                    <p className="text-gray-700">{story.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm uppercase text-gray-500 font-medium mb-1">Solution:</h4>
                    <p className="text-gray-700">{story.solution}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm uppercase text-gray-500 font-medium mb-1">Result:</h4>
                    <p className="text-gray-700">{story.result}</p>
                  </div>
                  <blockquote className="border-l-4 border-secondary-400 pl-4 italic text-gray-600">
                    "{story.testimonial}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Served */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-primary text-3xl mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized expertise across key sectors of Pakistan's economy
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-primary/10 text-primary p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Banking & Finance</h3>
              <p className="text-gray-600">Regulatory compliance and transaction structuring</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-primary/10 text-primary p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Real Estate</h3>
              <p className="text-gray-600">Property transactions and development projects</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-primary/10 text-primary p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Technology</h3>
              <p className="text-gray-600">IP protection and regulatory compliance</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-primary/10 text-primary p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Shipping & Maritime</h3>
              <p className="text-gray-600">Contract negotiation and dispute resolution</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise; 