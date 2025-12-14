import React from 'react';
import { BrainCircuit, MessageCircle, ShieldCheck, Zap } from 'lucide-react';

export const InsightSolution: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto space-y-16">
        
        {/* Insight */}
        <div className="prose prose-lg mx-auto text-slate-700">
          <h3 className="text-3xl font-bold text-brand-dark mb-6">A Verdade Sobre a "Química" das Mensagens</h3>
          <p>
            O problema não é que você é "carente demais" ou "ama demais". O problema é que <strong>você nunca aprendeu a linguagem da atração digital.</strong>
          </p>
          <p>
            Cada vez que você manda uma mensagem ansiosa, você está falando um idioma que o cérebro da outra pessoa interpreta como <span className="text-red-600 font-bold">BAIXO VALOR</span>. É biológico. É instintivo.
          </p>
          <p>
            Mas quando você muda o padrão... quando você aprende o <strong>Protocolo de Comunicação Magnética</strong>... o jogo vira.
          </p>
        </div>

        {/* Reveal */}
        <div className="border-2 border-brand-dark/10 bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-center font-serif text-2xl md:text-3xl font-bold text-brand-dark mb-2">
            Apresentando:
          </h2>
          <h1 className="text-center text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-blue-600 mb-8 uppercase">
            As Mensagens Que<br/>Destroem a Atração
          </h1>
          <p className="text-center text-slate-500 mb-10 text-lg">O Guia Digital Definitivo para Recuperar seu Poder</p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><BrainCircuit size={24} /></div>
                <h3 className="font-bold text-lg">Decodificação Emocional</h3>
              </div>
              <p className="text-sm text-slate-600">Entenda por que seu cérebro te sabota e como desativar o impulso em 60 segundos.</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-red-100 p-2 rounded-lg text-red-600"><MessageCircle size={24} /></div>
                <h3 className="font-bold text-lg">Os 5 Erros Fatais</h3>
              </div>
              <p className="text-sm text-slate-600">As mensagens exatas que matam a atração (e os scripts prontos para usar no lugar).</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-green-100 p-2 rounded-lg text-green-600"><Zap size={24} /></div>
                <h3 className="font-bold text-lg">Protocolo de Recuperação</h3>
              </div>
              <p className="text-sm text-slate-600">Já errou feio? Saiba exatamente como corrigir sem se humilhar.</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><ShieldCheck size={24} /></div>
                <h3 className="font-bold text-lg">Autonomia Emocional</h3>
              </div>
              <p className="text-sm text-slate-600">Checklist prático: Decisão clara em 30 segundos, sem dúvidas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};