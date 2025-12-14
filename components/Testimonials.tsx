import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-brand-dark text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Histórias Reais de Quem Recuperou o Controle
        </h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 relative">
              <Quote className="absolute top-4 right-4 text-white/20" size={40} />
              
              <div className="mb-4">
                <div className="flex text-brand-gold mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="font-bold text-lg">{t.name}</p>
                <p className="text-xs text-slate-400">{t.details}</p>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-red-400 font-bold text-xs uppercase block mb-1">Antes:</span>
                  <p className="text-slate-300 italic">"{t.before}"</p>
                </div>
                <div className="border-t border-white/10 pt-2">
                  <span className="text-green-400 font-bold text-xs uppercase block mb-1">Depois:</span>
                  <p className="text-white font-medium">"{t.after}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm">Mais de 3.400 alunas já aplicaram este método.</p>
        </div>
      </div>
    </section>
  );
};