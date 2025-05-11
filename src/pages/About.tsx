const About = () => {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-primary mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A distinguished legal professional with 25+ years of experience in corporate law
          </p>
        </div>

        {/* Professional Summary */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="font-serif text-primary text-2xl mb-6">Professional Summary</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              I am Advocate Noor Z. Khattak, a distinguished legal professional with more than 25 years of experience 
              in corporate law, banking regulations, and commercial litigation. Throughout my career, I have 
              built a reputation for providing strategic legal counsel to businesses across Pakistan.
            </p>
            <p>
              With a proven track record of advising businesses on compliance matters, risk mitigation, and complex 
              legal frameworks, I have become a trusted advisor to numerous corporations seeking to navigate 
              Pakistan's evolving legal landscape.
            </p>
            <p>
              My expertise extends to representing corporate clients in the High Court of Sindh, where I deliver 
              strategic legal counsel that carefully balances business objectives with robust legal protection.
            </p>
          </div>
        </div>

        {/* Professional Journey */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="font-serif text-primary text-2xl mb-6">My Corporate Legal Experience</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Justice (R) Ata-ur-Rehman &amp; Co. Advocates</h3>
              <p className="text-gray-500 italic mb-4">Senior Legal Counsel | Dec 2007 – Present</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>I serve as lead legal advisor to multinational corporations, providing guidance on regulatory compliance, risk assessment, and corporate governance.</li>
                <li>I have spearheaded successful resolution of high-value commercial disputes (50M-500M pkr) through strategic litigation and negotiation.</li>
                <li>I advise on corporate acquisitions and mergers with transaction values exceeding ₨100M, ensuring regulatory compliance.</li>
                <li>I have established expertise in banking law, crafting policies enhancing compliance while optimizing operational efficiency.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">M/s. Lari &amp; Co. Advocates</h3>
              <p className="text-gray-500 italic mb-4">Associate Corporate Counsel | 1999 – Dec 2007</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>I provided comprehensive legal counsel to corporate clients, specializing in commercial contracts and regulatory compliance.</li>
                <li>I developed expertise in shipping and maritime law, representing major shipping corporations in complex disputes.</li>
                <li>I successfully defended clients in commercial litigation cases with a win rate exceeding 75%.</li>
                <li>I drafted and negotiated critical commercial agreements including distribution contracts, joint ventures, and licensing agreements.</li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="font-serif text-primary text-2xl mb-6">My Legal Credentials</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">High Court of Sindh</h3>
                  <p className="text-gray-700">Registered Senior Advocate</p>
                  <p className="text-gray-500 italic">Enrolled Dec 28, 2005</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-1">Pakistan Bar Council</h3>
                  <p className="text-gray-700">Licensed Legal Practitioner</p>
                  <p className="text-gray-500 italic">License No. KBA-2003-721</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-1">Karachi Bar Association</h3>
                  <p className="text-gray-700">Senior Member</p>
                  <p className="text-gray-500 italic">Since Oct 20, 2003</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="font-serif text-primary text-2xl mb-6">My Education</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">University of Karachi</h3>
                  <p className="text-gray-700">Bachelor of Laws (LL.B)</p>
                  <p className="text-gray-500 italic">With Honors</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-1">University of Karachi</h3>
                  <p className="text-gray-700">Bachelor of Arts (B.A)</p>
                  <p className="text-gray-500 italic">Economics & Political Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="font-serif text-primary text-2xl mb-6">My Key Corporate Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="text-primary text-4xl mb-4">65%</div>
              <h3 className="text-lg font-bold mb-2">Reduced Regulatory Penalties</h3>
              <p className="text-gray-700">
                I have developed compliance programs for corporate clients, reducing regulatory penalties by approximately 65%.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="text-primary text-4xl mb-4">FATF</div>
              <h3 className="text-lg font-bold mb-2">Regulatory Compliance Expertise</h3>
              <p className="text-gray-700">
                I have advised major financial institutions on regulatory compliance with State Bank of Pakistan directives and FATF requirements.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="text-primary text-4xl mb-4">100+</div>
              <h3 className="text-lg font-bold mb-2">Standardized Legal Templates</h3>
              <p className="text-gray-700">
                I have created standardized contract templates and legal protocols improving operational efficiency while ensuring robust legal protection.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="text-primary text-4xl mb-4">MNC</div>
              <h3 className="text-lg font-bold mb-2">Legal Audits</h3>
              <p className="text-gray-700">
                I have conducted legal audits for multinational corporations, identifying and remediating regulatory gaps across jurisdictional frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 