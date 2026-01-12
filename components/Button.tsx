import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 active:scale-95";
  
  const variants = {
    primary: "bg-domo text-white hover:bg-opacity-90 shadow-lg shadow-domo/20 hover:shadow-domo/40",
    secondary: "bg-horizonte text-torre hover:bg-opacity-90 shadow-lg shadow-horizonte/20",
    outline: "border-2 border-domo text-domo hover:bg-domo hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-small",
    md: "px-8 py-3 text-body",
    lg: "px-10 py-4 text-lead",
  };

  const width = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};