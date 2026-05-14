import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

export default function WelcomeStep({ onNext }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center w-full max-w-2xl text-center mt-8 md:mt-12"
    >
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-4xl md:text-5xl lg:text-6xl text-brand-text font-serif mb-6 leading-tight"
      >
        Vamos criar <br /> <span className="text-brand-gold italic">sua Emmeline.</span>
      </motion.h2>

      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-sm md:text-base uppercase tracking-widest text-brand-muted mb-12 max-w-md"
      >
        Uma peça artesanal criada exclusivamente para você.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Button onClick={onNext}>
          Começar sua experiência
        </Button>
      </motion.div>
    </motion.div>
  );
}
