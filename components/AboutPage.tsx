import React, { useEffect, useState, useRef } from 'react';
import { Button } from './Button';
import { Users, Target, Heart, ShieldCheck, Zap, Layers, Award, CheckCircle, ChevronDown } from 'lucide-react';

interface AboutPageProps {
    onOpenDemo: () => void;
}

// Componente para números animados
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const increment = end / (duration / 16); // 60fps aprox
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end, duration, isVisible]);

    return <span ref={countRef}>{count}{suffix}</span>;
};

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenDemo }) => {
    const [activeAccordion, setActiveAccordion] = useState<string | null>('propósito');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleAccordion = (id: string) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    return (
        <div className="pt-20 bg-arquitectura font-sans text-torre">

            {/* 1. HERO SECTION */}
            <section className="relative py-20 overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-domo/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-horizonte/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Text Content */}
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
                                <span className="w-2 h-2 rounded-full bg-domo"></span>
                                <span className="text-tiny font-bold text-gray-500 uppercase tracking-wider">Nuestra Historia</span>
                            </div>
                            <h1 className="text-h2 md:text-display font-bold text-torre leading-none mb-6 tracking-tight">
                                Transformamos la <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-domo to-purple-600">vida en comunidad.</span>
                            </h1>
                            <div className="prose text-lead text-gray-500 mb-8 leading-relaxed space-y-6">
                                <p>
                                    DomoNow nace de una necesidad concreta: cambiar una gestión fragmentada y manual por una experiencia <strong>organizada, transparente y eficiente</strong>.
                                </p>
                                <p className="flex items-start gap-3 text-body bg-white/50 p-4 rounded-2xl border border-gray-100">
                                    <ShieldCheck className="text-domo shrink-0 mt-1" size={24} />
                                    <span>
                                        Respaldados por <strong>Ofima</strong>, con más de <strong className="text-domo">25 años</strong> desarrollando soluciones tecnológicas para necesidades reales.
                                    </span>
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <Button size="lg" onClick={onOpenDemo} className="shadow-xl shadow-domo/20">
                                    Agenda una reunión
                                </Button>
                            </div>
                        </div>

                        {/* Visual Content - Floating Composition */}
                        <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-md md:max-w-lg">
                                {/* Main Image - Border removed as requested */}
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-700 h-[500px]">
                                    <img
                                        src="/assets/Nosotros/nosotroshero_compressed.png"
                                        alt="Teamwork"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </div>

                                {/* Floating Badge 1: Animated Experience */}
                                <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-[2rem] shadow-xl border border-gray-100 flex items-center gap-4 animate-[bounce_3s_infinite]">
                                    <div className="bg-horizonte/20 p-3 rounded-full text-horizonte">
                                        <Award size={28} />
                                    </div>
                                    <div>
                                        <p className="text-h3 font-bold text-torre leading-none flex">
                                            +<AnimatedCounter end={25} duration={2000} />
                                        </p>
                                        <p className="text-tiny font-bold text-gray-400 uppercase">Años de experiencia</p>
                                    </div>
                                </div>

                                {/* Floating Badge 2: Ofima */}
                                <div className="absolute -top-4 -right-4 bg-domo text-white p-4 rounded-2xl shadow-lg shadow-domo/30 transform -rotate-3 hover:rotate-0 transition-transform">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle size={18} />
                                        <span className="font-bold text-small">Respaldado por Ofima</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. PHILOSOPHY & VALUES - Split Layout (2x2 Image Grid Left, Accordion Right) */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Subtle decorative bg */}
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                        {/* LEFT: 2x2 Image Grid */}
                        <div className="relative order-2 lg:order-1 h-full min-h-[500px]">
                            <div className="sticky top-28 w-full h-[600px]">
                                <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full w-full">
                                    {/* Image 1: Community/People */}
                                    <div className="relative rounded-[2rem] overflow-hidden shadow-lg group">
                                        <img
                                            src="/assets/Nosotros/esencia1_compressed.png"
                                            alt="Comunidad"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                                    </div>

                                    {/* Image 2: Architecture/Building */}
                                    <div className="relative rounded-[2rem] overflow-hidden shadow-lg group">
                                        <img
                                            src="/assets/Nosotros/esencia2_compressed.png"
                                            alt="Infraestructura"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                                    </div>

                                    {/* Image 3: Technology/Connection */}
                                    <div className="relative rounded-[2rem] overflow-hidden shadow-lg group">
                                        <img
                                            src="/assets/Nosotros/esencia3_compressed.png"
                                            alt="Tecnología"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                                    </div>

                                    {/* Image 4: Trust/Handshake */}
                                    <div className="relative rounded-[2rem] overflow-hidden shadow-lg group">
                                        <img
                                            src="/assets/Nosotros/esencia4_compressed.png"
                                            alt="Confianza"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                                    </div>
                                </div>

                                {/* Overlay Content - Floating over the center/bottom */}
                                <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-white/50 shadow-lg">
                                        <span className="w-2 h-2 rounded-full bg-domo animate-pulse"></span>
                                        <span className="text-xs font-bold uppercase tracking-wider text-torre">Cultura DomoNow</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Content & Accordion */}
                        <div className="order-1 lg:order-2 flex flex-col justify-center">

                            <div className="mb-10 text-left">
                                <span className="text-domo font-bold tracking-widest uppercase text-tiny">Nuestra Esencia</span>
                                <h2 className="text-h2 font-bold text-torre mt-4 leading-tight">Lo que nos mueve</h2>
                                <p className="text-lead text-gray-500 mt-6 leading-relaxed">
                                    Nuestros valores definen cómo creamos tecnología y cómo nos relacionamos con cada comunidad que confía en nosotros.
                                </p>
                            </div>

                            <div className="space-y-4">

                                {/* 1. Purpose */}
                                <div className="border-b border-gray-100">
                                    <button
                                        onClick={() => toggleAccordion('propósito')}
                                        className="w-full flex items-center justify-between py-6 group text-left hover:text-domo transition-colors"
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-torre transition-all duration-300">
                                                <Heart size={26} fill={activeAccordion === 'propósito' ? "currentColor" : "none"} />
                                            </div>
                                            <h2 className="text-h3 font-bold text-torre group-hover:text-domo transition-colors">Nuestro Propósito</h2>
                                        </div>
                                        <div className={`transition-transform duration-300 text-gray-400 ${activeAccordion === 'propósito' ? 'rotate-180 text-domo' : ''}`}>
                                            <ChevronDown size={28} />
                                        </div>
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === 'propósito' ? 'max-h-[500px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
                                        <div className="pl-20 pr-4">
                                            <p className="text-body text-gray-600 leading-relaxed border-l-2 border-domo pl-6">
                                                "Mejorar la calidad de vida a través de la tecnología, creando entornos más organizados, transparentes y conectados. Creemos que una buena administración no solo gestiona recursos, sino que construye comunidades sólidas."
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Vision */}
                                <div className="border-b border-gray-100">
                                    <button
                                        onClick={() => toggleAccordion('visión')}
                                        className="w-full flex items-center justify-between py-6 group text-left hover:text-domo transition-colors"
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-torre transition-all duration-300">
                                                <Target size={26} />
                                            </div>
                                            <h2 className="text-h3 font-bold text-torre group-hover:text-domo transition-colors">Nuestra Visión</h2>
                                        </div>
                                        <div className={`transition-transform duration-300 text-gray-400 ${activeAccordion === 'visión' ? 'rotate-180 text-domo' : ''}`}>
                                            <ChevronDown size={28} />
                                        </div>
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === 'visión' ? 'max-h-[500px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
                                        <div className="pl-20 pr-4">
                                            <p className="text-body text-gray-600 leading-relaxed border-l-2 border-horizonte pl-6">
                                                "Ser la plataforma líder en <strong className="text-torre">Latinoamérica y Estados Unidos</strong> que conecta y transforma la vida en comunidad, impulsando modelos de gestión más colaborativos."
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 3. Nuestros Pilares (Grouped Values) */}
                                <div className="border-b border-gray-100">
                                    <button
                                        onClick={() => toggleAccordion('pilares')}
                                        className="w-full flex items-center justify-between py-6 group text-left hover:text-domo transition-colors"
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-torre transition-all duration-300">
                                                <Award size={26} />
                                            </div>
                                            <h2 className="text-h3 font-bold text-torre group-hover:text-domo transition-colors">Nuestros Pilares</h2>
                                        </div>
                                        <div className={`transition-transform duration-300 text-gray-400 ${activeAccordion === 'pilares' ? 'rotate-180 text-domo' : ''}`}>
                                            <ChevronDown size={28} />
                                        </div>
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === 'pilares' ? 'max-h-[1000px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
                                        <div className="pl-20 pr-4 mt-4">
                                            {/* Added vertical line here with color #E9D5FF (purple-200 approx) */}
                                            <div className="space-y-8 border-l-2 border-[#E9D5FF] pl-6">

                                                {/* Value 1: Colaboración */}
                                                <div className="flex gap-6 group/item items-start">
                                                    <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-torre shrink-0">
                                                        <Users size={26} />
                                                    </div>
                                                    <div className="pt-1">
                                                        <h4 className="font-bold text-torre text-h4 mb-2">Colaboración</h4>
                                                        <p className="text-body text-gray-500 leading-relaxed">
                                                            Guía cada funcionalidad que desarrollamos, promoviendo comunidades más participativas.
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Value 2: Simplicidad */}
                                                <div className="flex gap-6 group/item items-start">
                                                    <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-torre shrink-0">
                                                        <Zap size={26} />
                                                    </div>
                                                    <div className="pt-1">
                                                        <h4 className="font-bold text-torre text-h4 mb-2">Simplicidad</h4>
                                                        <p className="text-body text-gray-500 leading-relaxed">
                                                            Tecnología clara, intuitiva y accesible. Hacemos lo complejo, simple para todos.
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Value 3: Confianza */}
                                                <div className="flex gap-6 group/item items-start">
                                                    <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-torre shrink-0">
                                                        <Layers size={26} />
                                                    </div>
                                                    <div className="pt-1">
                                                        <h4 className="font-bold text-torre text-h4 mb-2">Confianza</h4>
                                                        <p className="text-body text-gray-500 leading-relaxed">
                                                            Garantizamos información clara y segura para todos los actores de la comunidad.
                                                        </p>
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

            {/* 5. COMMITMENT CTA - OPEN LAYOUT (No Box/Card) */}
            <section className="py-24 bg-arquitectura relative overflow-hidden">

                {/* Subtle Decorative Elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-domo/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                        {/* Left: Text Content - Added padding right for compensation */}
                        <div className="order-2 lg:order-1 lg:pr-12">
                            <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-purple-100 shadow-sm text-domo text-tiny font-bold tracking-widest uppercase mb-6">
                                Nuestro Compromiso
                            </span>
                            <h2 className="text-h2 font-bold text-torre mb-6 leading-tight">
                                Comprometidos con <br />tu copropiedad.
                            </h2>
                            <p className="text-body text-gray-500 mb-8 leading-relaxed">
                                En DomoNow acompañamos a nuestros clientes desde la implementación hasta el uso cotidiano, entendiendo que cada comunidad tiene dinámicas, reglas y necesidades diferentes. Nuestro enfoque es ser un aliado tecnológico confiable, que aporta orden, visibilidad y control sin complejizar la operación.
                            </p>
                            <Button size="lg" onClick={onOpenDemo} className="bg-domo text-white hover:bg-purple-900 shadow-xl shadow-domo/20 px-8 py-4 rounded-full font-bold text-body">
                                Hablemos de tu comunidad
                            </Button>
                        </div>

                        {/* Right: Image - Standalone with style */}
                        <div className="order-1 lg:order-2 relative">
                            {/* Abstract decor behind image */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-domo to-horizonte opacity-10 blur-2xl rounded-[3rem]"></div>

                            <img
                                src="/assets/Nosotros/Comprometidos_compressed.png"
                                alt="Compromiso"
                                className="relative rounded-[2.5rem] w-full h-[500px] object-cover shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500"
                            />

                            {/* Optional Floating Tag */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                                <div className="bg-green-100 text-green-600 p-2 rounded-full">
                                    <CheckCircle size={24} />
                                </div>
                                <div>
                                    <p className="text-tiny font-bold text-gray-400 uppercase">Soporte</p>
                                    <p className="text-small font-bold text-torre">Acompañamiento Real</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};