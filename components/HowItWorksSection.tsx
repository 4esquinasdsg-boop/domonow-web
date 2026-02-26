import React from 'react';
import { X, Check } from 'lucide-react';

interface HowItWorksItem {
    problem: string;
    solution: string;
}

interface HowItWorksSectionProps {
    title?: string;
    subtitle?: string;
    items: HowItWorksItem[];
    imageSrc: string;
    variant?: 'default' | 'superadmin';
    leftLabel?: string;
    rightLabel?: string;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
    title = "Así mejoramos tu día a día",
    subtitle,
    items,
    imageSrc,
    variant = 'default',
    leftLabel = "Software tradicional:",
    rightLabel = "Con DomoNow:"
}) => {

    return (
        <section
            className="py-24 overflow-hidden relative bg-white"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Left decorative - problema image */}
                <div
                    className="absolute -left-20 -top-8 w-[300px] h-[400px] hidden md:block md:opacity-15 lg:opacity-30 xl:opacity-40 2xl:opacity-60"
                >
                    <img
                        src="/assets/problema.png"
                        alt=""
                        className="w-full h-full object-contain"
                        aria-hidden="true"
                    />
                </div>
                {/* Right decorative - solucion image */}
                <div
                    className="absolute -right-20 -bottom-8 w-[300px] h-[400px] hidden md:block md:opacity-15 lg:opacity-30 xl:opacity-40 2xl:opacity-60"
                >
                    <img
                        src="/assets/solucion.png"
                        alt=""
                        className="w-full h-full object-contain"
                        aria-hidden="true"
                    />
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-h2 font-bold text-torre leading-tight">
                        Así mejoramos tu día a día
                    </h2>
                </div>

                {/* Layout: Problems | Image | Solutions */}
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-6">

                        {/* LEFT COLUMN — Problems */}
                        <div className="flex-1 flex flex-col justify-center relative">
                            {/* Decorative image behind problems */}
                            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-56 h-64 pointer-events-none" style={{ opacity: 0.1 }}>
                                <img
                                    src="/assets/problema.png"
                                    alt=""
                                    className="w-full h-full object-contain"
                                    aria-hidden="true"
                                />
                            </div>

                            {/* Label */}
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-2 h-2 rounded-full bg-red-400" />
                                <span className="text-small font-semibold text-red-400 uppercase tracking-widest">
                                    {leftLabel}
                                </span>
                            </div>

                            {/* Items */}
                            <div className="space-y-6">
                                {items.map((item, index) => (
                                    <div
                                        key={`problem-${index}`}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="relative mt-1">
                                            <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                                                <X size={13} className="text-white" strokeWidth={3} />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-body font-medium text-torre leading-relaxed line-through decoration-red-400 decoration-1">
                                                {item.problem}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CENTER — Image */}
                        <div className="hidden lg:flex items-stretch justify-center shrink-0 self-stretch relative">

                            <div
                                className="relative w-[420px] h-full rounded-[2rem] overflow-hidden shadow-2xl"
                                style={{
                                    animation: 'float 4s ease-in-out infinite'
                                }}
                            >
                                <img
                                    src={imageSrc}
                                    alt="Comparación"
                                    className="w-full h-full object-cover"
                                />
                                {/* Subtle gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                            </div>
                        </div>

                        {/* Mobile image */}
                        <div className="lg:hidden flex justify-center my-4">
                            <div className="relative w-full max-w-sm rounded-[2rem] overflow-hidden shadow-xl">
                                <img
                                    src={imageSrc}
                                    alt="Comparación"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* RIGHT COLUMN — Solutions */}
                        <div className="flex-1 flex flex-col justify-center relative lg:pl-10">
                            {/* Decorative image behind solutions */}
                            <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-56 h-64 pointer-events-none" style={{ opacity: 0.1 }}>
                                <img
                                    src="/assets/solucion.png"
                                    alt=""
                                    className="w-full h-full object-contain"
                                    aria-hidden="true"
                                />
                            </div>

                            {/* Label */}
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-2 h-2 rounded-full bg-domo" />
                                <span className="text-small font-semibold text-domo uppercase tracking-widest">
                                    {rightLabel}
                                </span>
                            </div>

                            {/* Items */}
                            <div className="space-y-6">
                                {items.map((item, index) => (
                                    <div
                                        key={`solution-${index}`}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="relative mt-1">
                                            <div className="w-7 h-7 rounded-full bg-domo flex items-center justify-center shrink-0">
                                                <Check size={13} className="text-white" strokeWidth={3} />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-body font-medium text-torre leading-relaxed">
                                                {item.solution}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>

                    </div>
                </div>

                {/* Float Animation Keyframes */}
                <style>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-15px); }
                    }
                `}</style>
            </div>
        </section>
    );
};
