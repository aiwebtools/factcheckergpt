
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import DisclaimerSection from "../components/DisclaimerSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import DisclaimerPopup from "../components/DisclaimerPopup";

const Index = () => {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== "#") {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 100,
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-background text-foreground">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 cyberpunk-gradient"></div>
      
      {/* Disclaimer Popup */}
      <DisclaimerPopup />
      
      {/* Content */}
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
        <FAQSection />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
