import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { Phone, Mail } from 'lucide-react';
import { ImageCarousel } from './ImageCarousel';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Images formatted to be 1:1 (Square)
  const contactImages = [
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400&h=400", // Team
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400&h=400", // Meeting
    "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=400&h=400", // Chatting
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=400&h=400", // Smile
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=400", // Building
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400&h=400", // Group
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400&h=400", // Handshake
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400&h=400"  // Tech
  ];

  return (
    <div className="pt-20 bg-white font-sans text-torre min-h-screen">

      {/* Top Carousel Bar (1:1 Images) */}
      <div className="w-full bg-white border-b border-gray-100 py-6 opacity-60 hover:opacity-100 transition-opacity duration-500">
        <ImageCarousel
          images={contactImages}
          heightClass="h-24 md:h-32"
          squareItems={true}
        />
      </div>

      {/* Hero / Intro Section */}
      <section className="relative py-20 lg:py-20 overflow-hidden bg-arquitectura">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-200/60 to-pink-200/60 rounded-full blur-[100px] pointer-events-none -translate-y-1/3 translate-x-1/3 mix-blend-multiply opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-domo/10 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

            {/* Left Side: Information */}
            <div className="lg:w-5/12 pt-4">
              <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-purple-100 shadow-sm text-tiny font-bold tracking-widest uppercase mb-6 text-domo">
                Estamos para ayudarte
              </span>
              <h1 className="text-h2 md:text-h1 font-bold mb-8 leading-tight text-torre">
                Contáctanos
              </h1>

              <div className="text-lead text-gray-500 leading-relaxed space-y-6 mb-12">
                <p>
                  En DomoNow estamos listos para ayudarte a simplificar la gestión de tu comunidad y ordenar los procesos clave de la administración.
                </p>
                <p className="text-body">
                  Nuestro equipo te acompaña para entender tus necesidades, resolver dudas y mostrarte cómo la tecnología puede mejorar la convivencia, la transparencia y la toma de decisiones en tu propiedad horizontal.
                </p>
              </div>

              {/* Contact Details List (No Cards) */}
              <div className="space-y-8">

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-domo shrink-0 shadow-sm border border-purple-50">
                    <Phone size={26} />
                  </div>
                  <div>
                    <p className="font-bold text-torre text-h3 mb-1">Teléfono</p>
                    <p className="text-small text-gray-400 mb-2 uppercase tracking-wide font-bold text-[11px]">Atención Clientes</p>
                    <a href="tel:3015310367" className="text-h4 font-bold text-domo hover:text-purple-800 transition-colors">
                      (301) 5310367
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-domo shrink-0 shadow-sm border border-purple-50">
                    <Mail size={26} />
                  </div>
                  <div>
                    <p className="font-bold text-torre text-h3 mb-1">Correo</p>
                    <p className="text-small text-gray-400 mb-2 uppercase tracking-wide font-bold text-[11px]">Orientación y Comercial</p>
                    <a href="mailto:soporte@domonow.com" className="text-h4 font-bold text-domo hover:text-purple-800 transition-colors break-all">
                      soporte@domonow.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:w-7/12 w-full">
              <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_30px_60px_rgba(130,10,209,0.1)] border border-purple-50 relative overflow-hidden">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};