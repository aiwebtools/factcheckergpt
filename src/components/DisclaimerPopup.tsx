
import { useState, useEffect } from "react";
import { X, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem("disclaimerAccepted");
    
    if (!hasAccepted) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Save acceptance to localStorage
    localStorage.setItem("disclaimerAccepted", "true");
    setIsOpen(false);
    
    // Show success toast
    toast({
      title: "Welcome to Fact Checker GPT!",
      description: "You're now ready to explore the truth verification tool.",
      duration: 5000,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="perspective-container w-full max-w-lg">
        <div className="relative overflow-hidden rounded-xl cyberpunk-border shadow-lg animate-scale-in bg-gradient-to-br from-card to-card/80 p-1">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 via-secondary to-primary/80"></div>
          
          <div className="relative z-10 p-6">
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary neon-text font-mono">
              DISCLAIMER
            </h2>
            
            <div className="space-y-4 text-sm">
              <p className="text-white/90">
                Fact Checker GPT aims to provide accurate information but cannot guarantee the absolute truth of all analyzed content. This tool should be used as a supplementary resource rather than a definitive authority.
              </p>
              
              <p className="text-white/90">
                The analyses, scores, and evaluations provided are based on available information and algorithmic assessment. Results should be verified with additional sources for critical decisions.
              </p>
              
              <p className="text-white/90">
                By using this tool, you acknowledge that AI Web Tools LLC is not liable for any consequences resulting from reliance on the information provided.
              </p>
            </div>
            
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleAccept}
                className="group relative overflow-hidden rounded-full px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium transition-all hover:shadow-[0_0_20px_rgba(0,200,255,0.7)] active:scale-95"
              >
                <span className="absolute inset-0 bg-black/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                <span className="relative flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  I AGREE
                </span>
              </button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
