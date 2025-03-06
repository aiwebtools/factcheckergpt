
import { useState, useEffect, useRef } from "react";
import { 
  Globe, 
  FileText, 
  AlertTriangle, 
  BarChart4, 
  HelpCircle, 
  PieChart, 
  Link, 
  Activity
} from "lucide-react";

const FeaturesSection = () => {
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

  const features = [
    {
      icon: <Globe className="text-primary" size={24} />,
      title: "Website Analysis",
      description: "Scan any website for factual accuracy and potential misinformation"
    },
    {
      icon: <FileText className="text-primary" size={24} />,
      title: "Article Evaluation",
      description: "Upload or paste articles for detailed truth verification"
    },
    {
      icon: <AlertTriangle className="text-primary" size={24} />,
      title: "Bias Detection",
      description: "Identify political, social, or commercial biases in content"
    },
    {
      icon: <BarChart4 className="text-primary" size={24} />,
      title: "Truth Scoring",
      description: "Get a percentage-based truth score with detailed breakdown"
    },
    {
      icon: <Link className="text-primary" size={24} />,
      title: "Source Verification",
      description: "Check the credibility of sources cited in content"
    },
    {
      icon: <PieChart className="text-primary" size={24} />,
      title: "Data Visualization",
      description: "View analytical charts explaining fact-checking results"
    },
    {
      icon: <Activity className="text-primary" size={24} />,
      title: "Real-time Analysis",
      description: "Process information in real-time for immediate results"
    },
    {
      icon: <HelpCircle className="text-primary" size={24} />,
      title: "Guided Verification",
      description: "Follow suggested next steps to deepen your understanding"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-black/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-primary text-sm font-medium mb-6">
            🛠️ Capabilities
          </div>
          <h2 className="section-title">Key Features</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Fact Checker GPT comes equipped with powerful tools to help you navigate the complex information landscape
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`glass-card p-6 rounded-xl border border-white/10 transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
