import React from 'react';
import { XCircle, HeartCrack, Activity } from 'lucide-react';

export const PainPoints: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white text-slate-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 uppercase tracking-wide border-b-4 border-red-500 inline-block pb-2 mx-auto">
          Você Reconhece Este Ciclo?
        </h2>

        <div className="space-y-6 mb-16">
          <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
            <XCircle className="text-red-500 shrink-0 mt-1" size={24} />
            <p className="text-lg">Você manda mensagem... ele demora horas para responder... e você sente seu <strong>estômago revirar</strong> de ansiedade.</p>
          </div>
          <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
            <XCircle className="text-red-500 shrink-0 mt-1" size={24} />
            <p className="text-lg">Você vê que ele leu e não respondeu. Sua mente começa a criar os piores cenários possíveis: <em>"Ele está com outra?", "Fiz algo errado?"</em></p>
          </div>
          <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
            <XCircle className="text-red-500 shrink-0 mt-1" size={24} />
            <p className="text-lg">Você não aguenta o silêncio e manda outra mensagem explicando seus sentimentos... e no segundo seguinte, <strong>sente que exagerou e quer sumir.</strong></p>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10">
            <HeartCrack size={200} />
          </div>
          
          <h3 className="text-2xl font-serif font-bold mb-4 text-red-400 flex items-center gap-2">
            <Activity className="animate-pulse" />
            O Custo Emocional é Brutal
          </h3>
          
          <p className="text-lg leading-relaxed mb-6 text-slate-300">
            E o pior? A cada mensagem errada, você não só afasta a pessoa que deseja... você reforça um padrão cerebral que te diz: <em className="text-white">"Eu não sou boa o suficiente".</em>
          </p>
          
          <p className="text-lg leading-relaxed text-slate-300">
            Isso destrói sua autoestima. Te transforma em uma "refém" do celular. E cria um ciclo vicioso que vai te perseguir no próximo relacionamento. E no próximo. 
          </p>
          
          <div className="mt-8 p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
            <p className="font-bold text-xl text-center">
              Mas eu tenho uma boa notícia: <span className="text-brand-gold">A culpa não é sua.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};