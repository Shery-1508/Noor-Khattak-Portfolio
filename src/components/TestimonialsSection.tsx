import { useState } from 'react';

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
};

type CompanyLogo = {
  name: string;
  logo: string;
};

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Advocate Noor Khattak's strategic approach to our complex banking litigation saved us millions and helped us implement a robust compliance framework.",
      name: "Muhammad Ali",
      title: "CEO",
      company: "Allied Bank Limited"
    },
    {
      quote: "His expertise in corporate governance transformed our legal framework, significantly reducing our exposure to regulatory penalties.",
      name: "Sarah Khan",
      title: "Managing Director",
      company: "PK Industries",
    },
    {
      quote: "Advocate Khattak provided invaluable counsel during our merger negotiations, ensuring every legal detail was addressed with precision.",
      name: "Ahmed Raza",
      title: "Chief Financial Officer",
      company: "Karachi Shipping Corporation",
    },
    {
      quote: "His depth of knowledge in commercial contracts has been instrumental in protecting our interests across multiple international transactions.",
      name: "Fatima Jinnah",
      title: "Legal Director",
      company: "Pakistan Telecom",
    },
  ];

  // Corporate clients logos
  const corporateLogos: CompanyLogo[] = [
    {
      name: "Pakistan State Oil",
      logo: "/logos/pso.png"
    },
    {
      name: "MCB Bank",
      logo: "/logos/mcb-bank.png"
    },
    {
      name: "HBL",
      logo: "/logos/hbl.png"
    },
    {
      name: "PTCL",
      logo: "/logos/ptcl.png"
    },
    {
      name: "K-Electric",
      logo: "/logos/k-electric.png"
    },
    {
      name: "Lucky Cement",
      logo: "/logos/lucky-cement.png"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="section bg-primary text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-serif mb-4">What My Clients Say</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            I'm proud to have helped these companies achieve their legal objectives
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-primary-dark bg-opacity-20 p-8 md:p-12 rounded-lg">
            <svg className="w-12 h-12 text-accent opacity-30 absolute top-6 left-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
            </svg>

            <div className="relative z-10">
              <p className="text-xl md:text-2xl mb-8 italic">"{currentTestimonial.quote}"</p>
              <div className="flex items-center">
                <div>
                  <p className="font-bold text-lg">{currentTestimonial.name}</p>
                  <p className="text-gray-300">{currentTestimonial.title}, {currentTestimonial.company}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial} 
              className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-white bg-opacity-30'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial} 
              className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Corporate Client Logos */}
        <div className="mt-20">
          <h3 className="text-center font-serif text-xl mb-8 text-secondary-400">My Trusted Corporate Clients</h3>
          
          <div className="relative overflow-hidden">
            <div className="flex items-center justify-between gap-6 md:gap-10 overflow-x-auto pb-4 scrollbar-hide">
              {corporateLogos.map((company, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-4 flex-shrink-0 w-32 h-24 flex items-center justify-center"
                >
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 