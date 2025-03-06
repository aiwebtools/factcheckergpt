
import { useState, useEffect, useRef } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  rating: number;
  avatar: string;
}

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      title: "Journalist",
      quote: "Fact Checker GPT has revolutionized my research process. I can now verify claims in minutes instead of hours, and the detailed bias analysis has saved me from publishing potentially misleading information.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      title: "University Professor",
      quote: "I recommend Fact Checker GPT to all my students. It's an excellent tool for teaching critical thinking and information literacy in the digital age. The truth scoring breakdown is particularly educational.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emma Rodriguez",
      title: "Content Creator",
      quote: "As someone who creates educational content, ensuring accuracy is my top priority. Fact Checker GPT helps me verify everything before publishing, giving me confidence in the quality of my work.",
      rating: 4,
      avatar: "ER"
    },
    {
      name: "David Kim",
      title: "Research Analyst",
      quote: "The cross-referencing capabilities of Fact Checker GPT are impressive. It finds connections between sources that I would have missed, saving me countless hours of manual verification.",
      rating: 5,
      avatar: "DK"
    }
  ];

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

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute -top-40 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-primary text-sm font-medium mb-6">
            💬 User Experiences
          </div>
          <h2 className="section-title">What Our Users Say</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Join thousands of researchers, journalists, educators, and truth-seekers who rely on Fact Checker GPT
          </p>
        </div>
        
        <div 
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="testimonial-card relative">
            <div className="absolute -top-6 -left-6 w-16 h-16 glass-card rounded-2xl flex items-center justify-center text-xl font-bold text-primary">
              {testimonials[activeIndex].avatar}
            </div>
            <div className="pt-8 pb-4">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{testimonials[activeIndex].name}</h3>
                  <p className="text-primary">{testimonials[activeIndex].title}</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < testimonials[activeIndex].rating ? "text-primary fill-primary" : "text-white/20"} 
                    />
                  ))}
                </div>
              </div>
              <blockquote className="text-white/80 italic">"{testimonials[activeIndex].quote}"</blockquote>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full glass-card border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-all"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? 'bg-primary' : 'bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full glass-card border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-all"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
