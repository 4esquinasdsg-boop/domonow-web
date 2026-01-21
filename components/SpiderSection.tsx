import React, { useState, useEffect } from 'react';
import {
    Shield, FileText, Clipboard, Users, Vote, ClipboardList,
    AlertTriangle, MessageCircle, FileWarning, Calendar, PartyPopper, BarChart3,
    Settings
} from 'lucide-react';

interface SpiderNode {
    id: string;
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    side: 'left' | 'right' | 'center';
    row: number;
}

const leftNodes: SpiderNode[] = [
    { id: 'financiero', title: 'FINANCIERO', subtitle: 'Estados de cuenta', icon: <BarChart3 size={20} />, side: 'left', row: 1 },
    { id: 'documental', title: 'DOCUMENTAL', subtitle: 'Contratos, normativas', icon: <FileText size={20} />, side: 'left', row: 2 },
    { id: 'normativo', title: 'NORMATIVO', subtitle: 'Reglamento interno', icon: <Clipboard size={20} />, side: 'left', row: 3 },
    { id: 'asambleas', title: 'ASAMBLEAS', subtitle: 'Convocatorias digitales', icon: <Users size={20} />, side: 'left', row: 4 },
];

const rightNodes: SpiderNode[] = [
    { id: 'reservas', title: 'RESERVAS', subtitle: 'Salón social, gimnasio', icon: <Calendar size={20} />, side: 'right', row: 1 },
    { id: 'solicitudes', title: 'SOLICITUDES', subtitle: 'Reporte de daños', icon: <FileWarning size={20} />, side: 'right', row: 2 },
    { id: 'comunicacion', title: 'COMUNICACIÓN', subtitle: 'Avisos de mantenimiento', icon: <MessageCircle size={20} />, side: 'right', row: 3 },
    { id: 'eventos', title: 'EVENTOS', subtitle: 'Fiestas comunitarias', icon: <PartyPopper size={20} />, side: 'right', row: 4 },
];

const centerNodes: SpiderNode[] = [
    { id: 'porteria', title: 'PORTERÍA', subtitle: 'Autorización de visitantes', icon: <Shield size={20} />, side: 'center', row: 0 },
    { id: 'panico', title: 'BOTÓN DE PÁNICO', subtitle: 'Situaciones de riesgo', icon: <AlertTriangle size={20} />, side: 'center', row: 1 },
    { id: 'votaciones', title: 'VOTACIONES', subtitle: 'Satisfacción de servicio', icon: <Vote size={20} />, side: 'center', row: 4 },
];

export const SpiderSection: React.FC = () => {
    const [activeNode, setActiveNode] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        const section = document.getElementById('spider-section');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const NodeCard = ({ node, delay, isLeft }: { node: SpiderNode; delay: number; isLeft?: boolean }) => (
        <div
            className={`flex items-center gap-4 transition-all duration-500 cursor-pointer group ${isVisible ? 'opacity-100 translate-x-0' : isLeft ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'
                }`}
            style={{ transitionDelay: `${delay}ms`, flexDirection: isLeft ? 'row-reverse' : 'row' }}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
        >
            {/* Icon Circle */}
            <div
                className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border-2 flex-shrink-0 ${activeNode === node.id
                    ? 'bg-domo text-white border-domo scale-110 shadow-domo/50'
                    : 'bg-white text-domo border-purple-200 group-hover:bg-domo group-hover:text-white group-hover:border-domo'
                    }`}
            >
                <span className="scale-150">{node.icon}</span>
            </div>

            {/* Text Label - Fixed exact size */}
            <div className={`${isLeft ? 'text-right' : 'text-left'} bg-white px-6 py-4 rounded-2xl shadow-md border border-purple-100 transition-all duration-300 group-hover:border-domo/30 group-hover:shadow-lg w-[240px] md:w-[310px] h-[70px] md:h-[80px] flex flex-col justify-center`}>
                <p className={`text-body md:text-lead font-bold transition-colors duration-300 whitespace-nowrap ${activeNode === node.id ? 'text-domo' : 'text-torre'
                    }`}>
                    {node.title}
                </p>
                <p className="text-small md:text-body text-gray-500 whitespace-nowrap">
                    {node.subtitle}
                </p>
            </div>
        </div>
    );

    return (
        <section id="spider-section" className="py-20 md:py-32 px-4 md:px-6 bg-white overflow-hidden">
            <div className="container mx-auto max-w-7xl">

                {/* Section Title */}
                <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-torre leading-tight">
                        Cuando todo depende de ti,<br />
                        <span className="text-domo">necesitas una plataforma que piense contigo.</span>
                    </h2>
                </div>

                {/* Spider Image - Main Content */}
                <div className={`w-full flex justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <img
                        src="/assets/ARANA/ARANA.PNG"
                        alt="Diagrama de módulos DomoNow"
                        className="w-full max-w-6xl h-auto"
                    />
                </div>

                {/* ============================================
                    INTERACTIVE SPIDER DIAGRAM - COMMENTED OUT
                    Keeping this code for future use if needed
                ============================================ */}
                {/*
                <div className="relative grid grid-cols-3 gap-x-8 md:gap-x-16 lg:gap-x-24 gap-y-10 md:gap-y-14 lg:gap-y-16">

                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-purple-300 -translate-x-1/2" style={{ zIndex: 0 }}></div>

                    <div className="col-span-3 flex justify-center relative z-10">
                        <NodeCard node={centerNodes[0]} delay={0} />
                    </div>

                    <div className="flex justify-end relative z-10">
                        <NodeCard node={leftNodes[0]} delay={100} isLeft />
                    </div>
                    <div className="flex justify-center relative z-10">
                        <NodeCard node={centerNodes[1]} delay={150} />
                    </div>
                    <div className="flex justify-start relative z-10">
                        <NodeCard node={rightNodes[0]} delay={200} />
                    </div>

                    <div className="flex justify-end relative z-10">
                        <NodeCard node={leftNodes[1]} delay={250} isLeft />
                    </div>
                    <div
                        className={`flex justify-center items-center relative z-20 transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                        style={{ transitionDelay: '300ms' }}
                    >
                        <div className="flex items-center gap-4 cursor-pointer group">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-domo to-purple-700 text-white shadow-xl shadow-domo/40 relative flex-shrink-0">
                                <div className="absolute inset-0 rounded-full border-2 border-domo/30 animate-ping" style={{ animationDuration: '3s' }}></div>
                                <Settings className="w-7 h-7 md:w-8 md:h-8 animate-spin-slow" />
                            </div>
                            <div className="bg-gradient-to-r from-domo to-purple-700 px-6 py-4 rounded-2xl shadow-xl shadow-domo/30 text-white w-[240px] md:w-[310px] h-[70px] md:h-[80px] flex flex-col justify-center">
                                <p className="text-body md:text-lead font-bold whitespace-nowrap">SUPERADMINISTRADOR</p>
                                <p className="text-small md:text-body text-white/80 whitespace-nowrap">Control multi-propiedad</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start relative z-10">
                        <NodeCard node={rightNodes[1]} delay={350} />
                    </div>

                    <div className="flex justify-end relative z-10">
                        <NodeCard node={leftNodes[2]} delay={400} isLeft />
                    </div>
                    <div></div>
                    <div className="flex justify-start relative z-10">
                        <NodeCard node={rightNodes[2]} delay={450} />
                    </div>

                    <div className="flex justify-end relative z-10">
                        <NodeCard node={leftNodes[3]} delay={500} isLeft />
                    </div>
                    <div className="flex justify-center relative z-10">
                        <NodeCard node={centerNodes[2]} delay={550} />
                    </div>
                    <div className="flex justify-start relative z-10">
                        <NodeCard node={rightNodes[3]} delay={600} />
                    </div>

                </div>
                */}

            </div>

            {/* Custom Animation Styles */}
            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 10s linear infinite;
                }
            `}</style>
        </section>
    );
};
