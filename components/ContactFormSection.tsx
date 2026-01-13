import React from 'react';
import { ContactForm } from './ContactForm';

interface ContactFormSectionProps {
  onNavigate?: (target: string) => void;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({ onNavigate }) => {
  return (
    <section id="contact" className="relative py-24 bg-[#F9F5FF] overflow-hidden">

      {/* Background Gradients (Nu Style - Light & Airy) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-200/60 to-pink-200/60 rounded-full blur-[100px] pointer-events-none -translate-y-1/3 translate-x-1/3 mix-blend-multiply opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-domo/10 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">

          {/* Left Side: Visual Copy (Clean, Text Only) */}
          <div className="lg:w-5/12">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-purple-100 shadow-sm text-xs font-bold tracking-widest uppercase mb-6 text-domo">
              Agenda tu Demo
            </span>
            <h2 className="text-h2 font-bold mb-6 leading-tight text-torre">
              Toma el control de <br />
              <span className="text-domo">tu comunidad.</span>
            </h2>
            <p className="text-lead text-gray-500 leading-relaxed">
              Descubre cómo DomoNow centraliza la seguridad, las finanzas y la convivencia en una sola plataforma intuitiva.
            </p>
          </div>

          {/* Right Side: The Clean Form (Wrapper Card) */}
          <div className="lg:w-7/12 w-full">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-purple-50 relative overflow-hidden">
              <ContactForm onNavigate={onNavigate} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
