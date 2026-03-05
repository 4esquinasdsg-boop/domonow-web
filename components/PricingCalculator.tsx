import React, { useState, useCallback } from 'react';
import { Check, Shield, Clock, RefreshCw, Phone } from 'lucide-react';

const plans = [
    {
        id: 'basico',
        name: 'Básico',
        desc: 'Para edificios pequeños con funciones esenciales',
        basePrice: 400000,
        pricePerUnit: 4000,
        recommended: false,
        features: ['Portería', 'Botón de Pánico', 'Comunicaciones', 'PQRS'],
    },
    {
        id: 'medio',
        name: 'Medio',
        desc: 'Para comunidades que buscan más control y participación',
        basePrice: 600000,
        pricePerUnit: 6000,
        recommended: true,
        features: [
            'Portería', 'Botón de Pánico', 'Comunicaciones', 'PQRS',
            'Reservas', 'Eventos', 'Encuestas', 'Votaciones', 'Super Administrador',
        ],
    },
    {
        id: 'todo',
        name: 'Todo Incluido',
        desc: 'Solución completa para comunidades modernas',
        basePrice: 800000,
        pricePerUnit: 8000,
        recommended: false,
        features: [
            'Portería', 'Botón de Pánico', 'Comunicaciones', 'PQRS',
            'Reservas', 'Eventos', 'Encuestas', 'Votaciones', 'Super Administrador',
            'Asambleas', 'Normativo', 'Documental', 'Financiero',
        ],
    },
];

const trustItems = [
    { icon: Clock, title: '30 días gratis', desc: 'Prueba sin compromiso.' },
    { icon: RefreshCw, title: 'Sin permanencia', desc: 'Cancela cuando quieras.' },
    { icon: Shield, title: 'Garantía 6 meses', desc: 'Money-back total.' },
];

function formatCOP(value: number): string {
    return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

interface PricingCalculatorProps {
    onOpenDemo: () => void;
}

const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onOpenDemo }) => {
    const [units, setUnits] = useState(100);
    const [selectedPlan, setSelectedPlan] = useState('medio');

    const isMax = units >= 400;

    const handleSliderChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setUnits(Number(e.target.value));
    }, []);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value === '' ? 1 : Math.max(1, Math.min(400, Number(e.target.value)));
        setUnits(val);
    }, []);

    const currentPlan = plans.find((p) => p.id === selectedPlan)!;
    const totalPrice = units <= 100
        ? currentPlan.basePrice
        : currentPlan.basePrice + (units - 100) * currentPlan.pricePerUnit;
    const sliderPercent = ((units - 1) / (400 - 1)) * 100;

    return (
        <section className="py-14 md:py-20 bg-white" id="pricing">
            <div className="container mx-auto px-5 md:px-6">

                {/* ── Header ── */}
                <div className="text-center mb-8 md:mb-10">
                    <span className="inline-flex items-center gap-2 bg-domo/10 text-domo text-tiny font-semibold px-4 py-1.5 rounded-full mb-4">
                        Planes y precios
                    </span>
                    <h2 className="text-h3 md:text-h2 font-bold text-torre leading-tight">
                        Encuentra el plan ideal <span className="text-domo">para tu comunidad</span>
                    </h2>
                </div>

                {/* ── Main layout: cards left + controls right ── */}
                <div className="flex flex-col lg:flex-row gap-6 max-w-[1200px] mx-auto">

                    {/* LEFT: 3 Plan Cards side by side */}
                    <div className="flex flex-col sm:flex-row gap-4 lg:w-[60%]">
                        {plans.map((plan) => {
                            const isSelected = selectedPlan === plan.id;
                            const planTotal = units <= 100
                                ? plan.basePrice
                                : plan.basePrice + (units - 100) * plan.pricePerUnit;
                            return (
                                <button
                                    key={plan.id}
                                    onClick={() => setSelectedPlan(plan.id)}
                                    className={`
                    relative text-left rounded-2xl p-5 transition-all duration-300 border-2 cursor-pointer flex-1 flex flex-col group
                    ${isSelected
                                            ? 'border-domo bg-white shadow-xl shadow-domo/10'
                                            : 'border-gray-200 bg-white hover:border-domo/40 hover:shadow-lg'
                                        }
                  `}
                                >
                                    {/* Recommended badge */}
                                    {plan.recommended && (
                                        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-[11px] font-bold px-4 py-1 rounded-full shadow-md whitespace-nowrap uppercase tracking-wider">
                                            Más Popular
                                        </span>
                                    )}

                                    {/* Plan name */}
                                    <h3 className={`text-[1.05rem] font-bold text-center mb-1 pt-1 ${isSelected ? 'text-domo' : 'text-torre'} transition-colors`}>
                                        {plan.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[0.7rem] text-gray-400 text-center leading-snug mb-3">
                                        {plan.desc}
                                    </p>

                                    {/* Total price (dynamic) */}
                                    <div className="text-center mb-1">
                                        <span className={`text-[1.6rem] font-extrabold ${isSelected ? 'text-domo' : 'text-torre'} transition-colors`}>
                                            {formatCOP(planTotal)}
                                        </span>
                                    </div>
                                    <p className="text-[0.7rem] text-gray-400 text-center mb-1">COP / mes</p>
                                    {units <= 100 ? (
                                        <p className="text-[0.6rem] text-gray-400 text-center mb-3">Hasta 100 unidades</p>
                                    ) : (
                                        <p className="text-[0.6rem] text-domo/70 text-center mb-3">
                                            Base {formatCOP(plan.basePrice)} + {formatCOP(plan.pricePerUnit)}/ud extra
                                        </p>
                                    )}

                                    {/* Divider */}
                                    <div className={`h-px mb-3 ${isSelected ? 'bg-domo/20' : 'bg-gray-100'}`} />

                                    {/* Module features */}
                                    <div className="flex-1">
                                        <p className="text-[0.65rem] text-gray-400 uppercase tracking-wide mb-2 text-center">Módulos incluidos</p>
                                        <ul className="space-y-1.5">
                                            {plan.features.map((feat, i) => (
                                                <li key={i} className="flex items-center gap-1.5 text-[0.75rem] text-gray-600 leading-snug">
                                                    <Check className={`w-3.5 h-3.5 flex-shrink-0 ${isSelected ? 'text-domo' : 'text-green-500'}`} />
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Bottom selection bar */}
                                    <div className={`mt-3 h-1 rounded-full transition-all duration-300 ${isSelected ? 'bg-domo' : 'bg-gray-100 group-hover:bg-domo/20'}`} />
                                </button>
                            );
                        })}
                    </div>

                    {/* RIGHT: Slider + Result + Trust + CTA */}
                    <div className="lg:w-[40%] flex flex-col gap-4">

                        {/* Slider panel */}
                        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex-1 flex flex-col justify-center">
                            <label className="block text-[0.85rem] font-semibold text-torre mb-1">
                                ¿Cuántas unidades tiene tu conjunto?
                            </label>

                            <div className="flex items-center justify-center gap-3 my-3">
                                <input
                                    type="number"
                                    min={1}
                                    max={400}
                                    value={units}
                                    onChange={handleInputChange}
                                    className="w-24 text-center text-h4 font-bold text-domo bg-white border-2 border-domo/30 rounded-xl py-1.5 focus:outline-none focus:border-domo transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                                <span className="text-[0.9rem] text-gray-400 font-medium">unidades</span>
                            </div>

                            <input
                                type="range"
                                min={1}
                                max={400}
                                value={units}
                                onChange={handleSliderChange}
                                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                                style={{
                                    background: `linear-gradient(to right, #820ad1 0%, #820ad1 ${sliderPercent}%, #e5e7eb ${sliderPercent}%, #e5e7eb 100%)`,
                                }}
                            />
                            <div className="flex justify-between mt-1 text-[0.7rem] text-gray-400 font-medium">
                                <span>1</span><span>100</span><span>200</span><span>300</span><span>400</span>
                            </div>

                            {isMax && (
                                <a href="https://wa.link/pyhyu4" target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center gap-2 bg-domo/5 border border-domo/20 rounded-xl p-3 text-[0.78rem] text-torre hover:bg-domo/10 transition-colors cursor-pointer">
                                    <Phone className="w-4 h-4 text-domo flex-shrink-0" />
                                    <span><strong className="text-domo">+400:</strong> Contacta ventas para cotización personalizada.</span>
                                </a>
                            )}
                        </div>

                        {/* Price result */}
                        <div className="bg-gradient-to-br from-domo via-purple-600 to-purple-700 rounded-2xl p-5 text-white text-center relative overflow-hidden flex-1 flex flex-col justify-center">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-8 -mt-8" />
                            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full -ml-5 -mb-5" />
                            <div className="relative z-10">
                                <p className="text-white/70 text-[0.72rem] font-medium mb-1">
                                    Total mensual · Plan {currentPlan.name} · {isMax ? '+400' : units} uds
                                </p>
                                <p className="text-[2.4rem] font-extrabold tracking-tight leading-none mb-1">
                                    {formatCOP(totalPrice)}
                                </p>
                                <p className="text-white/60 text-[0.7rem]">COP / mes</p>
                                {units <= 100 ? (
                                    <div className="flex items-center justify-center gap-2 mt-2.5 bg-white/10 rounded-full px-4 py-1.5 mx-auto w-fit">
                                        <span className="text-[0.85rem] font-semibold">Precio base hasta 100 uds</span>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center gap-1 mt-2.5">
                                        <div className="bg-white/10 rounded-full px-4 py-1.5 text-center">
                                            <span className="text-[0.78rem] font-semibold">Base {formatCOP(currentPlan.basePrice)}</span>
                                            <span className="text-white/70 text-[0.68rem]"> + {units - 100} uds extra × {formatCOP(currentPlan.pricePerUnit)}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Trust row */}
                        <div className="grid grid-cols-3 gap-3">
                            {trustItems.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-2.5 text-center hover:shadow-sm hover:border-domo/20 transition-all group flex flex-col justify-center">
                                        <div className="mx-auto w-8 h-8 bg-domo/10 rounded-full flex items-center justify-center mb-1.5 group-hover:bg-domo transition-colors">
                                            <Icon className="w-4 h-4 text-domo group-hover:text-white transition-colors" />
                                        </div>
                                        <h4 className="text-[0.72rem] font-bold text-torre leading-tight">{item.title}</h4>
                                        <p className="text-[0.62rem] text-gray-400 mt-0.5">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <p className="text-center text-[0.68rem] text-gray-400 italic -mt-1">* Aplican términos y condiciones</p>

                        {/* CTA */}
                        <button
                            onClick={onOpenDemo}
                            className="flex items-center justify-center gap-2 bg-domo hover:bg-purple-700 text-white text-[0.9rem] font-bold px-6 py-3 rounded-full shadow-lg shadow-domo/30 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 w-full cursor-pointer"
                        >
                            Comenzar prueba gratis
                        </button>
                    </div>

                </div>
            </div>

            {/* Slider thumb styles */}
            <style>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #820ad1;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(130, 10, 209, 0.4);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 4px 12px rgba(130, 10, 209, 0.5);
        }
        input[type="range"]::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #820ad1;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(130, 10, 209, 0.4);
        }
      `}</style>
        </section>
    );
};

export default PricingCalculator;
