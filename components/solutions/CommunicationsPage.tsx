import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
    const { i18n } = useTranslation();
    const language = (i18n.language?.startsWith('en') ? 'en' : 'es') as 'es' | 'en';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const t = {
        es: {
            hero: {
                tag: "MÓDULO COMUNICACIONES",
                subtitle: "Informa. Conecta. Gestiona.",
                title: "Comunica con claridad.",
                problem: "Cuando la información no es clara, se rompe la confianza.",
                solution: "centraliza la comunicación oficial. Sin ruidos, sin confusiones.",
                cta: "Conoce cómo funciona",
                phone: {
                    admin: "Administración",
                    highlight: "Recordamos la asamblea general este fin de semana.",
                    status: "Estado",
                    read: "Mensaje Leído"
                }
            },
            useCases: {
                title: "Casos de uso",
                items: [
                    { category: "Mantenimiento", description: "Avisos de mantenimiento o cortes de servicio" },
                    { category: "Reglamentos", description: "Cambios en normas internas o reglamentos" },
                    { category: "Asambleas", description: "Comunicaciones de asambleas y decisiones administrativas" },
                    { category: "Novedades", description: "Novedades importantes del conjunto" }
                ]
            },
            howItWorks: {
                title: "Conoce cómo funciona",
                subtitle: "Cómo funciona",
                leftLabel: "Software tradicional:",
                rightLabel: "Con DomoNow:",
                items: [
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
                ]
            },
            situation: {
                tag: "SITUACIÓN ACTUAL",
                title: "El problema que viven hoy las comunidades.",
                quote: "\"Cuando la comunicación no es clara ni trazable, se rompe la confianza y aumenta el ruido operativo.\"",
                problems: {
                    title: "Los problemas de hoy",
                    items: [
                        { title: "Avisos que se pierden", desc: "Información perdida en chats o carteleras físicas que nadie lee" },
                        { title: "Ruido Operativo", desc: "Mensajes repetidos, llamadas constantes y malentendidos frecuentes" },
                        { title: "Sin Trazabilidad", desc: "Imposible saber quién leyó el mensaje o encontrar comunicados antiguos" }
                    ]
                },
                solutions: {
                    title: "Con DomoNow obtienes",
                    items: [
                        { title: "Comunicados Oficiales", desc: "Envía información certificada que llega directo a la App del residente" },
                        { title: "Alertas Inmediatas", desc: "Notificaciones push para emergencias o novedades críticas al instante" },
                        { title: "Visibilidad Total", desc: "Historial claro y accesible en todo momento para residentes y juntas" }
                    ]
                }
            },
            workflow: {
                tag: "Flujo de Trabajo",
                title: "Tu comunidad, paso a paso",
                steps: [
                    {
                        title: "Informas una sola vez",
                        desc: "La administración pública el comunicado desde la app, con un mensaje claro y oficial para la comunidad."
                    },
                    {
                        title: "Todos se enteran",
                        desc: "Los residentes reciben una notificación y saben exactamente dónde consultar la información, sin buscar en chats ni correos."
                    },
                    {
                        title: "Todo queda respaldado",
                        desc: "El comunicado permanece visible, ordenado y disponible, reduciendo reclamos y confusiones futuras."
                    }
                ]
            },
            footerCTA: {
                title: "transforma la comunicación en tu comunidad.",
                button: "Quiero agendar una Demo"
            }
        },
        en: {
            hero: {
                tag: "COMMUNICATIONS MODULE",
                subtitle: "Inform. Connect. Manage.",
                title: "Communicate with clarity.",
                problem: "When information is not clear, trust is broken.",
                solution: "centralizes official communication. No noise, no confusion.",
                cta: "See how it works",
                phone: {
                    admin: "Administration",
                    highlight: "Remember the general assembly this weekend.",
                    status: "Status",
                    read: "Message Read"
                }
            },
            useCases: {
                title: "Use cases",
                items: [
                    { category: "Maintenance", description: "Maintenance notices or service outages" },
                    { category: "Bylaws", description: "Changes in internal rules or bylaws" },
                    { category: "Assemblies", description: "Assembly communications and administrative decisions" },
                    { category: "News", description: "Important community news" }
                ]
            },
            howItWorks: {
                title: "See how it works",
                subtitle: "How it works",
                leftLabel: "Traditional software:",
                rightLabel: "With DomoNow:",
                items: [
                    {
                        problem: "WhatsApp is still used",
                        solution: "Communications wall"
                    },
                    {
                        problem: "Basic notices without segmentation",
                        solution: "Segmentation by towers or groups"
                    },
                    {
                        problem: "One maximum attachment",
                        solution: "Multiple files (photos, videos, PDFs)"
                    }
                ]
            },
            situation: {
                tag: "CURRENT SITUATION",
                title: "The problem communities face today.",
                quote: "\"When communication is not clear or traceable, trust is broken and operational noise increases.\"",
                problems: {
                    title: "Today's problems",
                    items: [
                        { title: "Lost notices", desc: "Information lost in chats or physical boards that nobody reads" },
                        { title: "Operational Noise", desc: "Repeated messages, constant calls, and frequent misunderstandings" },
                        { title: "No Traceability", desc: "Impossible to know who read the message or find old announcements" }
                    ]
                },
                solutions: {
                    title: "With DomoNow you get",
                    items: [
                        { title: "Official Announcements", desc: "Send certified information that goes directly to the resident's App" },
                        { title: "Immediate Alerts", desc: "Push notifications for emergencies or critical news instantly" },
                        { title: "Total Visibility", desc: "Clear and accessible history at all times for residents and boards" }
                    ]
                }
            },
            workflow: {
                tag: "Workflow",
                title: "Your community, step by step",
                steps: [
                    {
                        title: "Inform once",
                        desc: "The administration publishes the announcement from the app, with a clear and official message for the community."
                    },
                    {
                        title: "Everyone finds out",
                        desc: "Residents receive a notification and know exactly where to consult the information, without searching through chats or emails."
                    },
                    {
                        title: "Everything is backed up",
                        desc: "The announcement remains visible, orderly, and available, reducing future claims and confusion."
                    }
                ]
            },
            footerCTA: {
                title: "transforms communication in your community.",
                button: "I want to schedule a Demo"
            }
        }
    };

    const content = t[language];

    // Mockup Images representing Mobile UI (9:16 Aspect Ratio)
    const appScreens = [
        "/assets/modules/comunicaciones/carruselinterfaz/comunicaciones (1).jpg",
        "/assets/modules/comunicaciones/carruselinterfaz/comunicaciones (2).jpg",
        "/assets/modules/comunicaciones/carruselinterfaz/comunicaciones (3).jpg",
        "/assets/modules/comunicaciones/carruselinterfaz/comunicaciones (4).jpg",
        "/assets/modules/comunicaciones/carruselinterfaz/comunicaciones (5).jpg",
        "/assets/modules/comunicaciones/carruselinterfaz/comunicaciones (6).jpg",
    ];

    const useCaseIcons = [
        <AlertTriangle size={20} />,
        <FileText size={20} />,
        <Users size={20} />,
        <Bell size={20} />
    ];

    const useCaseImages = [
        "/assets/modules/comunicaciones/casos de uso/comunicaciones_avisos_compressed.jpg",
        "/assets/modules/comunicaciones/casos de uso/comunicaciones_decisiones_compressed.jpg",
        "/assets/modules/comunicaciones/casos de uso/comunicaciones_eventos_compressed.jpg",
        "/assets/modules/comunicaciones/casos de uso/comunicaciones_creaciones_compressed.png"
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
                                    <strong className="text-torre"><span className="domonow-gradient">DomoNow</span> {content.hero.solution}</strong>
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <Button size="lg" onClick={onOpenDemo} className="shadow-xl shadow-domo/20">
                                    {content.hero.cta}
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
                                            src="/assets/modules/comunicaciones/comunicacioneshero.png"
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
                                                    <span className="text-xs font-bold text-domo">{content.hero.phone.admin}</span>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-snug font-medium">
                                                    {content.hero.phone.highlight}
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
                                                <p className="text-tiny font-bold text-gray-400 uppercase">{content.hero.phone.status}</p>
                                                <p className="text-small font-bold text-torre">{content.hero.phone.read}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. USE CASES */}
            <section className="py-24 bg-[#F9F5FF]">
                <div className="container mx-auto px-6">
                    <h2 className="text-h2 font-bold text-center mb-16 text-torre">{content.useCases.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {content.useCases.items.map((item, index) => (
                            <div key={index} className="relative h-[500px] rounded-[2rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500">
                                <div className="absolute inset-0 w-full h-full">
                                    <img
                                        src={useCaseImages[index]}
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
                                        {useCaseIcons[index]}
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


            <HowItWorksSection
                title={content.howItWorks.title}
                subtitle={content.howItWorks.subtitle}
                leftLabel={content.howItWorks.leftLabel}
                rightLabel={content.howItWorks.rightLabel}
                imageSrc="/assets/modules/comunicaciones/comofunciona_comunicaciones.png"
                items={content.howItWorks.items}
            />

            {/* 2. PROBLEM VS SOLUTION */}
            <section className="py-24 bg-arquitectura relative z-20">
                <div className="container mx-auto px-6">

                    {/* HEADER SECTION (Top) */}
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <span className="h-px w-8 bg-red-400"></span>
                            <span className="text-red-400 font-bold tracking-widest uppercase text-tiny">
                                {content.situation.tag}
                            </span>
                            <span className="h-px w-8 bg-red-400"></span>
                        </div>

                        <h2 className="text-h2 font-bold text-torre mb-8 leading-tight">
                            {content.situation.title}
                        </h2>

                        <div className="relative inline-block">
                            <Quote className="absolute -top-4 -left-8 text-gray-200 w-10 h-10 transform -scale-x-100 z-0 opacity-50" />
                            <p className="relative z-10 text-h4 text-gray-500 leading-relaxed font-medium">
                                {content.situation.quote}
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
                                <span className="font-bold text-gray-400 uppercase tracking-widest text-[10px] md:text-tiny">{content.situation.problems.title}</span>
                            </div>

                            <div className="space-y-8 flex-grow">
                                {content.situation.problems.items.map((item, i) => (
                                    <div key={i} className="flex gap-5 items-start">
                                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 shrink-0 group-hover:bg-red-50 group-hover:text-red-400 transition-colors">
                                            {i === 0 ? <MessageSquare size={20} /> : i === 1 ? <Smartphone size={20} /> : <HelpCircle size={20} />}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-torre text-body mb-1">{item.title}</h4>
                                            <p className="text-small text-gray-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Solution Card */}
                        <div className="bg-[#F9F5FF] p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-domo/5 border border-purple-100 group hover:border-domo/30 transition-colors duration-300 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-8 h-8 rounded-full bg-domo/10 flex items-center justify-center text-domo">
                                    <Check size={16} strokeWidth={3} />
                                </div>
                                <span className="font-bold text-domo uppercase tracking-widest text-[10px] md:text-tiny">
                                    {language === 'es' ? (
                                        <>Con <span className="domonow-gradient">DomoNow</span> obtienes</>
                                    ) : (
                                        <>With <span className="domonow-gradient">DomoNow</span> you get</>
                                    )}
                                </span>
                            </div>

                            <div className="space-y-8 flex-grow">
                                {content.situation.solutions.items.map((item, i) => (
                                    <div key={i} className="flex gap-5 items-start">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-domo shrink-0 shadow-sm group-hover:bg-domo group-hover:text-white transition-colors">
                                            {i === 0 ? <Megaphone size={20} /> : i === 1 ? <Bell size={20} /> : <Eye size={20} />}
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

            {/* 3. STEP BY STEP PROCESS */}
            <section className="py-24 bg-arquitectura relative z-10">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-domo font-bold tracking-widest uppercase text-tiny mb-2 block">
                            {content.workflow.tag}
                        </span>
                        <h2 className="text-h2 font-bold text-torre">{content.workflow.title}</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {content.workflow.steps.map((step, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-transparent hover:border-domo hover:shadow-xl transition-all duration-300 group h-full flex flex-col items-center text-center">
                                <div className="flex justify-center mb-8">
                                    <div className="w-10 h-10 bg-gray-100 group-hover:bg-domo rounded-full flex items-center justify-center text-torre group-hover:text-white text-small font-bold transition-colors duration-300">{i + 1}</div>
                                </div>
                                <h3 className="text-h4 font-bold text-torre mb-3">{step.title}</h3>
                                <p className="text-body text-gray-500 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* 5. CTA BOTTOM */}
            <section className="py-24 bg-gradient-to-br from-white to-purple-100 text-torre text-center px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
                <div className="container mx-auto max-w-5xl relative z-10">
                    <h2 className="text-h3 font-bold mb-8 leading-tight text-torre">
                        {language === 'es' ? (
                            <>Conoce cómo <span className="domonow-gradient">DomoNow</span> {content.footerCTA.title}</>
                        ) : (
                            <>Learn how <span className="domonow-gradient">DomoNow</span> {content.footerCTA.title}</>
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
