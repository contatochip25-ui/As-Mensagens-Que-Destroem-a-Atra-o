import React from 'react';
import { ChevronDown, Clock, Eye } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <header className="relative bg-brand-dark text-white pt-10 pb-20 px-4 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-brand-dark to-black opacity-80"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-70"></div>
      
      <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center z-10">
        
        {/* Meta Data - Social Proof / Content feel */}
        <div className="flex items-center gap-4 text-xs md:text-sm text-slate-400 mb-8 animate-fade-in-up font-medium tracking-wide">
          <span className="flex items-center gap-1"><Clock size={14} /> Leitura: 4 min</span>
          <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
          <span className="flex items-center gap-1 text-red-400"><Eye size={14} /> Apenas para mulheres</span>
        </div>

        {/* The Hook Headline */}
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tight drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300">
          O Silêncio Que Grita: <br className="hidden md:block"/>
          Por Que Ele Se Afasta Quando Você <span className="text-red-500 italic font-serif">Tenta Se Aproximar?</span>
        </h1>

        {/* The Agitation / Story Hook */}
        <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border-l-2 border-red-500 p-6 md:p-8 rounded-r-lg mb-10 text-left shadow-2xl">
          <p className="font-sans text-lg md:text-xl text-slate-200 leading-relaxed">
            Você conhece a sensação. O estômago embrulhado quando o <strong className="text-white font-bold">"Online"</strong> não vira "Digitando". 
            A ansiedade de reler sua última mensagem 10 vezes, procurando onde foi que você errou.
          </p>
          <p className="mt-4 font-sans text-lg md:text-xl text-slate-200 leading-relaxed">
            Não é culpa sua. Mas existe um <span className="text-brand-gold font-bold underline decoration-brand-gold/30 underline-offset-4">erro invisível de comunicação</span> que 90% das mulheres cometem sem perceber — e que funciona como um repelente biológico para os homens.
          </p>
        </div>

        {/* The "Keep Reading" Nudge */}
        <div className="flex flex-col items-center gap-2 animate-bounce mt-4 opacity-80 hover:opacity-100 transition-opacity cursor-default">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">Descubra a verdade abaixo</span>
          <ChevronDown className="text-brand-gold w-8 h-8" strokeWidth={3} />
        </div>
      </div>
    </header>
  );
};