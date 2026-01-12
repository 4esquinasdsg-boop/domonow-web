import React from 'react';
import { Quote, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const AuthoritySection: React.FC = () => {
    return (
        <section id="testimonials" className="py-24 bg-white">
            <div className="container mx-auto px-6">

                <div className="text-center mb-16">
                    <p className="text-small font-bold text-gray-400 uppercase tracking-widest mb-4">[ Empatía y Competencia ]</p>
                    <h2 className="text-h2 md:text-h1 font-bold text-torre max-w-4xl mx-auto leading-tight">
                        Entendemos sus desafíos y estamos aquí para ayudarlo.
                    </h2>
                    <p className="mt-6 text-lead text-gray-500 max-w-2xl mx-auto">
                        Con experiencia tanto en administración de propiedades como en tecnología, simplificamos sus tareas.
                    </p>
                </div>

                {/* 3 Cards Layout */}
                <div className="grid md:grid-cols-3 gap-6">

                    {/* Card 1: Confianza (Analytics Bar Chart Style) */}
                    <div className="bg-arquitectura p-8 rounded-[2.5rem] flex flex-col justify-between h-auto min-h-[500px] group hover:shadow-xl transition-all duration-500 relative overflow-hidden border border-transparent hover:border-domo/10">
                        <div className="relative z-10 mb-8">
                            <h3 className="text-h3 font-bold mb-4 text-torre">Confianza</h3>
                            <p className="text-gray-500 text-body leading-relaxed">
                                Nuestra plataforma simplifica la gestión mejorando sus indicadores clave mes a mes.
                            </p>
                        </div>

                        {/* Advanced Graphic Container */}
                        <div className="relative bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex-1 flex flex-col justify-end overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">

                            {/* Floating Metrics Pills */}
                            <div className="absolute top-6 left-6 right-6 flex justify-between gap-2">
                                <div className="bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-sm">
                                    Recaudo <span className="text-green-600">+18%</span>
                                </div>
                                <div className="bg-domo/5 text-domo px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-sm">
                                    PQR <span className="text-domo">-24%</span>
                                </div>
                            </div>

                            {/* Dashed Average Line */}
                            <div className="absolute top-[55%] left-4 right-4 border-t-2 border-dashed border-gray-200 z-0">
                                <span className="absolute -top-5 left-0 text-[10px] text-gray-400 font-medium bg-white px-1">Promedio</span>
                            </div>

                            {/* Bars Chart */}
                            <div className="flex items-end justify-between gap-3 h-[180px] relative z-10 pt-12">
                                {/* Bar 1 */}
                                <div className="w-full bg-gray-100 rounded-t-xl h-[40%] group-hover:h-[45%] transition-all duration-700 ease-out"></div>
                                {/* Bar 2 */}
                                <div className="w-full bg-gray-200 rounded-t-xl h-[60%] group-hover:h-[65%] transition-all duration-700 delay-75 ease-out"></div>

                                {/* Hero Bar (Active) */}
                                <div className="w-full relative h-[85%] group-hover:h-[92%] transition-all duration-700 delay-150 ease-out">
                                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-domo to-[#9D4EDD] rounded-t-xl shadow-lg shadow-domo/30"></div>
                                    {/* White Dot Indicator */}
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-md z-20"></div>
                                    {/* Glow effect */}
                                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-xl"></div>
                                </div>

                                {/* Bar 4 */}
                                <div className="w-full bg-gray-100 rounded-t-xl h-[50%] group-hover:h-[55%] transition-all duration-700 delay-100 ease-out"></div>
                            </div>

                            <div className="mt-4 text-center">
                                <p className="text-h4 font-bold text-torre">Resultados Reales</p>
                                <p className="text-tiny text-gray-400">Análisis de rendimiento mensual</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Scale (Dark Mode Area Chart) */}
                    <div className="bg-torre p-8 rounded-[2.5rem] flex flex-col justify-between h-auto min-h-[500px] text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-h3 font-bold mb-4 text-horizonte">Más de 5.000 unidades</h3>
                            <p className="text-gray-400 leading-relaxed text-body mb-8">
                                Infraestructura robusta diseñada para escalar con su portafolio sin interrupciones.
                            </p>
                        </div>

                        {/* Dark Chart Container */}
                        <div className="relative bg-white/5 rounded-[2rem] border border-white/10 p-6 flex-1 flex flex-col overflow-hidden backdrop-blur-sm">

                            {/* Header of Chart */}
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <p className="text-tiny text-gray-400 font-medium uppercase tracking-wider">Total Gestionado</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-bold text-white">5,240</span>
                                        <span className="text-tiny text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                                            <ArrowUpRight size={10} /> +12%
                                        </span>
                                    </div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-horizonte/20 flex items-center justify-center text-horizonte animate-pulse">
                                    <div className="w-2 h-2 bg-horizonte rounded-full shadow-[0_0_10px_#F7B500]"></div>
                                </div>
                            </div>

                            {/* SVG Area Chart */}
                            <div className="mt-auto relative h-32 w-full">
                                {/* Grid Lines */}
                                <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none">
                                    <div className="border-t border-white w-full"></div>
                                    <div className="border-t border-white w-full"></div>
                                    <div className="border-t border-white w-full"></div>
                                </div>

                                {/* SVG Curve */}
                                <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible preserve-3d">
                                    <defs>
                                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#F7B500" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#F7B500" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    {/* Area Fill */}
                                    <path d="M0 100 L0 70 Q 50 80, 100 40 T 200 10 V 100 Z" fill="url(#chartGradient)" />
                                    {/* Line Stroke */}
                                    <path d="M0 70 Q 50 80, 100 40 T 200 10" fill="none" stroke="#F7B500" strokeWidth="3" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(247,181,0,0.5)]" />

                                    {/* Floating Point */}
                                    <circle cx="200" cy="10" r="4" fill="#1A1A1A" stroke="#F7B500" strokeWidth="2" />
                                    <circle cx="200" cy="10" r="8" fill="#F7B500" opacity="0.3" className="animate-ping" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 (Testimonial - Preserved) */}
                    <div className="bg-white p-4 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col h-auto min-h-[500px] relative group overflow-hidden">
                        <div className="relative h-[260px] w-full rounded-[2rem] overflow-hidden shrink-0">
                            <img
                                src="/assets/Inicio/carlos_lopez_compressed.png"
                                alt="Carlos López"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-4 right-4 bg-[#FAD9D9] text-[#A63A50] px-4 py-2 rounded-xl text-tiny font-bold shadow-sm">
                                Testimonio
                            </div>
                        </div>

                        <div className="flex flex-col flex-1 p-4 pt-6">
                            <div className="mb-4">
                                <Quote className="text-domo w-8 h-8 mb-3 opacity-50 fill-current" />
                                <p className="text-body text-gray-600 italic leading-relaxed">
                                    "DomoNow ha transformado la forma en que gestionamos nuestras propiedades, haciendo todo más claro y organizado."
                                </p>
                            </div>

                            <div className="mt-auto pt-4 border-t border-gray-100">
                                <h4 className="text-h4 font-bold text-torre">Carlos López</h4>
                                <p className="text-small text-gray-400">Administrador de Propiedad</p>
                                <p className="text-tiny text-domo mt-1 font-medium">Bogotá, Colombia</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};