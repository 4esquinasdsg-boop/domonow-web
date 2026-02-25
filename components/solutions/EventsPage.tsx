import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
import { ImageCarousel } from '../ImageCarousel';
import { HowItWorksSection } from '../HowItWorksSection';
import {
  PartyPopper, CalendarCheck, Users, Megaphone,
  X, Check, Quote, Send, ListChecks
} from 'lucide-react';

interface EventsPageProps {
  onOpenDemo: () => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onOpenDemo }) => {
  const { i18n } = useTranslation();
  const language = (i18n.language?.startsWith('en') ? 'en' : 'es') as 'es' | 'en';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const t = {
    es: {
      hero: {
        tag: "MÓDULO EVENTOS",
        subtitle: "Organiza eventos que unen a tu comunidad",
        title1: "No asistió nadie",
        title2: "a la actividad",
        problem: "La baja participación ocasionan comunidades desconectadas.",
        solution: "facilita eventos. Inscripciones y recordatorios automáticos.",
        cta: "Conoce cómo funciona",
        phone: {
          date: "24",
          month: "OCT",
          title: "Reunión Empresarial",
          location: "Salón Social • 5:00 PM"
        }
      },
      useCases: {
        title: "Casos de uso",
        items: [
          { category: "Integración", description: "Actividades de integración para residentes" },
          { category: "Convivencia", description: "Campañas de convivencia" },
          { category: "Cupos", description: "Eventos con cupo limitado (talleres, charlas, clases)" },
          { category: "Organización", description: "Actividades organizadas por la administración" }
        ]
      },
      howItWorks: {
        title: "Conoce cómo funciona",
        items: [
          {
            problem: "Módulo separado o inexistente",
            solution: "Programación de eventos"
          },
          {
            problem: "Publicación manual de eventos",
            solution: "Inscripción directa desde app"
          },
          {
            problem: "Sin control de asistencia",
            solution: "Registro automático de asistencia"
          }
        ]
      },
      situation: {
        tag: "SITUACIÓN ACTUAL",
        title: "El problema que viven hoy las comunidades.",
        quote: "\"Organizar eventos suele convertirse en un caos, debido a la baja participación, desorden y actividades que no cumplen su objetivo de unir a la comunidad.\"",
        problems: {
          title: "Los problemas de hoy",
          items: [
            { title: "Eventos Invisibles", desc: "Los residentes se enteran tarde o no se enteran" },
            { title: "Gestión Reactiva", desc: "Atiendes problemas de asistencia" },
            { title: "Comunicación Dispersa", desc: "Whatsapp, correos, llamadas... información por todas partes" }
          ]
        },
        solutions: {
          title: "Con DomoNow obtienes",
          items: [
            { title: "Comunidad Activa", desc: "Calendario centralizado visible para todos" },
            { title: "Participación Real", desc: "Métricas en tiempo real de asistencia" },
            { title: "Comunicación Eficiente", desc: "Notificaciones automáticas" }
          ]
        }
      },
      workflow: {
        tag: "Flujo de Trabajo",
        title: "Tu comunidad, paso a paso",
        steps: [
          {
            title: "Publica el evento",
            desc: "La administración crea el evento, define cupos, fechas y a quién va dirigido."
          },
          {
            title: "Los residentes se inscriben",
            desc: "Reciben la invitación en la app y confirman su participación en segundos."
          },
          {
            title: "Control y seguimiento",
            desc: "DomoNow registra inscritos y asistencia, facilitando la organización y evaluación del evento."
          }
        ]
      },
      footerCTA: {
        title: "Descubre cómo DomoNow mejora la participación y el orden en tu comunidad.",
        button: "Quiero agendar una Demo"
      }
    },
    en: {
      hero: {
        tag: "EVENTS MODULE",
        subtitle: "Organize events that unite your community",
        title1: "Nobody attended",
        title2: "the activity",
        problem: "Low participation leads to disconnected communities.",
        solution: "facilitates events. Automatic registrations and reminders.",
        cta: "See how it works",
        phone: {
          date: "24",
          month: "OCT",
          title: "Business Meeting",
          location: "Social Hall • 5:00 PM"
        }
      },
      useCases: {
        title: "Use cases",
        items: [
          { category: "Integration", description: "Integration activities for residents" },
          { category: "Community Living", description: "Community living campaigns" },
          { category: "Capacity", description: "Limited capacity events (workshops, talks, classes)" },
          { category: "Organization", description: "Activities organized by administration" }
        ]
      },
      howItWorks: {
        title: "See how it works",
        items: [
          {
            problem: "Separate or non-existent module",
            solution: "Event scheduling"
          },
          {
            problem: "Manual event publication",
            solution: "Direct registration from app"
          },
          {
            problem: "No attendance control",
            solution: "Automatic attendance recording"
          }
        ]
      },
      situation: {
        tag: "CURRENT SITUATION",
        title: "The problem communities face today.",
        quote: "\"Organizing events often becomes chaos due to low participation, disorder, and activities that fail to meet their goal of uniting the community.\"",
        problems: {
          title: "Today's problems",
          items: [
            { title: "Invisible Events", desc: "Residents find out late or not at all" },
            { title: "Reactive Management", desc: "Dealing with attendance issues" },
            { title: "Scattered Communication", desc: "WhatsApp, emails, calls... information everywhere" }
          ]
        },
        solutions: {
          title: "With DomoNow you get",
          items: [
            { title: "Active Community", desc: "Centralized calendar visible to all" },
            { title: "Real Participation", desc: "Real-time attendance metrics" },
            { title: "Efficient Communication", desc: "Automatic notifications" }
          ]
        }
      },
      workflow: {
        tag: "Workflow",
        title: "Your community, step by step",
        steps: [
          {
            title: "Publish the event",
            desc: "Administration creates the event, defines capacity, dates, and target audience."
          },
          {
            title: "Residents register",
            desc: "They receive the invitation in the app and confirm participation in seconds."
          },
          {
            title: "Control and tracking",
            desc: "DomoNow records registrants and attendance, facilitating organization and evaluation."
          }
        ]
      },
      footerCTA: {
        title: "Discover how DomoNow improves participation and order in your community.",
        button: "I want to schedule a Demo"
      }
    }
  };

  const content = t[language];

  const appScreens = [
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600&h=1066",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=1066",
    "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=600&h=1066",
    "https://images.unsplash.com/photo-1555421689-4926331a981c?auto=format&fit=crop&q=80&w=600&h=1066",
    "https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&q=80&w=600&h=1066",
  ];

  const useCaseIcons = [
    <Users size={20} />,
    <Megaphone size={20} />,
    <ListChecks size={20} />,
    <CalendarCheck size={20} />
  ];

  const useCaseImages = [
    "/assets/modules/EVENTOS/CASO DE USO 1.png",
    "/assets/modules/EVENTOS/CASO DE USO 2.png",
    "/assets/modules/EVENTOS/CASO DE USO 3.png",
    "/assets/modules/EVENTOS/CASO DE USO 4.png"
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
                <span className="w-9 h-9 bg-domo rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">6</span>
                <span className="text-base font-bold tracking-widest uppercase text-domo">{content.hero.tag}</span>
              </div>
              <p className="text-small text-gray-400 italic mb-4 ml-12">{content.hero.subtitle}</p>
              <h1 className="text-h2 md:text-h1 font-bold leading-tight mb-6 text-torre">
                {content.hero.title1}<br />
                <span className="text-domo">{content.hero.title2}</span>
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
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-white">
                    <img
                      src="/assets/modules/EVENTOS/HEADER.png"
                      alt="Vista del módulo de eventos"
                      className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* FRONT LAYER: Phone Animation */}
                <div className="absolute bottom-[-10%] left-0 md:-left-4 z-10 w-[240px] md:w-[300px]">
                  <div className="bg-white p-6 rounded-[2.5rem] shadow-[0_30px_80px_rgba(130,10,209,0.25)] border border-gray-100 transform -rotate-1 transition-all duration-500">
                    <div className="p-4 bg-purple-50 rounded-2xl flex gap-4 items-center">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-domo font-bold text-2xl flex-col shadow-sm">
                        <span>{content.hero.phone.date}</span><span className="text-[10px] uppercase">{content.hero.phone.month}</span>
                      </div>
                      <div><h3 className="font-bold text-torre">{content.hero.phone.title}</h3><p className="text-xs text-gray-500">{content.hero.phone.location}</p></div>
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
        imageSrc="/assets/modules/EVENTOS/CÓMO FUNCIONA.png"
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
          <h2 className="text-h3 font-bold mb-8 leading-tight text-torre">
            {language === 'es' ? (
              <>{content.footerCTA.title.split('DomoNow')[0]}<span className="domonow-gradient">DomoNow</span>{content.footerCTA.title.split('DomoNow')[1]}</>
            ) : (
              <>{content.footerCTA.title.split('DomoNow')[0]}<span className="domonow-gradient">DomoNow</span>{content.footerCTA.title.split('DomoNow')[1]}</>
            )}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><Button size="lg" className="bg-domo text-white hover:bg-torre hover:text-white transition-colors px-12 text-lg shadow-xl shadow-domo/20" onClick={onOpenDemo}>{content.footerCTA.button}</Button></div>
        </div>
      </section>
    </div>
  );
};
