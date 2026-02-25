import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';
import { ImageCarousel } from './ImageCarousel';
import {
    Building2, Store, Blinds,
    Check, X, ArrowRight,
    AlertCircle, TrendingUp, ArrowDown,
    Users, Clock, FileText, ShieldAlert,
    Wrench, Briefcase, ClipboardList, History,
    LayoutGrid, MessageSquare, DollarSign
} from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface PropertyTypesPageProps {
    onOpenDemo: (type?: string) => void;
}

export const PropertyTypesPage: React.FC<PropertyTypesPageProps> = ({ onOpenDemo }) => {
    const { i18n } = useTranslation();
    const location = useLocation();

    const language = (i18n.language?.startsWith('en') ? 'en' : 'es') as 'es' | 'en';

    // Scroll handling for hashes
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.slice(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    const t = {
        es: {
            intro: {
                tag: "Segmentación Inteligente",
                title: "Tipos de Propiedades",
                desc: "DomoNow no es una talla única. Hemos diseñado experiencias específicas para la naturaleza única de cada comunidad.",
                residencial: "01. Residencial",
                comercial: "02. Comercial",
                mixta: "03. Mixta"
            },
            residential: {
                title: "Propiedad Residencial",
                tag: "01",
                miniDesc: "Gestión integral para la tranquilidad del hogar y la comunidad.",
                fullDesc: "Centraliza la operación diaria de conjuntos y edificios residenciales, desde la comunicación con los residentes hasta la gestión de accesos, solicitudes y pagos, enfocándose en la convivencia.",
                challenges: "Desafíos Actuales",
                challengeList: [
                    "Operaciones manuales y dispersas.",
                    "Comunicación deficiente: Avisos que no llegan.",
                    "Morosidad y finanzas poco claras.",
                    "Seguimiento de incidencias limitados."
                ],
                solution: "Solución DomoNow",
                solutionList: [
                    "Comunicados oficiales.",
                    "Registro de visitantes.",
                    "Reservas de áreas comunes.",
                    "Gestión de PQRS.",
                    "Gestión financiera.",
                    "Votaciones digitales."
                ],
                cta: "Solicitar Demo Residencial",
                deepDiveTitle: "DomoNow: Diseñado para los desafíos únicos de comunidades residenciales",
                deepDiveDesc: "Herramientas especializadas para mejorar la convivencia, la seguridad y la valorización de su propiedad.",
                matrix: [
                    {
                        problem: "Operaciones manuales y dispersas (pagos, quejas, reservas).",
                        solution: "Plataforma integrada para todos los procesos clave.",
                    },
                    {
                        problem: "Comunicación deficiente y desconfianza.",
                        solution: "Comunicación unificada y transparente. Canal único.",
                    },
                    {
                        problem: "Morosidad y finanzas poco claras.",
                        solution: "Cobranza eficiente y finanzas claras.",
                    },
                    {
                        problem: "Seguimiento de incidencias limitado.",
                        solution: "Gestión centralizada de PQR y mantenimiento.",
                    }
                ],
                optimizationTitle: "Optimizamos la gestión de operaciones de propiedades residenciales",
                features: [
                    "Comunicados oficiales, avisos y novedades.",
                    "Registro de visitantes y pases digitales.",
                    "Reservas de áreas comunes.",
                    "Registro, asignación y seguimiento de PQRS.",
                    "Gestión financiera transparente.",
                    "Votaciones y asambleas digitales.",
                    "Gestión documental.",
                    "Alertas de emergencia.",
                    "Eventos y campañas internas."
                ],
                agendaCTA: "Agenda una Demo Residencial"
            },
            commercial: {
                title: "Propiedad Comercial",
                tag: "02",
                miniDesc: "Gestión de alto rendimiento para entornos corporativos exigentes.",
                fullDesc: "Optimiza la gestión centralizando accesos, comunicación y operación diaria, incluso en entornos con múltiples locales y usuarios de alto tráfico.",
                challenges: "Fricción Actual",
                challengeList: [
                    "Seguimiento desordenado de proveedores.",
                    "Múltiples arrendatarios con reglas distintas.",
                    "Incidentes operativos que afectan clientes.",
                    "Falta de trazabilidad en accesos."
                ],
                solution: "Optimización DomoNow",
                solutionList: [
                    "Comunicación oficial.",
                    "Control de accesos.",
                    "Gestión de solicitudes.",
                    "Reservas de salas.",
                    "Gestión financiera.",
                    "Alertas de emergencia."
                ],
                cta: "Solicitar Demo Comercial",
                deepDiveTitle: "DomoNow: Diseñado para los desafíos únicos de comunidades comerciales",
                deepDiveDesc: "Herramientas especializadas para la gestión de proveedores, múltiples arrendatarios y operación de alto tráfico.",
                matrix: [
                    {
                        problem: "Seguimiento desordenado de proveedor y mantenimientos críticos.",
                        solution: "Órdenes de trabajo, proveedores y cronogramas unificados.",
                    },
                    {
                        problem: "Múltiples arrendatarios con reglas distintas.",
                        solution: "Comunicación y gestión segmentada por local u oficina.",
                    },
                    {
                        problem: "Incidentes operativos que afectan la experiencia del cliente.",
                        solution: "Gestión de solicitudes con responsables y seguimiento claro.",
                    },
                    {
                        problem: "Falta de trazabilidad en accesos y operaciones.",
                        solution: "Registro centralizado de incidentes y reportes para control y auditoría.",
                    }
                ],
                optimizationTitle: "Optimizamos la gestión de operaciones de propiedades comerciales",
                features: [
                    "Comunicación oficial.",
                    "Control de accesos de personal con registro y trazabilidad.",
                    "Gestión de solicitudes operativas y mantenimiento.",
                    "Reservas y control de uso de salas, parqueaderos y espacios compartidos.",
                    "Gestión financiera clara entre administración y arrendatarios.",
                    "Documentos, contratos y reglamentos organizados."
                ],
                agendaCTA: "Agenda una Demo Comercial"
            },
            mixed: {
                title: "Propiedad Mixta",
                tag: "03",
                miniDesc: "El equilibrio perfecto entre lo residencial y lo comercial.",
                fullDesc: "Gestionar una propiedad mixta implica equilibrar dinámicas muy distintas en un mismo espacio. DomoNow centraliza la operación para que lo residencial y lo comercial convivan con reglas claras.",
                challenges: "Desafíos de Convivencia",
                challengeList: [
                    "Residentes y clientes sin control unificado.",
                    "Horarios distintos entre zonas.",
                    "Incidentes operativos que generan roces.",
                    "Falta de control en accesos y novedades."
                ],
                solution: "Equilibrio DomoNow",
                solutionList: [
                    "Comunicación segmentada.",
                    "Control de accesos diferenciado.",
                    "Gestión unificada de solicitudes.",
                    "Uso controlado de espacios.",
                    "Reglamentos disponibles.",
                    "Alertas de emergencia."
                ],
                cta: "Solicitar Demo Mixta",
                deepDiveTitle: "DomoNow: Diseñado para los desafíos únicos de comunidades mixtas",
                deepDiveDesc: "Comprendemos que la convivencia entre zonas residenciales y comerciales requiere reglas claras y herramientas precisas.",
                matrix: [
                    {
                        problem: "Flujo constante de residentes, clientes y proveedores sin un control unificado.",
                        solution: "Control de accesos diferenciado por tipo de usuario y zona.",
                    },
                    {
                        problem: "Reglas y horarios distintos entre zonas residenciales y comerciales.",
                        solution: "Comunicación segmentada según uso residencial o comercial.",
                    },
                    {
                        problem: "Incidentes operativos que generan conflictos entre usos y usuarios.",
                        solution: "Registro y seguimiento centralizado de incidentes y solicitudes.",
                    },
                    {
                        problem: "Falta de trazabilidad en accesos, solicitudes y novedades.",
                        solution: "Historial claro de accesos, operaciones y decisiones.",
                    }
                ],
                optimizationTitle: "Optimizamos la gestión de operaciones de propiedades mixtas",
                features: [
                    "Comunicación oficial para residentes y comercios.",
                    "Control de accesos diferenciado, con registro y trazabilidad.",
                    "Gestión unificada de solicitudes y mantenimiento.",
                    "Reservas y uso controlado de espacios compartidos.",
                    "Documentos y reglamentos organizados, siempre disponibles.",
                    "Alertas de emergencia con visibilidad para la administración."
                ],
                agendaCTA: "Agenda una Demo Especializada"
            },
            footerCTA: {
                title: "¿Dudas sobre su configuración?",
                desc: "Nuestros expertos le ayudarán a definir el plan perfecto.",
                button: "Hablar con un experto"
            }
        },
        en: {
            intro: {
                tag: "Intelligent Segmentation",
                title: "Property Types",
                desc: "DomoNow is not a one-size-fits-all. We have designed specific experiences for the unique nature of each community.",
                residencial: "01. Residential",
                comercial: "02. Commercial",
                mixta: "03. Mixed"
            },
            residential: {
                title: "Residential Property",
                tag: "01",
                miniDesc: "Integral management for home and community peace of mind.",
                fullDesc: "Centralizes the daily operation of residential complexes and buildings, from communication with residents to access management, requests, and payments, focusing on coexistence.",
                challenges: "Current Challenges",
                challengeList: [
                    "Manual and scattered operations.",
                    "Poor communication: Notices that don't arrive.",
                    "Delinquency and unclear finances.",
                    "Limited incident tracking."
                ],
                solution: "DomoNow Solution",
                solutionList: [
                    "Official announcements.",
                    "Visitor registration.",
                    "Common area reservations.",
                    "PQRS management.",
                    "Financial management.",
                    "Digital voting."
                ],
                cta: "Request Residential Demo",
                deepDiveTitle: "DomoNow: Designed for the unique challenges of residential communities",
                deepDiveDesc: "Specialized tools to improve coexistence, security, and the value of your property.",
                matrix: [
                    {
                        problem: "Manual and scattered operations (payments, complaints, bookings).",
                        solution: "Integrated platform for all key processes.",
                    },
                    {
                        problem: "Poor communication and distrust.",
                        solution: "Unified and transparent communication. Single channel.",
                    },
                    {
                        problem: "Delinquency and unclear finances.",
                        solution: "Efficient collection and clear finances.",
                    },
                    {
                        problem: "Limited incident tracking.",
                        solution: "Centralized PQR and maintenance management.",
                    }
                ],
                optimizationTitle: "We optimize operations management for residential properties",
                features: [
                    "Official announcements, notices, and updates.",
                    "Visitor registration and digital passes.",
                    "Common area reservations.",
                    "Registration, assignment, and tracking of PQRS.",
                    "Transparent financial management.",
                    "Digital voting and assemblies.",
                    "Document management.",
                    "Emergency alerts.",
                    "Internal events and campaigns."
                ],
                agendaCTA: "Schedule a Residential Demo"
            },
            commercial: {
                title: "Commercial Property",
                tag: "02",
                miniDesc: "High-performance management for demanding corporate environments.",
                fullDesc: "Optimizes management by centralizing access, communication, and daily operations, even in environments with multiple locations and high-traffic users.",
                challenges: "Current Friction",
                challengeList: [
                    "Disorganized supplier tracking.",
                    "Multiple tenants with different rules.",
                    "Operational incidents affecting customers.",
                    "Lack of traceability in access."
                ],
                solution: "DomoNow Optimization",
                solutionList: [
                    "Official communication.",
                    "Access control.",
                    "Request management.",
                    "Room reservations.",
                    "Financial management.",
                    "Emergency alerts."
                ],
                cta: "Request Commercial Demo",
                deepDiveTitle: "DomoNow: Designed for the unique challenges of commercial communities",
                deepDiveDesc: "Specialized tools for supplier management, multiple tenants, and high-traffic operation.",
                matrix: [
                    {
                        problem: "Disorganized supplier tracking and critical maintenance.",
                        solution: "Unified work orders, suppliers, and schedules.",
                    },
                    {
                        problem: "Multiple tenants with different rules.",
                        solution: "Segmented communication and management by store or office.",
                    },
                    {
                        problem: "Operational incidents affecting customer experience.",
                        solution: "Request management with clear responsibilities and tracking.",
                    },
                    {
                        problem: "Lack of traceability in access and operations.",
                        solution: "Centralized incident logs and reports for control and audit.",
                    }
                ],
                optimizationTitle: "We optimize operations management for commercial properties",
                features: [
                    "Official communication.",
                    "Staff access control with registration and traceability.",
                    "Operational requests and maintenance management.",
                    "Reservations and usage control of rooms, parking, and shared spaces.",
                    "Clear financial management between administration and tenants.",
                    "Organized documents, contracts, and regulations."
                ],
                agendaCTA: "Schedule a Commercial Demo"
            },
            mixed: {
                title: "Mixed Property",
                tag: "03",
                miniDesc: "The perfect balance between residential and commercial.",
                fullDesc: "Managing a mixed property involves balancing very different dynamics in the same space. DomoNow centralizes the operation so that residential and commercial coexist with clear rules.",
                challenges: "Coexistence Challenges",
                challengeList: [
                    "Residents and customers without unified control.",
                    "Different schedules between zones.",
                    "Operational incidents that cause friction.",
                    "Lack of control in access and updates."
                ],
                solution: "DomoNow Balance",
                solutionList: [
                    "Segmented communication.",
                    "Differentiated access control.",
                    "Unified request management.",
                    "Controlled use of spaces.",
                    "Available regulations.",
                    "Emergency alerts."
                ],
                cta: "Request Mixed Demo",
                deepDiveTitle: "DomoNow: Designed for the unique challenges of mixed communities",
                deepDiveDesc: "We understand that coexistence between residential and commercial areas requires clear rules and precise tools.",
                matrix: [
                    {
                        problem: "Constant flow of residents, customers, and suppliers without unified control.",
                        solution: "Access control differentiated by user type and zone.",
                    },
                    {
                        problem: "Different rules and schedules between residential and commercial zones.",
                        solution: "Segmented communication according to residential or commercial use.",
                    },
                    {
                        problem: "Operational incidents that generate conflicts between uses and users.",
                        solution: "Centralized logging and tracking of incidents and requests.",
                    },
                    {
                        problem: "Lack of traceability in access, requests, and news.",
                        solution: "Clear history of access, operations, and decisions.",
                    }
                ],
                optimizationTitle: "We optimize operations management for mixed properties",
                features: [
                    "Official communication for residents and businesses.",
                    "Differentiated access control, with registration and traceability.",
                    "Unified request and maintenance management.",
                    "Reservations and controlled use of shared spaces.",
                    "Organized documents and regulations, always available.",
                    "Emergency alerts with visibility for administration."
                ],
                agendaCTA: "Schedule a Specialized Demo"
            },
            footerCTA: {
                title: "Questions about your configuration?",
                desc: "Our experts will help you define the perfect plan.",
                button: "Talk to an expert"
            }
        }
    };

    const content = t[language];

    // Images Collections
    const residencialImages = [
        "/assets/property-types/residential/RESIDENCIAL1_compressed.png",
        "/assets/property-types/residential/RESIDENCIAL2_compressed.png",
        "/assets/property-types/residential/RESIDENCIAL3_compressed.png",
        "/assets/property-types/residential/RESIDENCIAL4_compressed.png",
        "/assets/property-types/residential/RESIDENCIAL5_compressed.png"
    ];

    const comercialImages = [
        "/assets/property-types/commercial/COMERCIAL1_compressed.png",
        "/assets/property-types/commercial/COMERCIAL2_compressed.png",
        "/assets/property-types/commercial/COMERCIAL3_compressed.png",
        "/assets/property-types/commercial/COMERCIAL4_compressed.png",
        "/assets/property-types/commercial/COMERCIAL5_compressed.png"
    ];

    const mixtaImages = [
        "/assets/property-types/mixed/MIXTA1_compressed.png",
        "/assets/property-types/mixed/MIXTA2_compressed.png",
        "/assets/property-types/mixed/MIXTA3_compressed.png",
        "/assets/property-types/mixed/MIXTA4_compressed.jpg",
        "/assets/property-types/mixed/MIXTA5_compressed.jpg"
    ];

    // ================= DATA FOR RESIDENTIAL DEEP DIVE =================
    const residentialMatrixIcons = [
        <LayoutGrid size={20} />,
        <MessageSquare size={20} />,
        <DollarSign size={20} />,
        <ClipboardList size={20} />
    ];

    // ================= DATA FOR COMMERCIAL DEEP DIVE =================
    const commercialMatrixIcons = [
        <Wrench size={20} />,
        <Store size={20} />,
        <ClipboardList size={20} />,
        <History size={20} />
    ];

    // ================= DATA FOR MIXED DEEP DIVE =================
    const mixedMatrixIcons = [
        <Users size={20} />,
        <Clock size={20} />,
        <ShieldAlert size={20} />,
        <FileText size={20} />
    ];

    return (
        <div className="bg-white min-h-screen pt-20 font-sans">

            {/* Intro Minimalista */}
            <div className="container mx-auto px-6 py-20 text-center">
                <span className="text-domo font-bold tracking-widest uppercase text-tiny mb-4 block">
                    {content.intro.tag}
                </span>
                <h1 className="text-h2 md:text-display font-bold text-torre leading-none mb-6">
                    {content.intro.title}
                </h1>
                <p className="text-lead text-gray-500 max-w-2xl mx-auto">
                    <span className="domonow-gradient">DomoNow</span> {content.intro.desc.replace('DomoNow ', '')}
                </p>

                {/* Quick Jump Links */}
                <div className="flex justify-center gap-8 mt-12 text-small font-bold text-torre">
                    <button onClick={() => document.getElementById('residencial')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-domo flex items-center gap-2 border-b-2 border-transparent hover:border-domo pb-1 transition-all">
                        {content.intro.residencial} <ArrowDown size={14} />
                    </button>
                    <button onClick={() => document.getElementById('comercial')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-domo flex items-center gap-2 border-b-2 border-transparent hover:border-domo pb-1 transition-all">
                        {content.intro.comercial} <ArrowDown size={14} />
                    </button>
                    <button onClick={() => document.getElementById('mixta')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-domo flex items-center gap-2 border-b-2 border-transparent hover:border-domo pb-1 transition-all">
                        {content.intro.mixta} <ArrowDown size={14} />
                    </button>
                </div>
            </div>

            {/* =========================================================================
          01. RESIDENCIAL
         ========================================================================= */}
            <section id="residencial" className="py-24 border-t border-gray-100 bg-white">
                <div className="container mx-auto px-6">

                    <div className="flex flex-col lg:flex-row gap-16 mb-16 items-center">
                        <div className="lg:w-1/3">
                            <div className="text-gray-300 font-mono text-xl mb-4">{content.residential.tag}</div>
                            <h2 className="text-h1 font-bold text-torre leading-none mb-6">{content.residential.title}</h2>
                            <p className="text-lead text-gray-500">
                                {content.residential.miniDesc}
                            </p>
                        </div>
                        <div className="lg:w-2/3 w-full flex flex-col justify-center">
                            <p className="text-body text-gray-600 leading-relaxed border-l-2 border-domo pl-6 mb-8">
                                {content.residential.fullDesc}
                            </p>
                            <ImageCarousel images={residencialImages} heightClass="h-48 md:h-56" />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-0 border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-xl">
                        <div className="p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100 bg-red-50/30">
                            <h3 className="text-tiny font-bold text-red-400 mb-8 uppercase tracking-widest flex items-center gap-2">
                                <AlertCircle size={16} /> {content.residential.challenges}
                            </h3>
                            <ul className="space-y-6">
                                {content.residential.challengeList.map((prob, i) => (
                                    <li key={i} className="flex gap-4 group">
                                        <X className="text-red-400/70 group-hover:text-red-500 shrink-0 mt-1 transition-colors" size={20} />
                                        <span className="text-gray-600 group-hover:text-gray-800 transition-colors leading-snug">{prob}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-10 lg:p-12 bg-purple-50/30">
                            <h3 className="text-tiny font-bold text-domo mb-8 uppercase tracking-widest flex items-center gap-2">
                                <TrendingUp size={16} /> {content.residential.solution.split(' ')[0]} <span className="domonow-gradient">DomoNow</span>
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-6">
                                {content.residential.solutionList.map((sol, i) => (
                                    <li key={i} className="flex gap-3 list-none group">
                                        <Check className="text-domo shrink-0 mt-1" size={20} />
                                        <span className="text-gray-700 font-medium group-hover:text-domo transition-colors">{sol}</span>
                                    </li>
                                ))}
                            </div>
                            <div className="mt-12 pt-8 border-t border-purple-100">
                                <Button className="w-full sm:w-auto font-bold px-10 py-4 shadow-lg shadow-domo/10" onClick={() => onOpenDemo('residencial')}>
                                    {content.residential.cta}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================================
          RESIDENTIAL DEEP DIVE SECTION
         ========================================================================= */}
            <section className="py-24 bg-arquitectura border-t border-gray-200">
                <div className="container mx-auto px-6">

                    {/* Header */}
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h2 className="text-h2 font-bold text-torre leading-tight mb-4">
                            <span className="text-domo"><span className="domonow-gradient">DomoNow</span>:</span> {content.residential.deepDiveTitle.replace('DomoNow: ', '')}
                        </h2>
                        <p className="text-lead text-gray-500">
                            {content.residential.deepDiveDesc}
                        </p>
                    </div>

                    {/* Comparison Matrix - Residential */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                        {content.residential.matrix.map((item, index) => (
                            <div key={index} className="flex flex-col h-full">
                                {/* Top: Problem */}
                                <div className="bg-white p-6 rounded-t-[2rem] border-b border-dashed border-gray-200 flex-1 relative group">
                                    <div className="mb-4 text-red-400">
                                        <X size={24} />
                                    </div>
                                    <p className="text-body text-gray-600 font-medium leading-snug">
                                        {item.problem}
                                    </p>
                                </div>

                                {/* Connector Visual */}
                                <div className="h-4 bg-gray-100 relative">
                                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-4 border-gray-100"></div>
                                </div>

                                {/* Bottom: Solution */}
                                <div className="bg-white p-6 rounded-b-[2rem] shadow-lg flex-1 group">
                                    <div className="mb-4 text-domo">
                                        <Check size={24} />
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <div className="text-domo shrink-0 mt-1">
                                            {residentialMatrixIcons[index]}
                                        </div>
                                        <p className="text-body text-torre font-bold leading-snug">
                                            {item.solution}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Feature Block: Residential Optimization */}
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:pl-20">

                        {/* Left: 2 Vertical Images */}
                        <div className="lg:w-1/2 w-full">
                            <div className="grid grid-cols-2 gap-4 md:gap-6">
                                <img
                                    src="/assets/property-types/optimization/optimizacion (6).jpg"
                                    className="w-full h-[400px] md:h-[520px] object-cover rounded-[2.5rem] shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                                    alt="Management 1"
                                />
                                <img
                                    src="/assets/property-types/optimization/optimizacion (2).jpg"
                                    className="w-full h-[400px] md:h-[520px] object-cover rounded-[2.5rem] shadow-2xl hover:scale-[1.02] transition-transform duration-500 mt-8 md:mt-12"
                                    alt="Management 2"
                                />
                            </div>
                        </div>

                        {/* Right: List */}
                        <div className="lg:w-1/2 w-full">
                            <h3 className="text-h2 font-bold text-torre mb-8 leading-tight">
                                {content.residential.optimizationTitle}
                            </h3>
                            <ul className="space-y-6">
                                {content.residential.features.map((feature, i) => (
                                    <li key={i} className="flex gap-4 items-start group">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-domo shrink-0 mt-1 transition-colors group-hover:bg-domo group-hover:text-white shadow-sm border border-gray-100">
                                            <Check size={16} strokeWidth={3} />
                                        </div>
                                        <span className="text-body text-gray-600 font-medium leading-snug group-hover:text-torre transition-colors">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10">
                                <Button onClick={() => onOpenDemo('residencial')} size="lg" className="shadow-lg shadow-domo/10">
                                    {content.residential.agendaCTA}
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* =========================================================================
          02. COMERCIAL
         ========================================================================= */}
            <section id="comercial" className="py-24 border-t border-purple-100 bg-[#F9F5FF]">
                <div className="container mx-auto px-6">

                    <div className="flex flex-col lg:flex-row gap-16 mb-16 items-center">
                        <div className="lg:w-1/3">
                            <div className="text-domo/60 font-mono text-xl mb-4">{content.commercial.tag}</div>
                            <h2 className="text-h1 font-bold text-torre leading-none mb-6">{content.commercial.title}</h2>
                            <p className="text-lead text-gray-500">
                                {content.commercial.miniDesc}
                            </p>
                        </div>
                        <div className="lg:w-2/3 w-full flex flex-col justify-center">
                            <p className="text-body text-gray-600 leading-relaxed border-l-2 border-domo pl-6 mb-8">
                                {content.commercial.fullDesc}
                            </p>
                            <ImageCarousel images={comercialImages} heightClass="h-48 md:h-56" />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-0 border border-purple-100 rounded-[2.5rem] overflow-hidden shadow-xl bg-white">
                        <div className="p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100 bg-red-50/30">
                            <h3 className="text-tiny font-bold text-red-400 mb-8 uppercase tracking-widest flex items-center gap-2">
                                <AlertCircle size={16} /> {content.commercial.challenges}
                            </h3>
                            <ul className="space-y-6">
                                {content.commercial.challengeList.map((prob, i) => (
                                    <li key={i} className="flex gap-4 group">
                                        <X className="text-red-400/70 group-hover:text-red-500 shrink-0 mt-1 transition-colors" size={20} />
                                        <span className="text-gray-600 group-hover:text-gray-800 transition-colors leading-snug">{prob}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-10 lg:p-12 bg-purple-50/30">
                            <h3 className="text-tiny font-bold text-domo mb-8 uppercase tracking-widest flex items-center gap-2">
                                <TrendingUp size={16} /> {content.commercial.solution.split(' ')[0]} <span className="domonow-gradient">DomoNow</span>
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-6">
                                {content.commercial.solutionList.map((sol, i) => (
                                    <li key={i} className="flex gap-3 list-none group">
                                        <Check className="text-domo shrink-0 mt-1" size={20} />
                                        <span className="text-gray-700 font-medium group-hover:text-domo transition-colors">{sol}</span>
                                    </li>
                                ))}
                            </div>
                            <div className="mt-12 pt-8 border-t border-purple-100">
                                <Button className="w-full sm:w-auto font-bold px-10 py-4 shadow-lg shadow-domo/10" onClick={() => onOpenDemo('comercial')}>
                                    {content.commercial.cta}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================================
          COMMERCIAL DEEP DIVE SECTION
         ========================================================================= */}
            <section className="py-24 bg-arquitectura border-t border-purple-200">
                <div className="container mx-auto px-6">

                    {/* Header */}
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h2 className="text-h2 font-bold text-torre leading-tight mb-4">
                            <span className="text-domo"><span className="domonow-gradient">DomoNow</span>:</span> {content.commercial.deepDiveTitle.replace('DomoNow: ', '')}
                        </h2>
                        <p className="text-lead text-gray-500">
                            {content.commercial.deepDiveDesc}
                        </p>
                    </div>

                    {/* Comparison Matrix - Commercial */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                        {content.commercial.matrix.map((item, index) => (
                            <div key={index} className="flex flex-col h-full">
                                {/* Top: Problem */}
                                <div className="bg-white p-6 rounded-t-[2rem] border-b border-dashed border-gray-200 flex-1 relative group">
                                    <div className="mb-4 text-red-400">
                                        <X size={24} />
                                    </div>
                                    <p className="text-body text-gray-600 font-medium leading-snug">
                                        {item.problem}
                                    </p>
                                </div>

                                {/* Connector Visual */}
                                <div className="h-4 bg-gray-100 relative">
                                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-4 border-gray-100"></div>
                                </div>

                                {/* Bottom: Solution */}
                                <div className="bg-white p-6 rounded-b-[2rem] shadow-lg flex-1 group">
                                    <div className="mb-4 text-domo">
                                        <Check size={24} />
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <div className="text-domo shrink-0 mt-1">
                                            {commercialMatrixIcons[index]}
                                        </div>
                                        <p className="text-body text-torre font-bold leading-snug">
                                            {item.solution}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Feature Block: Commercial Optimization */}
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:pl-20">

                        {/* Left: 2 Vertical Images */}
                        <div className="lg:w-1/2 w-full">
                            <div className="grid grid-cols-2 gap-4 md:gap-6">
                                <img
                                    src="/assets/property-types/optimization/optimizacion (5).jpg"
                                    className="w-full h-[400px] md:h-[520px] object-cover rounded-[2.5rem] shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                                    alt="Commercial 1"
                                />
                                <img
                                    src="/assets/property-types/optimization/optimizacion (1).jpg"
                                    className="w-full h-[400px] md:h-[520px] object-cover rounded-[2.5rem] shadow-2xl hover:scale-[1.02] transition-transform duration-500 mt-8 md:mt-12"
                                    alt="Commercial 2"
                                />
                            </div>
                        </div>

                        {/* Right: List */}
                        <div className="lg:w-1/2 w-full">
                            <h3 className="text-h2 font-bold text-torre mb-8 leading-tight">
                                {content.commercial.optimizationTitle}
                            </h3>
                            <ul className="space-y-6">
                                {content.commercial.features.map((feature, i) => (
                                    <li key={i} className="flex gap-4 items-start group">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-domo shrink-0 mt-1 transition-colors group-hover:bg-domo group-hover:text-white shadow-sm border border-gray-100">
                                            <Check size={16} strokeWidth={3} />
                                        </div>
                                        <span className="text-body text-gray-600 font-medium leading-snug group-hover:text-torre transition-colors">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10">
                                <Button onClick={() => onOpenDemo('comercial')} size="lg" className="shadow-lg shadow-domo/10">
                                    {content.commercial.agendaCTA}
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* =========================================================================
          03. MIXTA
         ========================================================================= */}
            <section id="mixta" className="py-24 border-t border-gray-100 bg-white">
                <div className="container mx-auto px-6">

                    <div className="flex flex-col lg:flex-row gap-16 mb-16 items-center">
                        <div className="lg:w-1/3">
                            <div className="text-gray-300 font-mono text-xl mb-4">{content.mixed.tag}</div>
                            <h2 className="text-h1 font-bold text-torre leading-none mb-6">{content.mixed.title}</h2>
                            <p className="text-lead text-gray-500">
                                {content.mixed.miniDesc}
                            </p>
                        </div>
                        <div className="lg:w-2/3 w-full flex flex-col justify-center">
                            <p className="text-body text-gray-600 leading-relaxed border-l-2 border-domo pl-6 mb-8">
                                <span className="domonow-gradient">DomoNow</span> {content.mixed.fullDesc.replace('DomoNow ', '')}
                            </p>
                            <ImageCarousel images={mixtaImages} heightClass="h-48 md:h-56" />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-0 border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-xl">
                        <div className="p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100 bg-red-50/30">
                            <h3 className="text-tiny font-bold text-red-400 mb-8 uppercase tracking-widest flex items-center gap-2">
                                <AlertCircle size={16} /> {content.mixed.challenges}
                            </h3>
                            <ul className="space-y-6">
                                {content.mixed.challengeList.map((prob, i) => (
                                    <li key={i} className="flex gap-4 group">
                                        <X className="text-red-400/70 group-hover:text-red-500 shrink-0 mt-1 transition-colors" size={20} />
                                        <span className="text-gray-600 group-hover:text-gray-800 transition-colors leading-snug">{prob}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-10 lg:p-12 bg-purple-50/30">
                            <h3 className="text-tiny font-bold text-domo mb-8 uppercase tracking-widest flex items-center gap-2">
                                <TrendingUp size={16} /> {content.mixed.solution.split(' ')[0]} <span className="domonow-gradient">DomoNow</span>
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-6">
                                {content.mixed.solutionList.map((sol, i) => (
                                    <li key={i} className="flex gap-3 list-none group">
                                        <Check className="text-domo shrink-0 mt-1" size={20} />
                                        <span className="text-gray-700 font-medium group-hover:text-domo transition-colors">{sol}</span>
                                    </li>
                                ))}
                            </div>
                            <div className="mt-12 pt-8 border-t border-purple-100">
                                <Button className="w-full sm:w-auto font-bold px-10 py-4 shadow-lg shadow-domo/10" onClick={() => onOpenDemo('mixta')}>
                                    {content.mixed.cta}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================================
          MIXED COMMUNITIES DEEP DIVE SECTION
         ========================================================================= */}
            <section className="py-24 bg-arquitectura border-t border-gray-200">
                <div className="container mx-auto px-6">

                    {/* Header */}
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h2 className="text-h2 font-bold text-torre leading-tight mb-4">
                            <span className="text-domo"><span className="domonow-gradient">DomoNow</span>:</span> {content.mixed.deepDiveTitle.replace('DomoNow: ', '')}
                        </h2>
                        <p className="text-lead text-gray-500">
                            {content.mixed.deepDiveDesc}
                        </p>
                    </div>

                    {/* Comparison Matrix - Mixed */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                        {content.mixed.matrix.map((item, index) => (
                            <div key={index} className="flex flex-col h-full">
                                {/* Top: Problem */}
                                <div className="bg-white p-6 rounded-t-[2rem] border-b border-dashed border-gray-200 flex-1 relative group">
                                    <div className="mb-4 text-red-400">
                                        <X size={24} />
                                    </div>
                                    <p className="text-body text-gray-600 font-medium leading-snug">
                                        {item.problem}
                                    </p>
                                </div>

                                {/* Connector Visual */}
                                <div className="h-4 bg-gray-100 relative">
                                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-4 border-gray-100"></div>
                                </div>

                                {/* Bottom: Solution */}
                                <div className="bg-white p-6 rounded-b-[2rem] shadow-lg flex-1 group">
                                    <div className="mb-4 text-domo">
                                        <Check size={24} />
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <div className="text-domo shrink-0 mt-1">
                                            {mixedMatrixIcons[index]}
                                        </div>
                                        <p className="text-body text-torre font-bold leading-snug">
                                            {item.solution}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Feature Block: Optimization */}
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:pl-20">

                        {/* Left: 2 Vertical Images */}
                        <div className="lg:w-1/2 w-full">
                            <div className="grid grid-cols-2 gap-4 md:gap-6">
                                <img
                                    src="/assets/property-types/optimization/optimizacion (4).jpg"
                                    className="w-full h-[400px] md:h-[520px] object-cover rounded-[2.5rem] shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                                    alt="Mixed 1"
                                />
                                <img
                                    src="/assets/property-types/optimization/optimizacion (3).jpg"
                                    className="w-full h-[400px] md:h-[520px] object-cover rounded-[2.5rem] shadow-2xl hover:scale-[1.02] transition-transform duration-500 mt-8 md:mt-12"
                                    alt="Mixed 2"
                                />
                            </div>
                        </div>

                        {/* Right: List */}
                        <div className="lg:w-1/2 w-full">
                            <h3 className="text-h2 font-bold text-torre mb-8 leading-tight">
                                {content.mixed.optimizationTitle}
                            </h3>
                            <ul className="space-y-6">
                                {content.mixed.features.map((feature, i) => (
                                    <li key={i} className="flex gap-4 items-start group">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-domo shrink-0 mt-1 transition-colors group-hover:bg-domo group-hover:text-white shadow-sm border border-gray-100">
                                            <Check size={16} strokeWidth={3} />
                                        </div>
                                        <span className="text-body text-gray-600 font-medium leading-snug group-hover:text-torre transition-colors">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10">
                                <Button onClick={() => onOpenDemo('mixta')} size="lg" className="shadow-lg shadow-domo/10">
                                    {content.mixed.agendaCTA}
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer CTA Strip */}
            <div className="bg-domo py-12 text-center text-white">
                <h3 className="text-h3 font-bold mb-4">{content.footerCTA.title}</h3>
                <p className="opacity-80 mb-6">{content.footerCTA.desc}</p>
                <button onClick={() => onOpenDemo('general')} className="bg-white text-domo px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                    {content.footerCTA.button}
                </button>
            </div>

        </div>
    );
};