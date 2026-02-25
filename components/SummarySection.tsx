import React from 'react';
import { Button } from './Button';
import { useTranslation } from 'react-i18next';

interface SummarySectionProps {
    onOpenDemo: () => void;
}

export const SummarySection: React.FC<SummarySectionProps> = ({ onOpenDemo }) => {
    const { t } = useTranslation();
    const items = t('summarySection.items', { returnObjects: true }) as Array<{ title: string; desc: string }>;

    return (
        <section className="py-24 px-4 md:px-6 bg-white">
            <div className="container mx-auto">

                {/* Centered Title Area */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-h3 md:text-h2 font-bold text-torre mb-4 leading-tight">
                        {t('summarySection.title')} <span className="text-domo">{t('summarySection.titleHighlight')}</span>
                    </h2>
                    <p className="text-lead text-gray-500">
                        <span className="domonow-gradient">DomoNow</span> {t('summarySection.subtitle').split('DomoNow')[1] || t('summarySection.subtitle')}
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Dashboard Image */}
                    <div className="relative">
                        <img
                            src="/assets/home/dashboard_preview.png"
                            alt="DomoNow Dashboard"
                            className="w-full rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                            onError={(e) => {
                                e.currentTarget.src = "/assets/home/unidad_compressed.png";
                            }}
                        />
                    </div>

                    {/* Right Column: Benefits List */}
                    <div className="flex flex-col gap-6">

                        {items.map((item, index) => (
                            <div key={index} className="flex gap-6 items-start p-4 rounded-2xl hover:bg-arquitectura transition-colors group/item">
                                <span className="w-10 h-10 min-w-[2.5rem] rounded-full bg-arquitectura flex items-center justify-center text-small font-bold text-gray-500 group-hover/item:bg-domo group-hover/item:text-white transition-colors">{index + 1}</span>
                                <div>
                                    <h3 className="text-h4 font-bold text-torre mb-2">{item.title}</h3>
                                    <p className="text-body text-gray-500">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Bottom section with text and stat card */}
                        <div className="flex gap-6 items-center mt-4">
                            <p className="flex-1 text-body text-gray-600 leading-relaxed">
                                {t('summarySection.bottomText')}
                            </p>

                            {/* Dynamic Stats Card with floating elements */}
                            <div className="relative">
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 animate-bounce-slow">
                                    <div className="w-7 h-7 bg-green-400 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">✓</span>
                                    </div>
                                </div>

                                <div className="absolute -bottom-3 -left-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-10 animate-float">
                                    <div className="w-5 h-2.5 bg-domo rounded-full relative">
                                        <div className="absolute right-0.5 top-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-domo via-purple-600 to-purple-700 rounded-full w-[150px] h-[150px] text-white flex flex-col items-center justify-center shadow-xl shadow-domo/40 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-14 h-14 bg-white/10 rounded-full -mr-5 -mt-5"></div>
                                    <div className="absolute bottom-0 left-0 w-10 h-10 bg-white/5 rounded-full -ml-3 -mb-3"></div>

                                    <div className="relative z-10 text-center">
                                        <span className="text-h2 font-bold tracking-tight block">{t('summarySection.statValue')}</span>
                                        <span className="text-tiny text-white/90 block">{t('summarySection.statLabel')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Purple CTA Button */}
                        <Button size="lg" className="w-fit mt-2" onClick={onOpenDemo}>
                            {t('summarySection.cta')}
                        </Button>

                    </div>

                </div>

            </div>

            {/* Custom animation */}
            <style>{`
                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1); box-shadow: 0 10px 25px -5px rgba(139, 92, 246, 0.3); }
                    50% { transform: scale(1.02); box-shadow: 0 15px 35px -5px rgba(139, 92, 246, 0.4); }
                }
                .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
                @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(-3px) translateX(2px); }
                }
                .animate-float { animation: float 3s ease-in-out infinite; }
            `}</style>
        </section>
    );
};