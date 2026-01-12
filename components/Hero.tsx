import React from 'react';
import { Button } from './Button';
import { ArrowUpRight, ShieldCheck, Users, TrendingUp, Bell } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative pt-32 pb-20 bg-arquitectura overflow-hidden min-h-[90vh] flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:pl-32">

          {/* Left: Visual Composition */}
          <div className="lg:w-1/2 relative w-full max-w-lg lg:max-w-none mx-auto">
            <div className="relative z-10">
              {/* Main "Phone" or Dashboard Card */}
              <div className="bg-torre rounded-[2.5rem] p-6 text-white shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 border border-gray-700">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-domo rounded-full flex items-center justify-center text-small font-bold">D</div>
                    <span className="font-bold text-small">DomoNow App</span>
                  </div>
                  <Bell className="w-5 h-5 text-gray-400" />
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                    <p className="text-tiny text-gray-400 mb-1">Recaudo Total</p>
                    <div className="flex justify-between items-end">
                      <span className="text-h3 font-bold">$12.5M</span>
                      <div className="bg-horizonte text-torre text-tiny font-bold px-2 py-1 rounded-full flex items-center gap-1">
                        <TrendingUp size={12} /> +15%
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-domo p-4 rounded-2xl">
                      <Users className="w-6 h-6 mb-2 text-white/80" />
                      <div className="text-h4 font-bold">142</div>
                      <div className="text-tiny text-white/60">Unidades</div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl text-torre">
                      <ShieldCheck className="w-6 h-6 mb-2 text-domo" />
                      <div className="text-h4 font-bold">99%</div>
                      <div className="text-tiny text-gray-500">Seguridad</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Element 1 (Top Left) */}
              <div className="absolute -top-12 -left-8 bg-white p-4 rounded-3xl shadow-lg animate-[bounce_4s_infinite]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-horizonte/20 rounded-full flex items-center justify-center text-horizonte">
                    <ArrowUpRight size={20} />
                  </div>
                  <div>
                    <p className="text-tiny text-gray-500 font-bold uppercase">Eficiencia</p>
                    <p className="font-bold text-body text-torre">Optimizado</p>
                  </div>
                </div>
              </div>

              {/* Floating Element 2 (Bottom Right) */}
              <div className="absolute -bottom-8 -right-4 bg-domo p-5 rounded-3xl shadow-xl animate-[bounce_5s_infinite] delay-700 max-w-[200px]">
                <p className="text-white text-small font-medium leading-snug">
                  "¡El pago de la administración fue exitoso!"
                </p>
              </div>
            </div>

            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white rounded-full blur-3xl -z-10 opacity-60"></div>
          </div>

          {/* Right: Typography */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-h2 lg:text-display font-bold text-torre mb-8 tracking-tight">
              Transforme la <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-domo to-horizonte">gestión de su propiedad</span> hoy.
            </h1>

            <p className="text-lead text-gray-500 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              ¿Está listo para simplificar y mejorar sus operaciones? DomoNow centraliza todo lo que necesita en una plataforma moderna.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="rounded-full px-10 py-4 shadow-xl" onClick={onOpenDemo}>
                Solicite demostración
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};