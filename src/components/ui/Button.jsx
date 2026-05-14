import { motion } from 'framer-motion';

export default function Button({ children, onClick, variant = 'primary', className = '', ...props }) {
  const baseClasses = "px-8 py-4 rounded-sm tracking-widest uppercase text-xs md:text-sm transition-all duration-500 ease-out focus:outline-none flex items-center justify-center gap-3";
  
  const variants = {
    primary: "bg-brand-text text-brand-offwhite hover:bg-brand-gold hover:text-brand-cream hover:shadow-lg hover:shadow-brand-gold/20",
    outline: "border border-brand-sand text-brand-text hover:border-brand-gold hover:text-brand-gold",
    ghost: "text-brand-muted hover:text-brand-text"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}
