import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import WelcomeStep from './steps/WelcomeStep';
import NameStep from './steps/NameStep';
import ColorStep from './steps/ColorStep';
import HardwareStep from './steps/HardwareStep';
import StrapStep from './steps/StrapStep';
import SignatureStep from './steps/SignatureStep';
import SummaryStep from './steps/SummaryStep';

function App() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    name: '',
    color: null,
    hardware: null,
    strap: null,
    signature: ''
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => Math.max(0, prev - 1));

  const updateData = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const steps = [
    <WelcomeStep key="0" onNext={nextStep} />,
    <NameStep key="1" data={data} updateData={updateData} onNext={nextStep} onPrev={prevStep} />,
    <ColorStep key="2" data={data} updateData={updateData} onNext={nextStep} onPrev={prevStep} />,
    <HardwareStep key="3" data={data} updateData={updateData} onNext={nextStep} onPrev={prevStep} />,
    <StrapStep key="4" data={data} updateData={updateData} onNext={nextStep} onPrev={prevStep} />,
    <SignatureStep key="5" data={data} updateData={updateData} onNext={nextStep} onPrev={prevStep} />,
    <SummaryStep key="6" data={data} onPrev={prevStep} />
  ];

  return (
    <div className="min-h-screen bg-brand-cream text-brand-text overflow-hidden flex flex-col items-center">
      {/* Elegante Header Minimalista */}
      <header className="w-full max-w-4xl px-8 pt-8 pb-4 flex justify-center z-10 relative">
        <h1 className="font-serif text-3xl md:text-4xl tracking-widest uppercase text-brand-text/90">Emmeline</h1>
      </header>

      {/* Progress Line */}
      {step > 0 && step < 6 && (
        <div className="w-full max-w-xl px-8 mx-auto mb-6 mt-2">
          <div className="h-[1px] bg-brand-sand w-full relative">
            <div 
              className="absolute top-0 left-0 h-full bg-brand-gold transition-all duration-1000 ease-in-out"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Content Area */}
      <main className="flex-grow w-full flex flex-col items-center justify-start relative px-6 sm:px-12 pb-24">
        <AnimatePresence mode="wait">
          {steps[step]}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
