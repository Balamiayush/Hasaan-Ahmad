"use client";
import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

const Button = ({ 
  text, 
  variant = "primary", 
  className = "", 
  onClick 
}: ButtonProps) => {
  const baseStyles = "relative rounded-lg font-medium px-6 py-3 transition-all duration-200";
  
  const variantStyles = {
    primary: "bg-[#A58AFA] text-white hover:bg-purple-600",
    secondary: "bg-white text-indigo-600 border border-gray-200 hover:border-indigo-400 hover:text-indigo-700",
  };

  return (
    <motion.button
      whileHover={{
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {/* Primary variant: subtle background darkening */}
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-black opacity-0 rounded-lg"
          whileHover={{ 
            opacity: 0.1,
            transition: { duration: 0.2 }
          }}
        />
      )}
      
      {/* Secondary variant: text color shift */}
      {variant === "secondary" && (
        <motion.span
          className="absolute inset-0 rounded-lg border border-transparent"
          whileHover={{
            borderColor: "rgba(99, 102, 241, 0.3)",
            transition: { duration: 0.2 }
          }}
        />
      )}
      
      <span className="relative z-10 block">
        {text}
      </span>
    </motion.button>
  );
};

export default Button;