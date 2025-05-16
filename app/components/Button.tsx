"use client";
import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
}

const Button = ({ 
  text, 
  variant = "primary", 
  className = "", 
  onClick 
}: ButtonProps) => {
  const baseStyles = "relative rounded-lg font-medium px-6 py-3 overflow-hidden";
  
  const variantStyles = {
    primary: "bg-indigo-500 text-white",
    secondary: "bg-white text-indigo-600 border border-gray-200",
    ghost: "text-indigo-600 hover:bg-indigo-50"
  };

  return (
    <motion.button
      whileHover={{
        y: -2,
        transition: { 
          type: "spring",
          stiffness: 400,
          damping: 10
        }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {/* Primary variant: ripple effect */}
      {variant === "primary" && (
        <>
          <motion.div
            className="absolute inset-0 bg-indigo-600 opacity-0"
            whileHover={{ 
              opacity: 1,
              transition: { duration: 0.3 }
            }}
          />
          <motion.div
            className="absolute inset-0 bg-white opacity-0"
            initial={{ scale: 0.5 }}
            whileTap={{ 
              opacity: 0.2,
              scale: 1,
              transition: { duration: 0.4 }
            }}
          />
        </>
      )}
      
      {/* Secondary variant: border animation */}
      {variant === "secondary" && (
        <motion.div
          className="absolute inset-0 border-2 border-transparent rounded-lg"
          whileHover={{
            borderColor: "rgba(99, 102, 241, 0.5)",
            transition: { duration: 0.3 }
          }}
          whileTap={{
            borderColor: "rgba(99, 102, 241, 0.8)",
            backgroundColor: "rgba(99, 102, 241, 0.1)",
            transition: { duration: 0.1 }
          }}
        />
      )}
      
      {/* Ghost variant: background fade */}
      {variant === "ghost" && (
        <motion.div
          className="absolute inset-0 bg-indigo-100 opacity-0 rounded-lg"
          whileHover={{ 
            opacity: 1,
            transition: { duration: 0.3 }
          }}
          whileTap={{ 
            opacity: 0.8,
            transition: { duration: 0.1 }
          }}
        />
      )}
      
      <motion.span 
        className="relative z-10 block"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{
          scale: 0.95,
          transition: { duration: 0.1 }
        }}
      >
        {text}
      </motion.span>
    </motion.button>
  );
};

export default Button;