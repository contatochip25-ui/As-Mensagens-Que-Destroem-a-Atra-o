import React, { useState, useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

const recentBuyers = [
  { name: 'Ana Paula M.', location: 'São Paulo, SP' },
  { name: 'Mariana S.', location: 'Rio de Janeiro, RJ' },
  { name: 'Fernanda L.', location: 'Belo Horizonte, MG' },
  { name: 'Larissa B.', location: 'Curitiba, PR' },
  { name: 'Patrícia C.', location: 'Brasília, DF' },
  { name: 'Camila R.', location: 'Salvador, BA' },
  { name: 'Juliana T.', location: 'Porto Alegre, RS' },
  { name: 'Beatriz O.', location: 'Recife, PE' },
  { name: 'Gabriela F.', location: 'Campinas, SP' },
  { name: 'Carolina D.', location: 'Florianópolis, SC' },
  { name: 'Renata M.', location: 'Goiânia, GO' },
  { name: 'Vanessa P.', location: 'Fortaleza, CE' }
];

export const SocialProofPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [buyer, setBuyer] = useState(recentBuyers[0]);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Initial delay before first popup
    const initialTimeout = setTimeout(() => {
      triggerPopup();
    }, 4000);

    return () => clearTimeout(initialTimeout);
  }, []);

  const triggerPopup = () => {
    if (isDismissed) return;

    // Pick a random buyer
    const randomBuyer = recentBuyers[Math.floor(Math.random() * recentBuyers.length)];
    setBuyer(randomBuyer);
    setIsVisible(true);

    // Hide after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
      
      // Schedule next popup (random time between 8 and 20 seconds)
      const nextDelay = Math.floor(Math.random() * 12000) + 8000;
      setTimeout(triggerPopup, nextDelay);
    }, 5000);
  };

  if (isDismissed) return null;

  return (
    <div 
      className={`fixed bottom-4 left-4 z-50 max-w-[90vw] md:max-w-sm w-full transform transition-all duration-700 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white rounded-lg shadow-xl border-l-4 border-green-500 p-4 flex items-center gap-4 relative overflow-hidden">
        
        {/* Close Button (subtle) */}
        <button 
          onClick={(e) => { e.stopPropagation(); setIsDismissed(true); setIsVisible(false); }}
          className="absolute top-2 right-2 text-slate-300 hover:text-slate-500 transition-colors"
        >
          <X size={14} />
        </button>

        {/* Icon */}
        <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
          <CheckCircle2 size={24} className="text-green-600" />
        </div>

        {/* Text Content */}
        <div className="flex-1 pr-4">
          <p className="text-xs text-slate-500 font-semibold mb-0.5">
            Acabou de liberar o acesso
          </p>
          <div className="flex items-center gap-1">
             <p className="text-sm font-bold text-slate-800 leading-tight">
               {buyer.name}
             </p>
             <span className="text-[10px] text-slate-400">• {buyer.location}</span>
          </div>
          <p className="text-[10px] text-green-600 font-medium mt-1 flex items-center gap-1">
             <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
             Verificado agora mesmo
          </p>
        </div>
      </div>
    </div>
  );
};