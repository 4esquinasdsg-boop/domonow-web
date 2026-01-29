import React from 'react';
import { Button } from './Button';

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative pt-32 pb-20 bg-arquitectura overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated Background Gradients - Purple/Violet circles on sides */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite_2s]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-16">

          {/* Left on Desktop: Video (hidden on mobile, shown on xl) */}
          <div className="hidden xl:block xl:w-1/2 relative w-full max-w-lg xl:max-w-none mx-auto">
            <div className="relative z-10">
              {/* Hero Video */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  <source src="/assets/Inicio/Hero_Video.mp4" type="video/mp4" />
                  Tu navegador no soporta videos HTML5.
                </video>
              </div>

              {/* Floating Animation - Bottom Left (Mini Dashboard) */}
              <div className="absolute -bottom-6 -left-6 w-[200px] bg-torre rounded-2xl p-4 text-white shadow-2xl border border-gray-700 z-20 animate-[bounce_6s_infinite]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-domo rounded-full flex items-center justify-center text-xs font-bold">D</div>
                  <span className="font-bold text-xs">DomoNow</span>
                </div>
                <div className="bg-white/10 p-3 rounded-xl mb-2">
                  <p className="text-[10px] text-gray-400 mb-1">Recaudo Total</p>
                  <div className="flex justify-between items-end">
                    <span className="text-lg font-bold">$12.5M</span>
                    <span className="bg-horizonte text-torre text-[9px] font-bold px-1.5 py-0.5 rounded-full">+15%</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-domo p-2 rounded-xl text-center">
                    <div className="text-sm font-bold">142</div>
                    <div className="text-[9px] text-white/60">Unidades</div>
                  </div>
                  <div className="bg-white p-2 rounded-xl text-torre text-center">
                    <div className="text-sm font-bold">99%</div>
                    <div className="text-[9px] text-gray-500">Seguridad</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white rounded-full blur-3xl -z-10 opacity-60"></div>
          </div>

          {/* Right: Typography + Mobile Video */}
          <div className="xl:w-[55%] text-center xl:text-left xl:pr-4">
            {/* Title - Max 3 lines, bigger font */}
            <h1 className="text-[1.75rem] sm:text-h3 md:text-h2 lg:text-[3.5rem] font-bold text-torre mb-8 tracking-tight leading-[1.1]">
              ¿Tu administración vive entre <span className="text-transparent bg-clip-text bg-gradient-to-r from-domo to-horizonte">Excel, WhatsApp</span> y el <span className="text-transparent bg-clip-text bg-gradient-to-r from-horizonte to-domo">caos</span>?
            </h1>

            {/* Mobile Video - Only visible on mobile */}
            <div className="xl:hidden relative w-full max-w-md mx-auto mb-8">
              <div className="relative z-10">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                  >
                    <source src="/assets/Inicio/Hero_Video.mp4" type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                  </video>
                </div>

                {/* Floating Animation - Mobile */}
                <div className="absolute -bottom-4 -left-2 w-[150px] bg-torre rounded-xl p-3 text-white shadow-xl border border-gray-700 z-20 animate-[bounce_6s_infinite]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-domo rounded-full flex items-center justify-center text-[10px] font-bold">D</div>
                    <span className="font-bold text-[10px]">DomoNow</span>
                  </div>
                  <div className="bg-white/10 p-2 rounded-lg mb-1">
                    <p className="text-[8px] text-gray-400 mb-0.5">Recaudo Total</p>
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-bold">$12.5M</span>
                      <span className="bg-horizonte text-torre text-[7px] font-bold px-1 py-0.5 rounded-full">+15%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-lead text-gray-500 mb-10 max-w-lg mx-auto xl:mx-0 leading-relaxed text-center xl:text-left">
              Administrar tus propiedades no debería ser tan complicado. DomoNow centraliza todo en una app integral, simple, segura y para toda tu comunidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
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
