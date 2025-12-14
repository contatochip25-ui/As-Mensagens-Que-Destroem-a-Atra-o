import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { InsightSolution } from './components/InsightSolution';
import { Testimonials } from './components/Testimonials';
import { Offer } from './components/Offer';
import { FAQ } from './components/FAQ';
import { SocialProofPopup } from './components/SocialProofPopup';

export default function App() {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      <Hero />
      <PainPoints />
      <InsightSolution />
      <Testimonials />
      <Offer />
      <FAQ />

      {/* Social Proof Notifications */}
      <SocialProofPopup />

      {/* Final Call To Action */}
      <section className="py-20 px-4 bg-brand-dark text-white text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">Você tem duas escolhas agora</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left text-sm md:text-base mb-8">
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h3 className="font-bold text-red-400 mb-2 uppercase">Escolha 1</h3>
              <p className="text-slate-300">Fechar esta página. Continuar mandando as mesmas mensagens. Sentir a mesma ansiedade. Ter os mesmos resultados dolorosos de sempre.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg border border-brand-gold/30">
              <h3 className="font-bold text-brand-gold mb-2 uppercase">Escolha 2</h3>
              <p className="text-white">Investir R$ 47 (menos que um delivery). Descobrir o que fazer. Recuperar seu poder e sentir alívio real pela primeira vez em semanas.</p>
            </div>
          </div>
          
          <button 
            onClick={scrollToOffer}
            className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-brand-dark bg-brand-gold rounded-lg shadow-lg hover:scale-105 transition-all"
          >
            QUERO A ESCOLHA 2
          </button>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Magnetic Communications. Todos os direitos reservados.</p>
        <p className="mt-2">Este site não faz parte do site do Facebook ou Facebook Inc.<br/>Além disso, este site NÃO é endossado pelo Facebook de forma alguma.</p>
      </footer>
    </div>
  );
}