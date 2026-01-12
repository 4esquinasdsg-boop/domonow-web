import React from 'react';
import { Button } from './Button';

interface ProblemSectionProps {
  onOpenDemo: () => void;
}

const problems = [
  { title: "Caos y Confusión", desc: "Las herramientas obsoletas crean caos y confusión." },
  { title: "Pagos Perdidos", desc: "Los pagos perdidos y las cuotas atrasadas se convierten en la norma." },
  { title: "Comunicación", desc: "Las brechas de comunicación generan insatisfacción entre los residentes." },
  { title: "Soporte", desc: "Encontrar apoyo confiable es una lucha constante." },
  { title: "Procesos Manuales", desc: "Los procesos manuales desperdician un tiempo precioso." },
  { title: "Estrés", desc: "El papeleo interminable crea estrés innecesario." },
  { title: "Desconfianza", desc: "La baja transparencia genera desconfianza en las comunidades." },
  { title: "Competencia", desc: "No adaptarse significa quedarse atrás de los competidores." }
];

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenDemo }) => {
  return (
    <section id="problem" className="py-24 bg-arquitectura">
      <div className="container mx-auto px-6">
        
        {/* Intro Text Block */}
        <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-small font-bold text-gray-400 uppercase tracking-widest mb-4">[ Las Estacas ]</p>
            <h2 className="text-h3 md:text-h2 font-medium text-torre leading-snug">
                No permitas que las <span className="inline-block border-2 border-domo rounded-full px-4 py-1 mx-1 italic font-serif bg-white">ineficiencias</span> ahoguen tu comunidad. 
                <span className="text-gray-400 block mt-4 text-h3">¿Qué frustraciones le impiden gestionar mejor?</span>
            </h2>
             <div className="mt-8">
                <Button className="hover:scale-105 shadow-lg" onClick={onOpenDemo}>
                    Solicite su demostración
                </Button>
            </div>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {problems.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-[2rem] hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-domo/20 group h-full">
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