
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-black/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <a 
            href="https://chatgpt.com/g/g-6781290e4b20819199108046b163116a-fact-checker-gpt" 
            className="btn-primary text-sm lg:text-base whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            USE FACT CHECKER GPT
          </a>
          <a href="#faq" className="nav-link text-sm lg:text-base">FAQ</a>
          <a href="#disclaimer" className="nav-link text-sm lg:text-base">Disclaimer</a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            className="nav-link text-sm lg:text-base whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 -mr-2 touch-manipulation"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation - always rendered, toggled via CSS for instant response */}
      <div
        className={`md:hidden fixed inset-0 top-[56px] bg-black/95 backdrop-blur-md transition-all duration-200 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col items-center gap-2">
          <a 
            href="https://chatgpt.com/g/g-6781290e4b20819199108046b163116a-fact-checker-gpt" 
            className="btn-primary w-full max-w-sm text-center text-base py-4"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          >
            USE FACT CHECKER GPT
          </a>
          <a 
            href="#faq" 
            className="nav-link py-4 text-lg w-full max-w-sm text-center" 
            onClick={closeMobileMenu}
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="nav-link py-4 text-lg w-full max-w-sm text-center" 
            onClick={closeMobileMenu}
          >
            Disclaimer
          </a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            className="nav-link py-4 text-lg w-full max-w-sm text-center"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          >
            More AI Tools
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
