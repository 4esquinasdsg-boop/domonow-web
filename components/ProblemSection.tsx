import React from 'react';
import { Button } from './Button';

interface ProblemSectionProps {
  onOpenDemo: () => void;
}

const problems = [
  { title: "\"Respondes todo el día, pero nunca contestas\"", desc: "Llamadas y mensajes diarios. Nadie recuerda que sí respondiste." },
  { title: "\"Los pagos nunca llegan completos\"", desc: "Recibos sin registrar y terminas siendo tú el culpable." },
  { title: "\"Reporté eso hace semanas y sigue igual\"", desc: "El daño sigue ahí y nadie sabe que lo gestionaste." },
  { title: "\"¿En qué están gastando nuestra plata?\"", desc: "No hay forma simple de mostrar transparencia." },
  { title: "Llamadas a cualquier hora", desc: "Tu número personal es el buzón de quejas 24/7." },
  { title: "\"Comunicaste claro, pero hay conflicto\"", desc: "Alguien no vio el mensaje y lo malinterpretó" },
  { title: "\"Dos familias reservaron lo mismo\"", desc: "Misma fecha, mismo salón. El cuaderno no funciona." },
  { title: "\"A mí nunca me dicen nada aquí\"", desc: "Envías 3 avisos y siempre alguien \"no se enteró\"." }
];

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenDemo }) => {
  return (
    <section id="problem" className="py-24 bg-arquitectura">
      <div className="container mx-auto px-6">

        {/* Intro Text Block */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-h3 md:text-h2 font-medium text-torre leading-snug">
            Trabajas más de 60 horas, pero los residentes siguen <span className="inline-block border-2 border-domo rounded-full px-4 py-1 mx-1 italic font-serif bg-white">inconformes</span>.
            <span className="text-gray-400 block mt-4 text-h3">Top 8 frustraciones que te alejan de tu comunidad</span>
          </h2>
          <div className="mt-8">
            <Button className="hover:scale-105 shadow-lg" onClick={onOpenDemo}>
              Solicite su demostración
            </Button>
          </div>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
          {problems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-[2rem] hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-domo/20 group min-h-[200px] flex flex-col">
              <div className="w-10 h-10 bg-arquitectura rounded-full flex items-center justify-center mb-4 group-hover:bg-domo group-hover:text-white transition-colors">
                <span className="font-bold text-small">{index + 1}</span>
              </div>
              <h3 className="text-h4 font-bold text-torre mb-2">{item.title}</h3>
              <p className="text-small text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};