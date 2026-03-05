import React, { useEffect, useState } from 'react';
import { toYouTubeEmbed } from '../../utils/youtube';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
import { ImageCarousel } from '../ImageCarousel';
import { HowItWorksSection } from '../HowItWorksSection';
import { ParticleBackground } from '../ParticleBackground';
import {
  CalendarDays, Umbrella, Dumbbell, Wallet, X,
  Check, Quote, Search, CheckSquare, ClipboardCheck,
  Swords, EyeOff, Timer, CalendarCheck, BarChart3,
  ShieldCheck
} from 'lucide-react';

interface CommonAreasPageProps {
  onOpenDemo: () => void;
}

export const CommonAreasPage: React.FC<CommonAreasPageProps> = ({ onOpenDemo }) => {
  const { i18n } = useTranslation();
  const language = (i18n.language?.startsWith('en') ? 'en' : 'es') as 'es' | 'en';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const t = {
    es: {
      hero: {
        tag: "MÓDULO RESERVAS",
        subtitle: "Zonas comunes disponibles al alcance de un click",
        title: "¿Está libre el salón social el sábado?",
        problem: "Estas preguntas ocasionan conflictos entre residentes.",
        solution: "organiza reservas en tiempo real. Sin conflictos, sin malentendidos.",
        cta: "Conoce cómo funciona",
        areas: {
          pool: "Piscina",
          gym: "Gimnasio",
          available: "Disponible",
          occupied: "Ocupado"
        }
      },
      useCases: {
        title: "Casos de uso",
        items: [
          { category: "Reservas de salón social", videoUrl: "https://youtu.be/0AeUQlDo6Ew?si=mAAAeQURXjNWj980" },
          { category: "Uso de zonas húmedas con control de aforo", videoUrl: "" },
          { category: "Uso de zonas comunes por franjas horarias", videoUrl: "" },
          { category: "Evitar dobles reservas del mismo espacio", videoUrl: "https://youtu.be/4elWP6zaZyg?si=sF3xd0RoIi015nI6" }
        ]
      },
      howItWorks: {
        title: "Conoce cómo funciona",
        subtitle: "Cómo funciona",
        leftLabel: "Software tradicional:",
        rightLabel: "Con DomoNow:",
        items: [
          {
            problem: "Calendario básico de disponibilidad",
            solution: "Disponibilidad en tiempo real"
          },
          {
            problem: "Aprobación manual por administrador",
            solution: "Confirmación automática"
          },
          {
            problem: "Sin restricciones configurables",
            solution: "Gestión de pagos integrada"
          }
        ]
      },
      situation: {
        tag: "SITUACIÓN ACTUAL",
        title: "El problema que viven hoy las comunidades.",
        quote: "\"Cuando la reserva se maneja por mensajes o “acuerdos de palabra”, aparecen los reclamos y la sensación de desorden que termina afectando la convivencia.\"",
        problems: {
          title: "Los problemas de hoy",
          items: [
            { title: "Conflictos Constantes", desc: "Dobles reservas y reclamos entre residentes" },
            { title: "Control Inexistente", desc: "No sabes quién usa las zonas comunes" },
            { title: "Gestión Reactiva", desc: "Te enteras de los problemas cuando ya ocurrieron" }
          ]
        },
        solutions: {
          title: "Con DomoNow obtienes",
          items: [
            { title: "Calendario Unificado", desc: "Visibilidad total de todas las reservas" },
            { title: "Métricas de Uso", desc: "Identifica patrones y espacios más solicitados" },
            { title: "Prevención Automática", desc: "Reglas configurables que evitan conflictos" }
          ]
        }
      },
      workflow: {
        tag: "Flujo de Trabajo",
        title: "Tu comunidad, paso a paso",
        steps: [
          {
            title: "El residente revisa la disponibilidad",
            desc: "Desde la app, ingresa a Áreas Comunes y ve qué espacios están disponibles, con horarios, cupos y condiciones claras."
          },
          {
            title: "Acepta las reglas y reserva",
            desc: "Antes de confirmar, el sistema muestra el reglamento del espacio. El residente acepta y selecciona fecha y hora."
          },
          {
            title: "La reserva queda registrada",
            desc: "La administración y el residente tienen respaldo de la reserva, evitando malentendidos o dobles asignaciones."
          }
        ]
      },
      footerCTA: {
        title: "organiza las reservas de tu comunidad sin conflictos.",
        button: "Quiero agendar una Demo"
      }
    },
    en: {
      hero: {
        tag: "RESERVATIONS MODULE",
        subtitle: "Common areas available at the touch of a click",
        title: "Is the social room free on Saturday?",
        problem: "These questions cause conflicts between residents.",
        solution: "organizes reservations in real time. No conflicts, no misunderstandings.",
        cta: "See how it works",
        areas: {
          pool: "Pool",
          gym: "Gym",
          available: "Available",
          occupied: "Occupied"
        }
      },
      useCases: {
        title: "Use cases",
        items: [
          { category: "Social room reservations", videoUrl: "https://youtu.be/0AeUQlDo6Ew?si=mAAAeQURXjNWj980" },
          { category: "Use of wet zones with capacity control", videoUrl: "" },
          { category: "Use of common areas by time slots", videoUrl: "" },
          { category: "Avoid double bookings for the same space", videoUrl: "https://youtu.be/4elWP6zaZyg?si=sF3xd0RoIi015nI6" }
        ]
      },
      howItWorks: {
        title: "See how it works",
        subtitle: "How it works",
        leftLabel: "Traditional software:",
        rightLabel: "With DomoNow:",
        items: [
          {
            problem: "Basic availability calendar",
            solution: "Real-time availability"
          },
          {
            problem: "Manual approval by administrator",
            solution: "Automatic confirmation"
          },
          {
            problem: "No configurable restrictions",
            solution: "Integrated payment management"
          }
        ]
      },
      situation: {
        tag: "CURRENT SITUATION",
        title: "The problem communities face today.",
        quote: "\"When reservations are handled through messages or 'verbal agreements', complaints arise and the sense of disorder ends up affecting coexistence.\"",
        problems: {
          title: "Today's problems",
          items: [
            { title: "Constant Conflicts", desc: "Double bookings and complaints between residents" },
            { title: "Non-existent Control", desc: "You don't know who is using the common areas" },
            { title: "Reactive Management", desc: "You find out about problems when they have already occurred" }
          ]
        },
        solutions: {
          title: "With DomoNow you get",
          items: [
            { title: "Unified Calendar", desc: "Full visibility of all reservations" },
            { title: "Usage Metrics", desc: "Identify patterns and most requested spaces" },
            { title: "Automatic Prevention", desc: "Configurable rules that prevent conflicts" }
          ]
        }
      },
      workflow: {
        tag: "Workflow",
        title: "Your community, step by step",
        steps: [
          {
            title: "Resident checks availability",
            desc: "From the app, the resident enters Common Areas and sees which spaces are available, with clear schedules, capacity, and conditions."
          },
          {
            title: "Accept rules and book",
            desc: "Before confirming, the system shows the rules for the space. The resident accepts and selects the date and time."
          },
          {
            title: "Reservation is recorded",
            desc: "The administration and the resident have backup of the reservation, avoiding misunderstandings or double assignments."
          }
        ]
      },
      footerCTA: {
        title: "organize your community's reservations without conflicts.",
        button: "I want to schedule a Demo"
      }
    }
  };

  const content = t[language];
  const [activePopup, setActivePopup] = useState<number | null>(null);

  const appScreens = [
    "/assets/modules/areascomunes/carruselinterfaz/comunes (1).jpg",
    "/assets/modules/areascomunes/carruselinterfaz/comunes (2).jpg",
    "/assets/modules/areascomunes/carruselinterfaz/comunes (3).jpg",
    "/assets/modules/areascomunes/carruselinterfaz/comunes (4).jpg",
    "/assets/modules/areascomunes/carruselinterfaz/comunes (5).jpg",
    "/assets/modules/areascomunes/carruselinterfaz/comunes (6).jpg",
    "/assets/modules/areascomunes/carruselinterfaz/comunes (7).jpg",
    "/assets/modules/areascomunes/carruselinterfaz/comunes (8).jpg",
  ];

  const useCaseIcons = [
    <CalendarDays size={20} />,
    <Umbrella size={20} />,
    <Dumbbell size={20} />,
    <Wallet size={20} />
  ];

  const useCaseImages = [
    "/assets/modules/areascomunes/casosdeuso/salonsocial_areas_compressed.png",
    "/assets/modules/areascomunes/casosdeuso/piscina_areas_compressed.png",
    "/assets/modules/areascomunes/casosdeuso/gimnasio_areas_compressed.png",
    "/assets/modules/areascomunes/casosdeuso/costo_areas_compressed.png"
  ];

  const problemIcons = [
    <Swords size={20} />,
    <EyeOff size={20} />,
    <Timer size={20} />
  ];

  const solutionIcons = [
    <CalendarCheck size={20} />,
    <BarChart3 size={20} />,
    <ShieldCheck size={20} />
  ];

  return (
    <div className="pt-20 bg-white font-sans text-torre">
      {/* 1. HERO */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-domo/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-horizonte/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            <div className="lg:w-5/12 relative z-20">
              <div className="flex items-center gap-3 mb-0">
                <span className="w-9 h-9 bg-domo rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">5</span>
                <span className="text-base font-bold tracking-widest uppercase text-domo">{content.hero.tag}</span>
              </div>
              <p className="text-small text-gray-400 italic mb-4 ml-12">{content.hero.subtitle}</p>
              <h1 className="text-h2 md:text-h1 font-bold leading-tight mb-6 text-torre">
                {content.hero.title}
              </h1>
              <div className="prose text-lead text-gray-500 mb-8 leading-relaxed">
                <p className="mb-4 text-torre font-bold">
                  {content.hero.problem}
                </p>
                <p>
                  <span className="domonow-gradient">DomoNow</span> {content.hero.solution}
                </p>
              </div>
              <div className="flex gap-4"><Button size="lg" onClick={onOpenDemo} className="shadow-xl shadow-domo/20">{content.hero.cta}</Button></div>
            </div>

            <div className="lg:w-7/12 relative w-full mt-12 lg:mt-0">
              <div className="relative w-full max-w-[850px] ml-auto">
                {/* BACK LAYER: Dashboard */}
                <div className="relative z-0 ml-8 md:ml-24 transform rotate-1 hover:rotate-0 transition-all duration-700">
                  <div className="rounded-2xl overflow-hidden shadow-2xl bg-white aspect-video">
                    <img
                      src="/assets/modules/areascomunes/HERO.png"
                      alt="Vista del módulo de áreas comunes"
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* FRONT LAYER: Phone Animation */}
                <div className="absolute bottom-[-10%] left-0 md:-left-4 z-10 w-[240px] md:w-[300px]">
                  <div className="bg-white p-6 rounded-[2.5rem] shadow-[0_30px_80px_rgba(130,10,209,0.25)] border border-gray-100 transform rotate-1 transition-all duration-500">
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3"><Umbrella className="text-domo" /><span className="font-bold">{content.hero.areas.pool}</span></div>
                        <span className="text-green-500 text-xs font-bold">{content.hero.areas.available}</span>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3"><Dumbbell className="text-domo" /><span className="font-bold">{content.hero.areas.gym}</span></div>
                        <span className="text-red-500 text-xs font-bold">{content.hero.areas.occupied}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Pulse animation style */}
      <style>{`
          @keyframes playPulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.15); }
          }
      `}</style>

      {/* 4. USE CASES */}
      <section className="py-24 bg-white relative overflow-hidden">
        <ParticleBackground />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-h2 font-bold text-center mb-16 text-torre">{content.useCases.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.useCases.items.map((item, index) => (
              <div key={index} className="relative h-[500px] rounded-[2rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 w-full h-full">
                  <img src={useCaseImages[index]} alt={item.category} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/50"></div>
                </div>
                <div className="absolute top-6 left-6 right-6 z-10 flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white shrink-0">{useCaseIcons[index]}</div>
                  <h3 className="text-body font-bold text-white drop-shadow-md tracking-tight leading-snug">{item.category}</h3>
                </div>
                {item.videoUrl && (
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
                    <button
                      onClick={() => setActivePopup(index)}
                      className="bg-domo text-white font-bold px-6 py-2.5 rounded-full text-sm hover:bg-purple-800 transition-colors cursor-pointer shadow-lg"
                    >
                      <svg className="w-6 h-6 animate-[playPulse_1.5s_ease-in-out_infinite]" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </button>
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASE VIDEO POPUP */}
      {activePopup !== null && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-torre/60 backdrop-blur-sm" onClick={() => setActivePopup(null)}></div>
          <div className="relative bg-white rounded-[2.5rem] w-full max-w-sm max-h-[90vh] overflow-hidden shadow-2xl" style={{ animation: 'fadeIn 0.3s ease-out' }}>
            <button onClick={() => setActivePopup(null)} className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 transition-colors z-20"><X size={20} /></button>
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-domo rounded-full flex items-center justify-center text-white shrink-0 mb-4">{useCaseIcons[activePopup]}</div>
              <h3 className="text-h4 font-bold text-torre mb-6">{content.useCases.items[activePopup].category}</h3>
              {content.useCases.items[activePopup].videoUrl ? (
                <div className="w-full aspect-[9/16] rounded-2xl overflow-hidden bg-gray-100">
                  <iframe src={toYouTubeEmbed(content.useCases.items[activePopup].videoUrl)} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={content.useCases.items[activePopup].category}></iframe>
                </div>
              ) : (
                <div className="w-full aspect-[9/16] rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 bg-domo/10 rounded-full flex items-center justify-center"><svg className="w-10 h-10 text-domo" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></div>
                  <p className="text-gray-500 font-medium text-center">{language === 'es' ? 'Video próximamente' : 'Video coming soon'}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <HowItWorksSection
        title={content.howItWorks.title}
        subtitle={content.howItWorks.subtitle}
        leftLabel={content.howItWorks.leftLabel}
        rightLabel={content.howItWorks.rightLabel}
        imageSrc="/assets/modules/areascomunes/COMO_FUNCIONA.jpeg"
        items={content.howItWorks.items}
      />

      {/* 2. PROBLEM VS SOLUTION */}
      <section className="py-24 bg-arquitectura relative z-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6"><span className="h-px w-8 bg-red-400"></span><span className="text-red-400 font-bold tracking-widest uppercase text-tiny">{content.situation.tag}</span><span className="h-px w-8 bg-red-400"></span></div>
            <h2 className="text-h2 font-bold text-torre mb-8 leading-tight">{content.situation.title}</h2>
            <div className="relative inline-block">
              <Quote className="absolute -top-4 -left-8 text-gray-200 w-10 h-10 transform -scale-x-100 z-0 opacity-50" />
              <p className="relative z-10 text-h4 text-gray-500 leading-relaxed font-medium">{content.situation.quote}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 divide-x divide-gray-200 items-stretch">
            {/* Problem */}
            <div className="pr-8 lg:pr-12 flex flex-col h-full">
              <img src="/assets/problemashoy.png" alt="" className="w-full max-w-xs mx-auto mb-8 rounded-2xl" />
              <div className="flex items-center gap-3 mb-8"><span className="font-bold text-red-500 uppercase tracking-widest text-[10px] md:text-tiny">{content.situation.problems.title}</span></div>
              <div className="space-y-8 flex-grow">
                {content.situation.problems.items.map((item, i) => (
                  <div key={i} className="flex gap-5 items-start"><div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white shrink-0">{problemIcons[i]}</div><div><h4 className="font-bold text-torre text-body mb-1">{item.title}</h4><p className="text-small text-gray-500 leading-relaxed">{item.desc}</p></div></div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div className="pl-8 lg:pl-12 flex flex-col h-full">
              <img src="/assets/obtienes.png" alt="" className="w-full max-w-xs mx-auto mb-8 rounded-2xl" />
              <div className="flex items-center gap-3 mb-8"><span className="font-bold text-domo uppercase tracking-widest text-[10px] md:text-tiny">{content.situation.solutions.title.split(' ')[0]} <span className="domonow-gradient">DomoNow</span> {content.situation.solutions.title.split(' ').slice(2).join(' ')}</span></div>
              <div className="space-y-8 flex-grow">
                {content.situation.solutions.items.map((item, i) => (
                  <div key={i} className="flex gap-5 items-start"><div className="w-12 h-12 bg-domo rounded-full flex items-center justify-center text-white shrink-0">{solutionIcons[i]}</div><div><h4 className="font-bold text-torre text-body mb-1">{item.title}</h4><p className="text-small text-gray-500 leading-relaxed">{item.desc}</p></div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WORKFLOW */}
      <section className="py-24 bg-arquitectura relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-domo font-bold tracking-widest uppercase text-tiny mb-2 block">{content.workflow.tag}</span>
            <h2 className="text-h2 font-bold text-torre">{content.workflow.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {content.workflow.steps.map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-transparent hover:border-domo hover:shadow-xl transition-all duration-300 group h-full flex flex-col items-center text-center">
                <div className="flex justify-center mb-8">
                  <div className="w-10 h-10 bg-gray-100 group-hover:bg-domo rounded-full flex items-center justify-center text-torre group-hover:text-white text-small font-bold transition-colors duration-300">{i + 1}</div>
                </div>
                <h3 className="text-h4 font-bold text-torre mb-3">{step.title}</h3>
                <p className="text-body text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 bg-gradient-to-br from-white to-purple-100 text-torre text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-h3 font-bold mb-8 leading-tight text-torre">
            {language === 'es' ? (
              <>Con <span className="domonow-gradient">DomoNow</span>, {content.footerCTA.title}</>
            ) : (
              <>With <span className="domonow-gradient">DomoNow</span>, {content.footerCTA.title}</>
            )}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><Button size="lg" className="bg-domo text-white hover:bg-torre hover:text-white transition-colors px-12 text-lg shadow-xl shadow-domo/20" onClick={onOpenDemo}>{content.footerCTA.button}</Button></div>
        </div>
      </section>
    </div>
  );
};
