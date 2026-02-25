import React, { useEffect, useState } from 'react';
import { toYouTubeEmbed } from '../../utils/youtube';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
import { HowItWorksSection } from '../HowItWorksSection';
import { ParticleBackground } from '../ParticleBackground';
import {
    Building2, Settings, Users, BarChart3,
    X, Check, Quote, Eye, Layers, Shield
} from 'lucide-react';

interface SuperAdminPageProps {
    onOpenDemo: () => void;
}

export const SuperAdminPage: React.FC<SuperAdminPageProps> = ({ onOpenDemo }) => {
    const { i18n } = useTranslation();
    const language = (i18n.language?.startsWith('en') ? 'en' : 'es') as 'es' | 'en';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const t = {
        es: {
            hero: {
                tag: "MÓDULO SÚPER ADMINISTRADOR",
                subtitle: "Administra múltiples propiedades simultáneamente",
                title: "\"47 mensajes con la misma pregunta\"",
                problemTitle: "¿Cuándo fue la última vez que terminaste el día tranquilo?",
                solution1: "Imagina terminar el día con todo bajo control.",
                solution2: "te da control total.",
                solution3: "Todo en un panel, sin estrés.",
                cta: "Conoce cómo funciona",
                properties: {
                    title: "Tus Propiedades",
                    count: "12 activas",
                    item1: "Torres del Parque",
                    item2: "Edificio Central",
                    more: "+10 más..."
                }
            },
            useCases: {
                title: "Casos de uso",
                items: [
                    { category: "Revisar el estado de todas las propiedades a primera hora", videoUrl: "" },
                    { category: "Recibir alerta de un vencimiento legal próximo", videoUrl: "" },
                    { category: "Aplicar el mismo comunicado en 5 edificios a la vez", videoUrl: "" },
                    { category: "Coordinar proveedores de mantenimiento", videoUrl: "" }
                ]
            },
            howItWorks: {
                title: "Conoce cómo funciona",
                subtitle: "Cómo funciona",
                leftLabel: "Software tradicional:",
                rightLabel: "Con DomoNow:",
                items: [
                    {
                        problem: "Módulo separado o inexistente",
                        solution: "Super Administrador incluido"
                    },
                    {
                        problem: "Revisas cada propiedad por separado",
                        solution: "Datos consolidados en tiempo real"
                    },
                    {
                        problem: "Sin herramientas de gestión masiva",
                        solution: "Usuarios y permisos personalizables"
                    },
                    {
                        problem: "Múltiples grupos de Whatsapp",
                        solution: "Comunicación simultánea a todas las propiedades"
                    }
                ]
            },
            situation: {
                tag: "SITUACIÓN ACTUAL",
                title: "Cuando todo depende de ti, necesitas una plataforma que piense contigo",
                quote: "\"Cada conjunto funciona por separado, la información financiera está dispersa y aún consolidas información en Excel.\"",
                problems: {
                    title: "Los problemas de hoy",
                    items: [
                        { title: "Propiedades Aisladas", desc: "Cada conjunto funciona por separado" },
                        { title: "Datos Fragmentados", desc: "Información financiera dispersa" },
                        { title: "Reportes Manuales", desc: "Aún consolidas información en Excel" }
                    ]
                },
                solutions: {
                    title: "obtienes",
                    items: [
                        { title: "Visión 360°", desc: "Dashboard de tus propiedades simultáneamente" },
                        { title: "Comparativas Instantáneas", desc: "Puedes ver que necesita realmente tu atención" },
                        { title: "Automatización inteligente", desc: "Alertas automáticas y control de cumplimiento" }
                    ]
                }
            },
            workflow: {
                tag: "Flujo de Trabajo",
                title: "Tu comunidad, paso a paso",
                steps: [
                    {
                        title: "Configuración inicial",
                        desc: "Registra todas las copropiedades que administras en el sistema."
                    },
                    {
                        title: "Controla desde un solo panel",
                        desc: "Accede a el dashboard con indicadores clave de todas tus copropiedades."
                    },
                    {
                        title: "Replica procesos",
                        desc: "Escala tu operación sin aumentar la carga administrativa."
                    }
                ]
            },
            footerCTA: {
                title1: "Conoce cómo",
                title2: "transforma la gestión multi-propiedad.",
                button: "Quiero agendar una Demo"
            }
        },
        en: {
            hero: {
                tag: "SUPER ADMIN MODULE",
                subtitle: "Manage multiple properties simultaneously",
                title: "\"47 messages with the same question\"",
                problemTitle: "When was the last time you ended the day peaceful?",
                solution1: "Imagine ending the day with everything under control.",
                solution2: "gives you total control.",
                solution3: "Everything in one panel, without stress.",
                cta: "See how it works",
                properties: {
                    title: "Your Properties",
                    count: "12 active",
                    item1: "Park Towers",
                    item2: "Central Building",
                    more: "+10 more..."
                }
            },
            useCases: {
                title: "Use cases",
                items: [
                    { category: "Review the status of all properties first thing in the morning", videoUrl: "" },
                    { category: "Receive alert of an upcoming legal expiration", videoUrl: "" },
                    { category: "Send the same announcement to 5 buildings at once", videoUrl: "" },
                    { category: "Coordinate maintenance providers", videoUrl: "" }
                ]
            },
            howItWorks: {
                title: "See how it works",
                subtitle: "How it works",
                leftLabel: "Traditional software:",
                rightLabel: "With DomoNow:",
                items: [
                    {
                        problem: "Separate or non-existent module",
                        solution: "Super Admin included"
                    },
                    {
                        problem: "You check each property separately",
                        solution: "Consolidated real-time data"
                    },
                    {
                        problem: "No mass management tools",
                        solution: "Customizable users and permissions"
                    },
                    {
                        problem: "Multiple WhatsApp groups",
                        solution: "Simultaneous communication to all properties"
                    }
                ]
            },
            situation: {
                tag: "CURRENT SITUATION",
                title: "When everything depends on you, you need a platform that thinks with you",
                quote: "\"Each complex works separately, financial information is scattered, and you still consolidate info in Excel.\"",
                problems: {
                    title: "Today's problems",
                    items: [
                        { title: "Isolated Properties", desc: "Each complex works separately" },
                        { title: "Fragmented Data", desc: "Financial information is scattered" },
                        { title: "Manual Reports", desc: "You still consolidate info in Excel" }
                    ]
                },
                solutions: {
                    title: "you get",
                    items: [
                        { title: "360° Vision", desc: "Dashboard of your properties simultaneously" },
                        { title: "Instant Comparisons", desc: "You can see what really needs your attention" },
                        { title: "Intelligent Automation", desc: "Automatic alerts and compliance control" }
                    ]
                }
            },
            workflow: {
                tag: "Workflow",
                title: "Your community, step by step",
                steps: [
                    {
                        title: "Initial configuration",
                        desc: "Register all the co-properties you manage in the system."
                    },
                    {
                        title: "Control from one panel",
                        desc: "Access the dashboard with key indicators of all your co-properties."
                    },
                    {
                        title: "Replicate processes",
                        desc: "Scale your operation without increasing administrative burden."
                    }
                ]
            },
            footerCTA: {
                title1: "Learn how",
                title2: "transforms multi-property management.",
                button: "I want to schedule a Demo"
            }
        }
    };

    const content = t[language];
    const [activePopup, setActivePopup] = useState<number | null>(null);

    const useCaseIcons = [
        <Building2 size={20} />,
        <Users size={20} />,
        <BarChart3 size={20} />,
        <Settings size={20} />
    ];

    const useCaseImages = [
        "/assets/modules/SUPER ADMIN/CÓMO FUNCIONA.png",
        "/assets/modules/SUPER ADMIN/CASO DE USO 2.png",
        "/assets/modules/SUPER ADMIN/CASO DE USO 3.png",
        "/assets/modules/SUPER ADMIN/CASO DE USO 4.png"
    ];

    return (
        <div className="pt-20 bg-white font-sans text-torre">

            {/* 1. HERO SECTION */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-domo/5 via-white to-purple-50">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-domo/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-horizonte/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

                        {/* Left: Text Content */}
                        <div className="lg:w-5/12 relative z-20">
                            <div className="flex items-center gap-3 mb-0">
                                <span className="w-9 h-9 bg-domo rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">SA</span>
                                <span className="text-base font-bold tracking-widest uppercase text-domo">{content.hero.tag}</span>
                            </div>
                            <p className="text-small text-gray-400 italic mb-4 ml-12">{content.hero.subtitle}</p>
                            <h1 className="text-h2 md:text-h1 font-bold leading-tight mb-6 text-torre">
                                {content.hero.title}
                            </h1>
                            <div className="prose text-lead text-gray-500 mb-8 leading-relaxed">
                                <p className="mb-4 text-torre font-bold">
                                    {content.hero.problemTitle}
                                </p>
                                <p className="mb-4">
                                    {content.hero.solution1} <strong className="text-torre"><span className="domonow-gradient">DomoNow</span> {content.hero.solution2}</strong> {content.hero.solution3}
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <Button size="lg" onClick={onOpenDemo} className="shadow-xl shadow-domo/20">
                                    {content.hero.cta}
                                </Button>
                            </div>
                        </div>

                        {/* Right: Visual Composition */}
                        <div className="lg:w-7/12 relative w-full mt-12 lg:mt-0">
                            <div className="relative w-full max-w-[850px] ml-auto">

                                {/* BACK LAYER: Dashboard Image */}
                                <div className="relative z-0 ml-8 md:ml-24 transform rotate-1 hover:rotate-0 transition-all duration-700">
                                    <div className="rounded-2xl overflow-hidden shadow-2xl bg-white aspect-video">
                                        <img
                                            src="/assets/modules/SUPER ADMIN/hero_superadmin.png"
                                            alt="Panel de Super Administrador"
                                            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                                        />
                                        {/* Overlay Gradient for depth */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                                    </div>
                                </div>

                                {/* FRONT LAYER: Multi-property Animation */}
                                <div className="absolute bottom-[-20%] right-0 md:-right-4 z-10 w-[280px] md:w-[340px]">
                                    <div className="bg-white p-5 rounded-[2.5rem] shadow-[0_30px_80px_rgba(130,10,209,0.25)] border border-gray-100 transform rotate-2 hover:rotate-0 transition-all duration-500">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 bg-gradient-to-br from-domo to-purple-600 rounded-xl flex items-center justify-center text-white">
                                                <Layers size={20} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-torre text-sm">{content.hero.properties.title}</p>
                                                <p className="text-xs text-gray-400">{content.hero.properties.count}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                                                <div className="flex items-center gap-2">
                                                    <Building2 size={16} className="text-green-600" />
                                                    <span className="text-sm font-medium">{content.hero.properties.item1}</span>
                                                </div>
                                                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">OK</span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl">
                                                <div className="flex items-center gap-2">
                                                    <Building2 size={16} className="text-domo" />
                                                    <span className="text-sm font-medium">{content.hero.properties.item2}</span>
                                                </div>
                                                <span className="text-xs bg-purple-100 text-domo px-2 py-1 rounded-full">OK</span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                                <div className="flex items-center gap-2">
                                                    <Building2 size={16} className="text-gray-400" />
                                                    <span className="text-sm font-medium">{content.hero.properties.more}</span>
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
                                <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
                                    <button
                                        onClick={() => setActivePopup(index)}
                                        className="btn-pulse-glow bg-domo text-white font-bold px-6 py-2.5 rounded-full text-sm hover:bg-purple-800 transition-colors cursor-pointer shadow-lg"
                                    >
                                        {language === 'es' ? 'Ver más' : 'See more'}
                                    </button>
                                </div>
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
                variant="superadmin"
                imageSrc="/assets/modules/SUPER ADMIN/CASO DE USO 1.png"
                title={content.howItWorks.title}
                subtitle={content.howItWorks.subtitle}
                leftLabel={content.howItWorks.leftLabel}
                rightLabel={content.howItWorks.rightLabel}
                items={content.howItWorks.items}
            />

            {/* 2. PROBLEM VS SOLUTION */}
            <section className="py-24 bg-arquitectura relative z-20">
                <div className="container mx-auto px-6">

                    {/* HEADER SECTION */}
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

                    {/* CARDS GRID */}
                    <div className="grid lg:grid-cols-2 divide-x divide-gray-200 items-stretch">
                        {/* Problem */}
                        <div className="pr-8 lg:pr-12 flex flex-col h-full">
                            <img src="/assets/problemashoy.png" alt="" className="w-full max-w-xs mx-auto mb-8 rounded-2xl" />
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white">
                                    <X size={16} strokeWidth={3} />
                                </div>
                                <span className="font-bold text-gray-400 uppercase tracking-widest text-[10px] md:text-tiny">{content.situation.problems.title}</span>
                            </div>

                            <div className="space-y-8 flex-grow">
                                {content.situation.problems.items.map((item, i) => (
                                    <div key={i} className="flex gap-5 items-start">
                                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white shrink-0">
                                            <X size={20} />
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
                                <div className="w-8 h-8 rounded-full bg-domo flex items-center justify-center text-white">
                                    <Check size={16} strokeWidth={3} />
                                </div>
                                <span className="font-bold text-domo uppercase tracking-widest text-[10px] md:text-tiny">
                                    {language === 'es' ? (
                                        <>Con <span className="domonow-gradient">DomoNow</span> {content.situation.solutions.title}</>
                                    ) : (
                                        <>With <span className="domonow-gradient">DomoNow</span> {content.situation.solutions.title}</>
                                    )}
                                </span>
                            </div>

                            <div className="space-y-8 flex-grow">
                                {content.situation.solutions.items.map((item, i) => (
                                    <div key={i} className="flex gap-5 items-start">
                                        <div className="w-12 h-12 bg-domo rounded-full flex items-center justify-center text-white shrink-0">
                                            <Check size={20} />
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
            <section className="py-24 bg-gray-50 relative z-10">
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
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
                <div className="container mx-auto max-w-5xl relative z-10">
                    <h2 className="text-h3 font-bold mb-8 leading-tight text-torre">
                        {content.footerCTA.title1} <span className="domonow-gradient">DomoNow</span> {content.footerCTA.title2}
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
