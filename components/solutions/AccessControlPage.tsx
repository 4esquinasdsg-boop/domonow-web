import React, { useEffect, useState } from 'react';
import { toYouTubeEmbed } from '../../utils/youtube';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
import { ImageCarousel } from '../ImageCarousel';
import { HowItWorksSection } from '../HowItWorksSection';
import { ParticleBackground } from '../ParticleBackground';
import {
    ShieldCheck, Smartphone, UserCheck, X, Check,
    Quote, Clock, Users, Calendar, Lock,
    Truck, Home, BookX, Search, ShieldOff,
    Database, Filter
} from 'lucide-react';

interface AccessControlPageProps {
    onOpenDemo: () => void;
}

export const AccessControlPage: React.FC<AccessControlPageProps> = ({ onOpenDemo }) => {
    const { i18n } = useTranslation();
    const language = (i18n.language?.startsWith('en') ? 'en' : 'es') as 'es' | 'en';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const t = {
        es: {
            hero: {
                tag: "MÓDULO PORTERÍA",
                subtitle: "Control de cada ingreso en tiempo real",
                title: "¿Quién entró? ¿A qué hora?",
                problem: "Visitantes sin registro, porteros saturados, residentes reclamando.",
                solution: "organiza la portería. Todo registrado, sin discusiones.",
                cta: "Conoce cómo funciona"
            },
            pass: {
                title: "Pase de Acceso",
                visitorLabel: "Visitante",
                visitorName: "Carlos Méndez",
                visitorLoc: "Apto 304 · Hoy 10:00",
                authorized: "Autorizado"
            },
            useCases: {
                title: "Casos de uso",
                items: [
                    { category: "Visitas ocasionales", videoUrl: "https://youtu.be/-pfMqMV9WuI?si=_7A5RBn6XMEJWj34" },
                    { category: "Proveedores y técnicos", videoUrl: "" },
                    { category: "Ingresos programados o recurrentes", videoUrl: "https://youtu.be/pkPUcN0KTpc?si=uiQs1hjdMWWcDa3o" },
                    { category: "Portería saturada por registro manual", videoUrl: "https://youtu.be/pv2JOAcaEgs?si=YQ5ot4qAtxjtc5Xb" }
                ]
            },
            howItWorks: {
                title: "Conoce cómo funciona",
                subtitle: "Cómo funciona",
                leftLabel: "Software tradicional:",
                rightLabel: "Con DomoNow:",
                items: [
                    {
                        problem: "Formulario básico de registro",
                        solution: "Códigos QR de ingreso"
                    },
                    {
                        problem: "Registro de ingresos en Excel",
                        solution: "Validación instantánea"
                    },
                    {
                        problem: "Consulta manual por el portero",
                        solution: "Registro automático"
                    }
                ]
            },
            situation: {
                tag: "SITUACIÓN ACTUAL",
                title: "El problema que viven hoy las comunidades.",
                quote: "\"Cuando el control de accesos depende de llamadas, papel o mensajes sueltos, existe una sensación constante de desorden e inseguridad\"",
                problems: {
                    title: "Los problemas de hoy",
                    items: [
                        { title: "Registros no legibles", desc: "Cuadernos con información imposible de consultar" },
                        { title: "Búsqueda Manual", desc: "Revisar papel por papel para encontrar un ingreso" },
                        { title: "Sin Trazabilidad", desc: "No hay forma de verificar quién entró" }
                    ]
                },
                solutions: {
                    title: "Con DomoNow obtienes",
                    items: [
                        { title: "Historial Completo", desc: "Base de datos consultable de todos los ingresos" },
                        { title: "Filtros Inteligentes", desc: "Encuentra cualquier registro por fechas o residente" },
                        { title: "Respaldo Automático", desc: "Evidencia documentada que protege tu gestión" }
                    ]
                }
            },
            workflow: {
                tag: "Flujo de Trabajo",
                title: "Tu comunidad, paso a paso",
                steps: [
                    {
                        title: "El residente registra al visitante",
                        desc: "Desde la app, el residente crea el pase de acceso en segundos, indicando quién ingresa."
                    },
                    {
                        title: "El acceso se valida sin llamadas",
                        desc: "En portería se valida el pase de acceso, sin depender de confirmaciones informales."
                    },
                    {
                        title: "Todo queda respaldado",
                        desc: "Cada ingreso queda guardado en la app, con fecha, hora y responsable."
                    }
                ]
            },
            footerCTA: {
                title: "cada ingreso tiene respaldo, cada decisión queda clara y la seguridad deja de ser un dolor operativo.",
                button: "Quiero agendar una Demo"
            }
        },
        en: {
            hero: {
                tag: "CONCIERGE MODULE",
                subtitle: "Control every entry in real time",
                title: "Who entered? At what time?",
                problem: "Unregistered visitors, overwhelmed concierges, complaining residents.",
                solution: "organizes the gatehouse. Everything recorded, no arguments.",
                cta: "See how it works"
            },
            pass: {
                title: "Access Pass",
                visitorLabel: "Visitor",
                visitorName: "Carlos Méndez",
                visitorLoc: "Apt 304 · Today 10:00",
                authorized: "Authorized"
            },
            useCases: {
                title: "Use cases",
                items: [
                    { category: "Occasional visits", videoUrl: "https://youtu.be/-pfMqMV9WuI?si=_7A5RBn6XMEJWj34" },
                    { category: "Providers and technicians", videoUrl: "" },
                    { category: "Scheduled or recurring entries", videoUrl: "https://youtu.be/pkPUcN0KTpc?si=uiQs1hjdMWWcDa3o" },
                    { category: "Front desk overwhelmed by manual registration", videoUrl: "https://youtu.be/pv2JOAcaEgs?si=YQ5ot4qAtxjtc5Xb" }
                ]
            },
            howItWorks: {
                title: "See how it works",
                subtitle: "How it works",
                leftLabel: "Traditional software:",
                rightLabel: "With DomoNow:",
                items: [
                    {
                        problem: "Basic registration form",
                        solution: "Ingress QR codes"
                    },
                    {
                        problem: "Entry tracking in Excel",
                        solution: "Instant validation"
                    },
                    {
                        problem: "Manual query by the concierge",
                        solution: "Automatic recording"
                    }
                ]
            },
            situation: {
                tag: "CURRENT SITUATION",
                title: "The problem communities face today.",
                quote: "\"When access control depends on calls, paper or loose messages, there is a constant sense of disorder and insecurity\"",
                problems: {
                    title: "Today's problems",
                    items: [
                        { title: "Unreadable records", desc: "Notebooks with information impossible to query" },
                        { title: "Manual Search", desc: "Checking paper by paper to find an entry" },
                        { title: "No Traceability", desc: "No way to verify who entered" }
                    ]
                },
                solutions: {
                    title: "With DomoNow you get",
                    items: [
                        { title: "Full History", desc: "Searchable database of all entries" },
                        { title: "Smart Filters", desc: "Find any record by date or resident" },
                        { title: "Automatic Backup", desc: "Documented evidence that protects your management" }
                    ]
                }
            },
            workflow: {
                tag: "Workflow",
                title: "Your community, step by step",
                steps: [
                    {
                        title: "Resident registers the visitor",
                        desc: "From the app, the resident creates the access pass in seconds, indicating who is entering."
                    },
                    {
                        title: "Access is validated without calls",
                        desc: "At the gatehouse, the access pass is validated, without depending on informal confirmations."
                    },
                    {
                        title: "Everything is backed up",
                        desc: "Every entry is saved in the app, with date, time, and responsible party."
                    }
                ]
            },
            footerCTA: {
                title: "every entry has backup, every decision is clear, and security stops being an operational pain.",
                button: "I want to schedule a Demo"
            }
        }
    };

    const content = t[language];
    const [activePopup, setActivePopup] = useState<number | null>(null);

    const appScreens = [
        "/assets/modules/accesos/carruselinterfaz/ACCESOS (1).jpg",
        "/assets/modules/accesos/carruselinterfaz/ACCESOS (2).jpg",
        "/assets/modules/accesos/carruselinterfaz/ACCESOS (3).jpg",
        "/assets/modules/accesos/carruselinterfaz/ACCESOS (4).jpg",
        "/assets/modules/accesos/carruselinterfaz/ACCESOS (5).jpg",
        "/assets/modules/accesos/carruselinterfaz/ACCESOS (6).jpg",
        "/assets/modules/accesos/carruselinterfaz/ACCESOS (7).jpg",
    ];

    const useCaseIcons = [
        <Users size={20} />,
        <Truck size={20} />,
        <Calendar size={20} />,
        <Home size={20} />
    ];

    const useCaseImages = [
        "/assets/modules/accesos/casosdeuso/accesos_cuso (1)_compressed.png",
        "/assets/modules/accesos/casosdeuso/accesos_cuso (1)_compressed.jpg",
        "/assets/modules/accesos/casosdeuso/accesos_cuso (3)_compressed.jpg",
        "/assets/modules/accesos/casosdeuso/accesos_cuso (2)_compressed.jpg"
    ];

    const problemIcons = [
        <BookX size={20} />,
        <Search size={20} />,
        <ShieldOff size={20} />
    ];

    const solutionIcons = [
        <Database size={20} />,
        <Filter size={20} />,
        <ShieldCheck size={20} />
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
                            <div className="flex items-center gap-3 mb-0">
                                <span className="w-9 h-9 bg-domo rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">1</span>
                                <span className="text-base font-bold tracking-widest uppercase text-domo">{content.hero.tag}</span>
                            </div>
                            <p className="text-small text-gray-400 italic mb-4 ml-12">{content.hero.subtitle}</p>
                            <h1 className="text-h2 md:text-h1 font-bold leading-tight mb-6 text-torre">
                                {content.hero.title}
                            </h1>
                            <div className="prose text-lead text-gray-500 mb-8 leading-relaxed">
                                <p className="mb-4 text-torre font-bold">
                                    {content.hero.problem}
                                </p>
                                <p>
                                    <span className="domonow-gradient">DomoNow</span> {content.hero.solution}
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <Button size="lg" onClick={onOpenDemo} className="shadow-xl shadow-domo/20">
                                    {content.hero.cta}
                                </Button>
                            </div>
                        </div>

                        <div className="lg:w-7/12 relative w-full mt-12 lg:mt-0">
                            <div className="relative w-full max-w-[850px] ml-auto">
                                {/* BACK LAYER: Dashboard */}
                                <div className="relative z-0 ml-8 md:ml-24 transform rotate-1 hover:rotate-0 transition-all duration-700">
                                    <div className="rounded-2xl overflow-hidden shadow-2xl bg-white aspect-video">
                                        <img
                                            src="/assets/modules/accesos/accesoshero.png"
                                            alt="Vista del módulo de control de accesos"
                                            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                                    </div>
                                </div>

                                {/* FRONT LAYER: Phone Animation */}
                                <div className="absolute bottom-[-10%] left-0 md:-left-4 z-10 w-[240px] md:w-[300px]">
                                    <div className="bg-white p-4 rounded-[2.5rem] shadow-[0_30px_80px_rgba(130,10,209,0.25)] border border-gray-100 transform -rotate-2 hover:rotate-0 transition-all duration-500">
                                        <div className="p-4 space-y-4">
                                            {/* Access Pass with QR */}
                                            <div className="bg-white rounded-xl border border-domo/20 overflow-hidden shadow-sm">
                                                {/* Pass header */}
                                                <div className="bg-domo px-3 py-1.5 flex items-center justify-between">
                                                    <span className="text-white font-bold text-[9px] tracking-widest uppercase">{content.pass.title}</span>
                                                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                                                </div>
                                                {/* Pass body */}
                                                <div className="p-3 flex gap-3 items-center">
                                                    {/* QR Code SVG */}
                                                    <svg width="52" height="52" viewBox="0 0 52 52" className="flex-shrink-0">
                                                        {/* Top-left finder */}
                                                        <rect x="2" y="2" width="16" height="16" rx="2" fill="none" stroke="#820ad1" strokeWidth="2" />
                                                        <rect x="6" y="6" width="8" height="8" rx="1" fill="#820ad1" />
                                                        {/* Top-right finder */}
                                                        <rect x="34" y="2" width="16" height="16" rx="2" fill="none" stroke="#820ad1" strokeWidth="2" />
                                                        <rect x="38" y="6" width="8" height="8" rx="1" fill="#820ad1" />
                                                        {/* Bottom-left finder */}
                                                        <rect x="2" y="34" width="16" height="16" rx="2" fill="none" stroke="#820ad1" strokeWidth="2" />
                                                        <rect x="6" y="38" width="8" height="8" rx="1" fill="#820ad1" />
                                                        {/* Data dots */}
                                                        <rect x="22" y="2" width="4" height="4" rx="0.5" fill="#820ad1" />
                                                        <rect x="28" y="2" width="4" height="4" rx="0.5" fill="#820ad1" />
                                                        <rect x="22" y="8" width="4" height="4" rx="0.5" fill="#820ad1" />
                                                        <rect x="22" y="22" width="4" height="4" rx="0.5" fill="#820ad1" />
                                                        <rect x="28" y="22" width="4" height="4" rx="0.5" fill="#820ad1" />
                                                        <rect x="34" y="22" width="4" height="4" rx="0.5" fill="#820ad1" />
                                                        <rect x="40" y="22" width="4" height="4" rx="0.5" fill="#820ad1" />
                                                        <rect x="46" y="22" width="4" height="4" rx="0.5" fill="#820ad1" />
                                                        <rect x="22" y="28" width="4" height="4" rx="0.5" fill="#820ad1" />
                                                        <rect x="34" y="28" width="4" height="4" rx="0.5" fill="#820ad1" />
                                                        <rect x="22" y="34" width="4" height="4" rx="0.5" fill="#820ad1" />
                                                        <rect x="28" y="34" width="4" height="4" rx="0.5" fill="#820ad1" />
                                                        <rect x="22" y="40" width="4" height="4" rx="0.5" fill="#820ad1" />
                                                        <rect x="34" y="40" width="4" height="4" rx="0.5" fill="#820ad1" />
                                                        <rect x="40" y="40" width="4" height="4" rx="0.5" fill="#820ad1" />
                                                        <rect x="46" y="34" width="4" height="4" rx="0.5" fill="#820ad1" />
                                                        <rect x="46" y="46" width="4" height="4" rx="0.5" fill="#820ad1" />
                                                        <rect x="28" y="46" width="4" height="4" rx="0.5" fill="#820ad1" />
                                                    </svg>
                                                    {/* Visitor info */}
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-[8px] text-gray-400 uppercase tracking-wide">{content.pass.visitorLabel}</p>
                                                        <p className="text-[10px] font-bold text-torre truncate">{content.pass.visitorName}</p>
                                                        <p className="text-[8px] text-gray-400 mt-1">{content.pass.visitorLoc}</p>
                                                        <div className="mt-1.5 inline-flex items-center gap-1 bg-green-50 border border-green-200 rounded-full px-1.5 py-0.5">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                                            <span className="text-[7px] font-bold text-green-700 uppercase tracking-wide">{content.pass.authorized}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pulse animation style */}
            <style>{`
                @keyframes pulseGlow {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(130, 10, 209, 0.5); transform: scale(1); }
                    50% { box-shadow: 0 0 20px 6px rgba(130, 10, 209, 0.35); transform: scale(1.05); }
                }
                .btn-pulse-glow {
                    animation: pulseGlow 2s ease-in-out infinite;
                }
            `}</style>

            {/* 4. USE CASES */}
            <section className="py-24 bg-white relative overflow-hidden">
                <ParticleBackground />
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-h2 font-bold text-center mb-16 text-torre">{content.useCases.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {content.useCases.items.map((item, index) => (
                            <div key={index} className="relative h-[500px] rounded-[2rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500">
                                <div className="absolute inset-0 w-full h-full">
                                    <img src={useCaseImages[index]} alt={item.category} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/50"></div>
                                </div>
                                <div className="absolute top-6 left-6 right-6 z-10 flex items-start gap-3">
                                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white shrink-0">{useCaseIcons[index]}</div>
                                    <h3 className="text-body font-bold text-white drop-shadow-md tracking-tight leading-snug">{item.category}</h3>
                                </div>
                                {item.videoUrl && (
                                    <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
                                        <button
                                            onClick={() => setActivePopup(index)}
                                            className="btn-pulse-glow bg-domo text-white font-bold px-6 py-2.5 rounded-full text-sm hover:bg-purple-800 transition-colors cursor-pointer shadow-lg"
                                        >
                                            {language === 'es' ? 'Ver más' : 'See more'}
                                        </button>
                                    </div>
                                )}

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* USE CASE VIDEO POPUP */}
            {activePopup !== null && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-torre/60 backdrop-blur-sm" onClick={() => setActivePopup(null)}></div>
                    <div className="relative bg-white rounded-[2.5rem] w-full max-w-sm max-h-[90vh] overflow-hidden shadow-2xl" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                        <button
                            onClick={() => setActivePopup(null)}
                            className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 transition-colors z-20"
                        >
                            <X size={20} />
                        </button>
                        <div className="p-6 flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-domo rounded-full flex items-center justify-center text-white shrink-0 mb-4">
                                {useCaseIcons[activePopup]}
                            </div>
                            <h3 className="text-h4 font-bold text-torre mb-6">{content.useCases.items[activePopup].category}</h3>
                            {content.useCases.items[activePopup].videoUrl ? (
                                <div className="w-full aspect-[9/16] rounded-2xl overflow-hidden bg-gray-100">
                                    <iframe
                                        src={toYouTubeEmbed(content.useCases.items[activePopup].videoUrl)}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={content.useCases.items[activePopup].category}
                                    ></iframe>
                                </div>
                            ) : (
                                <div className="w-full aspect-[9/16] rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 flex flex-col items-center justify-center gap-4">
                                    <div className="w-20 h-20 bg-domo/10 rounded-full flex items-center justify-center">
                                        <svg className="w-10 h-10 text-domo" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-500 font-medium text-center">
                                        {language === 'es' ? 'Video próximamente' : 'Video coming soon'}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}


            <HowItWorksSection
                title={content.howItWorks.title}
                subtitle={content.howItWorks.subtitle}
                leftLabel={content.howItWorks.leftLabel}
                rightLabel={content.howItWorks.rightLabel}
                imageSrc="/assets/modules/accesos/comofunciona_porteria.png"
                items={content.howItWorks.items}
            />

            {/* 2. PROBLEM VS SOLUTION */}
            <section className="py-24 bg-arquitectura relative z-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <span className="h-px w-8 bg-red-400"></span>
                            <span className="text-red-400 font-bold tracking-widest uppercase text-tiny">{content.situation.tag}</span>
                            <span className="h-px w-8 bg-red-400"></span>
                        </div>
                        <h2 className="text-h2 font-bold text-torre mb-8 leading-tight">{content.situation.title}</h2>
                        <div className="relative inline-block">
                            <Quote className="absolute -top-4 -left-8 text-gray-200 w-10 h-10 transform -scale-x-100 z-0 opacity-50" />
                            <p className="relative z-10 text-h4 text-gray-500 leading-relaxed font-medium">
                                {content.situation.quote}
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 divide-x divide-gray-200 items-stretch">
                        {/* Problem */}
                        <div className="pr-8 lg:pr-12 flex flex-col h-full">
                            <img src="/assets/problemashoy.png" alt="" className="w-full max-w-xs mx-auto mb-8 rounded-2xl" />
                            <div className="flex items-center gap-3 mb-8">

                                <span className="font-bold text-red-500 uppercase tracking-widest text-[10px] md:text-tiny">{content.situation.problems.title}</span>
                            </div>
                            <div className="space-y-8 flex-grow">
                                {content.situation.problems.items.map((item, i) => (
                                    <div key={i} className="flex gap-5 items-start">
                                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white shrink-0">
                                            {problemIcons[i]}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-torre text-body mb-1">{item.title}</h4>
                                            <p className="text-small text-gray-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Solution */}
                        <div className="pl-8 lg:pl-12 flex flex-col h-full">
                            <img src="/assets/obtienes.png" alt="" className="w-full max-w-xs mx-auto mb-8 rounded-2xl" />
                            <div className="flex items-center gap-3 mb-8">

                                <span className="font-bold text-domo uppercase tracking-widest text-[10px] md:text-tiny">{content.situation.solutions.title.split(' ')[0]} <span className="domonow-gradient">DomoNow</span> {content.situation.solutions.title.split(' ').slice(2).join(' ')}</span>
                            </div>
                            <div className="space-y-8 flex-grow">
                                {content.situation.solutions.items.map((item, i) => (
                                    <div key={i} className="flex gap-5 items-start">
                                        <div className="w-12 h-12 bg-domo rounded-full flex items-center justify-center text-white shrink-0">
                                            {solutionIcons[i]}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-torre text-body mb-1">{item.title}</h4>
                                            <p className="text-small text-gray-500 leading-relaxed">{item.desc}</p>
                                        </div>
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
                        <span className="text-domo font-bold tracking-widest uppercase text-tiny mb-2 block">{content.workflow.tag}</span>
                        <h2 className="text-h2 font-bold text-torre">{content.workflow.title}</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {content.workflow.steps.map((step, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-transparent hover:border-domo hover:shadow-xl transition-all duration-300 group h-full flex flex-col items-center text-center">
                                <div className="flex justify-center mb-8">
                                    <div className="w-10 h-10 bg-gray-100 group-hover:bg-domo rounded-full flex items-center justify-center text-torre group-hover:text-white text-small font-bold transition-colors duration-300">{i + 1}</div>
                                </div>
                                <h3 className="text-h4 font-bold text-torre mb-3">{step.title}</h3>
                                <p className="text-body text-gray-500 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* 5. CTA */}
            <section className="py-24 bg-gradient-to-br from-white to-purple-100 text-torre text-center px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
                <div className="container mx-auto max-w-5xl relative z-10">
                    <h2 className="text-h3 font-bold mb-8 leading-tight text-torre">
                        {language === 'es' ? (
                            <>Con <span className="domonow-gradient">DomoNow</span>, {content.footerCTA.title}</>
                        ) : (
                            <>With <span className="domonow-gradient">DomoNow</span>, {content.footerCTA.title}</>
                        )}
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-domo text-white hover:bg-torre hover:text-white transition-colors px-12 text-lg shadow-xl shadow-domo/20" onClick={onOpenDemo}>
                            {content.footerCTA.button}
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};
