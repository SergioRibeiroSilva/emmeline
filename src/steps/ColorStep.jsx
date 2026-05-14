import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const COLORS = [
  { id: 'atlantic', name: 'Azul Atlântico', image: 'images/color_atlantic_1778796279272.png' },
  { id: 'solaris', name: 'Verde Solaris', image: 'images/color_solaris_1778796293679.png' },
  { id: 'champagne', name: 'Champagne Areia', image: 'images/color_champagne_1778796312649.png' },
  { id: 'noir', name: 'Dourada Noir', image: 'images/color_noir_1778796328508.png' }
];

export default function ColorStep({ data, updateData, onNext, onPrev }) {
  const isValid = !!data.color;

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
        className="text-3xl md:text-4xl text-brand-text font-serif mb-4 text-center"
      >
        Qual a cor da sua Emmeline?
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-sm uppercase tracking-widest text-brand-muted mb-12 text-center"
      >
        Tons exclusivos da coleção
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 w-full">
        {COLORS.map((color, index) => (
          <motion.div
            key={color.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + (index * 0.1), duration: 0.8 }}
          >
            <Card 
              title={color.name}
              image={color.image}
              selected={data.color === color.id}
              onClick={() => updateData('color', color.id)}
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
          Continuar sua criação <ArrowRight size={16} />
        </Button>
      </motion.div>
    </motion.div>
  );
}
