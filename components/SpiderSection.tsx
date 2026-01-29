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

// Image Viewer Component with drag-to-pan and zoom
const ImageViewer: React.FC<{ src: string; onClose: () => void }> = ({ src, onClose }) => {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        setPosition({
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const zoomIn = () => setScale(prev => Math.min(prev + 0.25, 3));
    const zoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5));
    const resetView = () => { setScale(1); setPosition({ x: 0, y: 0 }); };

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                backgroundColor: '#f5f5f5'
            }}
        >
            {/* Controls */}
            <div style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 10001,
                display: 'flex',
                gap: '10px'
            }}>
                <button onClick={zoomOut} style={{
                    width: '45px', height: '45px', borderRadius: '50%',
                    backgroundColor: '#820ad1', color: 'white', border: 'none',
                    fontSize: '24px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}>−</button>
                <button onClick={zoomIn} style={{
                    width: '45px', height: '45px', borderRadius: '50%',
                    backgroundColor: '#820ad1', color: 'white', border: 'none',
                    fontSize: '24px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}>+</button>
                <button onClick={resetView} style={{
                    width: '45px', height: '45px', borderRadius: '50%',
                    backgroundColor: '#666', color: 'white', border: 'none',
                    fontSize: '16px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}>↺</button>
                <button onClick={onClose} style={{
                    width: '45px', height: '45px', borderRadius: '50%',
                    backgroundColor: '#333', color: 'white', border: 'none',
                    fontSize: '20px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}>✕</button>
            </div>

            {/* Zoom indicator */}
            <div style={{
                position: 'fixed',
                bottom: '20px',
                left: '20px',
                zIndex: 10001,
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px'
            }}>
                Zoom: {Math.round(scale * 100)}%
            </div>

            {/* Image Container */}
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    cursor: isDragging ? 'grabbing' : 'grab',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <img
                    src={src}
                    alt="Diagrama de módulos DomoNow"
                    draggable={false}
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                        transition: isDragging ? 'none' : 'transform 0.2s ease',
                        maxWidth: 'none',
                        userSelect: 'none'
                    }}
                />
            </div>
        </div>
    );
};

export const SpiderSection: React.FC = () => {
    const [activeNode, setActiveNode] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isZoomed, setIsZoomed] = useState(false);

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


                {/* Spider Image - Main Content */}
                <div className={`w-full flex justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <img
                        src="/assets/arana.png"
                        alt="Diagrama de módulos DomoNow"
                        className="w-full max-w-[1400px] h-auto cursor-zoom-in hover:opacity-90 transition-opacity"
                        onClick={() => setIsZoomed(true)}
                    />
                </div>

                {/* Zoom Modal - Portal to body */}
                {isZoomed && (
                    <ImageViewer
                        src="/assets/arana.png"
                        onClose={() => setIsZoomed(false)}
                    />
                )}

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
