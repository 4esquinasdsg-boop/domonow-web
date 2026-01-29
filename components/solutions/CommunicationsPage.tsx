import React, { useEffect } from 'react';
import { Button } from '../Button';
import { ImageCarousel } from '../ImageCarousel';
import { HowItWorksSection } from '../HowItWorksSection';
import {
    Megaphone, Bell, CheckCircle2, XCircle,
    MessageSquare, Smartphone, ArrowRight,
    AlertTriangle, FileText, Users, Check,
    Quote, X, Eye, HelpCircle
} from 'lucide-react';

interface CommunicationsPageProps {
    onOpenDemo: () => void;
}

export const CommunicationsPage: React.FC<CommunicationsPageProps> = ({ onOpenDemo }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Mockup Images representing Mobile UI (9:16 Aspect Ratio)
    const appScreens = [
        "/assets/Modulos/comunicaciones/carruselinterfaz/comunicaciones (1).jpg",
        "/assets/Modulos/comunicaciones/carruselinterfaz/comunicaciones (2).jpg",
        "/assets/Modulos/comunicaciones/carruselinterfaz/comunicaciones (3).jpg",
        "/assets/Modulos/comunicaciones/carruselinterfaz/comunicaciones (4).jpg",
        "/assets/Modulos/comunicaciones/carruselinterfaz/comunicaciones (5).jpg",
        "/assets/Modulos/comunicaciones/carruselinterfaz/comunicaciones (6).jpg",
    ];

    // Use Cases Data for the new card design
    const useCases = [
        {
            category: "Mantenimiento",
            description: "Avisos de mantenimiento o cortes de servicio",
            icon: <AlertTriangle size={20} />,
            image: "/assets/Modulos/comunicaciones/casos de uso/comunicaciones_avisos_compressed.jpg" // Worker/Maintenance
        },
        {
            category: "Reglamentos",
            description: "Cambios en normas internas o reglamentos",
            icon: <FileText size={20} />,
            image: "/assets/Modulos/comunicaciones/casos de uso/comunicaciones_decisiones_compressed.jpg" // Signing/Documents
        },
        {
            category: "Asambleas",
            description: "Comunicaciones de asambleas y decisiones administrativas",
            icon: <Users size={20} />,
            image: "/assets/Modulos/comunicaciones/casos de uso/comunicaciones_eventos_compressed.jpg" // People meeting
        },
        {
            category: "Novedades",
            description: "Novedades importantes del conjunto",
            icon: <Bell size={20} />,
            image: "/assets/Modulos/comunicaciones/casos de uso/comunicaciones_creaciones_compressed.png" // Friends/Community
        }
    ];

    return (
        <div className="pt-20 bg-white font-sans text-torre">

            {/* 1. HERO SECTION: Layered Composition */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-white">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-domo/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-horizonte/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

                        {/* Left: Text Content */}
                        <div className="lg:w-5/12 relative z-20">
                            <span className="block text-tiny font-bold tracking-widest uppercase text-gray-400 mb-4">
                                COMUNICACIONES
                            </span>
                            <h1 className="text-h2 md:text-h1 font-bold leading-tight mb-6 text-torre">
                                "El mismo aviso, nadie se enteró."
                            </h1>
                            <div className="prose text-lead text-gray-500 mb-8 leading-relaxed">
                                <p className="mb-4 text-torre font-bold">
                                    Mensajes perdidos, residentes desinformados, malentendidos constantes.
                                </p>
                                <p>
                                    <strong className="text-torre">DomoNow centraliza todo</strong> en un canal oficial. Cada aviso llega y queda registrado.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <Button size="lg" onClick={onOpenDemo} className="shadow-xl shadow-domo/20">
                                    Conoce cómo funciona
                                </Button>
                            </div>
                        </div>

                        {/* Right: Layered Composition (Animation OVER Image) */}
                        <div className="lg:w-7/12 relative w-full mt-12 lg:mt-0">
                            <div className="relative w-full max-w-[850px] ml-auto">

                                {/* BACK LAYER: Dashboard Image */}
                                <div className="relative z-0 ml-8 md:ml-24 transform rotate-1 hover:rotate-0 transition-all duration-700">
                                    <div className="rounded-2xl overflow-hidden shadow-2xl bg-white aspect-video">
                                        <img
                                            src="/assets/Modulos/comunicaciones/comunicacioneshero.png"
                                            alt="Dashboard Comunicaciones"
                                            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                                        />
                                        {/* Overlay Gradient for depth */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                                    </div>
                                </div>

                                {/* FRONT LAYER: Phone Animation (Juxtaposed) */}
                                <div className="absolute bottom-[-10%] left-0 md:-left-4 z-10 w-[240px] md:w-[300px]">
                                    {/* Abstract Phone Container */}
                                    <div className="bg-white p-4 rounded-[2.5rem] shadow-[0_30px_80px_rgba(130,10,209,0.25)] border border-gray-100 transform -rotate-2 hover:rotate-0 transition-all duration-500">
                                        {/* Mock Header */}
                                        <div className="bg-gray-50 rounded-t-[2rem] p-6 border-b border-gray-100">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="w-8 h-8 bg-domo rounded-lg"></div>
                                                <div className="w-24 h-3 bg-gray-200 rounded-full"></div>
                                            </div>
                                            <div className="h-4 w-2/3 bg-gray-200 rounded-full"></div>
                                        </div>
                                        {/* Mock Content Feed */}
                                        <div className="p-6 space-y-6">
                                            {/* Post 1 */}
                                            <div className="flex gap-4">
                                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 shrink-0">
                                                    <AlertTriangle size={20} />
                                                </div>
                                                <div className="space-y-2 w-full">
                                                    <div className="h-3 w-1/3 bg-gray-200 rounded-full"></div>
                                                    <div className="h-20 w-full bg-gray-100 rounded-xl"></div>
                                                </div>
                                            </div>
                                            {/* Post 2 (Highlight) */}
                                            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 relative">
                                                <div className="absolute -top-3 -right-3 bg-domo text-white text-[10px] font-bold px-2 py-1 rounded-full">NUEVO</div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="w-8 h-8 rounded-full bg-domo flex items-center justify-center text-white">
                                                        <Megaphone size={14} />
                                                    </div>
                                                    <span className="text-xs font-bold text-domo">Administración</span>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-snug font-medium">
                                                    Recordamos la asamblea general este fin de semana.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Badge attached to phone */}
                                    <div className="absolute -bottom-6 -right-12 bg-white p-4 rounded-2xl shadow-xl border border-purple-50 animate-[bounce_4s_infinite] hidden md:block">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-green-100 text-green-600 p-2 rounded-full">
                                                <CheckCircle2 size={18} />
                                            </div>
                                            <div>
                                                <p className="text-tiny font-bold text-gray-400 uppercase">Estado</p>
                                                <p className="text-small font-bold text-torre">Mensaje Leído</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <HowItWorksSection
                title="Conoce cómo funciona"
                subtitle="Cómo funciona"
                leftLabel="Software tradicional:"
                rightLabel="Con DomoNow:"
                imageSrc="/assets/Modulos/comunicaciones/comunicacioneshero.png"
                items={[
                    {
                        problem: "Se continúa usando WhatsApp",
                        solution: "Muro de comunicaciones"
                    },
                    {
                        problem: "Avisos básicos sin segmentación",
                        solution: "Segmentación por torres o grupos"
                    },
                    {
                        problem: "Un archivo adjunto máximo",
                        solution: "Múltiples archivos (fotos, videos, PDFs)"
                    }
                ]}
            />

            {/* 2. PROBLEM VS SOLUTION */}
            <section className="py-24 bg-arquitectura relative z-20">
                <div className="container mx-auto px-6">

                    {/* HEADER SECTION (Top) */}
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <span className="h-px w-8 bg-red-400"></span>
                            <span className="text-red-400 font-bold tracking-widest uppercase text-tiny">
                                SITUACIÓN ACTUAL
                            </span>
                            <span className="h-px w-8 bg-red-400"></span>
                        </div>

                        <h2 className="text-h2 font-bold text-torre mb-8 leading-tight">
                            El problema que viven hoy las comunidades.
                        </h2>

                        <div className="relative inline-block">
                            <Quote className="absolute -top-4 -left-8 text-gray-200 w-10 h-10 transform -scale-x-100 z-0 opacity-50" />
                            <p className="relative z-10 text-h4 text-gray-500 leading-relaxed font-medium">
                                "Cuando la comunicación no es clara ni trazable, se rompe la confianza y aumenta el ruido operativo."
                            </p>
                        </div>
                    </div>

                    {/* CARDS GRID (Horizontal Layout) */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                        {/* Problem Card */}
                        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 group hover:border-red-100 transition-colors duration-300 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-400">
                                    <X size={16} strokeWidth={3} />
                                </div>
                                <span className="font-bold text-gray-400 uppercase tracking-widest text-[10px] md:text-tiny">Lo que pasa hoy</span>
                            </div>

                            <div className="space-y-8 flex-grow">
                                <div className="flex gap-5 items-start">
                                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 shrink-0 group-hover:bg-red-50 group-hover:text-red-400 transition-colors">
                                        <MessageSquare size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-torre text-body mb-1">Avisos que se pierden</h4>
                                        <p className="text-small text-gray-500 leading-relaxed">Información perdida en chats o carteleras físicas que nadie lee</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-start">
                                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 shrink-0 group-hover:bg-red-50 group-hover:text-red-400 transition-colors">
                                        <Smartphone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-torre text-body mb-1">Ruido Operativo</h4>
                                        <p className="text-small text-gray-500 leading-relaxed">Mensajes repetidos, llamadas constantes y malentendidos frecuentes</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-start">
                                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 shrink-0 group-hover:bg-red-50 group-hover:text-red-400 transition-colors">
                                        <HelpCircle size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-torre text-body mb-1">Sin Trazabilidad</h4>
                                        <p className="text-small text-gray-500 leading-relaxed">Imposible saber quién leyó el mensaje o encontrar comunicados antiguos</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Solution Card */}
                        <div className="bg-[#F9F5FF] p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-domo/5 border border-purple-100 group hover:border-domo/30 transition-colors duration-300 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-8 h-8 rounded-full bg-domo/10 flex items-center justify-center text-domo">
                                    <Check size={16} strokeWidth={3} />
                                </div>
                                <span className="font-bold text-domo uppercase tracking-widest text-[10px] md:text-tiny">Con DomoNow obtienes</span>
                            </div>

                            <div className="space-y-8 flex-grow">
                                <div className="flex gap-5 items-start">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-domo shrink-0 shadow-sm group-hover:bg-domo group-hover:text-white transition-colors">
                                        <Megaphone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-torre text-body mb-1">Comunicados Oficiales</h4>
                                        <p className="text-small text-gray-500 leading-relaxed">Envía información certificada que llega directo a la App del residente</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-start">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-domo shrink-0 shadow-sm group-hover:bg-domo group-hover:text-white transition-colors">
                                        <Bell size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-torre text-body mb-1">Alertas Inmediatas</h4>
                                        <p className="text-small text-gray-500 leading-relaxed">Notificaciones push para emergencias o novedades críticas al instante</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-start">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-domo shrink-0 shadow-sm group-hover:bg-domo group-hover:text-white transition-colors">
                                        <Eye size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-torre text-body mb-1">Visibilidad Total</h4>
                                        <p className="text-small text-gray-500 leading-relaxed">Historial claro y accesible en todo momento para residentes y juntas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. STEP BY STEP PROCESS */}
            <section className="py-24 bg-arquitectura relative z-10">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-domo font-bold tracking-widest uppercase text-tiny mb-2 block">
                            Flujo de Trabajo
                        </span>
                        <h2 className="text-h2 font-bold text-torre">Tu comunidad, paso a paso</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-torre group-hover:bg-domo group-hover:text-white transition-colors">
                                    <Megaphone size={20} />
                                </div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-3">PASO 1</span>
                            </div>
                            <h3 className="text-h4 font-bold text-torre mb-3">Informas una sola vez</h3>
                            <p className="text-body text-gray-500 leading-relaxed">
                                La administración pública el comunicado desde la app, con un mensaje claro y oficial para la comunidad.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-torre group-hover:bg-horizonte group-hover:text-torre transition-colors">
                                    <Bell size={20} />
                                </div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-3">PASO 2</span>
                            </div>
                            <h3 className="text-h4 font-bold text-torre mb-3">Todos se enteran</h3>
                            <p className="text-body text-gray-500 leading-relaxed">
                                Los residentes reciben una notificación y saben exactamente dónde consultar la información, sin buscar en chats ni correos.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-torre group-hover:bg-domo group-hover:text-white transition-colors">
                                    <CheckCircle2 size={20} />
                                </div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-3">PASO 3</span>
                            </div>
                            <h3 className="text-h4 font-bold text-torre mb-3">Todo queda respaldado</h3>
                            <p className="text-body text-gray-500 leading-relaxed">
                                El comunicado permanece visible, ordenado y disponible, reduciendo reclamos y confusiones futuras.
                            </p>
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
                                    <img
                                        src={item.image}
                                        alt={item.category}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30"></div>
                                </div>
                                <div className="absolute top-6 left-6 z-10">
                                    <h3 className="text-h4 font-bold text-white drop-shadow-md tracking-tight">
                                        {item.category}
                                    </h3>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-5 rounded-[2rem] shadow-xl flex flex-col gap-3 h-40 border border-white/50">
                                    <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-domo shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-small font-medium text-torre leading-snug">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA BOTTOM */}
            <section className="py-24 bg-[#E9D5FF] text-torre text-center px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
                <div className="container mx-auto max-w-3xl relative z-10">
                    <h2 className="text-h2 font-bold mb-8 leading-tight text-torre">
                        Conoce cómo DomoNow transforma la comunicación en tu comunidad.
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-domo text-white hover:bg-torre hover:text-white transition-colors px-12 text-lg shadow-xl shadow-domo/20" onClick={onOpenDemo}>
                            Quiero agendar una Demo
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
};