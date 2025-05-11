import { useState, useEffect } from 'react';
import SEOHead from './SEOHead';

type FAQItem = {
  question: string;
  answer: string;
  category?: string;
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<'category' | 'search'>('category');

  // Auto-open first FAQ after component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenIndex(0);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const categories = [
    "All Questions",
    "Services",
    "Family Law",
    "Corporate",
    "Fees",
    "Process"
  ];

  const faqItems: FAQItem[] = [
    {
      question: "As a top lawyer in Karachi, what areas of law do you specialize in?",
      answer: "As one of the best wakeels in Karachi, I specialize in corporate law, banking regulations, commercial litigation, mergers and acquisitions, and real estate law. With over 25 years of experience as a leading lawyer in Karachi, I provide strategic legal counsel to businesses across Pakistan, focusing on complex legal challenges and regulatory compliance.",
      category: "Services"
    },
    {
      question: "What family law services do you provide as a leading Karachi wakeel?",
      answer: "As an experienced family law practitioner in Karachi, I offer comprehensive services including divorce proceedings, child custody arrangements, marriage contracts, inheritance matters, and family dispute mediation. I approach family law matters with sensitivity and discretion, always aiming to protect my clients' interests while minimizing emotional stress during difficult personal situations.",
      category: "Family Law"
    },
    {
      question: "How can I schedule a consultation with you as my Karachi lawyer?",
      answer: "You can schedule a consultation with me, a top-rated wakeel in Karachi, by contacting my office directly at +92 333 2276821 or by email at noorzameen.advocate@gmail.com. Alternatively, you can use the contact form on this website, and my team will respond within 24-48 hours to arrange a meeting at my Karachi law office or via video conference.",
      category: "Process"
    },
    {
      question: "What is your fee structure as one of Karachi's leading lawyers?",
      answer: "My fee structure as a premier advocate in Karachi varies depending on the complexity and nature of your legal matter. I offer several billing arrangements including hourly rates, fixed fees for specific services, and retainer agreements for ongoing legal counsel. During your initial consultation, we'll discuss the most appropriate fee structure for your specific needs.",
      category: "Fees"
    },
    {
      question: "As a top wakeel in Karachi, do you represent clients outside of the city?",
      answer: "Yes, while my main office is located in Karachi, I represent clients throughout Pakistan. As one of the best lawyers in Karachi with a national reputation, I offer virtual consultations for clients outside the city and can arrange travel for important court appearances or meetings as needed.",
      category: "Services"
    },
    {
      question: "What is the typical timeline for resolving a corporate legal matter with a Karachi lawyer?",
      answer: "The timeline for resolving corporate legal matters varies significantly based on complexity, urgency, and whether litigation is involved. As an experienced wakeel in Karachi, I can complete simple contract reviews or legal opinions within days, while litigation or complex regulatory matters can take months or longer. During our initial consultation, I'll provide a more specific timeline estimate for your particular case.",
      category: "Corporate"
    },
    {
      question: "How do you stay current with changing regulations as a leading Karachi advocate?",
      answer: "As one of the best lawyers in Karachi, I maintain a rigorous commitment to continuing legal education and am an active member of several professional legal associations. I regularly participate in legal seminars, subscribe to regulatory update services, and maintain close relationships with regulatory bodies to ensure I provide advice based on the most current legal frameworks.",
      category: "Services"
    },
    {
      question: "How do you approach child custody cases in family law matters?",
      answer: "In child custody cases, I always prioritize the best interests of the child while protecting my client's parental rights. I work diligently to negotiate amicable co-parenting arrangements whenever possible, but am fully prepared to advocate vigorously in court when necessary. My approach combines legal expertise with compassion for the emotional complexities these cases involve.",
      category: "Family Law"
    }
  ];

  const filteredFAQs = faqItems.filter(item => {
    // Filter by category if active
    if (activeFilter === 'category' && selectedCategory && selectedCategory !== "All Questions") {
      return item.category === selectedCategory;
    }
    
    // Filter by search if active
    if (activeFilter === 'search' && searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        item.question.toLowerCase().includes(query) || 
        item.answer.toLowerCase().includes(query)
      );
    }
    
    // Return all if no filters active
    return true;
  });

  return (
    <section className="section bg-gray-50">
      <SEOHead 
        title="Frequently Asked Questions | Best Lawyer in Karachi" 
        description="Common questions about my legal services as a top wakeel in Karachi, specializing in corporate law, banking regulations, and commercial litigation."
        keywords="best lawyer in Karachi, wakeel in Karachi, Karachi advocate FAQ, top corporate lawyer, legal services Karachi, best advocate Sindh, family law Karachi, divorce lawyer"
      />
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h2 className="font-serif text-primary mb-4 relative z-10">Frequently Asked Questions</h2>
            <div className="absolute -bottom-2 left-0 right-0 h-3 bg-secondary-300/30 -z-10 transform -rotate-1"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions about my legal services as one of Karachi's best wakeels
          </p>
        </div>

        {/* FAQ Filter Controls */}
        <div className="mb-8 max-w-3xl mx-auto">
          <div className="flex justify-center space-x-2 mb-6">
            <button 
              onClick={() => {
                setActiveFilter('category');
                setSearchQuery('');
              }}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeFilter === 'category' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-600'
              }`}
              aria-label="Filter by category"
            >
              Browse by Category
            </button>
            <button 
              onClick={() => {
                setActiveFilter('search');
                setSelectedCategory(null);
              }}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeFilter === 'search' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-600'
              }`}
              aria-label="Search questions"
            >
              Search Questions
            </button>
          </div>
          
          {activeFilter === 'category' && (
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {categories.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                    category === selectedCategory || (category === "All Questions" && !selectedCategory)
                      ? 'bg-secondary-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  aria-label={`Filter by ${category} category`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
          
          {activeFilter === 'search' && (
            <div className="relative max-w-md mx-auto mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions or keywords..."
                className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:border-primary-500"
              />
              <svg 
                className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          )}
        </div>

        <div className="max-w-3xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-8 bg-white rounded-lg shadow-sm">
              <svg 
                className="w-12 h-12 text-gray-400 mx-auto mb-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-600">No questions found. Try another search term or category.</p>
            </div>
          ) : (
            filteredFAQs.map((item, index) => (
              <div 
                key={index} 
                className="mb-4 animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 text-left group"
                  aria-expanded={openIndex === index ? "true" : "false"}
                  aria-controls={`faq-content-${index}`}
                >
                  <div className="flex items-start">
                    {item.category && (
                      <span className="inline-block px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full mr-3 mt-1">
                        {item.category}
                      </span>
                    )}
                    <span className="font-bold text-primary-800 group-hover:text-primary-600 transition-colors">
                      {item.question}
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-primary-600 transform transition-transform duration-300 flex-shrink-0 ml-3 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  id={`faq-content-${index}`}
                >
                  <div className="p-5 bg-white border-t border-gray-100 rounded-b-lg">
                    <p className="text-gray-700">{item.answer}</p>
                    
                    <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        Was this helpful?
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-green-500 transition-colors" aria-label="Mark as helpful">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                        </button>
                        <button className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-red-500 transition-colors" aria-label="Mark as not helpful">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904a3.61 3.61 0 01.608-2.006L17 13v-5m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="/contact" 
            className="inline-flex items-center group px-6 py-3 bg-primary-800 text-white rounded-md hover:bg-primary-700 transition-colors"
          >
            <span>Ask Your Own Question</span>
            <svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 