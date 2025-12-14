import React from 'react';
import { AlertTriangle, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-brand-dark text-white pt-8 pb-16 px-4 md:pt-12 md:pb-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-brand-gold to-red-600 animate-pulse"></div>
      
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500 text-red-300 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
          <AlertTriangle size={14} />
          Atenção: Apenas para quem quer recuperar o controle
        </div>

        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tight drop-shadow-md">
          Essas 3 Mensagens <span className="text-brand-accent bg-white/5 px-2">Matam a Atração</span> em Segundos
          <span className="block text-xl md:text-3xl mt-4 font-normal text-slate-300 italic">
            (E você provavelmente mandou uma hoje)
          </span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
          Se você já ficou olhando para o <strong>"online agora"</strong> dele sentindo seu coração acelerar... 
          já digitou e apagou 10 vezes a mesma mensagem... ou já mandou "oi, tudo bem?" sabendo que parecia desesperada... 
          <span className="text-white font-bold bg-red-600/30 px-1">você precisa ler cada palavra desta página.</span>
        </p>

        <button 
          onClick={scrollToOffer}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg md:text-xl font-bold text-brand-dark bg-brand-gold rounded-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.5)]"
        >
          <span className="mr-2">QUERO PARAR DE AFASTAR QUEM AMO</span>
          <ArrowDown className="animate-bounce" />
        </button>
      </div>
    </header>
  );
};