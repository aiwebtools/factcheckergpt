
import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-30"></div>
      
      <div 
        className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Separate Fact from Fiction?
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Join thousands of users who rely on Fact Checker GPT to navigate today's complex information landscape
          </p>
          
          <a 
            href="https://chatgpt.com/g/g-6781290e4b20819199108046b163116a-fact-checker-gpt" 
            className="inline-flex items-center gap-2 btn-primary text-lg px-8 py-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Fact Checking Now
            <ArrowRight />
          </a>
          
          <p className="mt-6 text-white/50 text-sm">
            No credit card required • Integrated with ChatGPT
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
