import React from 'react';
import { Button } from './Button';

interface SummarySectionProps {
    onOpenDemo: () => void;
}

export const SummarySection: React.FC<SummarySectionProps> = ({ onOpenDemo }) => {
    return (
        <section className="py-24 px-4 md:px-6 bg-arquitectura">
            <div className="container mx-auto">

                {/* Centered Title Area */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-h3 md:text-h2 font-bold text-torre mb-4 leading-tight">
                        No permita que procesos ineficientes controlen la <br />
                        <span className="text-domo">gestión de su propiedad.</span>
                    </h2>
                    <h3 className="text-lead text-gray-500 font-medium">
                        No estás solo al sentirte abrumado.
                    </h3>
                </div>

                {/* White Content Card */}
                <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100 overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left Column: Image */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative aspect-square w-full max-w-md rounded-[2rem] overflow-hidden group">
                                <img
                                    src="/assets/Inicio/unidad_compressed.png"
                                    alt="Modern building architecture"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay gradient for text contrast if needed, or just style */}
                                <div className="absolute inset-0 bg-gradient-to-t from-torre/40 to-transparent opacity-60"></div>

                                <div className="absolute bottom-6 left-6 text-white">
                                    <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl border border-white/30 inline-block mb-2">
                                        <span className="text-tiny font-bold tracking-widest uppercase">Eficiencia</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Text Split & CTA */}
                        <div className="flex flex-col gap-8">
                            {/* Text split into 2 columns using CSS columns */}
                            <div className="prose text-body text-gray-600 columns-1 md:columns-2 gap-8 text-justify md:text-left leading-relaxed">
                                <p className="mb-4 md:mb-0">
                                    Administrar propiedades puede ser una tarea ardua si no se cuenta con las herramientas adecuadas.
                                    DomoNow reúne todas las funciones necesarias en una plataforma intuitiva, simplificando la comunicación,
                                    las finanzas y la gestión de la seguridad. Con nuestra solución, podrá centrarse en el crecimiento
                                    estratégico en lugar de simplemente invertir en propiedades.
                                </p>
                                <p>
                                    Sus residentes se beneficiarán de actualizaciones oportunas y servicios mejorados, lo que aumentará
                                    la confianza y la satisfacción de la comunidad. Disfrute de una gestión sin estrés y observe cómo
                                    su comunidad prospera con DomoNow.
                                </p>
                            </div>

                            <div className="mt-4 flex justify-center md:justify-start">
                                <Button size="lg" className="px-12" onClick={onOpenDemo}>
                                    Solicite su demostración
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};