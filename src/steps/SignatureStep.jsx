import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

export default function SignatureStep({ data, updateData, onNext, onPrev }) {
  const isValid = true; // Optional step, can proceed without signature

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center w-full max-w-2xl text-center mt-8"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-3xl md:text-4xl text-brand-text font-serif mb-6"
      >
        Deseja personalizar internamente sua Emmeline?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-brand-muted italic font-serif text-xl mb-12"
      >
        Transforme sua peça em uma joia emocional.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="w-full max-w-md mb-16"
      >
        <Input 
          type="text" 
          placeholder="Nome, iniciais ou data (Opcional)" 
          value={data.signature}
          onChange={(e) => updateData('signature', e.target.value)}
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex flex-col md:flex-row items-center gap-4"
      >
        <Button variant="ghost" onClick={onPrev}>
          <ArrowLeft size={16} /> Voltar
        </Button>
        <Button onClick={onNext}>
          Revelar minha Emmeline <ArrowRight size={16} />
        </Button>
      </motion.div>
    </motion.div>
  );
}
