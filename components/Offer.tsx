import React, { useEffect, useState } from 'react';
import { CheckCircle2, Lock, ArrowRight, Clock } from 'lucide-react';
import { bonuses } from '../data';

export const Offer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section id="offer" className="py-16 px-4 bg-gradient-to-b from-white to-red-50">
      <div className="max-w-3xl mx-auto">
        
        {/* Timer Banner */}
        <div className="bg-red-100 border border-red-200 text-red-800 p-3 rounded-t-xl flex justify-center items-center gap-2 text-sm font-bold animate-pulse">
          <Clock size={16} />
          Oferta Especial expira em: {formatTime(timeLeft)}
        </div>

        <div className="bg-white border-x border-b border-slate-200 shadow-2xl rounded-b-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-center text-3xl font-black text-brand-dark mb-8 uppercase">
              Aqui está o que você recebe:
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0" />
                  <span className="font-bold text-slate-800">Guia Completo "As Mensagens Que Destroem"</span>
                </div>
                <span className="font-bold text-slate-400 line-through">R$ 197</span>
              </div>
              
              {bonuses.map((bonus, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0" />
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-800">{bonus.title}</span>
                      <span className="text-xs text-slate-500 hidden sm:block">{bonus.description}</span>
                    </div>
                  </div>
                  <span className="font-bold text-slate-400 line-through shrink-0">{bonus.value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center border-t-2 border-dashed border-slate-200 pt-8">
              <p className="text-slate-500 font-bold mb-2 uppercase tracking-wide">Valor Total: R$ 665,00</p>
              <div className="flex items-center gap-4 mb-2">
                 <span className="text-2xl text-red-400 line-through font-bold">R$ 97</span>
                 <span className="text-6xl font-black text-brand-dark">R$ 47</span>
              </div>
              <p className="text-green-600 font-bold bg-green-100 px-3 py-1 rounded-full text-sm mb-8">
                Pagamento Único • Acesso Vitalício
              </p>

              <a 
                href="https://pay.kiwify.com.br/KJG9ufa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-green-600 hover:bg-green-500 text-white text-xl md:text-2xl font-black py-5 px-10 rounded-xl shadow-xl transition-transform hover:scale-105 flex items-center justify-center gap-3 group text-center no-underline"
              >
                QUERO ACESSO IMEDIATO
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <p className="mt-4 text-xs text-slate-400 flex items-center gap-1">
                <Lock size={12} /> Compra 100% Segura e Criptografada
              </p>
            </div>
          </div>
          
          <div className="bg-slate-900 p-6 text-center">
             <h3 className="text-white font-bold mb-2">GARANTIA DE ALÍVIO EMOCIONAL DE 7 DIAS</h3>
             <p className="text-slate-400 text-sm max-w-lg mx-auto">
               Se em 7 dias você não sentir mais controle sobre suas emoções e mais clareza no que fazer, eu devolvo 100% do seu dinheiro. Sem perguntas.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};