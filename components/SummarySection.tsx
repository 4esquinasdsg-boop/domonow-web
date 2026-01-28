import React from 'react';
import { Button } from './Button';

interface SummarySectionProps {
    onOpenDemo: () => void;
}

export const SummarySection: React.FC<SummarySectionProps> = ({ onOpenDemo }) => {
    return (
        <section className="py-24 px-4 md:px-6 bg-white">
            <div className="container mx-auto">

                {/* Centered Title Area */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-h3 md:text-h2 font-bold text-torre mb-4 leading-tight">
                        Administrar no debería ser sinónimo de <span className="text-domo">estrés</span>
                    </h2>
                    <p className="text-lead text-gray-500">
                        DomoNow centraliza lo importante para que dejes de reaccionar y empieces a planear
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Dashboard Image - Free, no box */}
                    <div className="relative">
                        <img
                            src="/assets/Inicio/dashboard_preview.png"
                            alt="DomoNow Dashboard"
                            className="w-full rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                            onError={(e) => {
                                e.currentTarget.src = "/assets/Inicio/unidad_compressed.png";
                            }}
                        />
                    </div>

                    {/* Right Column: Benefits List */}
                    <div className="flex flex-col gap-6">

                        {/* Item 01 */}
                        <div className="flex gap-6 items-start p-4 rounded-2xl hover:bg-arquitectura transition-colors">
                            <span className="text-small text-gray-400 font-medium">01</span>
                            <div>
                                <h3 className="text-h4 font-bold text-torre mb-2">Menos tiempo buscando</h3>
                                <p className="text-body text-gray-500">
                                    Menos tiempo buscando información dispersa.
                                </p>
                            </div>
                        </div>

                        {/* Item 02 */}
                        <div className="flex gap-6 items-start p-4 rounded-2xl hover:bg-arquitectura transition-colors">
                            <span className="text-small text-gray-400 font-medium">02</span>
                            <div>
                                <h3 className="text-h4 font-bold text-torre mb-2">Más claridad</h3>
                                <p className="text-body text-gray-500">
                                    Más claridad en cada decisión que tomas.
                                </p>
                            </div>
                        </div>

                        {/* Item 03 */}
                        <div className="flex gap-6 items-start p-4 rounded-2xl hover:bg-arquitectura transition-colors">
                            <span className="text-small text-gray-400 font-medium">03</span>
                            <div>
                                <h3 className="text-h4 font-bold text-torre mb-2">Cero sorpresas</h3>
                                <p className="text-body text-gray-500">
                                    Cero sorpresas de última hora.
                                </p>
                            </div>
                        </div>

                        {/* Bottom section with text and stat card */}
                        <div className="flex gap-6 items-center mt-4">
                            <p className="flex-1 text-body text-gray-600 leading-relaxed">
                                Tu comunidad nota la diferencia: respuestas más rápidas, gestión más transparente, menos quejas.
                            </p>

                            {/* Dynamic Stats Card with floating elements */}
                            <div className="relative">
                                {/* Floating check circle - top right */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 animate-bounce-slow">
                                    <div className="w-7 h-7 bg-green-400 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">✓</span>
                                    </div>
                                </div>

                                {/* Floating toggle circle - bottom left */}
                                <div className="absolute -bottom-3 -left-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-10 animate-float">
                                    <div className="w-5 h-2.5 bg-domo rounded-full relative">
                                        <div className="absolute right-0.5 top-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                                    </div>
                                </div>

                                {/* Main Circular Card */}
                                <div className="bg-gradient-to-br from-domo via-purple-600 to-purple-700 rounded-full w-[150px] h-[150px] text-white flex flex-col items-center justify-center shadow-xl shadow-domo/40 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                                    {/* Background decoration */}
                                    <div className="absolute top-0 right-0 w-14 h-14 bg-white/10 rounded-full -mr-5 -mt-5"></div>
                                    <div className="absolute bottom-0 left-0 w-10 h-10 bg-white/5 rounded-full -ml-3 -mb-3"></div>

                                    {/* Content */}
                                    <div className="relative z-10 text-center">
                                        <span className="text-h2 font-bold tracking-tight block">-40%</span>
                                        <span className="text-tiny text-white/90 block">menos quejas</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Purple CTA Button */}
                        <Button size="lg" className="w-fit mt-2" onClick={onOpenDemo}>
                            Solicita tu demo
                        </Button>

                    </div>

                </div>

            </div>

            {/* Custom animation */}
            <style>{`
                @keyframes pulse-slow {
                    0%, 100% {
                        transform: scale(1);
                        box-shadow: 0 10px 25px -5px rgba(139, 92, 246, 0.3);
                    }
                    50% {
                        transform: scale(1.02);
                        box-shadow: 0 15px 35px -5px rgba(139, 92, 246, 0.4);
                    }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                }
                @keyframes bounce-slow {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-5px);
                    }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    50% {
                        transform: translateY(-3px) translateX(2px);
                    }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};