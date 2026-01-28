import React, { useEffect } from 'react';
import { Button } from '../Button';
import { ImageCarousel } from '../ImageCarousel';
import { HowItWorksSection } from '../HowItWorksSection';
import {
    ShieldCheck, Smartphone, UserCheck,
    X, Check, Quote, Clock, Users,
    Calendar, Lock, Truck, Home
} from 'lucide-react';

interface AccessControlPageProps {
    onOpenDemo: () => void;
}

export const AccessControlPage: React.FC<AccessControlPageProps> = ({ onOpenDemo }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const appScreens = [
        "/assets/Modulos/accesos/carruselinterfaz/ACCESOS (1).jpg",
        "/assets/Modulos/accesos/carruselinterfaz/ACCESOS (2).jpg",
        "/assets/Modulos/accesos/carruselinterfaz/ACCESOS (3).jpg",
        "/assets/Modulos/accesos/carruselinterfaz/ACCESOS (4).jpg",
        "/assets/Modulos/accesos/carruselinterfaz/ACCESOS (5).jpg",
        "/assets/Modulos/accesos/carruselinterfaz/ACCESOS (6).jpg",
        "/assets/Modulos/accesos/carruselinterfaz/ACCESOS (7).jpg",
    ];

    const useCases = [
        { category: "Visitas", description: "Visitas ocasionales", icon: <Users size={20} />, image: "/assets/Modulos/accesos/casosdeuso/accesos_cuso (1)_compressed.png" },
        { category: "Servicios", description: "Proveedores y técnicos", icon: <Truck size={20} />, image: "/assets/Modulos/accesos/casosdeuso/accesos_cuso (1)_compressed.jpg" },
        { category: "Programados", description: "Ingresos programados o recurrentes", icon: <Calendar size={20} />, image: "/assets/Modulos/accesos/casosdeuso/accesos_cuso (2)_compressed.jpg" },
        { category: "Personal", description: "Personal doméstico", icon: <Home size={20} />, image: "/assets/Modulos/accesos/casosdeuso/accesos_cuso (3)_compressed.jpg" }
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
                                PORTERÍA
                            </span>
                            <h1 className="text-h2 md:text-h1 font-bold leading-tight mb-6 text-torre">
                                "¿Quién entró? ¿A qué hora?"
                            </h1>
                            <div className="prose text-lead text-gray-500 mb-8 leading-relaxed">
                                <p className="mb-4">
                                    Los visitantes quedan sin registro, se sobrecargan los porteros y los residentes reclaman constantemente por su seguridad.
                                </p>
                                <p>
                                    <strong className="text-torre">DomoNow convierte la portería</strong> en un proceso ordenado y sin discusiones, incluso en comunidades con alta rotación de visitantes.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <Button size="lg" onClick={onOpenDemo} className="shadow-xl shadow-domo/20">
                                    Conoce cómo funciona
                                </Button>
                            </div>
                        </div>

                        <div className="lg:w-7/12 relative w-full mt-12 lg:mt-0">
                            <div className="relative w-full max-w-[850px] ml-auto">
                                {/* BACK LAYER: Dashboard */}
                                <div className="relative z-0 ml-8 md:ml-24 transform rotate-1 hover:rotate-0 transition-all duration-700">
                                    <div className="rounded-2xl overflow-hidden shadow-2xl bg-white aspect-video">
                                        <img
                                            src="/assets/Modulos/accesos/accesoshero.png"
                                            alt="Vista del módulo de control de accesos"
                                            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                                    </div>
                                </div>

                                {/* FRONT LAYER: Phone Animation */}
                                <div className="absolute bottom-[-10%] left-0 md:-left-4 z-10 w-[240px] md:w-[300px]">
                                    <div className="bg-white p-4 rounded-[2.5rem] shadow-[0_30px_80px_rgba(130,10,209,0.25)] border border-gray-100 transform -rotate-2 hover:rotate-0 transition-all duration-500">
                                        <div className="bg-gray-50 rounded-t-[2rem] p-6 border-b border-gray-100">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="w-8 h-8 bg-domo rounded-lg"></div>
                                                <div className="w-24 h-3 bg-gray-200 rounded-full"></div>
                                            </div>
                                            <div className="h-4 w-2/3 bg-gray-200 rounded-full"></div>
                                        </div>
                                        <div className="p-6 space-y-6">
                                            <div className="bg-green-50 p-4 rounded-xl border border-green-100 text-center">
                                                <div className="w-16 h-16 bg-white rounded-lg mx-auto mb-3 flex items-center justify-center">
                                                    <ShieldCheck className="text-domo" size={32} />
                                                </div>
                                                <div className="h-2 w-1/2 bg-gray-200 rounded-full mx-auto"></div>
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
                imageSrc="/assets/Modulos/accesos/accesoshero.png"
                items={[
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
                ]}
            />

            {/* 2. PROBLEM VS SOLUTION */}
            <section className="py-24 bg-arquitectura relative z-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <span className="h-px w-8 bg-red-400"></span>
                            <span className="text-red-400 font-bold tracking-widest uppercase text-tiny">SITUACIÓN ACTUAL</span>
                            <span className="h-px w-8 bg-red-400"></span>
                        </div>
                        <h2 className="text-h2 font-bold text-torre mb-8 leading-tight">El problema que viven hoy las comunidades.</h2>
                        <div className="relative inline-block">
                            <Quote className="absolute -top-4 -left-8 text-gray-200 w-10 h-10 transform -scale-x-100 z-0 opacity-50" />
                            <p className="relative z-10 text-h4 text-gray-500 leading-relaxed font-medium">
                                "Cuando el control de accesos depende de llamadas, papel o mensajes sueltos, existe una sensación constante de desorden e inseguridad"
                            </p>
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
                                    { title: "Registros Ilegibles", desc: "Cuadernos con información imposible de consultar" },
                                    { title: "Búsqueda Manual", desc: "Revisar papel por papel para encontrar un ingreso" },
                                    { title: "Sin Trazabilidad", desc: "No hay forma de verificar quién entró" }
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

                        {/* Solution */}
                        <div className="bg-[#F9F5FF] p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-domo/5 border border-purple-100 group hover:border-domo/30 transition-colors duration-300 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-8 h-8 rounded-full bg-domo/10 flex items-center justify-center text-domo"><Check size={16} strokeWidth={3} /></div>
                                <span className="font-bold text-domo uppercase tracking-widest text-[10px] md:text-tiny">Con DomoNow obtienes</span>
                            </div>
                            <div className="space-y-8 flex-grow">
                                {[
                                    { title: "Historial Completo", desc: "Base de datos consultable de todos los ingresos" },
                                    { title: "Filtros Inteligentes", desc: "Encuentra cualquier registro por fechas o residente" },
                                    { title: "Respaldo Automático", desc: "Evidencia documentada que protege tu gestión. Todo queda registrado, validado y disponible cuando se necesita." }
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
                            <h3 className="text-h4 font-bold text-torre mb-3">El residente registra al visitante</h3>
                            <p className="text-body text-gray-500 leading-relaxed">Desde la app, el residente crea el pase de acceso en segundos, indicando quién ingresa y cuándo.</p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-torre group-hover:bg-horizonte group-hover:text-torre transition-colors"><UserCheck size={20} /></div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-3">PASO 2</span>
                            </div>
                            <h3 className="text-h4 font-bold text-torre mb-3">El acceso se valida sin llamadas</h3>
                            <p className="text-body text-gray-500 leading-relaxed">En portería se valida el pase digital o código QR, sin depender de llamadas ni confirmaciones informales.</p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-torre group-hover:bg-domo group-hover:text-white transition-colors"><ShieldCheck size={20} /></div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-3">PASO 3</span>
                            </div>
                            <h3 className="text-h4 font-bold text-torre mb-3">Todo queda respaldado</h3>
                            <p className="text-body text-gray-500 leading-relaxed">Cada ingreso queda guardado en la app, con fecha, hora y responsable.</p>
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
                                    <img src={item.image} alt={item.category} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30"></div>
                                </div>
                                <div className="absolute top-6 left-6 z-10">
                                    <h3 className="text-h4 font-bold text-white drop-shadow-md tracking-tight">{item.category}</h3>
                                </div>
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
                    <h2 className="text-h2 font-bold mb-8 leading-tight text-torre">
                        Con DomoNow, cada ingreso tiene respaldo, cada decisión queda clara y la seguridad deja de ser un dolor operativo.
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