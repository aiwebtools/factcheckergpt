
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="https://chatgpt.com/g/g-6781290e4b20819199108046b163116a-fact-checker-gpt" 
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            USE FACT CHECKER GPT
          </a>
          <a href="#faq" className="nav-link">FAQ</a>
          <a href="#disclaimer" className="nav-link">Disclaimer</a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col items-center gap-4">
            <a 
              href="https://chatgpt.com/g/g-6781290e4b20819199108046b163116a-fact-checker-gpt" 
              className="btn-primary w-full text-center"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              USE FACT CHECKER GPT
            </a>
            <a href="#faq" className="nav-link py-3" onClick={() => setIsMobileMenuOpen(false)}>
              FAQ
            </a>
            <a href="#disclaimer" className="nav-link py-3" onClick={() => setIsMobileMenuOpen(false)}>
              Disclaimer
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              className="nav-link py-3"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              More AI Tools
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
