import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

export default function NameStep({ data, updateData, onNext }) {
  const isValid = data.name.trim().length > 1;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20, filter: 'blur(5px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center w-full max-w-2xl text-center mt-8"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-3xl md:text-4xl text-brand-text font-serif mb-16"
      >
        Qual o seu nome?
      </motion.h2>

      <div className="w-full max-w-md mb-16">
        <Input 
          type="text" 
          placeholder="Seu nome" 
          value={data.name}
          onChange={(e) => updateData('name', e.target.value)}
          autoFocus
        />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isValid ? 1 : 0, y: isValid ? 0 : 10 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        {isValid && (
          <p className="text-brand-muted italic font-serif text-lg mb-12">
            Sua Emmeline será preparada especialmente para você, <span className="text-brand-gold">{data.name}</span>.
          </p>
        )}

        <Button 
          onClick={onNext} 
          disabled={!isValid}
          className={!isValid ? 'opacity-0 pointer-events-none' : ''}
        >
          Continuar <ArrowRight size={16} />
        </Button>
      </motion.div>
    </motion.div>
  );
}
