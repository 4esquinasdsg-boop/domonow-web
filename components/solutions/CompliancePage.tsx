import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
import { ImageCarousel } from '../ImageCarousel';
import { HowItWorksSection } from '../HowItWorksSection';
import {
  ClipboardCheck, AlertTriangle, FileText, LayoutDashboard,
  X, Check, Quote, ListChecks, Bell, Archive
} from 'lucide-react';

interface CompliancePageProps {
  onOpenDemo: () => void;
}

export const CompliancePage: React.FC<CompliancePageProps> = ({ onOpenDemo }) => {
  const { i18n } = useTranslation();
  const language = (i18n.language?.startsWith('en') ? 'en' : 'es') as 'es' | 'en';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const t = {
    es: {
      hero: {
        tag: "MÓDULO NORMATIVO",
        subtitle: "Cumplimiento legal organizado y sin sorpresas",
        title1: "¿Cuándo vence esa",
        title2: "obligación legal?",
        problem: "El seguimiento manual puede llegar a generar riesgo de incumplimientos.",
        solution: "centraliza vencimientos. Alertas automáticas, sin sorpresas.",
        cta: "Conoce cómo funciona",
        phone: {
          audit: "Auditoría Semestral",
          review: "Revisión Extintores"
        }
      },
      useCases: {
        title: "Casos de uso",
        items: [
          { category: "Auditorías", description: "Preparación de auditorías sin correr a última hora" },
          { category: "Revisiones", description: "Revisiones periódicas con criterios claros y repetibles" },
          { category: "Informes", description: "Informes listos para juntas, consejos o entes reguladores" },
          { category: "Control", description: "Control de tareas críticas" }
        ]
      },
      howItWorks: {
        title: "Conoce cómo funciona",
        items: [
          {
            problem: "Auditorías legales sin documentación en orden",
            solution: "Mantener toda la documentación legal organizada y accesible"
          },
          {
            problem: "Incumplimiento de normativas locales",
            solution: "Alertas automáticas antes de vencimientos importantes"
          },
          {
            problem: "Falta de seguimiento a tareas críticas",
            solution: "Panel de cumplimiento y seguimiento continuo"
          }
        ]
      },
      situation: {
        tag: "SITUACIÓN ACTUAL",
        title: "El problema que viven hoy las comunidades.",
        quote: "\"El cumplimiento suele manejarse con recordatorios informales, archivos dispersos y procesos reactivos, que terminan exponiendo a la administración a riesgos innecesarios.\"",
        problems: {
          title: "Los problemas de hoy",
          items: [
            { title: "Cumplimiento reactivo", desc: "Actúas cuando ya pasó la fecha límite" },
            { title: "Obligaciones dispersas", desc: "Calendarios en papel, correos perdidos" },
            { title: "Riesgo legal", desc: "Sin visibilidad clara de qué vence" }
          ]
        },
        solutions: {
          title: "Con DomoNow obtienes",
          items: [
            { title: "Cumplimiento preventivo", desc: "Estado de todas tus obligaciones" },
            { title: "Control unificado", desc: "Todo en un solo lugar con responsables asignados" },
            { title: "Tranquilidad operativa", desc: "Alertas que te avisan para actuar sin estrés" }
          ]
        }
      },
      workflow: {
        tag: "Flujo de Trabajo",
        title: "Tu comunidad, paso a paso",
        steps: [
          {
            title: "Organiza lo que debes cumplir",
            desc: "Define auditorías, obligaciones, revisiones y tareas desde la plataforma, usando plantillas y listas claras."
          },
          {
            title: "DomoNow te avisa y te acompaña",
            desc: "El sistema envía alertas, muestra avances y señala riesgos antes de que se conviertan en problemas."
          },
          {
            title: "Todo queda registrado y respaldado",
            desc: "Cada revisión, informe y tarea queda documentada, lista para consulta, auditoría o toma de decisiones."
          }
        ]
      },
      footerCTA: {
        title: "Cumplir no debería ser una carga diaria. Con DomoNow, el cumplimiento se gestiona con orden, anticipación y tranquilidad.",
        button: "Quiero agendar una Demo"
      }
    },
    en: {
      hero: {
        tag: "COMPLIANCE MODULE",
        subtitle: "Organized legal compliance without surprises",
        title1: "When does that",
        title2: "legal obligation expire?",
        problem: "Manual tracking can lead to risk of non-compliance.",
        solution: "centralizes expirations. Automatic alerts, no surprises.",
        cta: "See how it works",
        phone: {
          audit: "Semi-annual Audit",
          review: "Extinguisher Review"
        }
      },
      useCases: {
        title: "Use cases",
        items: [
          { category: "Audits", description: "Audit preparation without last-minute rushing" },
          { category: "Reviews", description: "Periodic reviews with clear and repeatable criteria" },
          { category: "Reports", description: "Reports ready for boards, councils or regulatory bodies" },
          { category: "Control", description: "Control of critical tasks" }
        ]
      },
      howItWorks: {
        title: "See how it works",
        items: [
          {
            problem: "Legal audits without orderly documentation",
            solution: "Keep all legal documentation organized and accessible"
          },
          {
            problem: "Non-compliance with local regulations",
            solution: "Automatic alerts before important deadlines"
          },
          {
            problem: "Lack of tracking for critical tasks",
            solution: "Compliance dashboard and continuous tracking"
          }
        ]
      },
      situation: {
        tag: "CURRENT SITUATION",
        title: "The problem communities face today.",
        quote: "\"Compliance is often handled with informal reminders, scattered files, and reactive processes, which end up exposing the administration to unnecessary risks.\"",
        problems: {
          title: "Today's problems",
          items: [
            { title: "Reactive compliance", desc: "You act after the deadline has passed" },
            { title: "Scattered obligations", desc: "Paper calendars, lost emails" },
            { title: "Legal risk", desc: "No clear visibility of what's expiring" }
          ]
        },
        solutions: {
          title: "With DomoNow you get",
          items: [
            { title: "Preventive compliance", desc: "Status of all your obligations" },
            { title: "Unified control", desc: "Everything in one place with assigned owners" },
            { title: "Operational peace of mind", desc: "Alerts that notify you to act without stress" }
          ]
        }
      },
      workflow: {
        tag: "Workflow",
        title: "Your community, step by step",
        steps: [
          {
            title: "Organize what you must comply with",
            desc: "Define audits, obligations, reviews, and tasks from the platform, using templates and clear lists."
          },
          {
            title: "DomoNow alerts and accompanies you",
            desc: "The system sends alerts, shows progress, and points out risks before they become problems."
          },
          {
            title: "Everything is recorded and backed up",
            desc: "Every review, report, and task is documented, ready for consultation, auditing, or decision-making."
          }
        ]
      },
      footerCTA: {
        title: "Compliance shouldn't be a daily burden. With DomoNow, compliance is managed with order, anticipation and peace of mind.",
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
    <ClipboardCheck size={20} />,
    <ListChecks size={20} />,
    <FileText size={20} />,
    <LayoutDashboard size={20} />
  ];

  const useCaseImages = [
    "/assets/modules/NORMATIVO/CASO DE USO 1.png",
    "/assets/modules/NORMATIVO/CASO DE USO 2.png",
    "/assets/modules/NORMATIVO/CASO DE USO 3.png",
    "/assets/modules/NORMATIVO/CASO DE USO 4.png"
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
                <span className="w-9 h-9 bg-domo rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">10</span>
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
                      src="/assets/modules/NORMATIVO/HEADER.png"
                      alt="Vista del módulo de cumplimiento"
                      className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* FRONT LAYER: Phone Animation */}
                <div className="absolute bottom-[-10%] left-0 md:-left-4 z-10 w-[240px] md:w-[300px]">
                  <div className="bg-white p-6 rounded-[2.5rem] shadow-[0_30px_80px_rgba(130,10,209,0.25)] border border-gray-100 transform rotate-1 transition-all duration-500">
                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-2xl mb-4">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600"><Check size={16} /></div>
                      <span className="font-bold text-gray-600">{content.hero.phone.audit}</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl mb-4 opacity-50">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500"><Check size={16} /></div>
                      <span className="font-bold text-gray-400">{content.hero.phone.review}</span>
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
        imageSrc="/assets/modules/NORMATIVO/CÓMO FUNCIONA.png"
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
              <>Cumplir no debería ser una carga diaria. Con <span className="domonow-gradient">DomoNow</span>, el cumplimiento se gestiona con orden, anticipación y tranquilidad.</>
            ) : (
              <>Compliance shouldn't be a daily burden. With <span className="domonow-gradient">DomoNow</span>, compliance is managed with order, anticipation and peace of mind.</>
            )}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><Button size="lg" className="bg-domo text-white hover:bg-torre hover:text-white transition-colors px-12 text-lg shadow-xl shadow-domo/20" onClick={onOpenDemo}>{content.footerCTA.button}</Button></div>
        </div>
      </section>
    </div>
  );
};
