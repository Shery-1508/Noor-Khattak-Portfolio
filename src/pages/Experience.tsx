import SEO from '../components/SEO';

const Experience = () => {
  const experiences = [
    {
      year: "2007 - Present",
      title: "Senior Legal Counsel",
      company: "Justice (R) Ata-ur-Rehman & Co. Advocates",
      description: "Lead legal advisor to multinational corporations, providing guidance on regulatory compliance, risk assessment, and corporate governance.",
      achievements: [
        "Spearheaded successful resolution of high-value commercial disputes (50M-500M pkr) through strategic litigation and negotiation.",
        "Advised on corporate acquisitions and mergers with transaction values exceeding ₨100M, ensuring regulatory compliance.",
        "Established expertise in banking law, crafting policies enhancing compliance while optimizing operational efficiency.",
        "Developed compliance programs for corporate clients, reducing regulatory penalties by approximately 65%.",
        "Advised major financial institutions on regulatory compliance with State Bank of Pakistan directives and FATF requirements."
      ]
    },
    {
      year: "1999 - 2007",
      title: "Associate Corporate Counsel",
      company: "M/s. Lari & Co. Advocates",
      description: "Provided comprehensive legal counsel to corporate clients, specializing in commercial contracts and regulatory compliance.",
      achievements: [
        "Developed expertise in shipping and maritime law, representing major shipping corporations in complex disputes.",
        "Successfully defended clients in commercial litigation cases with a win rate exceeding 75%.",
        "Drafted and negotiated critical commercial agreements including distribution contracts, joint ventures, and licensing agreements.",
        "Created standardized contract templates and legal protocols improving operational efficiency.",
        "Conducted legal audits for multinational corporations, identifying and remediating regulatory gaps across jurisdictional frameworks."
      ]
    }
  ];

  const caseStudies = [
    {
      title: "Banking Regulatory Compliance Framework",
      client: "National Bank Limited",
      challenge: "Facing potential penalties for non-compliance with new State Bank of Pakistan regulations and FATF requirements.",
      solution: "Designed and implemented a comprehensive regulatory compliance framework, training programs, and monitoring systems.",
      result: "Achieved full compliance with regulatory requirements, avoiding potential penalties and establishing the bank as an industry leader in compliance practices."
    },
    {
      title: "High-Value Commercial Dispute Resolution",
      client: "Continental Shipping Corporation",
      challenge: "Entangled in a complex contractual dispute valued at PKR 350M that threatened ongoing operations.",
      solution: "Developed a strategic litigation approach combined with structured negotiation process to resolve key points of contention.",
      result: "Successfully negotiated a favorable settlement, recovering 85% of the disputed amount while preserving the critical business relationship."
    },
    {
      title: "Corporate Acquisition Legal Support",
      client: "Pakistan Technology Ventures",
      challenge: "Navigating complex legal and regulatory requirements for a PKR 120M acquisition of a telecommunications company.",
      solution: "Conducted comprehensive legal due diligence, structured the transaction to minimize risk, and managed regulatory approval processes.",
      result: "Successfully completed the acquisition within targeted timeframe, with no post-transaction legal issues or unexpected liabilities."
    }
  ];

  return (
    <div className="bg-gray-50">
      <SEO pageKey="experience" />
      <div className="container-custom py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-primary mb-4">Professional Experience</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 25 years of distinguished experience in corporate law and commercial litigation
          </p>
        </div>

        {/* Professional Timeline */}
        <div className="mb-20">
          <h2 className="font-serif text-primary text-3xl mb-10 text-center">Professional Journey</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] h-full w-1 bg-primary"></div>
            
            {/* Timeline items */}
            {experiences.map((exp, index) => (
              <div key={index} className={`mb-20 relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline date - alternating sides */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} mb-6 md:mb-0`}>
                  <div className="bg-primary text-white py-2 px-6 rounded-lg inline-block text-lg font-bold">
                    {exp.year}
                  </div>
                </div>
                
                {/* Timeline content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12'} relative`}>
                  {/* Timeline dot */}
                  <div className="absolute left-[-9px] md:left-auto md:top-0 top-0 w-5 h-5 rounded-full bg-accent border-4 border-primary md:left-[-21px]"></div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium mb-4">{exp.company}</p>
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    
                    <h4 className="font-medium text-lg mb-2">Key Achievements:</h4>
                    <ul className={`list-disc ${index % 2 === 0 && 'md:text-right list-inside md:list-outside'} space-y-1 text-gray-700`}>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className={`${index % 2 === 0 && 'md:ml-auto'}`}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div>
          <h2 className="font-serif text-primary text-3xl mb-10 text-center">Case Studies</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary">
                <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                
                <div className="mb-4">
                  <h4 className="font-medium text-primary">Client:</h4>
                  <p className="text-gray-700">{study.client}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-primary">Challenge:</h4>
                  <p className="text-gray-700">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-primary">Solution:</h4>
                  <p className="text-gray-700">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-primary">Result:</h4>
                  <p className="text-gray-700">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 