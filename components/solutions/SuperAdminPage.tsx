import React, { useEffect } from 'react';
import { Button } from '../Button';
import { HowItWorksSection } from '../HowItWorksSection';
import {
    Building2, Settings, Users, BarChart3,
    X, Check, Quote, Eye, Layers, Shield
} from 'lucide-react';

interface SuperAdminPageProps {
    onOpenDemo: () => void;
}

export const SuperAdminPage: React.FC<SuperAdminPageProps> = ({ onOpenDemo }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const useCases = [
        { category: "Visibilidad total", description: "Revisar el estado de todas las propiedades a primera hora", icon: <Building2 size={20} />, image: "/assets/Modulos/SUPER ADMIN/CÓMO FUNCIONA.png" },
        { category: "Cumplimiento legal", description: "Recibir alerta de un vencimiento legal próximo", icon: <Users size={20} />, image: "/assets/Modulos/SUPER ADMIN/CASO DE USO 2.png" },
        { category: "Comunicación masiva", description: "Aplicar el mismo comunicado en 5 edificios a la vez", icon: <BarChart3 size={20} />, image: "/assets/Modulos/SUPER ADMIN/CASO DE USO 3.png" },
        { category: "Comparativa financiera", description: "Comparar la morosidad entre todas las propiedades", icon: <Settings size={20} />, image: "/assets/Modulos/SUPER ADMIN/CASO DE USO 4.png" }
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
                            <span className="block text-tiny font-bold tracking-widest uppercase text-gray-400 mb-4">
                                SÚPER ADMINISTRADOR
                            </span>
                            <h1 className="text-h2 md:text-h1 font-bold leading-tight mb-6 text-torre">
                                "47 mensajes con la misma pregunta"
                            </h1>
                            <div className="prose text-lead text-gray-500 mb-8 leading-relaxed">
                                <p className="mb-4 text-torre font-bold">
                                    ¿Cuándo terminaste el día tranquilo?
                                </p>
                                <p className="mb-4">
                                    Imagina terminar el día con todo bajo control. <strong className="text-torre">DomoNow te da control total.</strong> Todo en un panel, sin estrés.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <Button size="lg" onClick={onOpenDemo} className="shadow-xl shadow-domo/20">
                                    Conoce cómo funciona
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
                                            src="/assets/Modulos/SUPER ADMIN/hero_superadmin.png"
                                            alt="Panel de Super Administrador"
                                            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                                        />
                                        {/* Overlay Gradient for depth */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                                    </div>
                                </div>

                                {/* FRONT LAYER: Multi-property Animation */}
                                <div className="absolute bottom-[-10%] left-0 md:-left-4 z-10 w-[280px] md:w-[340px]">
                                    <div className="bg-white p-5 rounded-[2.5rem] shadow-[0_30px_80px_rgba(130,10,209,0.25)] border border-gray-100 transform -rotate-2 hover:rotate-0 transition-all duration-500">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 bg-gradient-to-br from-domo to-purple-600 rounded-xl flex items-center justify-center text-white">
                                                <Layers size={20} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-torre text-sm">Tus Propiedades</p>
                                                <p className="text-xs text-gray-400">12 activas</p>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                                                <div className="flex items-center gap-2">
                                                    <Building2 size={16} className="text-green-600" />
                                                    <span className="text-sm font-medium">Torres del Parque</span>
                                                </div>
                                                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">OK</span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl">
                                                <div className="flex items-center gap-2">
                                                    <Building2 size={16} className="text-domo" />
                                                    <span className="text-sm font-medium">Edificio Central</span>
                                                </div>
                                                <span className="text-xs bg-purple-100 text-domo px-2 py-1 rounded-full">OK</span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                                <div className="flex items-center gap-2">
                                                    <Building2 size={16} className="text-gray-400" />
                                                    <span className="text-sm font-medium">+10 más...</span>
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

            <HowItWorksSection
                variant="superadmin"
                imageSrc="/assets/Modulos/SUPER ADMIN/CASO DE USO 1.png"
                title="Conoce cómo funciona"
                subtitle="Cómo funciona"
                leftLabel="Software tradicional:"
                rightLabel="Con DomoNow:"
                items={[
                    {
                        problem: "Módulo separado o inexistente",
                        solution: "Super Administrador incluido"
                    },
                    {
                        problem: "Datos dispersos por propiedad",
                        solution: "Dashboard consolidado"
                    },
                    {
                        problem: "Reportes sin consolidar",
                        solution: "Indicadores de recaudo"
                    }
                ]}
            />

            {/* 2. PROBLEM VS SOLUTION */}
            <section className="py-24 bg-arquitectura relative z-20">
                <div className="container mx-auto px-6">

                    {/* HEADER SECTION */}
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <span className="h-px w-8 bg-red-400"></span>
                            <span className="text-red-400 font-bold tracking-widest uppercase text-tiny">
                                SITUACIÓN ACTUAL
                            </span>
                            <span className="h-px w-8 bg-red-400"></span>
                        </div>

                        <h2 className="text-h2 font-bold text-torre mb-8 leading-tight">
                            Cuando todo depende de ti, necesitas una plataforma que piense contigo
                        </h2>

                        <div className="relative inline-block">
                            <Quote className="absolute -top-4 -left-8 text-gray-200 w-10 h-10 transform -scale-x-100 z-0 opacity-50" />
                            <p className="relative z-10 text-h4 text-gray-500 leading-relaxed font-medium">
                                "Cada conjunto funciona por separado, la información financiera está dispersa y aún consolidas información en Excel."
                            </p>
                        </div>
                    </div>

                    {/* CARDS GRID */}
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
                                {[
                                    { title: "Propiedades Aisladas", desc: "Cada conjunto funciona por separado" },
                                    { title: "Datos Fragmentados", desc: "Información financiera dispersa" },
                                    { title: "Reportes Manuales", desc: "Aún consolidas información en Excel" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5 items-start">
                                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 shrink-0 group-hover:bg-red-50 group-hover:text-red-400 transition-colors">
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

                        {/* Solution Card */}
                        <div className="bg-[#F9F5FF] p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-domo/5 border border-purple-100 group hover:border-domo/30 transition-colors duration-300 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-8 h-8 rounded-full bg-domo/10 flex items-center justify-center text-domo">
                                    <Check size={16} strokeWidth={3} />
                                </div>
                                <span className="font-bold text-domo uppercase tracking-widest text-[10px] md:text-tiny">Con DomoNow obtienes</span>
                            </div>

                            <div className="space-y-8 flex-grow">
                                {[
                                    { title: "Visión 360°", desc: "Dashboard de tus propiedades simultáneamente" },
                                    { title: "Comparativas Instantáneas", desc: "Puedes ver que necesita realmente tu atención" },
                                    { title: "Automatización inteligente", desc: "Alertas automáticas y control de cumplimiento" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5 items-start">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-domo shrink-0 shadow-sm group-hover:bg-domo group-hover:text-white transition-colors">
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
            <section className="py-24 bg-white relative z-10">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-domo font-bold tracking-widest uppercase text-tiny mb-2 block">
                            Flujo de Trabajo
                        </span>
                        <h2 className="text-h2 font-bold text-torre">Tu portafolio, paso a paso</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-arquitectura p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-torre group-hover:bg-domo group-hover:text-white transition-colors">
                                    <Layers size={20} />
                                </div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-3">PASO 1</span>
                            </div>
                            <h3 className="text-h4 font-bold text-torre mb-3">Configuración inicial</h3>
                            <p className="text-body text-gray-500 leading-relaxed">
                                Registra todas las copropiedades que administras en el sistema.
                            </p>
                        </div>
                        <div className="bg-arquitectura p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-torre group-hover:bg-horizonte group-hover:text-torre transition-colors">
                                    <Eye size={20} />
                                </div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-3">PASO 2</span>
                            </div>
                            <h3 className="text-h4 font-bold text-torre mb-3">Controla desde un solo panel</h3>
                            <p className="text-body text-gray-500 leading-relaxed">
                                Accede a el dashboard con indicadores clave de todas tus copropiedades.
                            </p>
                        </div>
                        <div className="bg-arquitectura p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-torre group-hover:bg-domo group-hover:text-white transition-colors">
                                    <Shield size={20} />
                                </div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-3">PASO 3</span>
                            </div>
                            <h3 className="text-h4 font-bold text-torre mb-3">Replica procesos en tus comunidades</h3>
                            <p className="text-body text-gray-500 leading-relaxed">
                                Escala tu operación sin aumentar la carga administrativa.
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
            <section className="py-24 bg-gradient-to-r from-domo to-purple-700 text-white text-center px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
                <div className="container mx-auto max-w-3xl relative z-10">
                    <h2 className="text-h2 font-bold mb-8 leading-tight text-white">
                        Conoce cómo DomoNow transforma la gestión multi-propiedad.
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white !text-domo hover:bg-gray-100 transition-colors px-12 text-lg shadow-xl" onClick={onOpenDemo}>
                            Quiero agendar una Demo
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
};
