import { motion } from 'framer-motion';

export default function Card({ title, subtitle, image, selected, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`cursor-pointer group relative overflow-hidden flex flex-col transition-all duration-500 ease-out`}
    >
      <div className={`relative aspect-[3/4] overflow-hidden mb-4 rounded-sm transition-all duration-500 ${selected ? 'ring-1 ring-brand-gold ring-offset-4 ring-offset-brand-cream' : 'opacity-80 group-hover:opacity-100'}`}>
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
        />
        {selected && (
          <div className="absolute inset-0 bg-brand-gold/10 mix-blend-multiply" />
        )}
      </div>
      <div className="text-center">
        <h3 className={`font-serif text-lg md:text-xl transition-colors duration-300 ${selected ? 'text-brand-gold' : 'text-brand-text group-hover:text-brand-gold-dark'}`}>
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs uppercase tracking-widest text-brand-muted mt-2">{subtitle}</p>
        )}
      </div>
    </motion.div>
  );
}
