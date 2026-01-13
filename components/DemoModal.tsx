import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ContactForm } from './ContactForm';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  demoType?: string;
  onNavigate?: (target: string) => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, demoType = 'general', onNavigate }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Content Configuration based on demoType
  const contentMap: Record<string, { title: string; text: string; image: string }> = {
    'comercial': {
      title: "¿Listo para gestionar tus propiedades comerciales con más control y eficiencia?",
      text: "Centraliza la operación, mejora la experiencia de arrendatarios y mantén trazabilidad total en accesos, solicitudes y novedades con DomoNow.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    },
    'mixta': {
      title: "¿Listo para gestionar tu propiedad mixta con mayor control y eficiencia?",
      text: "Centraliza en una sola plataforma la operación residencial y comercial, mejora la experiencia de residentes y arrendatarios, y mantén trazabilidad clara en accesos, solicitudes, facturación y novedades.",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800"
    },
    'residencial': {
      title: "¿Listo para llevar la administración de tu propiedad residencial al siguiente nivel?",
      text: "Descubre cómo DomoNow te ayuda a reducir conflictos operativos y a mejorar la experiencia de residentes y administración.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800"
    },
    'general': {
      title: "Toma el control de tu comunidad.",
      text: "Descubre cómo DomoNow centraliza la seguridad, las finanzas y la convivencia en una sola plataforma intuitiva.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    }
  };

  // Handler that closes modal and then navigates
  const handleNavigateFromModal = (target: string) => {
    onClose(); // Close the modal first
    onNavigate?.(target); // Then navigate
  };

  const content = contentMap[demoType] || contentMap['general'];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-torre/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content - Expanded Width for 2 Columns */}
      <div className="relative bg-white rounded-[2.5rem] w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl animate-[fadeIn_0.3s_ease-out] flex">

        {/* Close Button (Absolute to top right) */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 transition-colors z-20"
        >
          <X size={20} />
        </button>

        {/* Left Column: Image & Copy (Hidden on mobile) */}
        <div className="hidden lg:flex lg:w-5/12 relative bg-torre text-white flex-col justify-end p-12 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={content.image}
              alt="Property Context"
              className="w-full h-full object-cover opacity-40 grayscale mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-torre via-torre/80 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-h3 font-bold leading-tight mb-4">
              {content.title}
            </h3>
            <p className="text-body text-gray-300 leading-relaxed">
              {content.text}
            </p>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full lg:w-7/12 overflow-y-auto max-h-[90vh]">
          <div className="p-8 md:p-12 lg:p-16">
            <ContactForm onNavigate={handleNavigateFromModal} />
          </div>
        </div>

      </div>
    </div>
  );
};