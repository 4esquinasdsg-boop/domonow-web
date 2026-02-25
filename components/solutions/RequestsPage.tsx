import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
import { ImageCarousel } from '../ImageCarousel';
import { HowItWorksSection } from '../HowItWorksSection';
import {
  MessageCircle, ClipboardList, PenTool, Archive,
  X, Check, Quote, User, Clock, CheckCircle
} from 'lucide-react';

interface RequestsPageProps {
  onOpenDemo: () => void;
}

export const RequestsPage: React.FC<RequestsPageProps> = ({ onOpenDemo }) => {
  const { i18n } = useTranslation();
  const language = (i18n.language?.startsWith('en') ? 'en' : 'es') as 'es' | 'en';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const t = {
    es: {
      hero: {
        tag: "MÓDULO PQRS",
        subtitle: "Cada solicitud con seguimiento claro",
        title1: "\"Toma una foto o video",
        title2: "y reporta tu solicitud en segundos\"",
        problem: "Residentes molestos por la falta de respuesta.",
        solution: "organiza cada solicitud. Con responsable y seguimiento paso a paso.",
        cta: "Conoce cómo funciona",
        phone: {
          pending: "Pendiente",
          resolved: "Resuelto"
        }
      },
      useCases: {
        title: "Casos de uso",
        items: [
          { category: "Daños", description: "Reporte de daños en zonas comunes" },
          { category: "Mantenimiento", description: "Solicitudes de mantenimiento interno" },
          { category: "PQRS", description: "Quejas o reclamos formales (PQRS)" },
          { category: "Novedades", description: "Solicitudes que antes se “perdían” en mensajes" }
        ]
      },
      howItWorks: {
        title: "Conoce cómo funciona",
        items: [
          {
            problem: "Formulario básico de PQRS",
            solution: "Asignación de responsables"
          },
          {
            problem: "Cambio manual de estado",
            solution: "Chat interno dentro de cada solicitud"
          },
          {
            problem: "No hay medición de tiempos",
            solution: "Medición de tiempos de respuesta"
          }
        ]
      },
      situation: {
        tag: "SITUACIÓN ACTUAL",
        title: "El problema que viven hoy las comunidades.",
        quote: "\"Cuando las solicitudes llegan por WhatsApp, llamadas o mensajes sueltos, se obtienen conflictos, reclamos constantes y desconfianza hacia la administración.\"",
        problems: {
          title: "Los problemas de hoy",
          items: [
            { title: "Solicitudes Perdidas", desc: "Mensajes que se olvidan y residentes frustrados" },
            { title: "Responsabilidad Difusa", desc: "Nadie sabe quién debe resolver qué ni en cuánto tiempo" },
            { title: "Percepción Negativa", desc: "Aunque trabajes, los residentes sienten que nada se resuelve" }
          ]
        },
        solutions: {
          title: "Con DomoNow obtienes",
          items: [
            { title: "Bandeja Centralizada", desc: "Todas las solicitudes organizadas por tipo en un solo lugar" },
            { title: "Rendición de Cuentas Clara", desc: "Cada solicitud tiene responsable y seguimiento visible" },
            { title: "Gestión Demostrable", desc: "Métricas de atención que prueban tu eficiencia ante la comunidad" }
          ]
        }
      },
      workflow: {
        tag: "Flujo de Trabajo",
        title: "Tu comunidad, paso a paso",
        steps: [
          {
            title: "El residente registra la solicitud",
            desc: "Desde la app, elige el tipo de solicitud, agrega detalles y fotos o videos si es necesario."
          },
          {
            title: "Se da seguimiento",
            desc: "Se asigna a un responsable y se actualiza el estado en tiempo real."
          },
          {
            title: "Cierre con trazabilidad",
            desc: "El caso se cierra con registro completo y opción de evaluación del servicio."
          }
        ]
      },
      footerCTA: {
        title: "Empieza a gestionar solicitudes con claridad y respaldo.",
        button: "Quiero agendar una Demo"
      }
    },
    en: {
      hero: {
        tag: "PQRS MODULE",
        subtitle: "Every request with clear tracking",
        title1: "\"Take a photo or video",
        title2: "and report your request in seconds\"",
        problem: "Upset residents due to lack of response.",
        solution: "organizes every request. With responsible person and step-by-step tracking.",
        cta: "See how it works",
        phone: {
          pending: "Pending",
          resolved: "Resolved"
        }
      },
      useCases: {
        title: "Use cases",
        items: [
          { category: "Damages", description: "Reporting damages in common areas" },
          { category: "Maintenance", description: "Internal maintenance requests" },
          { category: "PQRS", description: "Formal complaints or claims (PQRS)" },
          { category: "Updates", description: "Requests that previously got \"lost\" in messages" }
        ]
      },
      howItWorks: {
        title: "See how it works",
        items: [
          {
            problem: "Basic PQRS form",
            solution: "Responsibility assignment"
          },
          {
            problem: "Manual state change",
            solution: "Internal chat within each request"
          },
          {
            problem: "No time measurement",
            solution: "Response time measurement"
          }
        ]
      },
      situation: {
        tag: "CURRENT SITUATION",
        title: "The problem communities face today.",
        quote: "\"When requests arrive via WhatsApp, calls, or loose messages, conflicts, constant claims, and distrust towards management arise.\"",
        problems: {
          title: "Today's problems",
          items: [
            { title: "Lost Requests", desc: "Messages that are forgotten and frustrated residents" },
            { title: "Diffuse Responsibility", desc: "Nobody knows who should solve what or in how much time" },
            { title: "Negative Perception", desc: "Even if you work, residents feel that nothing is resolved" }
          ]
        },
        solutions: {
          title: "With DomoNow you get",
          items: [
            { title: "Centralized Inbox", desc: "All requests organized by type in one place" },
            { title: "Clear Accountability", desc: "Each request has a responsible person and visible tracking" },
            { title: "Demonstrable Management", desc: "Service metrics that prove your efficiency to the community" }
          ]
        }
      },
      workflow: {
        tag: "Workflow",
        title: "Your community, step by step",
        steps: [
          {
            title: "Resident registers the request",
            desc: "From the app, choose the type of request, add details and photos or videos if necessary."
          },
          {
            title: "Tracking is provided",
            desc: "A responsible person is assigned and status is updated in real-time."
          },
          {
            title: "Closing with traceability",
            desc: "The case is closed with a complete record and service evaluation option."
          }
        ]
      },
      footerCTA: {
        title: "Start managing requests with clarity and backup.",
        button: "I want to schedule a Demo"
      }
    }
  };

  const content = t[language];

  const appScreens = [
    "/assets/modules/solicitudes/carrusel_interfaz/solicitudes (1).jpg",
    "/assets/modules/solicitudes/carrusel_interfaz/solicitudes (2).jpg",
    "/assets/modules/solicitudes/carrusel_interfaz/solicitudes (3).jpg",
    "/assets/modules/solicitudes/carrusel_interfaz/solicitudes (4).jpg",
    "/assets/modules/solicitudes/carrusel_interfaz/solicitudes (5).jpg",
    "/assets/modules/solicitudes/carrusel_interfaz/solicitudes (6).jpg",
    "/assets/modules/solicitudes/carrusel_interfaz/solicitudes (7).jpg",
    "/assets/modules/solicitudes/carrusel_interfaz/solicitudes (8).jpg",
  ];

  const useCaseIcons = [
    <PenTool size={20} />,
    <ClipboardList size={20} />,
    <MessageCircle size={20} />,
    <Archive size={20} />
  ];

  const useCaseImages = [
    "/assets/modules/solicitudes/CASOSDEUSO/SOLICITUDES (1)_compressed.png",
    "/assets/modules/solicitudes/CASOSDEUSO/SOLICITUDES (2)_compressed.png",
    "/assets/modules/solicitudes/CASOSDEUSO/SOLICITUDES (3)_compressed.png",
    "/assets/modules/solicitudes/CASOSDEUSO/SOLICITUDES (4)_compressed.png"
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
                <span className="w-9 h-9 bg-domo rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">4</span>
                <span className="text-base font-bold tracking-widest uppercase text-domo">{content.hero.tag}</span>
              </div>
              <p className="text-small text-gray-400 italic mb-4 ml-12">{content.hero.subtitle}</p>
              <h1 className="text-h2 md:text-h1 font-bold leading-tight mb-6 text-torre">
                {content.hero.title1} <span className="text-domo">{content.hero.title2}</span>
              </h1>
              <div className="prose text-lead text-gray-500 mb-8 leading-relaxed">
                <p className="mb-4 text-torre font-bold">
                  {content.hero.problem}
                </p>
                <p>
                  <strong className="text-torre"><span className="domonow-gradient">DomoNow</span> {content.hero.solution}</strong>
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
                      src="/assets/modules/solicitudes/solicitudeshero.png"
                      alt="Vista del módulo de solicitudes"
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* FRONT LAYER: Phone Animation */}
                <div className="absolute bottom-[-10%] left-0 md:-left-4 z-10 w-[240px] md:w-[300px]">
                  <div className="bg-white p-4 rounded-[2.5rem] shadow-[0_30px_80px_rgba(130,10,209,0.25)] border border-gray-100 transform rotate-1 transition-all duration-500">
                    <div className="p-4 space-y-4">
                      <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                        <div className="flex justify-between items-center mb-2"><span className="text-xs font-bold text-domo">PQR #1024</span><span className="bg-white text-[10px] px-2 py-1 rounded-full border border-gray-100">{content.hero.phone.pending}</span></div>
                        <div className="h-2 w-3/4 bg-gray-200 rounded-full"></div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                        <div className="flex justify-between items-center mb-2"><span className="text-xs font-bold text-green-600">PQR #1023</span><span className="bg-white text-[10px] px-2 py-1 rounded-full border border-gray-100">{content.hero.phone.resolved}</span></div>
                        <div className="h-2 w-1/2 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4. USE CASES */}
      <section className="py-24 bg-[#F9F5FF]">
        <div className="container mx-auto px-6">
          <h2 className="text-h2 font-bold text-center mb-16 text-torre">{content.useCases.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.useCases.items.map((item, index) => (
              <div key={index} className="relative h-[500px] rounded-[2rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 w-full h-full">
                  <img src={useCaseImages[index]} alt={item.category} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30"></div>
                </div>
                <div className="absolute top-6 left-6 z-10"><h3 className="text-h4 font-bold text-white drop-shadow-md tracking-tight">{item.category}</h3></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-6 rounded-[2rem] shadow-xl flex flex-col gap-4 h-40 border border-white/50">
                  <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-domo shrink-0">{useCaseIcons[index]}</div>
                  <div><p className="text-small font-medium text-torre leading-snug">{item.description}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorksSection
        title={content.howItWorks.title}
        imageSrc="/assets/modules/solicitudes/solicitudes_como_funciona.png"
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

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Problem */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 group hover:border-red-100 transition-colors duration-300 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-8"><div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-400"><X size={16} strokeWidth={3} /></div><span className="font-bold text-gray-400 uppercase tracking-widest text-[10px] md:text-tiny">{content.situation.problems.title}</span></div>
              <div className="space-y-8 flex-grow">
                {content.situation.problems.items.map((item, i) => (
                  <div key={i} className="flex gap-5 items-start"><div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 shrink-0 group-hover:bg-red-50 group-hover:text-red-400 transition-colors"><X size={20} /></div><div><h4 className="font-bold text-torre text-body mb-1">{item.title}</h4><p className="text-small text-gray-500 leading-relaxed">{item.desc}</p></div></div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div className="bg-[#F9F5FF] p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-domo/5 border border-purple-100 group hover:border-domo/30 transition-colors duration-300 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-8"><div className="w-8 h-8 rounded-full bg-domo/10 flex items-center justify-center text-domo"><Check size={16} strokeWidth={3} /></div><span className="font-bold text-domo uppercase tracking-widest text-[10px] md:text-tiny">
                {language === 'es' ? (
                  <>Con <span className="domonow-gradient">DomoNow</span> obtienes</>
                ) : (
                  <>With <span className="domonow-gradient">DomoNow</span> you get</>
                )}
              </span></div>
              <div className="space-y-8 flex-grow">
                {content.situation.solutions.items.map((item, i) => (
                  <div key={i} className="flex gap-5 items-start"><div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-domo shrink-0 shadow-sm group-hover:bg-domo group-hover:text-white transition-colors"><Check size={20} /></div><div><h4 className="font-bold text-torre text-body mb-1">{item.title}</h4><p className="text-small text-gray-500 leading-relaxed">{item.desc}</p></div></div>
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
          <h2 className="text-h3 font-bold mb-8 leading-tight text-torre">{content.footerCTA.title}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><Button size="lg" className="bg-domo text-white hover:bg-torre hover:text-white transition-colors px-12 text-lg shadow-xl shadow-domo/20" onClick={onOpenDemo}>{content.footerCTA.button}</Button></div>
        </div>
      </section>
    </div>
  );
};
