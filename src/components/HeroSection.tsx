
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    "Scans websites and articles for misinformation",
    "Cross-references multiple trustworthy sources",
    "Highlights biases and unreliable content",
    "Provides detailed truth score analysis",
    "Suggests next steps for verification"
  ];

  return (
    <section className="min-h-screen pt-28 pb-16 relative overflow-hidden cyberpunk-gradient">
      {/* Animated background lights */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-primary/5 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-screen bg-secondary/5 blur-[100px] rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`flex-1 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-primary text-sm font-medium mb-6">
              🔍 Truth in the Era of Misinformation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Unveiling Truth with <span className="text-primary neon-text">Fact Checker GPT</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              An advanced AI tool that analyzes claims, scans websites, and reads articles to discern fact from fiction with detailed truth scoring and bias detection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a 
                href="https://chatgpt.com/g/g-6781290e4b20819199108046b163116a-fact-checker-gpt" 
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Fact Checking Now
              </a>
              <a href="#how-it-works" className="btn-outline">
                Learn How It Works
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-2 transition-all duration-500 delay-${index * 100}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`flex-1 perspective-container transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <div className="relative rotate-on-hover glass-card rounded-2xl cyberpunk-border overflow-hidden">
                <div className="bg-black/50 p-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="ml-4 text-white/70 text-sm font-mono">fact-checker.ai</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="font-mono text-primary mb-2">Fact Checker GPT</h3>
                    <p className="text-white/80 text-sm">Please give me the website, news article, or anything you would like to upload for me to fact check. I'm here to assist you in finding misinformation based on absolute certainty.</p>
                  </div>
                  
                  <div className="glass-card p-4 rounded-lg mb-6">
                    <p className="text-white/90 text-sm">Is it true that drinking lemon water every morning boosts your immune system?</p>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                    <div className="flex items-start gap-2 mb-4">
                      <span className="text-primary font-bold">🔍</span>
                      <p className="text-white/90 text-sm">Analyzing this claim across multiple medical sources...</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-primary text-sm font-bold mb-1">Facts Found:</h4>
                      <ul className="text-white/80 text-xs space-y-1 pl-5">
                        <li>Lemons contain vitamin C, which supports immune function</li>
                        <li>Hydration is important for overall health</li>
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-primary text-sm font-bold mb-1">Potential Biases:</h4>
                      <p className="text-white/80 text-xs">Health claims often exaggerate benefits of simple remedies</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-primary text-sm font-bold mb-1">Truth Score:</h4>
                      <div className="w-full h-2 bg-white/20 rounded-full">
                        <div className="h-full w-[55%] bg-primary rounded-full"></div>
                      </div>
                      <p className="text-right text-white/80 text-xs mt-1">55%</p>
                    </div>
                    
                    <p className="text-white/80 text-xs">Would you like me to analyze specific scientific studies about lemon water and immune function?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a href="#how-it-works" className="flex flex-col items-center text-white/50 hover:text-white transition-colors">
            <span className="text-sm mb-2">Learn more</span>
            <ArrowRight className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
