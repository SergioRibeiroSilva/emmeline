import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const STRAPS = [
  { id: 'thin_chain', name: 'Corrente Fina', subtitle: 'Delicada', image: '/images/strap_thin_1778796393145.png' },
  { id: 'thick_chain', name: 'Corrente Encorpada', subtitle: 'Statement', image: '/images/strap_thick_1778796409732.png' },
  { id: 'hand', name: 'Versão de Mão', subtitle: 'Chic', image: '/images/strap_hand_1778796422424.png' },
  { id: 'crossbody', name: 'Crossbody', subtitle: 'Prática', image: '/images/strap_crossbody_1778796436546.png' }
];

export default function StrapStep({ data, updateData, onNext, onPrev }) {
  const isValid = !!data.strap;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20, filter: 'blur(5px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center w-full max-w-5xl mt-6"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-3xl md:text-4xl text-brand-text font-serif mb-12 text-center"
      >
        Como você prefere carregar a sua bolsa?
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 w-full">
        {STRAPS.map((strap, index) => (
          <motion.div
            key={strap.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + (index * 0.1), duration: 0.8 }}
          >
            <Card 
              title={strap.name}
              subtitle={strap.subtitle}
              image={strap.image}
              selected={data.strap === strap.id}
              onClick={() => updateData('strap', strap.id)}
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
          Continuar experiência <ArrowRight size={16} />
        </Button>
      </motion.div>
    </motion.div>
  );
}
