import React from 'react';
import { Award, Compass} from 'lucide-react';

export const AboutSection = () => {
  const exhibitons = [
    {year: '2024', event: 'Silêncio Granítico - Solo Exhibition', venue: 'Galeria Marcelo Guarnieri, São Paulo'},
    {year: '2023', event: 'Paris Photo - Mostra Ibero-Americana', venue: 'Grand Palais Éphémère, Paris'},
    {year: '2022', event: 'O Tempo da Terra - Coletiva de Fotografia Fine Art', venue: 'Instituto Moreira Salles (IMS), Rio de Janeiro'},
    {year: '2021', event: 'Vazios do Altiplano - Livro e Exposição Monográfica', venue: 'Leica Gallery, São Paulo'}
  ];

  return (
    <section id="sobre" className="py-20 bg-[#070708] border-b border-[#222429]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna de retrato */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#262832] bg-[#121317] aspect-square shadow-2xl">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85" alt="Gabriel Vasconcelos em seu ateliê de fotografia" referrerPolicy="no-referrer" className="w-full h-full object-cover filter brightness-95 contrast-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 text-left">
                <span className="text-xs text-amber-400 font-mono block">Gabriel Vasconcenlos · Nascido em 1986</span>
                <span className="text-sm font-semibold text-white font-serif-editorial">Fotógrafo de Expediçoes & Artista Visual</span>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-[#111215] border border-[#202228] flex items-center gap-3">
              <Compass className="w-5 h-5 text-amber-400 shrink-0"/>
              <p className="text-xs text-neutral-300 leading-snug">Compromisso com a ética ambiental: ratreabilidade zero, respeito aos biomas vulneráveis e apoio a reservas ecológicas locais.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}