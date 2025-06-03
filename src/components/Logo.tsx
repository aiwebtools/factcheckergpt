
import { Search, ShieldCheck } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  colored?: boolean;
}

const Logo = ({ size = "md", colored = true }: LogoProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl", 
    lg: "text-3xl"
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`relative ${colored ? 'text-primary' : 'text-white'}`}>
        <ShieldCheck className={`${sizeClasses[size]} animate-pulse-glow`} />
        <Search className={`${sizeClasses[size]} absolute -top-1 -right-1 scale-50`} />
      </div>
      <div>
        <h1 className={`font-bold ${sizeClasses[size]} ${colored ? 'text-primary' : 'text-white'}`}>
          Fact Checker GPT
        </h1>
        <p className="text-xs text-white/70">Free AI Tool by AI Web Tools</p>
      </div>
    </div>
  );
};

export default Logo;
