import React from 'react';
import { Quote, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const AuthoritySection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="testimonials" className="py-24 bg-white">
            <div className="container mx-auto px-6">

                <div className="text-center mb-16">
                    <p className="text-small font-bold text-gray-400 uppercase tracking-widest mb-4">{t('authoritySection.eyebrow')}</p>
                    <h2 className="text-h2 md:text-h1 font-bold text-torre max-w-4xl mx-auto leading-tight">
                        {t('authoritySection.title')}
                    </h2>
                    <p className="mt-6 text-lead text-gray-500 max-w-2xl mx-auto">
                        {t('authoritySection.subtitle').split('DomoNow')[0]}<span className="domonow-gradient">DomoNow</span>{t('authoritySection.subtitle').split('DomoNow')[1]}
                    </p>
                </div>

                {/* 3 Cards Layout */}
                <div className="grid md:grid-cols-3 gap-6">

                    {/* Card 1: Confianza (Analytics Bar Chart Style) */}
                    <div className="bg-arquitectura p-8 rounded-[2.5rem] flex flex-col justify-between h-auto min-h-[500px] group hover:shadow-xl transition-all duration-500 relative overflow-hidden border border-transparent hover:border-domo/10">
                        <div className="relative z-10 mb-8">
                            <h3 className="text-h3 font-bold mb-4 text-torre">{t('authoritySection.card1Title')}</h3>
                            <p className="text-gray-500 text-body leading-relaxed">
                                {t('authoritySection.card1Desc')}
                            </p>
                        </div>

                        {/* Advanced Graphic Container */}
                        <div className="relative bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex-1 flex flex-col justify-end overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">

                            {/* Floating Metrics Pills */}
                            <div className="absolute top-6 left-6 right-6 flex justify-between gap-2">
                                <div className="bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-sm">
                                    {t('authoritySection.card1Collection')} <span className="text-green-600">{t('authoritySection.card1CollectionValue')}</span>
                                </div>
                                <div className="bg-domo/5 text-domo px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-sm">
                                    {t('authoritySection.card1PQR')} <span className="text-domo">{t('authoritySection.card1PQRValue')}</span>
                                </div>
                            </div>

                            {/* Dashed Average Line */}
                            <div className="absolute top-[55%] left-4 right-4 border-t-2 border-dashed border-gray-200 z-0">
                                <span className="absolute -top-5 left-0 text-[10px] text-gray-400 font-medium bg-white px-1">{t('authoritySection.card1Average')}</span>
                            </div>

                            {/* Bars Chart */}
                            <div className="flex items-end justify-between gap-3 h-[180px] relative z-10 pt-12">
                                <div className="w-full bg-gray-100 rounded-t-xl h-[40%] group-hover:h-[45%] transition-all duration-700 ease-out"></div>
                                <div className="w-full bg-gray-200 rounded-t-xl h-[60%] group-hover:h-[65%] transition-all duration-700 delay-75 ease-out"></div>
                                <div className="w-full relative h-[85%] group-hover:h-[92%] transition-all duration-700 delay-150 ease-out">
                                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-domo to-[#9D4EDD] rounded-t-xl shadow-lg shadow-domo/30"></div>
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-md z-20"></div>
                                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-xl"></div>
                                </div>
                                <div className="w-full bg-gray-100 rounded-t-xl h-[50%] group-hover:h-[55%] transition-all duration-700 delay-100 ease-out"></div>
                            </div>

                            <div className="mt-4 text-center">
                                <p className="text-h4 font-bold text-torre">{t('authoritySection.card1ChartTitle')}</p>
                                <p className="text-tiny text-gray-400">{t('authoritySection.card1ChartSubtitle').split('DomoNow')[0]}<span className="domonow-gradient">DomoNow</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Scale (Purple Card with Light Lilac Chart) */}
                    <div className="bg-domo p-8 rounded-[2.5rem] flex flex-col justify-between h-auto min-h-[500px] text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-h3 font-bold mb-4 text-white">{t('authoritySection.card2Title')}</h3>
                            <p className="text-white/80 leading-relaxed text-body mb-8">
                                {t('authoritySection.card2Desc')}
                            </p>
                        </div>

                        {/* Light Lilac Chart Container */}
                        <div className="relative bg-purple-100 rounded-[2rem] border border-purple-200 p-6 flex-1 flex flex-col overflow-hidden">

                            {/* Header of Chart */}
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <p className="text-tiny text-gray-600 font-medium uppercase tracking-wider">{t('authoritySection.card2TotalManaged')}</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-bold text-gray-900">+5.240</span>
                                        <span className="text-tiny text-green-600 bg-green-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                                            <ArrowUpRight size={10} /> +12%
                                        </span>
                                    </div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-domo/20 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-domo rounded-full shadow-[0_0_10px_#7C3AED]"></div>
                                </div>
                            </div>

                            {/* SVG Area Chart */}
                            <div className="mt-auto relative h-32 w-full">
                                <div className="absolute inset-0 flex flex-col justify-between opacity-20 pointer-events-none">
                                    <div className="border-t border-gray-400 w-full"></div>
                                    <div className="border-t border-gray-400 w-full"></div>
                                    <div className="border-t border-gray-400 w-full"></div>
                                </div>

                                <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="chartGradientPurple" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4" />
                                            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0 100 C 30 100, 50 80, 100 50 S 170 10, 200 0 V 100 Z" fill="url(#chartGradientPurple)" />
                                    <path
                                        d="M0 100 C 30 100, 50 80, 100 50 S 170 10, 200 0"
                                        fill="none"
                                        stroke="#7C3AED"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        className="drop-shadow-[0_0_8px_rgba(124,58,237,0.5)] chart-line-animation"
                                    />
                                    <circle cx="200" cy="0" r="4" fill="#7C3AED" stroke="white" strokeWidth="2" className="chart-dot-animation" />
                                </svg>
                                <style>{`
                                    .chart-line-animation {
                                        stroke-dasharray: 300;
                                        stroke-dashoffset: 300;
                                        animation: drawLineLoop 3s ease-in-out infinite;
                                    }
                                    .chart-dot-animation {
                                        opacity: 0;
                                        animation: fadeInLoop 3s ease-in-out infinite;
                                    }
                                    @keyframes drawLineLoop {
                                        0% { stroke-dashoffset: 300; }
                                        50% { stroke-dashoffset: 0; }
                                        100% { stroke-dashoffset: 0; }
                                    }
                                    @keyframes fadeInLoop {
                                        0%, 40% { opacity: 0; }
                                        50%, 100% { opacity: 1; }
                                    }
                                `}</style>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 (Testimonial) */}
                    <div className="bg-white p-4 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col h-auto min-h-[500px] relative group overflow-hidden">
                        <div className="relative h-[260px] w-full rounded-[2rem] overflow-hidden shrink-0">
                            <img
                                src="/assets/home/carlos_lopez_compressed.png"
                                alt="Carlos López"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        <div className="flex flex-col flex-1 p-4 pt-6">
                            <div className="mb-4">
                                <Quote className="text-domo w-8 h-8 mb-3 opacity-50 fill-current" />
                                <p className="text-body text-gray-600 italic leading-relaxed">
                                    "{t('authoritySection.card3Quote').split('DomoNow')[0]}<span className="domonow-gradient">DomoNow</span>{t('authoritySection.card3Quote').split('DomoNow')[1]}"
                                </p>
                            </div>

                            <div className="mt-auto pt-4 border-t border-gray-100">
                                <h4 className="text-h4 font-bold text-torre">{t('authoritySection.card3Name')}</h4>
                                <p className="text-small text-gray-400">{t('authoritySection.card3Role')}</p>
                                <p className="text-tiny text-domo mt-1 font-medium">{t('authoritySection.card3Location')}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};