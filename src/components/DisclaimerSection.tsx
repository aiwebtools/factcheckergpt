
const DisclaimerSection = () => {
  return (
    <section id="disclaimer" className="py-20 bg-black/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-primary text-sm font-medium mb-6">
            ⚠️ Legal Information
          </div>
          <h2 className="section-title">Legal Disclaimer</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Important information about using Fact Checker GPT
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glass-card p-8 rounded-xl">
          <div className="space-y-6 text-white/80 text-sm">
            <p>
              <strong className="text-white">Limitations of Use:</strong> Fact Checker GPT is an AI-powered tool designed to assist in fact-checking and information verification. While we strive for accuracy, the tool does not guarantee 100% accuracy in all cases. Users should exercise their own judgment and critical thinking when evaluating information.
            </p>
            
            <p>
              <strong className="text-white">Not a Substitute for Professional Advice:</strong> The information provided by Fact Checker GPT should not be considered as professional, legal, medical, financial, or expert advice. For matters requiring specialized knowledge, please consult with appropriate qualified professionals.
            </p>
            
            <p>
              <strong className="text-white">Evolving Technology:</strong> As an AI-based service, Fact Checker GPT is continuously learning and improving. However, it may occasionally provide incomplete or inaccurate information. We are committed to ongoing improvements but cannot warrant perfect performance.
            </p>
            
            <p>
              <strong className="text-white">Third-Party Sources:</strong> Fact Checker GPT references external sources that we do not control. We do not endorse or take responsibility for the content, accuracy, or practices of these third-party websites or resources.
            </p>
            
            <p>
              <strong className="text-white">User Responsibility:</strong> By using Fact Checker GPT, you acknowledge that you are responsible for your own actions based on the information provided. AI Web Tools LLC and its affiliates shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use of this service.
            </p>
            
            <p>
              <strong className="text-white">Service Availability:</strong> We strive to maintain uninterrupted service, but Fact Checker GPT may experience downtime for maintenance or due to technical issues. We do not guarantee constant availability of the service.
            </p>
            
            <p>
              <strong className="text-white">Intellectual Property:</strong> The content, features, and functionality of Fact Checker GPT are owned by AI Web Tools LLC and are protected by international copyright, trademark, patent, and other intellectual property laws.
            </p>
            
            <p>
              <strong className="text-white">Changes to Terms:</strong> We reserve the right to modify these terms at any time. Continued use of Fact Checker GPT after such modifications constitutes acceptance of the updated terms.
            </p>
            
            <p>
              By using Fact Checker GPT, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">Last Updated: June 1, 2023</p>
            <div className="flex gap-4">
              <a 
                href="https://openai.com/policies/privacy-policy/" 
                className="text-primary hover:text-primary/80 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              <a 
                href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                className="text-primary hover:text-primary/80 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
