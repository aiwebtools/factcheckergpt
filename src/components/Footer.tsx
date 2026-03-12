
import Logo from "./Logo";
import { ExternalLink, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo />
            <p className="mt-4 text-white/60 text-sm">
              The most advanced AI-powered fact-checking tool designed to help you navigate the complex information landscape with confidence.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-6781290e4b20819199108046b163116a-fact-checker-gpt" 
                  className="text-white/60 hover:text-primary transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Use Fact Checker GPT
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/60 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-white/60 hover:text-primary transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  className="text-white/60 hover:text-primary transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More AI Tools
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  className="text-white/60 hover:text-primary transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai/terms-of-services" 
                  className="text-white/60 hover:text-primary transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:+14758008096" 
                  className="text-white/60 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Phone size={16} />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-white/60 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <a 
                href="https://www.aiwebtools.ai" 
                className="inline-block px-5 py-2 rounded-full bg-primary/20 border border-primary/50 text-primary hover:bg-primary/30 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                More AI Tools
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            <a 
              href="https://www.aiwebtools.ai" 
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              © 2025 AI WEB TOOLS LLC
            </a> All rights reserved.
          </p>
          
          <p className="text-white/40 text-sm">
            Powered by advanced AI technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
