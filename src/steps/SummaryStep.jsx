import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import Button from '../components/ui/Button';

export default function SummaryStep({ data, onPrev }) {
  
  useEffect(() => {
    // Glamorous confetti explosion
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#D4AF37', '#C5A059', '#F9F8F6', '#FFFFFF']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#D4AF37', '#C5A059', '#F9F8F6', '#FFFFFF']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  const getLabel = (type, value) => {
    switch (type) {
      case 'color':
        return {
          'atlantic': 'Azul Atlântico',
          'solaris': 'Verde Solaris',
          'champagne': 'Champagne Areia',
          'noir': 'Dourada Noir'
        }[value];
      case 'hardware':
        return {
          'gold': 'Dourado Clássico',
          'vintage': 'Ouro Vintage',
          'nickel': 'Níquel Sofisticado'
        }[value];
      case 'strap':
        return {
          'thin_chain': 'Corrente Fina',
          'thick_chain': 'Corrente Encorpada',
          'hand': 'Versão de Mão',
          'crossbody': 'Crossbody'
        }[value];
      default: return value;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center w-full max-w-3xl text-center mt-6 bg-brand-offwhite p-8 md:p-16 rounded-md shadow-[0_0_50px_rgba(197,160,89,0.15)] border border-brand-gold/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/5 via-transparent to-brand-gold/10 mix-blend-multiply" />
      
      <motion.div
        initial={{ rotate: -180, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 1, type: 'spring', bounce: 0.5 }}
        className="mb-8 text-brand-gold relative z-10"
      >
        <Sparkles size={64} strokeWidth={1} className="animate-pulse" />
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-4xl md:text-6xl text-brand-text font-serif mb-4 leading-tight relative z-10"
      >
        Sua Emmeline exclusiva<br />
        <span className="italic text-brand-gold font-light">está pronta para nascer.</span>
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="w-full max-w-md my-12 text-left space-y-6 relative z-10"
      >
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-brand-gold/20 via-brand-gold to-brand-gold/20" />
        
        <div className="pl-6 relative">
          <div className="absolute left-[-3.5px] top-2 w-[7px] h-[7px] bg-brand-gold rounded-full shadow-[0_0_10px_#C5A059]" />
          <p className="text-xs uppercase tracking-widest text-brand-muted mb-1">Para</p>
          <p className="font-serif text-2xl">{data.name}</p>
        </div>

        <div className="pl-6 relative">
          <div className="absolute left-[-3.5px] top-2 w-[7px] h-[7px] bg-brand-gold rounded-full shadow-[0_0_10px_#C5A059]" />
          <p className="text-xs uppercase tracking-widest text-brand-muted mb-1">Tom Principal</p>
          <p className="font-serif text-2xl">{getLabel('color', data.color)}</p>
        </div>

        <div className="pl-6 relative">
          <div className="absolute left-[-3.5px] top-2 w-[7px] h-[7px] bg-brand-gold rounded-full shadow-[0_0_10px_#C5A059]" />
          <p className="text-xs uppercase tracking-widest text-brand-muted mb-1">Detalhes Metálicos</p>
          <p className="font-serif text-2xl">{getLabel('hardware', data.hardware)}</p>
        </div>

        <div className="pl-6 relative">
          <div className="absolute left-[-3.5px] top-2 w-[7px] h-[7px] bg-brand-gold rounded-full shadow-[0_0_10px_#C5A059]" />
          <p className="text-xs uppercase tracking-widest text-brand-muted mb-1">Estilo de Alça</p>
          <p className="font-serif text-2xl">{getLabel('strap', data.strap)}</p>
        </div>

        {data.signature && (
          <div className="pl-6 relative">
            <div className="absolute left-[-3.5px] top-2 w-[7px] h-[7px] bg-brand-gold rounded-full shadow-[0_0_10px_#C5A059]" />
            <p className="text-xs uppercase tracking-widest text-brand-muted mb-1">Assinatura Emocional</p>
            <p className="font-serif italic text-2xl">"{data.signature}"</p>
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="w-full relative z-10"
      >
        <p className="text-sm uppercase tracking-widest text-brand-muted mb-8">
          Prazo estimado de ateliê: <span className="text-brand-gold font-semibold">15 dias</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button variant="ghost" onClick={onPrev}>
            <ArrowLeft size={16} /> Ajustar detalhes
          </Button>
          <Button className="w-full sm:w-auto shadow-xl shadow-brand-gold/30">
            <Check size={16} /> Finalizar pedido
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
