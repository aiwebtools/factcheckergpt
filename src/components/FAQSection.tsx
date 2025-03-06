
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What is Fact Checker GPT?",
      answer: "Fact Checker GPT is an advanced AI tool designed to help users verify the accuracy of claims, analyze websites and articles for misinformation, and provide detailed truth scoring with bias detection. It cross-references information with multiple reliable sources to determine factual accuracy."
    },
    {
      question: "How accurate is Fact Checker GPT?",
      answer: "Fact Checker GPT is designed to be highly accurate, but it's important to note that it's an AI-based tool. It cross-references multiple sources and applies logical reasoning to evaluate claims, but should be used as one tool in your critical thinking toolkit rather than the sole arbiter of truth."
    },
    {
      question: "Can I use Fact Checker GPT for academic research?",
      answer: "Yes, Fact Checker GPT can be valuable for preliminary academic research to verify claims and identify potential biases. However, for formal academic work, we recommend using it alongside traditional scholarly research methods and peer-reviewed sources."
    },
    {
      question: "How does the truth scoring system work?",
      answer: "The truth scoring system evaluates claims on a scale from 0% (completely false) to 100% (completely verified). The score is calculated based on multiple factors including source credibility, cross-reference validation, logical consistency, and detected biases. Each factor is weighted in the final calculation."
    },
    {
      question: "Can Fact Checker GPT analyze images and videos?",
      answer: "Yes, Fact Checker GPT can analyze images using advanced computer vision technology to identify potential manipulation or misleading visual content. For videos, it can process frames and analyze the accompanying audio for factual accuracy."
    },
    {
      question: "Is my data private when using Fact Checker GPT?",
      answer: "Privacy is important to us. While the tool needs to process the content you submit for fact-checking purposes, we do not store your queries or submitted content beyond what's necessary for the service to function. Please see our privacy policy for complete details."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-black/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-primary text-sm font-medium mb-6">
            ❓ Questions & Answers
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Everything you need to know about Fact Checker GPT
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                className="w-full text-left py-4 pr-10 relative flex items-center justify-between text-white hover:text-primary transition-colors"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-primary" />
                ) : (
                  <ChevronDown className="text-white/70" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="pb-4 text-white/70">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/70 mb-6">Still have questions?</p>
          <a 
            href="mailto:Contact@ai-webtools.com" 
            className="btn-outline"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
