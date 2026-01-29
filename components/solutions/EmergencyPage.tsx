import React, { useEffect } from 'react';
import { Button } from '../Button';
import { ImageCarousel } from '../ImageCarousel';
import { HowItWorksSection } from '../HowItWorksSection';
import {
    BellRing, Ambulance, ShieldAlert, Heart,
    X, Check, Quote, Smartphone, Radio, FileCheck
} from 'lucide-react';

interface EmergencyPageProps {
    onOpenDemo: () => void;
}

export const EmergencyPage: React.FC<EmergencyPageProps> = ({ onOpenDemo }) => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const appScreens = [
        "/assets/Modulos/alertas/carruselinterfaz/alertas (1).jpg",
        "/assets/Modulos/alertas/carruselinterfaz/alertas (2).jpg",
        "/assets/Modulos/alertas/carruselinterfaz/alertas (3).jpg",
        "/assets/Modulos/alertas/carruselinterfaz/alertas (4).jpg",
        "/assets/Modulos/alertas/carruselinterfaz/alertas (5).jpg",
        "/assets/Modulos/alertas/carruselinterfaz/alertas (6).jpg",
        "/assets/Modulos/alertas/carruselinterfaz/alertas (7).jpg",
        "/assets/Modulos/alertas/carruselinterfaz/alertas (8).jpg",
    ];

    const useCases = [
        { category: "Médicas", description: "Emergencias médicas dentro del apartamento", icon: <Heart size={20} />, image: "/assets/Modulos/alertas/casos de uso/alertas_CASOSDEUSO (1)_compressed.png" },
        { category: "Seguridad", description: "Incidentes de seguridad que requieren atención inmediata", icon: <ShieldAlert size={20} />, image: "/assets/Modulos/alertas/casos de uso/alertas_CASOSDEUSO (2)_compressed.png" },
        { category: "Riesgo", description: "Situaciones de riesgo en zonas comunes", icon: <BellRing size={20} />, image: "/assets/Modulos/alertas/casos de uso/alertas_CASOSDEUSO (3)_compressed.png" },
        { category: "Ayuda", description: "Adultos mayores o personas solas que necesitan ayuda rápida", icon: <Ambulance size={20} />, image: "/assets/Modulos/alertas/casos de uso/alertas_CASOSDEUSO (4)_compressed.png" }
    ];

    return (
        <div className="pt-20 bg-white font-sans text-torre">
            {/* 1. HERO */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-domo/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-horizonte/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
                        <div className="lg:w-5/12 relative z-20">
                            <span className="block text-tiny font-bold tracking-widest uppercase text-gray-400 mb-4">
                                BOTÓN DE PÁNICO
                            </span>
                            <h1 className="text-h2 md:text-h1 font-bold leading-tight mb-6 text-torre">
                                "Una emergencia y no sabes<br />
                                <span className="text-domo">a quién llamar"</span>
                            </h1>
                            <div className="prose text-lead text-gray-500 mb-8 leading-relaxed">
                                <p className="mb-4 text-torre font-bold">
                                    Llamadas perdidas que generan confusión en momentos críticos.
                                </p>
                                <p>
                                    <strong className="text-torre">DomoNow activa alertas inmediatas.</strong> Notifica al instante a quien debe actuar.
                                </p>
                            </div>
                            <div className="flex gap-4"><Button size="lg" onClick={onOpenDemo} className="shadow-xl shadow-domo/20">Conoce cómo funciona</Button></div>
                        </div>

                        <div className="lg:w-7/12 relative w-full mt-12 lg:mt-0">
                            <div className="relative w-full max-w-[850px] ml-auto">
                                {/* BACK LAYER: Dashboard */}
                                <div className="relative z-0 ml-12 md:ml-32 transform rotate-1 hover:rotate-0 transition-all duration-700">
                                    {/* Added aspect-video to force height even if image fails */}
                                    <div className="rounded-2xl overflow-hidden shadow-2xl bg-white aspect-video">
                                        <img
                                            src="/assets/Modulos/alertas/alertashero.png"
                                            alt="Monitor de seguridad y alertas"
                                            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                                    </div>
                                </div>

                                {/* FRONT LAYER: Phone Animation - Repositioned to bottom-left relative to container */}
                                <div className="absolute bottom-[5%] left-0 z-10 w-[240px] md:w-[280px]">
                                    {/* Phone Body */}
                                    <div className="bg-white p-5 rounded-[2.5rem] shadow-[0_30px_80px_rgba(239,68,68,0.3)] border border-gray-100 transform -rotate-3 hover:rotate-0 transition-all duration-500 relative overflow-hidden">

                                        {/* Status Bar Mockup */}
                                        <div className="flex justify-between items-center mb-6 opacity-30">
                                            <div className="text-[10px] font-bold">9:41</div>
                                            <div className="flex gap-1">
                                                <div className="w-3 h-1 bg-gray-800 rounded-full"></div>
                                                <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                                            </div>
                                        </div>

                                        {/* App Header */}
                                        <div className="flex items-center gap-3 mb-10">
                                            <div className="w-8 h-8 bg-red-50 text-red-500 rounded-lg flex items-center justify-center">
                                                <ShieldAlert size={18} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">DomoNow</p>
                                                <p className="text-small font-bold text-torre leading-none">Emergencia</p>
                                            </div>
                                        </div>

                                        {/* Central Interaction Area */}
                                        <div className="relative py-8 flex flex-col items-center justify-center">
                                            {/* Animated Rings */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-red-500/5 rounded-full animate-[ping_3s_infinite]"></div>
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-500/10 rounded-full animate-[ping_3s_infinite_delay-700ms]"></div>

                                            {/* The Button */}
                                            <div className="relative z-10 w-24 h-24 bg-gradient-to-b from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-xl shadow-red-500/40 border-[6px] border-white active:scale-95 transition-transform cursor-pointer">
                                                <BellRing className="text-white w-10 h-10 animate-pulse" />
                                            </div>

                                            <h3 className="mt-6 text-h3 font-bold text-red-500">SOS</h3>
                                            <p className="text-gray-400 text-xs mt-1">Mantén presionado para activar</p>
                                        </div>

                                        {/* Notification Card */}
                                        <div className="mt-8 bg-white border border-red-100 rounded-xl p-3 shadow-sm flex items-center gap-3 animate-[slideUp_0.5s_ease-out]">
                                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shrink-0"></div>
                                            <div>
                                                <p className="text-xs font-bold text-torre">Notificando a Portería...</p>
                                                <p className="text-[10px] text-gray-400">Ubicación compartida</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Conoce cómo funciona Section */}
            <HowItWorksSection
                title="Conoce cómo funciona"
                subtitle="Cómo funciona"
                leftLabel="Software tradicional:"
                rightLabel="Con DomoNow:"
                imageSrc="/assets/Modulos/alertas/alertashero.png"
                items={[
                    {
                        problem: "Módulo separado o inexistente",
                        solution: "Botón de pánico directo en la app"
                    },
                    {
                        problem: "Directorio de teléfonos SOS",
                        solution: "Notificación push inmediata a usuarios"
                    },
                    {
                        problem: "Registro manual de incidentes",
                        solution: "Historial automático de atención"
                    }
                ]}
            />

            {/* 2. PROBLEM VS SOLUTION */}
            <section className="py-24 bg-arquitectura relative z-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <span className="h-px w-8 bg-red-400"></span><span className="text-red-400 font-bold tracking-widest uppercase text-tiny">SITUACIÓN ACTUAL</span><span className="h-px w-8 bg-red-400"></span>
                        </div>
                        <h2 className="text-h2 font-bold text-torre mb-8 leading-tight">El problema que viven hoy las comunidades.</h2>
                        <div className="relative inline-block">
                            <Quote className="absolute -top-4 -left-8 text-gray-200 w-10 h-10 transform -scale-x-100 z-0 opacity-50" />
                            <p className="relative z-10 text-h4 text-gray-500 leading-relaxed font-medium">"En una emergencia no hay un canal claro: Las alertas llegan tarde y nadie sabe qué pasó ni cómo se atendió, generando estrés e inseguridad."</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                        {/* Problem */}
                        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 group hover:border-red-100 transition-colors duration-300 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-400"><X size={16} strokeWidth={3} /></div>
                                <span className="font-bold text-gray-400 uppercase tracking-widest text-[10px] md:text-tiny">Lo que pasa hoy</span>
                            </div>
                            <div className="space-y-8 flex-grow">
                                {[
                                    { title: "Tiempo Perdido Crítico", desc: "Llamadas que no responden, cadenas de WhatsApp que nadie ve" },
                                    { title: "Coordinación Caótica", desc: "No sabes quién fue alertado, quién respondió o qué se hizo" },
                                    { title: "Sin Evidencia", desc: "Cuando pasa una emergencia, no hay registro de cómo se atendió" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5 items-start">
                                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 shrink-0 group-hover:bg-red-50 group-hover:text-red-400 transition-colors"><X size={20} /></div>
                                        <div><h4 className="font-bold text-torre text-body mb-1">{item.title}</h4><p className="text-small text-gray-500 leading-relaxed">{item.desc}</p></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Solution */}
                        <div className="bg-[#F9F5FF] p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-domo/5 border border-purple-100 group hover:border-domo/30 transition-colors duration-300 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-8 h-8 rounded-full bg-domo/10 flex items-center justify-center text-domo"><Check size={16} strokeWidth={3} /></div>
                                <span className="font-bold text-domo uppercase tracking-widest text-[10px] md:text-tiny">Con DomoNow obtienes</span>
                            </div>
                            <div className="space-y-8 flex-grow">
                                {[
                                    { title: "Activación Centralizada", desc: "Todos los responsables notificados simultáneamente" },
                                    { title: "Trazabilidad Completa", desc: "Registro automático de quién alertó y cómo se resolvió" },
                                    { title: "Mejora Continua", desc: "Analiza tiempos de respuesta y patrones para reforzar protocolos. Menos improvisación. Más control desde el primer día." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5 items-start">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-domo shrink-0 shadow-sm group-hover:bg-domo group-hover:text-white transition-colors"><Check size={20} /></div>
                                        <div><h4 className="font-bold text-torre text-body mb-1">{item.title}</h4><p className="text-small text-gray-500 leading-relaxed">{item.desc}</p></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. WORKFLOW */}
            <section className="py-24 bg-arquitectura relative z-10">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-domo font-bold tracking-widest uppercase text-tiny mb-2 block">Flujo de Trabajo</span>
                        <h2 className="text-h2 font-bold text-torre">Tu comunidad, paso a paso</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-torre group-hover:bg-domo group-hover:text-white transition-colors"><Smartphone size={20} /></div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-3">PASO 1</span>
                            </div>
                            <h3 className="text-h4 font-bold text-torre mb-3">El residente activa la alerta</h3>
                            <p className="text-body text-gray-500 leading-relaxed">Desde la app, presiona el botón de emergencia en el momento que lo necesita.</p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-torre group-hover:bg-horizonte group-hover:text-torre transition-colors"><Radio size={20} /></div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-3">PASO 2</span>
                            </div>
                            <h3 className="text-h4 font-bold text-torre mb-3">La alerta llega de inmediato</h3>
                            <p className="text-body text-gray-500 leading-relaxed">Portería y administración reciben la notificación con la información del usuario y la ubicación.</p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-torre group-hover:bg-domo group-hover:text-white transition-colors"><FileCheck size={20} /></div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-3">PASO 3</span>
                            </div>
                            <h3 className="text-h4 font-bold text-torre mb-3">Todo queda registrado</h3>
                            <p className="text-body text-gray-500 leading-relaxed">El incidente queda documentado para seguimiento, respaldo y tranquilidad de todos.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. USE CASES */}
            <section className="py-24 bg-[#F9F5FF]">
                <div className="container mx-auto px-6">
                    <h2 className="text-h2 font-bold text-center mb-16 text-torre">Casos de uso</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {useCases.map((item, index) => (
                            <div key={index} className="relative h-[500px] rounded-[2rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500">
                                <div className="absolute inset-0 w-full h-full">
                                    <img src={item.image} alt={item.category} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30"></div>
                                </div>
                                <div className="absolute top-6 left-6 z-10"><h3 className="text-h4 font-bold text-white drop-shadow-md tracking-tight">{item.category}</h3></div>
                                <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-6 rounded-[2rem] shadow-xl flex flex-col gap-4 h-40 border border-white/50">
                                    <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-domo shrink-0">{item.icon}</div>
                                    <div><p className="text-small font-medium text-torre leading-snug">{item.description}</p></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-24 bg-[#E9D5FF] text-torre text-center px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
                <div className="container mx-auto max-w-3xl relative z-10">
                    <h2 className="text-h2 font-bold mb-8 leading-tight text-torre">DomoNow no solo digitaliza procesos. Acompaña a la comunidad cuando más lo necesita.</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center"><Button size="lg" className="bg-domo text-white hover:bg-torre hover:text-white transition-colors px-12 text-lg shadow-xl shadow-domo/20" onClick={onOpenDemo}>Quiero agendar una Demo</Button></div>
                </div>
            </section>
        </div>
    );
};