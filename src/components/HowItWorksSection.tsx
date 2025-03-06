
import { useState, useEffect, useRef } from "react";
import { Search, Database, Share2, Shield, Brain, BarChart } from "lucide-react";

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const steps = [
    {
      icon: <Search className="text-primary" size={28} />,
      title: "Data Collection",
      description: "Fact Checker GPT scans websites, articles, and claims, gathering information from multiple sources across the web."
    },
    {
      icon: <Database className="text-primary" size={28} />,
      title: "Cross-Reference",
      description: "Information is cross-referenced with trustworthy sources to verify authenticity and validate claims."
    },
    {
      icon: <Brain className="text-primary" size={28} />,
      title: "Bias Analysis",
      description: "AI algorithms detect language patterns that may indicate bias, partisan perspectives, or misleading information."
    },
    {
      icon: <BarChart className="text-primary" size={28} />,
      title: "Truth Scoring",
      description: "A detailed truth score is calculated based on verified facts, source credibility, and identified biases."
    },
    {
      icon: <Shield className="text-primary" size={28} />,
      title: "Report Generation",
      description: "A comprehensive report is generated highlighting facts, biases, and unreliable sources in the content."
    },
    {
      icon: <Share2 className="text-primary" size={28} />,
      title: "Next Steps",
      description: "Fact Checker GPT suggests actionable next steps to further verify information and expand your understanding."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
          }, 3000);
          
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [steps.length]);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-primary text-sm font-medium mb-6">
            ⚙️ Process
          </div>
          <h2 className="section-title">How Fact Checker GPT Works</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Using advanced AI algorithms and cross-referencing techniques to deliver reliable fact-checking results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`glass-card p-6 rounded-xl transition-all duration-500 ${
                activeStep === index ? 'cyberpunk-border scale-105' : 'border border-white/10'
              }`}
            >
              <div className="flex justify-center items-center w-14 h-14 rounded-lg bg-white/5 mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/70">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://chatgpt.com/g/g-6781290e4b20819199108046b163116a-fact-checker-gpt" 
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try Fact Checker GPT Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
