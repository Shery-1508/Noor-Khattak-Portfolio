import Hero from '../components/Hero';
import ExpertiseSection from '../components/ExpertiseSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <div>
      <SEO pageKey="home" />
      <Hero />
      <ExpertiseSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default Home; 