import React from 'react';
import { Button } from './Button';

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative pt-48 pb-20 bg-gradient-to-b from-white via-white to-arquitectura overflow-hidden min-h-[90vh] flex items-center">
      {/* Subtle background gradients - section level */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite_2s]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-12">

          {/* Centered Video */}
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Animated glow blobs behind video */}
            <div className="absolute inset-0 -z-10 overflow-visible pointer-events-none">
              <div
                className="absolute rounded-full blur-3xl opacity-55"
                style={{
                  width: '60%', height: '75%',
                  top: '-20%', left: '-12%',
                  background: 'radial-gradient(circle, rgba(192,100,250,0.5) 0%, rgba(216,180,254,0.25) 55%, transparent 80%)',
                  animation: 'floatBlob1 12s ease-in-out infinite',
                }}
              />
              <div
                className="absolute rounded-full blur-3xl opacity-50"
                style={{
                  width: '55%', height: '70%',
                  top: '5%', right: '-10%',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(233,213,255,0.4) 50%, transparent 80%)',
                  animation: 'floatBlob2 15s ease-in-out infinite',
                }}
              />
              <div
                className="absolute rounded-full blur-3xl opacity-45"
                style={{
                  width: '50%', height: '60%',
                  bottom: '-15%', left: '20%',
                  background: 'radial-gradient(circle, rgba(168,85,247,0.35) 0%, rgba(216,180,254,0.2) 60%, transparent 85%)',
                  animation: 'floatBlob3 18s ease-in-out infinite',
                }}
              />
              <div
                className="absolute rounded-full blur-3xl opacity-40"
                style={{
                  width: '45%', height: '55%',
                  top: '15%', left: '28%',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(245,208,254,0.35) 55%, transparent 85%)',
                  animation: 'floatBlob4 20s ease-in-out infinite',
                }}
              />
            </div>

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
            </div>
          </div>

          {/* Text Content Below */}
          <div className="text-center max-w-3xl mx-auto">
            {/* Paragraph */}
            <p className="text-lead text-torre mb-10 max-w-5xl mx-auto leading-relaxed">
              Administrar tus propiedades no debería ser tan complicado. <span className="domonow-gradient">DomoNow</span> centraliza todo en una app integral, simple, segura y para toda tu comunidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
