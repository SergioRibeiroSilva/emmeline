import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const HARDWARES = [
  { id: 'gold', name: 'Dourado Clássico', subtitle: 'Atemporal', image: 'images/hw_gold_1778796342861.png' },
  { id: 'vintage', name: 'Ouro Vintage', subtitle: 'Antiquado e elegante', image: 'images/hw_vintage_1778796366753.png' },
  { id: 'nickel', name: 'Níquel Sofisticado', subtitle: 'Moderno', image: 'images/hw_nickel_1778796379037.png' }
];

export default function HardwareStep({ data, updateData, onNext, onPrev }) {
  const isValid = !!data.hardware;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20, filter: 'blur(5px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center w-full max-w-4xl mt-6"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-3xl md:text-4xl text-brand-text font-serif mb-12 text-center"
      >
        Escolha os detalhes metálicos da sua peça
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-16 w-full px-4">
        {HARDWARES.map((hw, index) => (
          <motion.div
            key={hw.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + (index * 0.1), duration: 0.8 }}
          >
            <Card 
              title={hw.name}
              subtitle={hw.subtitle}
              image={hw.image}
              selected={data.hardware === hw.id}
              onClick={() => updateData('hardware', hw.id)}
            />
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isValid ? 1 : 0, y: isValid ? 0 : 10 }}
        transition={{ duration: 0.5 }}
        className="flex gap-4"
      >
        <Button variant="ghost" onClick={onPrev}>
          <ArrowLeft size={16} /> Voltar
        </Button>
        <Button 
          onClick={onNext} 
          disabled={!isValid}
          className={!isValid ? 'pointer-events-none' : ''}
        >
          Prosseguir <ArrowRight size={16} />
        </Button>
      </motion.div>
    </motion.div>
  );
}
