import React, { useEffect } from 'react';
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

interface PropertyTypesPageProps {
    onOpenDemo: (type?: string) => void;
}

import { useLocation } from 'react-router-dom';

export const PropertyTypesPage: React.FC<PropertyTypesPageProps> = ({ onOpenDemo }) => {
    const location = useLocation();

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

    // Images Collections
    const residencialImages = [
        "/assets/TIPOSDEPROPIEDAD/RESIDENCIAL/RESIDENCIAL1_compressed.png",
        "/assets/TIPOSDEPROPIEDAD/RESIDENCIAL/RESIDENCIAL2_compressed.png",
        "/assets/TIPOSDEPROPIEDAD/RESIDENCIAL/RESIDENCIAL3_compressed.png",
        "/assets/TIPOSDEPROPIEDAD/RESIDENCIAL/RESIDENCIAL4_compressed.png",
        "/assets/TIPOSDEPROPIEDAD/RESIDENCIAL/RESIDENCIAL5_compressed.png"
    ];

    const comercialImages = [
        "/assets/TIPOSDEPROPIEDAD/COMERCIAL/COMERCIAL1_compressed.png",
        "/assets/TIPOSDEPROPIEDAD/COMERCIAL/COMERCIAL2_compressed.png",
        "/assets/TIPOSDEPROPIEDAD/COMERCIAL/COMERCIAL3_compressed.png",
        "/assets/TIPOSDEPROPIEDAD/COMERCIAL/COMERCIAL4_compressed.png",
        "/assets/TIPOSDEPROPIEDAD/COMERCIAL/COMERCIAL5_compressed.png"
    ];

    const mixtaImages = [
        "/assets/TIPOSDEPROPIEDAD/MIXTA/MIXTA1_compressed.png",
        "/assets/TIPOSDEPROPIEDAD/MIXTA/MIXTA2_compressed.png",
        "/assets/TIPOSDEPROPIEDAD/MIXTA/MIXTA3_compressed.png",
        "/assets/TIPOSDEPROPIEDAD/MIXTA/MIXTA4_compressed.jpg",
        "/assets/TIPOSDEPROPIEDAD/MIXTA/MIXTA5_compressed.jpg"
    ];

    // ================= DATA FOR RESIDENTIAL DEEP DIVE =================
    const residentialMatrixData = [
        {
            problem: "Operaciones manuales y dispersas (pagos, quejas, reservas).",
            solution: "Plataforma integrada para todos los procesos clave.",
            icon: <LayoutGrid size={20} />
        },
        {
            problem: "Comunicación deficiente y desconfianza.",
            solution: "Comunicación unificada y transparente. Canal único.",
            icon: <MessageSquare size={20} />
        },
        {
            problem: "Morosidad y finanzas poco claras.",
            solution: "Cobranza eficiente y finanzas claras.",
            icon: <DollarSign size={20} />
        },
        {
            problem: "Seguimiento de incidencias limitado.",
            solution: "Gestión centralizada de PQR y mantenimiento.",
            icon: <ClipboardList size={20} />
        }
    ];

    const residentialFeatureList = [
        "Comunicados oficiales, avisos y novedades.",
        "Registro de visitantes y pases digitales.",
        "Reservas de áreas comunes.",
        "Registro, asignación y seguimiento de PQRS.",
        "Gestión financiera transparente.",
        "Votaciones y asambleas digitales.",
        "Gestión documental.",
        "Alertas de emergencia.",
        "Eventos y campañas internas."
    ];

    // ================= DATA FOR COMMERCIAL DEEP DIVE =================
    const commercialMatrixData = [
        {
            problem: "Seguimiento desordenado de proveedor y mantenimientos críticos.",
            solution: "Órdenes de trabajo, proveedores y cronogramas unificados.",
            icon: <Wrench size={20} />
        },
        {
            problem: "Múltiples arrendatarios con reglas distintas.",
            solution: "Comunicación y gestión segmentada por local u oficina.",
            icon: <Store size={20} />
        },
        {
            problem: "Incidentes operativos que afectan la experiencia del cliente.",
            solution: "Gestión de solicitudes con responsables y seguimiento claro.",
            icon: <ClipboardList size={20} />
        },
        {
            problem: "Falta de trazabilidad en accesos y operaciones.",
            solution: "Registro centralizado de incidentes y reportes para control y auditoría.",
            icon: <History size={20} />
        }
    ];

    const commercialFeatureList = [
        "Comunicación oficial.",
        "Control de accesos de personal con registro y trazabilidad.",
        "Gestión de solicitudes operativas y mantenimiento.",
        "Reservas y control de uso de salas, parqueaderos y espacios compartidos.",
        "Gestión financiera clara entre administración y arrendatarios.",
        "Documentos, contratos y reglamentos organizados."
    ];


    // ================= DATA FOR MIXED DEEP DIVE (Existing) =================
    const mixedMatrixData = [
        {
            problem: "Flujo constante de residentes, clientes y proveedores sin un control unificado.",
            solution: "Control de accesos diferenciado por tipo de usuario y zona.",
            icon: <Users size={20} />
        },
        {
            problem: "Reglas y horarios distintos entre zonas residenciales y comerciales.",
            solution: "Comunicación segmentada según uso residencial o comercial.",
            icon: <Clock size={20} />
        },
        {
            problem: "Incidentes operativos que generan conflictos entre usos y usuarios.",
            solution: "Registro y seguimiento centralizado de incidentes y solicitudes.",
            icon: <ShieldAlert size={20} />
        },
        {
            problem: "Falta de trazabilidad en accesos, solicitudes y novedades.",
            solution: "Historial claro de accesos, operaciones y decisiones.",
            icon: <FileText size={20} />
        }
    ];

    const mixedFeatureList = [
        "Comunicación oficial para residentes y comercios.",
        "Control de accesos diferenciado, con registro y trazabilidad.",
        "Gestión unificada de solicitudes y mantenimiento.",
        "Reservas y uso controlado de espacios compartidos.",
        "Documentos y reglamentos organizados, siempre disponibles.",
        "Alertas de emergencia con visibilidad para la administración."
    ];

    return (
        <div className="bg-white min-h-screen pt-20 font-sans">

            {/* Intro Minimalista */}
            <div className="container mx-auto px-6 py-20 text-center">
                <span className="text-domo font-bold tracking-widest uppercase text-tiny mb-4 block">
                    Segmentación Inteligente
                </span>
                <h1 className="text-h2 md:text-display font-bold text-torre leading-none mb-6">
                    Tipos de Propiedades
                </h1>
                <p className="text-lead text-gray-500 max-w-2xl mx-auto">
                    DomoNow no es una talla única. Hemos diseñado experiencias específicas para la naturaleza única de cada comunidad.
                </p>

                {/* Quick Jump Links */}
                <div className="flex justify-center gap-8 mt-12 text-small font-bold text-torre">
                    <button onClick={() => document.getElementById('residencial')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-domo flex items-center gap-2 border-b-2 border-transparent hover:border-domo pb-1 transition-all">
                        01. Residencial <ArrowDown size={14} />
                    </button>
                    <button onClick={() => document.getElementById('comercial')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-domo flex items-center gap-2 border-b-2 border-transparent hover:border-domo pb-1 transition-all">
                        02. Comercial <ArrowDown size={14} />
                    </button>
                    <button onClick={() => document.getElementById('mixta')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-domo flex items-center gap-2 border-b-2 border-transparent hover:border-domo pb-1 transition-all">
                        03. Mixta <ArrowDown size={14} />
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
                            <div className="text-gray-300 font-mono text-xl mb-4">01</div>
                            <h2 className="text-h1 font-bold text-torre leading-none mb-6">Propiedad <br />Residencial</h2>
                            <p className="text-lead text-gray-500">
                                Gestión integral para la tranquilidad del hogar y la comunidad.
                            </p>
                        </div>
                        <div className="lg:w-2/3 w-full flex flex-col justify-center">
                            <p className="text-body text-gray-600 leading-relaxed border-l-2 border-domo pl-6 mb-8">
                                Centraliza la operación diaria de conjuntos y edificios residenciales, desde la comunicación con los residentes hasta la gestión de accesos, solicitudes y pagos, enfocándose en la convivencia.
                            </p>
                            <ImageCarousel images={residencialImages} heightClass="h-48 md:h-56" />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-0 border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-xl">
                        <div className="p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100 bg-red-50/30">
                            <h3 className="text-tiny font-bold text-red-400 mb-8 uppercase tracking-widest flex items-center gap-2">
                                <AlertCircle size={16} /> Desafíos Actuales
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Operaciones manuales y dispersas.",
                                    "Comunicación deficiente: Avisos que no llegan.",
                                    "Morosidad y finanzas poco claras.",
                                    "Seguimiento de incidencias limitados."
                                ].map((prob, i) => (
                                    <li key={i} className="flex gap-4 group">
                                        <X className="text-red-400/70 group-hover:text-red-500 shrink-0 mt-1 transition-colors" size={20} />
                                        <span className="text-gray-600 group-hover:text-gray-800 transition-colors leading-snug">{prob}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-10 lg:p-12 bg-purple-50/30">
                            <h3 className="text-tiny font-bold text-domo mb-8 uppercase tracking-widest flex items-center gap-2">
                                <TrendingUp size={16} /> Solución DomoNow
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-6">
                                {[
                                    "Comunicados oficiales.",
                                    "Registro de visitantes.",
                                    "Reservas de áreas comunes.",
                                    "Gestión de PQRS.",
                                    "Gestión financiera.",
                                    "Votaciones digitales."
                                ].map((sol, i) => (
                                    <li key={i} className="flex gap-3 list-none group">
                                        <Check className="text-domo shrink-0 mt-1" size={20} />
                                        <span className="text-gray-700 font-medium group-hover:text-domo transition-colors">{sol}</span>
                                    </li>
                                ))}
                            </div>
                            <div className="mt-12 pt-8 border-t border-purple-100">
                                <Button className="w-full sm:w-auto font-bold px-10 py-4 shadow-lg shadow-domo/10" onClick={() => onOpenDemo('residencial')}>
                                    Solicitar Demo Residencial
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================================
          RESIDENTIAL DEEP DIVE SECTION (NEW)
         ========================================================================= */}
            <section className="py-24 bg-arquitectura border-t border-gray-200">
                <div className="container mx-auto px-6">

                    {/* Header */}
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h2 className="text-h2 font-bold text-torre leading-tight mb-4">
                            <span className="text-domo">DomoNow:</span> Diseñado para los desafíos únicos de comunidades residenciales
                        </h2>
                        <p className="text-lead text-gray-500">
                            Herramientas especializadas para mejorar la convivencia, la seguridad y la valorización de su propiedad.
                        </p>
                    </div>

                    {/* Comparison Matrix - Residential */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                        {residentialMatrixData.map((item, index) => (
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
                                    <p className="text-body text-torre font-bold leading-snug">
                                        {item.solution}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Feature Block: Residential Optimization */}
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:pl-20">

                        {/* Left: 2 Vertical Images (Modified) */}
                        <div className="lg:w-1/2 w-full">
                            <div className="grid grid-cols-2 gap-4 md:gap-6">
                                <img
                                    src="/assets/TIPOSDEPROPIEDAD/optimización/optimizacion (6).jpg"
                                    className="w-full h-[400px] md:h-[520px] object-cover rounded-[2.5rem] shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                                    alt="Hogar y Familia"
                                />
                                <img
                                    src="/assets/TIPOSDEPROPIEDAD/optimización/optimizacion (2).jpg"
                                    className="w-full h-[400px] md:h-[520px] object-cover rounded-[2.5rem] shadow-2xl hover:scale-[1.02] transition-transform duration-500 mt-8 md:mt-12"
                                    alt="App Móvil"
                                />
                            </div>
                        </div>

                        {/* Right: List (Floating on background) */}
                        <div className="lg:w-1/2 w-full">
                            <h3 className="text-h2 font-bold text-torre mb-8 leading-tight">
                                Optimizamos la gestión de operaciones de propiedades residenciales
                            </h3>
                            <ul className="space-y-6">
                                {residentialFeatureList.map((feature, i) => (
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
                                    Agenda una Demo Residencial
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
                            <div className="text-domo/60 font-mono text-xl mb-4">02</div>
                            <h2 className="text-h1 font-bold text-torre leading-none mb-6">Propiedad <br />Comercial</h2>
                            <p className="text-lead text-gray-500">
                                Gestión de alto rendimiento para entornos corporativos exigentes.
                            </p>
                        </div>
                        <div className="lg:w-2/3 w-full flex flex-col justify-center">
                            <p className="text-body text-gray-600 leading-relaxed border-l-2 border-domo pl-6 mb-8">
                                Optimiza la gestión centralizando accesos, comunicación y operación diaria, incluso en entornos con múltiples locales y usuarios de alto tráfico.
                            </p>
                            <ImageCarousel images={comercialImages} heightClass="h-48 md:h-56" />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-0 border border-purple-100 rounded-[2.5rem] overflow-hidden shadow-xl bg-white">
                        <div className="p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100 bg-red-50/30">
                            <h3 className="text-tiny font-bold text-red-400 mb-8 uppercase tracking-widest flex items-center gap-2">
                                <AlertCircle size={16} /> Fricción Actual
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Seguimiento desordenado de proveedores.",
                                    "Múltiples arrendatarios con reglas distintas.",
                                    "Incidentes operativos que afectan clientes.",
                                    "Falta de trazabilidad en accesos."
                                ].map((prob, i) => (
                                    <li key={i} className="flex gap-4 group">
                                        <X className="text-red-400/70 group-hover:text-red-500 shrink-0 mt-1 transition-colors" size={20} />
                                        <span className="text-gray-600 group-hover:text-gray-800 transition-colors leading-snug">{prob}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-10 lg:p-12 bg-purple-50/30">
                            <h3 className="text-tiny font-bold text-domo mb-8 uppercase tracking-widest flex items-center gap-2">
                                <TrendingUp size={16} /> Optimización DomoNow
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-6">
                                {[
                                    "Comunicación oficial.",
                                    "Control de accesos.",
                                    "Gestión de solicitudes.",
                                    "Reservas de salas.",
                                    "Gestión financiera.",
                                    "Alertas de emergencia."
                                ].map((sol, i) => (
                                    <li key={i} className="flex gap-3 list-none group">
                                        <Check className="text-domo shrink-0 mt-1" size={20} />
                                        <span className="text-gray-700 font-medium group-hover:text-domo transition-colors">{sol}</span>
                                    </li>
                                ))}
                            </div>
                            <div className="mt-12 pt-8 border-t border-purple-100">
                                <Button className="w-full sm:w-auto font-bold px-10 py-4 shadow-lg shadow-domo/10" onClick={() => onOpenDemo('comercial')}>
                                    Solicitar Demo Comercial
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
                            <span className="text-domo">DomoNow:</span> Diseñado para los desafíos únicos de comunidades comerciales
                        </h2>
                        <p className="text-lead text-gray-500">
                            Herramientas especializadas para la gestión de proveedores, múltiples arrendatarios y operación de alto tráfico.
                        </p>
                    </div>

                    {/* Comparison Matrix - Commercial */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                        {commercialMatrixData.map((item, index) => (
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
                                    <p className="text-body text-torre font-bold leading-snug">
                                        {item.solution}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Feature Block: Commercial Optimization */}
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:pl-20">

                        {/* Left: 2 Vertical Images (Modified) */}
                        <div className="lg:w-1/2 w-full">
                            <div className="grid grid-cols-2 gap-4 md:gap-6">
                                <img
                                    src="/assets/TIPOSDEPROPIEDAD/optimización/optimizacion (5).jpg"
                                    className="w-full h-[400px] md:h-[520px] object-cover rounded-[2.5rem] shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                                    alt="Oficina Corporativa"
                                />
                                <img
                                    src="/assets/TIPOSDEPROPIEDAD/optimización/optimizacion (1).jpg"
                                    className="w-full h-[400px] md:h-[520px] object-cover rounded-[2.5rem] shadow-2xl hover:scale-[1.02] transition-transform duration-500 mt-8 md:mt-12"
                                    alt="Reunión de Negocios"
                                />
                            </div>
                        </div>

                        {/* Right: List (Floating on background) */}
                        <div className="lg:w-1/2 w-full">
                            <h3 className="text-h2 font-bold text-torre mb-8 leading-tight">
                                Optimizamos la gestión de operaciones de propiedades comerciales
                            </h3>
                            <ul className="space-y-6">
                                {commercialFeatureList.map((feature, i) => (
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
                                    Agenda una Demo Comercial
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
                            <div className="text-gray-300 font-mono text-xl mb-4">03</div>
                            <h2 className="text-h1 font-bold text-torre leading-none mb-6">Propiedad <br />Mixta</h2>
                            <p className="text-lead text-gray-500">
                                El equilibrio perfecto entre lo residencial y lo comercial.
                            </p>
                        </div>
                        <div className="lg:w-2/3 w-full flex flex-col justify-center">
                            <p className="text-body text-gray-600 leading-relaxed border-l-2 border-domo pl-6 mb-8">
                                Gestionar una propiedad mixta implica equilibrar dinámicas muy distintas en un mismo espacio. DomoNow centraliza la operación para que lo residencial y lo comercial convivan con reglas claras.
                            </p>
                            <ImageCarousel images={mixtaImages} heightClass="h-48 md:h-56" />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-0 border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-xl">
                        <div className="p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100 bg-red-50/30">
                            <h3 className="text-tiny font-bold text-red-400 mb-8 uppercase tracking-widest flex items-center gap-2">
                                <AlertCircle size={16} /> Desafíos de Convivencia
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Residentes y clientes sin control unificado.",
                                    "Horarios distintos entre zonas.",
                                    "Incidentes operativos que generan roces.",
                                    "Falta de control en accesos y novedades."
                                ].map((prob, i) => (
                                    <li key={i} className="flex gap-4 group">
                                        <X className="text-red-400/70 group-hover:text-red-500 shrink-0 mt-1 transition-colors" size={20} />
                                        <span className="text-gray-600 group-hover:text-gray-800 transition-colors leading-snug">{prob}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-10 lg:p-12 bg-purple-50/30">
                            <h3 className="text-tiny font-bold text-domo mb-8 uppercase tracking-widest flex items-center gap-2">
                                <TrendingUp size={16} /> Equilibrio DomoNow
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-6">
                                {[
                                    "Comunicación segmentada.",
                                    "Control de accesos diferenciado.",
                                    "Gestión unificada de solicitudes.",
                                    "Uso controlado de espacios.",
                                    "Reglamentos disponibles.",
                                    "Alertas de emergencia."
                                ].map((sol, i) => (
                                    <li key={i} className="flex gap-3 list-none group">
                                        <Check className="text-domo shrink-0 mt-1" size={20} />
                                        <span className="text-gray-700 font-medium group-hover:text-domo transition-colors">{sol}</span>
                                    </li>
                                ))}
                            </div>
                            <div className="mt-12 pt-8 border-t border-purple-100">
                                <Button className="w-full sm:w-auto font-bold px-10 py-4 shadow-lg shadow-domo/10" onClick={() => onOpenDemo('mixta')}>
                                    Solicitar Demo Mixta
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================================
          MIXED COMMUNITIES DEEP DIVE SECTION (Existing)
         ========================================================================= */}
            <section className="py-24 bg-arquitectura border-t border-gray-200">
                <div className="container mx-auto px-6">

                    {/* Header */}
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h2 className="text-h2 font-bold text-torre leading-tight mb-4">
                            <span className="text-domo">DomoNow:</span> Diseñado para los desafíos únicos de comunidades mixtas
                        </h2>
                        <p className="text-lead text-gray-500">
                            Comprendemos que la convivencia entre zonas residenciales y comerciales requiere reglas claras y herramientas precisas.
                        </p>
                    </div>

                    {/* Comparison Matrix - Mixed */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                        {mixedMatrixData.map((item, index) => (
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
                                    <p className="text-body text-torre font-bold leading-snug">
                                        {item.solution}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Feature Block: Optimization - SPACED AND BALANCED - SHIFTED RIGHT */}
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:pl-20">

                        {/* Left: 2 Vertical Images (Modified) */}
                        <div className="lg:w-1/2 w-full">
                            <div className="grid grid-cols-2 gap-4 md:gap-6">
                                <img
                                    src="/assets/TIPOSDEPROPIEDAD/optimización/optimizacion (4).jpg"
                                    className="w-full h-[400px] md:h-[520px] object-cover rounded-[2.5rem] shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                                    alt="Comercio y Vivienda"
                                />
                                <img
                                    src="/assets/TIPOSDEPROPIEDAD/optimización/optimizacion (3).jpg"
                                    className="w-full h-[400px] md:h-[520px] object-cover rounded-[2.5rem] shadow-2xl hover:scale-[1.02] transition-transform duration-500 mt-8 md:mt-12"
                                    alt="Espacios Compartidos"
                                />
                            </div>
                        </div>

                        {/* Right: List (Floating on background) - Balanced Padding */}
                        <div className="lg:w-1/2 w-full">
                            <h3 className="text-h2 font-bold text-torre mb-8 leading-tight">
                                Optimizamos la gestión de operaciones de propiedades mixtas
                            </h3>
                            <ul className="space-y-6">
                                {mixedFeatureList.map((feature, i) => (
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
                                    Agenda una Demo Especializada
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer CTA Strip */}
            <div className="bg-domo py-12 text-center text-white">
                <h3 className="text-h3 font-bold mb-4">¿Dudas sobre su configuración?</h3>
                <p className="opacity-80 mb-6">Nuestros expertos le ayudarán a definir el plan perfecto.</p>
                <button onClick={() => onOpenDemo('general')} className="bg-white text-domo px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                    Hablar con un experto
                </button>
            </div>

        </div>
    );
};