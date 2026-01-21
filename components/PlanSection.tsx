import React from 'react';
import { Button } from './Button';

interface PlanSectionProps {
  onOpenDemo: () => void;
}

const steps = [
  {
    title: "Agenda tu demo sin compromiso",
    desc: "Te mostramos cómo funciona DomoNow en TU contexto: Tus dolores de cabeza y tus prioridades."
  },
  {
    title: "Prueba piloto con cero riesgos",
    desc: "Implementamos DomoNow en una de tus propiedades durante 30 días. Sin letra pequeña."
  },
  {
    title: "Activa y empieza a ver resultados",
    desc: "Configuramos todo por ti: usuarios, permisos, módulos. Tú solo te enfocas en administrar mejor."
  }
];

export const PlanSection: React.FC<PlanSectionProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-24 bg-arquitectura">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-h3 md:text-h2 font-bold text-torre mb-4">
              Empieza en 3 pasos <span className="text-domo">(y sin complicarte la vida)</span>
            </h2>
            <p className="text-gray-500 text-lead">

            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button className="shadow-lg" onClick={onOpenDemo}>
              Solicite su demostración
            </Button>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, index) => (
            <div key={index} className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-domo h-full flex flex-col items-center text-center">
              <div className="mb-8">
                <div className="w-12 h-12 bg-arquitectura rounded-full flex items-center justify-center text-torre font-bold text-lg group-hover:bg-domo group-hover:text-white transition-colors">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-h4 font-bold text-torre mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-body">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};