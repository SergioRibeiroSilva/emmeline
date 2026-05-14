import { motion } from 'framer-motion';

export default function Input({ className = '', ...props }) {
  return (
    <motion.input
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full bg-transparent border-b border-brand-sand py-4 text-2xl md:text-4xl text-center font-serif text-brand-text placeholder-brand-muted/50 focus:outline-none focus:border-brand-gold transition-colors duration-500 ${className}`}
      {...props}
    />
  );
}
