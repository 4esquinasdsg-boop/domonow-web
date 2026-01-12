import React from 'react';
import { MousePointerClick, Gift, Settings } from 'lucide-react';
import { Button } from './Button';

interface PlanSectionProps {
  onOpenDemo: () => void;
}

const steps = [
  {
    step: "Paso 1",
    title: "Solicitar una demostración gratuita",
    desc: "Experimente las funciones de DomoNow adaptadas a su propiedad.",
    icon: <MousePointerClick className="w-6 h-6" />
  },
  {
    step: "Paso 2",
    title: "Recibe un regalo personalizado",
    desc: "Obtenga un plan diseñado específicamente para sus necesidades (Propuesta).",
    icon: <Gift className="w-6 h-6" />
  },
  {
    step: "Paso 3",
    title: "Configurar y empezar a usar",
    desc: "Disfrute de una gestión más fluida en tan solo unos sencillos pasos.",
    icon: <Settings className="w-6 h-6" />
  }
];

export const PlanSection: React.FC<PlanSectionProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-24 bg-arquitectura">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
                <h2 className="text-h3 md:text-h2 font-bold text-torre mb-4">
                    3 pasos sencillos para una <span className="text-domo">mejor gestión</span>
                </h2>
                <p className="text-gray-500 text-lead">
                    Permítanos ayudarle a optimizar los procesos desde el primer día.
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
                <div key={index} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-domo h-full">
                    <div className="flex justify-between items-start mb-8">
                        <div className="w-12 h-12 bg-arquitectura rounded-full flex items-center justify-center text-torre">
                            {item.icon}
                        </div>
                        <span className="text-tiny font-bold text-gray-400 uppercase tracking-widest">{item.step}</span>
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