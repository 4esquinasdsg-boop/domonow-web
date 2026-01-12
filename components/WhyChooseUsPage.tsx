import React, { useEffect, useState, useRef } from 'react';
import { Button } from './Button';
import { ContactForm } from './ContactForm';
import {
    Building2, Store, LayoutGrid, CheckCircle2
} from 'lucide-react';

interface WhyChooseUsPageProps {
    onOpenDemo: () => void;
}

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({ onOpenDemo }) => {
    const [activeRole, setActiveRole] = useState(0);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Intersection Observer to detect which text section is in view
    useEffect(() => {
        const observers = sectionRefs.current.map((ref, index) => {
            if (!ref) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveRole(index);
                    }
                },
                {
                    threshold: 0.5, // Trigger when 50% of the item is visible
                    rootMargin: "-10% 0px -10% 0px" // Shrink the viewport detection area slightly
                }
            );

            observer.observe(ref);
            return observer;
        });

        return () => {
            observers.forEach(observer => observer?.disconnect());
        };
    }, []);

    const propertyTypes = [
        {
            id: "01",
            title: "Propiedad residencial",
            icon: <Building2 size={20} />,
            items: [
                "Reduce conflictos entre residentes y administración",
                "Mejora la comunicación y la participación comunitaria",
                "Da trazabilidad a solicitudes, pagos y decisiones",
                "Fortalece la sensación de seguridad y control"
            ]
        },
        {
            id: "02",
            title: "Propiedad comercial",
            icon: <Store size={20} />,
            items: [
                "Controla accesos de alto flujo con registro y respaldo",
                "Coordina proveedores, mantenimiento y solicitudes operativas",
                "Comunica avisos críticos a locales y equipos",
                "Tiene claridad financiera y documental entre administración y arrendatarios"
            ]
        },
        {
            id: "03",
            title: "Propiedad mixta",
            icon: <LayoutGrid size={20} />,
            items: [
                "Segmenta información sin perder una visión global",
                "Comunica de forma diferenciada a cada tipo de usuario",
                "Gestiona finanzas, accesos y reglamentos por componente",
                "Evita cruces, reprocesos y conflictos entre comunidades"
            ]
        }
    ];

    const rolesData = [
        {
            role: "Arrendatarios",
            subtitle: "Experiencia sin fricción",
            image: "/assets/PorqueE/arrendatarios_compressed.png",
            items: [
                "Información clara y oficial en un solo lugar",
                "Solicitudes con seguimiento real",
                "Reservas, pagos y documentos siempre disponibles",
                "Más participación, menos confusión"
            ]
        },
        {
            role: "Administrador",
            subtitle: "Control total y paz mental",
            image: "/assets/PorqueE/administradores_compressed.png",
            items: [
                "Operación centralizada y trazable",
                "Menos reprocesos, menos discusiones",
                "Control total de accesos, solicitudes, finanzas y documentos",
                "Decisiones respaldadas con información clara"
            ]
        },
        {
            role: "Operarios",
            subtitle: "Eficiencia en campo",
            image: "/assets/PorqueE/operarios_compressed.png",
            items: [
                "Procesos claros y fáciles de ejecutar",
                "Registro de accesos y novedades sin papel",
                "Menos errores, más respaldo",
                "Comunicación directa con la administración"
            ]
        }
    ];

    return (
        <div className="pt-20 bg-white font-sans text-torre min-h-screen">

            {/* 1. HERO SECTION */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-domo/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center">

                        {/* Text Content */}
                        <div className="w-full max-w-7xl mx-auto">
                            <h1 className="text-h2 md:text-display font-bold text-torre leading-tight mb-8 tracking-tight">
                                Conectamos comunidades, <span className="text-domo">simplificamos tu administración.</span>
                            </h1>
                            <p className="text-lead text-gray-500 mb-10 leading-relaxed max-w-5xl mx-auto">
                                En DomoNow centralizamos la operación, la comunicación y la información en una sola plataforma para brindar tranquilidad a la administración y a quienes viven o trabajan en la copropiedad.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" onClick={onOpenDemo} className="shadow-xl shadow-domo/20 px-10">
                                    Habla con un asesor DomoNow
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. PROPERTY TYPES GRID */}
            <section className="py-24 bg-arquitectura">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-h2 font-bold text-torre leading-tight">
                            ¿Por qué DomoNow según tu tipo de propiedad?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {propertyTypes.map((type, index) => (
                            <div key={index} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">

                                {/* Card Header */}
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-12 h-12 bg-arquitectura rounded-full flex items-center justify-center text-torre group-hover:bg-domo group-hover:text-white transition-colors">
                                        {type.icon}
                                    </div>
                                    <span className="text-tiny font-bold text-gray-400 uppercase tracking-widest mt-3">
                                        {type.id}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <h3 className="text-h3 font-bold text-torre mb-6 leading-tight">
                                        {type.title}
                                    </h3>

                                    <ul className="space-y-3">
                                        {type.items.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-body text-gray-500 leading-snug">
                                                <div className="mt-2 min-w-[5px] h-[5px] rounded-full bg-domo/40 shrink-0"></div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. ROLES SECTION */}
            <section className="bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center py-20 max-w-3xl mx-auto">
                        <h2 className="text-h2 font-bold text-torre leading-tight">
                            ¿Cómo ayuda DomoNow a cada rol?
                        </h2>
                        <p className="text-lead text-gray-500 mt-4">
                            Una plataforma diseñada para mejorar la experiencia de todos.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 pb-24">

                        {/* LEFT: STICKY IMAGE CONTAINER */}
                        <div className="hidden lg:block lg:w-1/2 relative">
                            <div className="sticky top-32 h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
                                {rolesData.map((role, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeRole === index ? 'opacity-100' : 'opacity-0'}`}
                                    >
                                        <img
                                            src={role.image}
                                            alt={role.role}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-10 left-10 text-white">
                                            <p className="text-tiny font-bold tracking-widest uppercase mb-2 opacity-80">Rol 0{index + 1}</p>
                                            <h3 className="text-h2 font-bold leading-tight">{role.role}</h3>
                                            <p className="text-lead text-white/90 mt-2">{role.subtitle}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: SCROLLING CONTENT */}
                        <div className="w-full lg:w-1/2">
                            <div className="flex flex-col">
                                {rolesData.map((role, index) => (
                                    <div
                                        key={index}
                                        ref={(el) => { sectionRefs.current[index] = el; }}
                                        className="min-h-[80vh] flex flex-col justify-center py-12 border-b border-gray-100 lg:border-none last:border-0"
                                    >
                                        {/* Mobile Image */}
                                        <div className="lg:hidden w-full h-64 rounded-[2rem] overflow-hidden mb-8 relative shadow-lg">
                                            <img src={role.image} alt={role.role} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/40"></div>
                                            <div className="absolute bottom-6 left-6 text-white">
                                                <h3 className="text-h3 font-bold">{role.role}</h3>
                                            </div>
                                        </div>

                                        <div className={`transition-all duration-500 ${activeRole === index ? 'lg:opacity-100 lg:translate-x-0' : 'lg:opacity-40 lg:translate-x-4'}`}>
                                            <h3 className="text-h2 font-bold text-torre mb-2 hidden lg:block">
                                                {role.role}
                                            </h3>
                                            <p className="text-lead text-domo font-medium mb-8 hidden lg:block">
                                                {role.subtitle}
                                            </p>

                                            <ul className="space-y-6">
                                                {role.items.map((item, i) => (
                                                    <li key={i} className="flex gap-4 items-start text-body text-gray-600 leading-snug">
                                                        <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-domo shrink-0 mt-1">
                                                            <CheckCircle2 size={18} />
                                                        </div>
                                                        <span className="mt-1.5">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}

                                <div className="h-[20vh] hidden lg:block"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. FINAL CTA SECTION - "Únete a una nueva forma..." */}
            <section className="py-24 bg-arquitectura">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Left: Text (Was Right) */}
                        <div className="w-full lg:w-1/2 lg:pr-10">
                            <h2 className="text-h2 font-bold text-torre leading-tight mb-8">
                                Únete a una nueva forma de administrar comunidades
                            </h2>
                            <div className="space-y-6 text-lead text-gray-500 leading-relaxed">
                                <p>
                                    Cada día, más administradores y comunidades están dejando atrás el desorden, los mensajes sueltos y la gestión manual.
                                </p>
                                <p>
                                    Con <span className="text-domo font-bold">DomoNow</span>, la administración recupera el control y la comunidad recupera la tranquilidad.
                                </p>
                            </div>

                            <div className="mt-10">
                                <Button size="lg" onClick={onOpenDemo} className="shadow-lg px-12">
                                    Comienza ahora
                                </Button>
                            </div>
                        </div>

                        {/* Right: Image (Was Left) */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <img
                                    src="/assets/PorqueE/unete_compressed.png"
                                    alt="Gestión administrativa eficiente"
                                    className="w-full h-auto object-cover"
                                />

                                {/* Decorative Overlay Card */}
                                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-[2rem] shadow-lg border border-white/50 flex flex-col gap-3 max-w-[220px] animate-[pulse_5s_infinite]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <div className="h-2 w-24 bg-gray-200 rounded-full"></div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <div className="h-2 w-20 bg-gray-200 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-domo/10 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-horizonte/20 rounded-full blur-3xl -z-10"></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 5. FINAL CONTACT FORM SECTION - "Descubre cómo..." */}
            <section className="py-24 bg-[#F9F5FF] relative overflow-hidden">

                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-200/60 to-pink-200/60 rounded-full blur-[100px] pointer-events-none -translate-y-1/3 translate-x-1/3 mix-blend-multiply opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-domo/10 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-start justify-center">

                        {/* Text Left */}
                        <div className="lg:w-5/12 pt-8">
                            <h2 className="text-h2 font-bold text-torre leading-tight mb-6">
                                Descubre cómo DomoNow se adapta a tu copropiedad
                            </h2>
                            <div className="text-lead text-gray-500 leading-relaxed mb-8 space-y-4">
                                <p>
                                    Agenda una demostración personalizada y veamos juntos cómo nuestra tecnología resuelve los desafíos específicos de tu comunidad.
                                </p>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex items-center gap-4 text-small text-gray-500 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white/50 w-max">
                                <div className="flex -space-x-3">
                                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User" />
                                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User" />
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User" />
                                </div>
                                <p><span className="font-bold text-domo">+500</span> administradores felices</p>
                            </div>
                        </div>

                        {/* Form Right */}
                        <div className="lg:w-7/12 w-full">
                            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-purple-50">
                                <ContactForm />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};