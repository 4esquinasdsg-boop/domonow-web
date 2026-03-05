import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { Phone, Mail } from 'lucide-react';
import { ImageCarousel } from './ImageCarousel';
import { useTranslation } from 'react-i18next';

export const ContactPage: React.FC = () => {
  const { i18n } = useTranslation();
  const language = (i18n.language?.startsWith('en') ? 'en' : 'es') as 'es' | 'en';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = {
    es: {
      tag: "Estamos para ayudarte",
      title: "Contáctanos",
      desc1: "En DomoNow estamos listos para ayudarte a simplificar la gestión de tu comunidad y ordenar los procesos clave de la administración.",
      desc2: "Nuestro equipo te acompaña para entender tus necesidades, resolver dudas y mostrarte cómo la tecnología puede mejorar la convivencia, la transparencia y la toma de decisiones en tu propiedad horizontal.",
      phone: {
        title: "Teléfono",
        subtitle: "Atención Clientes",
        number: "+57 (304) 6348708"
      },
      email: {
        title: "Correo",
        subtitle: "Orientación y Comercial",
        address: "hola@domonow.com"
      }
    },
    en: {
      tag: "We are here to help",
      title: "Contact Us",
      desc1: "At DomoNow we are ready to help you simplify your community's management and organize key administrative processes.",
      desc2: "Our team accompanies you to understand your needs, resolve doubts and show you how technology can improve coexistence, transparency and decision-making in your horizontal property.",
      phone: {
        title: "Phone",
        subtitle: "Customer Service",
        number: "+57 (304) 6348708"
      },
      email: {
        title: "Email",
        subtitle: "Orientation and Sales",
        address: "hola@domonow.com"
      }
    }
  };

  const content = t[language];

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
                {content.tag}
              </span>
              <h1 className="text-h2 md:text-h1 font-bold mb-8 leading-tight text-torre">
                {content.title}
              </h1>

              <div className="text-lead text-gray-500 leading-relaxed space-y-6 mb-12">
                <p>
                  {content.desc1.split('DomoNow')[0]}<span className="domonow-gradient">DomoNow</span>{content.desc1.split('DomoNow')[1] || ''}
                </p>
                <p className="text-body">
                  {content.desc2}
                </p>
              </div>

              {/* Contact Details List (No Cards) */}
              <div className="space-y-8">

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-domo rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-torre text-h3 mb-1">{content.phone.title}</p>
                    <p className="text-small text-gray-400 mb-2 uppercase tracking-wide font-bold text-[11px]">{content.phone.subtitle}</p>
                    <a href="tel:+573046348708" className="text-h4 font-bold text-domo hover:text-purple-800 transition-colors">
                      {content.phone.number}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-domo rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-torre text-h3 mb-1">{content.email.title}</p>
                    <p className="text-small text-gray-400 mb-2 uppercase tracking-wide font-bold text-[11px]">{content.email.subtitle}</p>
                    <a href="mailto:hola@domonow.com" className="text-h4 font-bold text-domo hover:text-purple-800 transition-colors break-all">
                      {content.email.address.split('domonow')[0]}<span className="domonow-gradient">domonow</span>{content.email.address.split('domonow')[1] || ''}
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
