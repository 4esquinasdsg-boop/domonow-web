import React from 'react';
import { X, Check, Sparkles, AlertTriangle, ThumbsUp, ThumbsDown } from 'lucide-react';

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
    title = "Conoce cómo funciona",
    subtitle,
    items,
    imageSrc,
    variant = 'default',
    leftLabel = "Software tradicional:",
    rightLabel = "Con DomoNow:"
}) => {

    return (
        <section className="py-24 bg-arquitectura border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Header - Title centered */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-h2 font-bold text-torre leading-tight">
                        {title}
                    </h2>
                </div>

                {/* Layout: Cards + Center Image */}
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">

                        {/* DO Card - DomoNow (Fixed Width) */}
                        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 w-full lg:w-[380px] shrink-0">
                            {/* Card Content */}
                            <div className="flex h-full">
                                {/* Items List */}
                                <div className="flex-1 p-8 pr-4">
                                    {/* Logo Header */}
                                    <div className="flex items-center gap-3 mb-8">
                                        <img
                                            src="/assets/Logo/LogoPiramide.png"
                                            alt="DomoNow"
                                            className="h-10 w-auto"
                                        />
                                    </div>

                                    {/* Items */}
                                    <div className="space-y-5">
                                        {items.map((item, index) => (
                                            <div
                                                key={`solution-${index}`}
                                                className="flex items-start gap-4 group/item"
                                            >
                                                <div className="w-8 h-8 rounded-full bg-domo flex items-center justify-center shrink-0 shadow-lg shadow-domo/30 group-hover/item:scale-110 transition-transform duration-300">
                                                    <Check size={16} className="text-white" strokeWidth={3} />
                                                </div>
                                                <div className="flex-1 pt-1">
                                                    <p className="text-body font-medium text-torre leading-snug">{item.solution}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Vertical Bar with Label */}
                                <div className="relative w-20 bg-domo flex flex-col items-center justify-center rounded-r-3xl self-stretch">
                                    {/* Vertical Text */}
                                    <span className="text-white font-bold text-xl tracking-widest writing-mode-vertical transform rotate-180" style={{ writingMode: 'vertical-rl' }}>
                                        CON DOMONOW
                                    </span>
                                    {/* Thumbs Up Icon */}
                                    <div className="absolute bottom-6 bg-white/20 rounded-full p-2 backdrop-blur-sm">
                                        <ThumbsUp size={24} className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Center Image with Animation */}
                        <div className="hidden lg:flex items-stretch justify-center shrink-0 self-stretch">
                            <div
                                className="relative w-[480px] h-full rounded-[2rem] overflow-hidden shadow-2xl"
                                style={{
                                    animation: 'float 4s ease-in-out infinite'
                                }}
                            >
                                <img
                                    src={imageSrc}
                                    alt="Comparación"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* DON'T Card - Traditional Software (Fixed Width) */}
                        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 w-full lg:w-[380px] shrink-0">
                            {/* Card Content */}
                            <div className="flex h-full">
                                {/* Vertical Bar with Label */}
                                <div className="relative w-20 bg-red-500 flex flex-col items-center justify-center rounded-l-3xl self-stretch">
                                    {/* Vertical Text */}
                                    <span className="text-white font-bold text-lg tracking-widest" style={{ writingMode: 'vertical-rl' }}>
                                        TRADICIONAL
                                    </span>
                                    {/* Thumbs Down Icon */}
                                    <div className="absolute bottom-6 bg-white/20 rounded-full p-2 backdrop-blur-sm">
                                        <ThumbsDown size={24} className="text-white" />
                                    </div>
                                </div>

                                {/* Items List */}
                                <div className="flex-1 p-8 pl-4">
                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-8">
                                        <AlertTriangle className="text-red-400 w-6 h-6" />
                                        <span className="text-body font-bold text-gray-500">{leftLabel}</span>
                                    </div>

                                    {/* Items */}
                                    <div className="space-y-5">
                                        {items.map((item, index) => (
                                            <div
                                                key={`problem-${index}`}
                                                className="flex items-start gap-4 group/item"
                                            >
                                                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center shrink-0 shadow-lg shadow-red-500/30 group-hover/item:scale-110 transition-transform duration-300">
                                                    <X size={16} className="text-white" strokeWidth={3} />
                                                </div>
                                                <div className="flex-1 pt-1">
                                                    <p className="text-body font-medium text-gray-600 leading-snug">{item.problem}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
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
