import { useState } from 'react';
import SEOHead from './SEOHead';

type FAQItem = {
  question: string;
  answer: string;
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqItems: FAQItem[] = [
    {
      question: "As a top lawyer in Karachi, what areas of law do you specialize in?",
      answer: "As one of the best wakeels in Karachi, I specialize in corporate law, banking regulations, commercial litigation, mergers and acquisitions, and real estate law. With over 25 years of experience as a leading lawyer in Karachi, I provide strategic legal counsel to businesses across Pakistan, focusing on complex legal challenges and regulatory compliance."
    },
    {
      question: "How can I schedule a consultation with you as my Karachi lawyer?",
      answer: "You can schedule a consultation with me, a top-rated wakeel in Karachi, by contacting my office directly at +92 333 2276821 or by email at noorzameen.advocate@gmail.com. Alternatively, you can use the contact form on this website, and my team will respond within 24-48 hours to arrange a meeting at my Karachi law office or via video conference."
    },
    {
      question: "What is your fee structure as one of Karachi's leading lawyers?",
      answer: "My fee structure as a premier advocate in Karachi varies depending on the complexity and nature of your legal matter. I offer several billing arrangements including hourly rates, fixed fees for specific services, and retainer agreements for ongoing legal counsel. During your initial consultation, we'll discuss the most appropriate fee structure for your specific needs."
    },
    {
      question: "As a top wakeel in Karachi, do you represent clients outside of the city?",
      answer: "Yes, while my main office is located in Karachi, I represent clients throughout Pakistan. As one of the best lawyers in Karachi with a national reputation, I offer virtual consultations for clients outside the city and can arrange travel for important court appearances or meetings as needed."
    },
    {
      question: "What is the typical timeline for resolving a corporate legal matter with a Karachi lawyer?",
      answer: "The timeline for resolving corporate legal matters varies significantly based on complexity, urgency, and whether litigation is involved. As an experienced wakeel in Karachi, I can complete simple contract reviews or legal opinions within days, while litigation or complex regulatory matters can take months or longer. During our initial consultation, I'll provide a more specific timeline estimate for your particular case."
    },
    {
      question: "How do you stay current with changing regulations as a leading Karachi advocate?",
      answer: "As one of the best lawyers in Karachi, I maintain a rigorous commitment to continuing legal education and am an active member of several professional legal associations. I regularly participate in legal seminars, subscribe to regulatory update services, and maintain close relationships with regulatory bodies to ensure I provide advice based on the most current legal frameworks."
    }
  ];

  return (
    <section className="section bg-gray-50">
      <SEOHead 
        title="Frequently Asked Questions | Best Lawyer in Karachi" 
        description="Common questions about my legal services as a top wakeel in Karachi, specializing in corporate law, banking regulations, and commercial litigation."
        keywords="best lawyer in Karachi, wakeel in Karachi, Karachi advocate FAQ, top corporate lawyer, legal services Karachi, best advocate Sindh"
      />
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-serif text-primary mb-4">Frequently Asked Questions About Your Karachi Lawyer</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions about my legal services as one of Karachi's best wakeels
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 text-left"
              >
                <span className="font-bold text-primary-800">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-primary-600 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
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
              >
                <div className="p-5 bg-white border-t border-gray-100 rounded-b-lg">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 