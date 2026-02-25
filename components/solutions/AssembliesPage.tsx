import React, { useEffect, useState } from 'react';
import { toYouTubeEmbed } from '../../utils/youtube';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
import { ImageCarousel } from '../ImageCarousel';
import { HowItWorksSection } from '../HowItWorksSection';
import { ParticleBackground } from '../ParticleBackground';
import {
  Users, CheckCircle, FileBarChart, Clock,
  X, Check, Quote, Calendar, Vote, FileCheck
} from 'lucide-react';

interface AssembliesPageProps {
  onOpenDemo: () => void;
}

export const AssembliesPage: React.FC<AssembliesPageProps> = ({ onOpenDemo }) => {
  const { i18n } = useTranslation();
  const language = (i18n.language?.startsWith('en') ? 'en' : 'es') as 'es' | 'en';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const t = {
    es: {
      hero: {
        tag: "MÓDULO ASAMBLEAS",
        subtitle: "Asambleas digitales, válidas y con respaldo",
        title: "Convocar, confirmar,",
        highlight: "actas... un caos.",
        problem: "Los procesos manuales, generan decisiones sin respaldo claro.",
        solution: "digitaliza todo. Desde convocatoria hasta el acta automática.",
        cta: "Conoce cómo funciona",
        quorumLabel: "Quórum Actual",
        quorumStatus: "Asamblea Habilitada"
      },
      useCases: {
        title: "Casos de uso",
        items: [
          { category: "Decisiones urgentes que no pueden esperar semanas", videoUrl: "" },
          { category: "Votaciones que antes se hacían por WhatsApp o papel", videoUrl: "" },
          { category: "Reclamaciones por quórum o falta de información", videoUrl: "" },
          { category: "Actas que antes tomaban días en elaborarse", videoUrl: "" }
        ]
      },
      howItWorks: {
        title: "Conoce cómo funciona",
        items: [
          {
            problem: "Convocatoria por email masivo",
            solution: "Convocatoria automática"
          },
          {
            problem: "Registro manual de asistentes",
            solution: "Quórum en tiempo real"
          },
          {
            problem: "Acta subida en PDF después",
            solution: "Acta generada automáticamente"
          }
        ]
      },
      situation: {
        tag: "SITUACIÓN ACTUAL",
        title: "El problema que viven hoy las comunidades.",
        quote: "\"Convocar y realizar asambleas suele ser desgastante: baja asistencia, dudas sobre quórum, votaciones informales y actas que tardan días.\"",
        problems: {
          title: "Los problemas de hoy",
          items: [
            { title: "Convocatorias perdidas", desc: "Residentes que \"nunca se enteraron\"" },
            { title: "Caos en la asistencia", desc: "Discusiones sobre quién tiene derecho a voto" },
            { title: "Decisiones sin respaldo", desc: "Actas que tardan semanas, votos sin registro claro" }
          ]
        },
        solutions: {
          title: "Con DomoNow obtienes",
          items: [
            { title: "Participación garantizada", desc: "Notificaciones automáticas multicanal" },
            { title: "Quórum transparente", desc: "Validación en tiempo real de participación" },
            { title: "Trazabilidad completa", desc: "Cada voto, cada decisión quedan registrados" }
          ]
        }
      },
      workflow: {
        tag: "Flujo de Trabajo",
        title: "Tu comunidad, paso a paso",
        description: "centraliza todo el proceso de asambleas en una sola plataforma: convocatoria, validación de asistentes, votaciones, resultados y actas",
        steps: [
          {
            title: "Convoca y organiza",
            desc: "La administración programa la asamblea, define el orden del día y envía la convocatoria automáticamente a los residentes."
          },
          {
            title: "Participación clara y válida",
            desc: "Los asistentes se registran, votan y participan desde la plataforma, con reglas de quórum claras y respaldo digital."
          },
          {
            title: "Decisiones cerradas y respaldadas",
            desc: "Los resultados se generan en tiempo real y el acta queda lista, con todo debidamente registrado y consultable."
          }
        ]
      },
      footerCTA: {
        title: "Convierte tus asambleas en procesos claros, válidos y sin discusiones.",
        button: "Quiero agendar una Demo"
      }
    },
    en: {
      hero: {
        tag: "ASSEMBLIES MODULE",
        subtitle: "Digital assemblies, valid and with backup",
        title: "Summon, confirm,",
        highlight: "minutes... a mess.",
        problem: "Manual processes generate decisions without clear backup.",
        solution: "digitalizes everything. From summons to automatic minutes.",
        cta: "See how it works",
        quorumLabel: "Current Quorum",
        quorumStatus: "Assembly Enabled"
      },
      useCases: {
        title: "Use cases",
        items: [
          { category: "Urgent decisions that cannot wait for weeks", videoUrl: "" },
          { category: "Votes that were previously done via WhatsApp or paper", videoUrl: "" },
          { category: "Claims for quorum or lack of information", videoUrl: "" },
          { category: "Minutes that used to take days to prepare", videoUrl: "" }
        ]
      },
      howItWorks: {
        title: "See how it works",
        items: [
          {
            problem: "Mass email notification",
            solution: "Automatic summons"
          },
          {
            problem: "Manual registration of attendees",
            solution: "Real-time quorum"
          },
          {
            problem: "PDF minutes uploaded later",
            solution: "Automatically generated minutes"
          }
        ]
      },
      situation: {
        tag: "CURRENT SITUATION",
        title: "The problem communities face today.",
        quote: "\"Summoning and holding assemblies is usually draining: low attendance, doubts about quorum, informal voting, and minutes that take days.\"",
        problems: {
          title: "Today's problems",
          items: [
            { title: "Lost summons", desc: "Residents who \"never found out\"" },
            { title: "Attendance chaos", desc: "Discussions about who has the right to vote" },
            { title: "Decisions without backup", desc: "Minutes that take weeks, votes without clear records" }
          ]
        },
        solutions: {
          title: "With DomoNow you get",
          items: [
            { title: "Guaranteed participation", desc: "Multi-channel automatic notifications" },
            { title: "Transparent quorum", desc: "Real-time validation of participation" },
            { title: "Full traceability", desc: "Every vote, every decision is recorded" }
          ]
        }
      },
      workflow: {
        tag: "Workflow",
        title: "Your community, step by step",
        description: "centralizes the entire assembly process in a single platform: summons, attendee validation, voting, results, and minutes",
        steps: [
          {
            title: "Summon and organize",
            desc: "The administration schedules the assembly, defines the agenda, and sends the summons automatically to residents."
          },
          {
            title: "Clear and valid participation",
            desc: "Attendees register, vote, and participate from the platform, with clear quorum rules and digital backup."
          },
          {
            title: "Closed and backed decisions",
            desc: "Results are generated in real time and the minutes are ready, with everything duly recorded and searchable."
          }
        ]
      },
      footerCTA: {
        title: "Turn your assemblies into clear, valid processes without arguments.",
        button: "I want to schedule a Demo"
      }
    }
  };

  const content = t[language];
  const [activePopup, setActivePopup] = useState<number | null>(null);

  const appScreens = [
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600&h=1066",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=1066",
    "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=600&h=1066",
    "https://images.unsplash.com/photo-1555421689-4926331a981c?auto=format&fit=crop&q=80&w=600&h=1066",
    "https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&q=80&w=600&h=1066",
  ];

  const useCaseIcons = [
    <Clock size={20} />,
    <Vote size={20} />,
    <X size={20} />,
    <FileCheck size={20} />
  ];

  const useCaseImages = [
    "/assets/modules/ASAMBLEAS/CASO DE USO 1.jpeg",
    "/assets/modules/ASAMBLEAS/CASO DE USO 2.png",
    "/assets/modules/ASAMBLEAS/CASO DE USO 3.png",
    "/assets/modules/ASAMBLEAS/CASO DE USO 4.jpeg"
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
                <span className="w-9 h-9 bg-domo rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">9</span>
                <span className="text-base font-bold tracking-widest uppercase text-domo">{content.hero.tag}</span>
              </div>
              <p className="text-small text-gray-400 italic mb-4 ml-12">{content.hero.subtitle}</p>
              <h1 className="text-h2 md:text-h1 font-bold leading-tight mb-6 text-torre">
                {content.hero.title}<br />
                <span className="text-domo">{content.hero.highlight}</span>
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
                      src="/assets/modules/ASAMBLEAS/HERO.png"
                      alt="Vista del módulo de asambleas"
                      className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* FRONT LAYER: Phone Animation */}
                <div className="absolute bottom-[-10%] left-0 md:-left-4 z-10 w-[240px] md:w-[300px]">
                  <div className="bg-white p-6 rounded-[2.5rem] shadow-[0_30px_80px_rgba(130,10,209,0.25)] border border-gray-100 transform rotate-1 transition-all duration-500">
                    <div className="text-center p-6 bg-gray-50 rounded-2xl mb-4">
                      <h3 className="font-bold text-torre mb-2">{content.hero.quorumLabel}</h3>
                      <p className="text-4xl font-bold text-domo">51%</p>
                      <div className="text-xs text-green-500 mt-2 font-bold">{content.hero.quorumStatus}</div>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full"><div className="bg-domo h-full w-[51%] rounded-full"></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pulse animation style */}
      <style>{`
          @keyframes pulseGlow {
              0%, 100% { box-shadow: 0 0 0 0 rgba(130, 10, 209, 0.5); transform: scale(1); }
              50% { box-shadow: 0 0 20px 6px rgba(130, 10, 209, 0.35); transform: scale(1.05); }
          }
          .btn-pulse-glow {
              animation: pulseGlow 2s ease-in-out infinite;
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
                <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
                  <button
                    onClick={() => setActivePopup(index)}
                    className="btn-pulse-glow bg-domo text-white font-bold px-6 py-2.5 rounded-full text-sm hover:bg-purple-800 transition-colors cursor-pointer shadow-lg"
                  >
                    {language === 'es' ? 'Ver más' : 'See more'}
                  </button>
                </div>
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
            <button
              onClick={() => setActivePopup(null)}
              className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 transition-colors z-20"
            >
              <X size={20} />
            </button>
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-domo rounded-full flex items-center justify-center text-white shrink-0 mb-4">
                {useCaseIcons[activePopup]}
              </div>
              <h3 className="text-h4 font-bold text-torre mb-6">{content.useCases.items[activePopup].category}</h3>
              {content.useCases.items[activePopup].videoUrl ? (
                <div className="w-full aspect-[9/16] rounded-2xl overflow-hidden bg-gray-100">
                  <iframe
                    src={toYouTubeEmbed(content.useCases.items[activePopup].videoUrl)}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={content.useCases.items[activePopup].category}
                  ></iframe>
                </div>
              ) : (
                <div className="w-full aspect-[9/16] rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 bg-domo/10 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-domo" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium text-center">
                    {language === 'es' ? 'Video próximamente' : 'Video coming soon'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <HowItWorksSection
        title={content.howItWorks.title}
        imageSrc="/assets/modules/ASAMBLEAS/CÓMO FUNCIONA.png"
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
              <div className="flex items-center gap-3 mb-8"><div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white"><X size={16} strokeWidth={3} /></div><span className="font-bold text-gray-400 uppercase tracking-widest text-[10px] md:text-tiny">{content.situation.problems.title}</span></div>
              <div className="space-y-8 flex-grow">
                {content.situation.problems.items.map((item, i) => (
                  <div key={i} className="flex gap-5 items-start"><div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white shrink-0"><X size={20} /></div><div><h4 className="font-bold text-torre text-body mb-1">{item.title}</h4><p className="text-small text-gray-500 leading-relaxed">{item.desc}</p></div></div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div className="pl-8 lg:pl-12 flex flex-col h-full">
              <img src="/assets/obtienes.png" alt="" className="w-full max-w-xs mx-auto mb-8 rounded-2xl" />
              <div className="flex items-center gap-3 mb-8"><div className="w-8 h-8 rounded-full bg-domo flex items-center justify-center text-white"><Check size={16} strokeWidth={3} /></div><span className="font-bold text-domo uppercase tracking-widest text-[10px] md:text-tiny">{content.situation.solutions.title.split(' ')[0]} <span className="domonow-gradient">DomoNow</span> {content.situation.solutions.title.split(' ').slice(2).join(' ')}</span></div>
              <div className="space-y-8 flex-grow">
                {content.situation.solutions.items.map((item, i) => (
                  <div key={i} className="flex gap-5 items-start"><div className="w-12 h-12 bg-domo rounded-full flex items-center justify-center text-white shrink-0"><Check size={20} /></div><div><h4 className="font-bold text-torre text-body mb-1">{item.title}</h4><p className="text-small text-gray-500 leading-relaxed">{item.desc}</p></div></div>
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
            <p className="mt-4 text-gray-500"><span className="domonow-gradient">DomoNow</span> {content.workflow.description}</p>
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
