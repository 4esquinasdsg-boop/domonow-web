import React from 'react';
import { Button } from './Button';
import { MessageCircle, CheckCircle, Smartphone, FileText, Monitor, TrendingUp } from 'lucide-react';

interface SolutionSectionProps {
    onOpenDemo: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onOpenDemo }) => {
    return (
        <section id="solution" className="py-12 bg-arquitectura px-4 md:px-6">
            <div className="container mx-auto">

                {/* Large Rounded Card */}
                <div className="bg-domo rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-white shadow-2xl">

                    {/* Background Texture/Gradient */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-white/10 to-transparent rounded-full blur-3xl -mr-20 -mt-20"></div>

                    <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">

                        {/* Text Content */}
                        <div className="lg:w-1/2 z-20">
                            <h2 className="text-h2 md:text-h1 font-bold mb-8 leading-[1.1]">
                                Consiga una gestión de propiedades <br />
                                <span className="text-horizonte italic font-serif">fluida.</span>
                            </h2>
                            <p className="text-lead text-white/80 mb-8 leading-relaxed max-w-xl">
                                Transforme sus operaciones con nuestra solución todo en uno adaptada a sus necesidades.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                <div className="bg-white/10 backdrop-blur px-4 py-3 rounded-2xl text-small font-medium flex items-start gap-3">
                                    <MessageCircle className="shrink-0 mt-1" size={18} />
                                    <span>Comunicación centralizada para residentes e interacción eficiente.</span>
                                </div>
                                <div className="bg-white/10 backdrop-blur px-4 py-3 rounded-2xl text-small font-medium flex items-start gap-3">
                                    <CheckCircle className="shrink-0 mt-1" size={18} />
                                    <span>Recordatorios de pago automáticos que reducen papeleo y estrés.</span>
                                </div>
                                <div className="bg-white/10 backdrop-blur px-4 py-3 rounded-2xl text-small font-medium flex items-start gap-3">
                                    <FileText className="shrink-0 mt-1" size={18} />
                                    <span>Seguimiento exhaustivo de solicitudes de servicio.</span>
                                </div>
                                <div className="bg-white/10 backdrop-blur px-4 py-3 rounded-2xl text-small font-medium flex items-start gap-3">
                                    <Monitor className="shrink-0 mt-1" size={18} />
                                    <span>Plataforma fácil de usar para administradores.</span>
                                </div>
                            </div>

                            {/* Fixed Button Contrast */}
                            <Button
                                onClick={onOpenDemo}
                                className="!bg-white !text-domo hover:!bg-gray-100 border-0 px-8 py-3 shadow-lg font-bold"
                            >
                                Solicite su demostración
                            </Button>
                        </div>

                        {/* Visual Content (Right Side - Layered/Juxtaposed) */}
                        <div className="lg:w-1/2 relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0">

                            {/* Composition Container - Increased max-width to allow image to grow left */}
                            <div className="relative w-full max-w-[600px]">

                                {/* 1. Base Layer: The Tall Image - Expanded to w-full to fill left space */}
                                <div className="relative z-0 w-full">
                                    <img
                                        src="/assets/Inicio/gestionfluida_compressed.png"
                                        alt="Gestión eficiente en oficina"
                                        className="rounded-[2.5rem] shadow-2xl border-4 border-white/5 w-full h-[550px] object-cover"
                                    />
                                    {/* Decorative badge on image */}
                                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                                        <TrendingUp size={14} className="text-domo" />
                                        <span className="text-xs font-bold text-torre uppercase tracking-wide">Productividad</span>
                                    </div>
                                </div>

                                {/* Optional Glow behind the composition */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-horizonte/10 rounded-full blur-3xl -z-10"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};