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
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
    title = "Conoce cómo funciona",
    subtitle,
    items,
    imageSrc,
    variant = 'default'
}) => {
    const isSuperAdmin = variant === 'superadmin';
    const displayTitle = isSuperAdmin
        ? "Cuando todo depende de ti, necesitas una plataforma que piense contigo"
        : title;

    return (
        <section className="py-24 bg-arquitectura border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-h2 font-bold text-torre leading-tight mb-4">
                        <span className="text-domo">{displayTitle}</span>
                    </h2>
                    {subtitle && (
                        <p className="text-lead text-gray-500">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* 3-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Column: Problems (Negative) */}
                    <div className="lg:col-span-4 space-y-6">
                        {items.map((item, index) => (
                            <div key={`prob-${index}`} className="bg-white p-6 rounded-[2rem] border border-red-50 shadow-sm hover:shadow-md transition-all group">
                                <div className="mb-3 text-red-400">
                                    <X size={20} />
                                </div>
                                <p className="text-body text-gray-600 font-medium leading-snug">
                                    {item.problem}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Middle Column: Central Image (4:5 Aspect Ratio) */}
                    <div className="lg:col-span-4 flex justify-center">
                        <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src={imageSrc}
                                alt="DomoNow in action"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-torre/20 to-transparent"></div>
                        </div>
                    </div>

                    {/* Right Column: Solutions (Positive) */}
                    <div className="lg:col-span-4 space-y-6">
                        {items.map((item, index) => (
                            <div key={`sol-${index}`} className="bg-white p-6 rounded-[2rem] border border-purple-50 shadow-lg hover:shadow-xl transition-all group">
                                <div className="mb-3 text-domo">
                                    <Check size={20} />
                                </div>
                                <p className="text-body text-torre font-bold leading-snug">
                                    {item.solution}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};
