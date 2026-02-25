import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
import { ImageCarousel } from '../ImageCarousel';
import { HowItWorksSection } from '../HowItWorksSection';
import {
  BarChart, Users, CheckSquare, FileText,
  X, Check, Quote, PieChart, Send, Settings
} from 'lucide-react';

interface VotingPageProps {
  onOpenDemo: () => void;
}

export const VotingPage: React.FC<VotingPageProps> = ({ onOpenDemo }) => {
  const { i18n } = useTranslation();
  const language = (i18n.language?.startsWith('en') ? 'en' : 'es') as 'es' | 'en';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const t = {
    es: {
      hero: {
        tag: "MÓDULO VOTACIONES",
        subtitle: "Decisiones importantes con respaldo oficial",
        title1: "\"Las votaciones tardan semanas",
        title2: "y después se cuestionan\"",
        problem: "Pocos asisten, no hay suficientes votos, las decisiones no son válidas.",
        solution: "digitaliza votaciones oficiales. Participación remota válida y resultados en tiempo real.",
        cta: "Conoce cómo funciona",
        phone: {
          results: "Resultados en Tiempo Real"
        }
      },
      useCases: {
        title: "Casos de uso",
        items: [
          { category: "Presupuestos", description: "Aprobación de presupuestos" },
          { category: "Reglamentos", description: "Cambios en reglamentos o normas internas" },
          { category: "Obras", description: "Aprobar una obra grande o gasto extraordinario" },
          { category: "Elecciones", description: "Elección de junta, comités o proveedores" }
        ]
      },
      howItWorks: {
        title: "Conoce cómo funciona",
        items: [
          {
            problem: "Módulo inexistente o muy básico",
            solution: "Sistema completo de votaciones digitales"
          },
          {
            problem: "No sabes si la decisión es válida",
            solution: "Sabes al instante si hay suficientes votos"
          },
          {
            problem: "Votaciones manuales, sin respaldo",
            solution: "Historial de cada votación"
          }
        ]
      },
      situation: {
        tag: "SITUACIÓN ACTUAL",
        title: "El problema que viven hoy las comunidades.",
        quote: "\"Tomar decisiones en comunidad no debería ser tan complicado: baja asistencia, votaciones informales y dudas sobre la validez generan fricción constante.\"",
        problems: {
          title: "Los problemas de hoy",
          items: [
            { title: "Votaciones presenciales", desc: "Pocos asisten, no se alcanzan los votos necesarios" },
            { title: "Procesos lentos", desc: "Las decisiones toman semanas o meses" },
            { title: "Se cuestionan después", desc: "Sin respaldo claro de validez" }
          ]
        },
        solutions: {
          title: "obtienes",
          items: [
            { title: "Participación desde cualquier lugar", desc: "Más propietarios votan, decisiones válidas" },
            { title: "Resultados inmediatos", desc: "Ves en tiempo real el avance de la votación" },
            { title: "Respaldo completo", desc: "Resultados oficiales con toda la trazabilidad" }
          ]
        }
      },
      workflow: {
        tag: "Flujo de Trabajo",
        title: "Tu comunidad, paso a paso",
        steps: [
          {
            title: "Creas la votación oficial",
            desc: "Defines el tema, votos necesarios por coeficiente y quiénes pueden participar."
          },
          {
            title: "La comunidad participa desde la app",
            desc: "Cada residente recibe una notificación y vota de forma segura desde su celular."
          },
          {
            title: "Resultados respaldados",
            desc: "Los resultados se consolidan automáticamente y quedan registrados."
          }
        ]
      },
      footerCTA: {
        title1: "Toma decisiones oficiales respaldadas y sin cuestionamientos con",
        title2: ".",
        button: "Quiero agendar una Demo"
      }
    },
    en: {
      hero: {
        tag: "VOTING MODULE",
        subtitle: "Important decisions with official backing",
        title1: "\"Voting takes weeks",
        title2: "and then it's questioned\"",
        problem: "Few attend, there aren't enough votes, decisions are not valid.",
        solution: "digitalizes official voting. Valid remote participation and real-time results.",
        cta: "See how it works",
        phone: {
          results: "Real-Time Results"
        }
      },
      useCases: {
        title: "Use cases",
        items: [
          { category: "Budgets", description: "Budget approval" },
          { category: "Regulations", description: "Changes in regulations or internal rules" },
          { category: "Works", description: "Approve a large project or extraordinary expense" },
          { category: "Elections", description: "Election of board, committees, or providers" }
        ]
      },
      howItWorks: {
        title: "See how it works",
        items: [
          {
            problem: "Non-existent or basic module",
            solution: "Complete digital voting system"
          },
          {
            problem: "You don't know if the decision is valid",
            solution: "Instantly know if there are enough votes"
          },
          {
            problem: "Manual voting, no backing",
            solution: "History of each vote"
          }
        ]
      },
      situation: {
        tag: "CURRENT SITUATION",
        title: "The problem communities face today.",
        quote: "\"Community decision-making shouldn't be so complicated: low attendance, informal voting, and doubts about validity generate constant friction.\"",
        problems: {
          title: "Today's problems",
          items: [
            { title: "In-person voting", desc: "Few attend, necessary votes are not reached" },
            { title: "Slow processes", desc: "Decisions take weeks or months" },
            { title: "Later questioned", desc: "Without clear backing of validity" }
          ]
        },
        solutions: {
          title: "you get",
          items: [
            { title: "Participation from anywhere", desc: "More owners vote, valid decisions" },
            { title: "Immediate results", desc: "See in real-time the progress of the vote" },
            { title: "Full backing", desc: "Official results with full traceability" }
          ]
        }
      },
      workflow: {
        tag: "Workflow",
        title: "Your community, step by step",
        steps: [
          {
            title: "You create the official vote",
            desc: "You define the subject, necessary votes by coefficient, and who can participate."
          },
          {
            title: "Community participates from the app",
            desc: "Each resident receives a notification and votes securely from their phone."
          },
          {
            title: "Backed results",
            desc: "Results are consolidated automatically and remain registered."
          }
        ]
      },
      footerCTA: {
        title1: "Make official backed decisions without questions with",
        title2: ".",
        button: "I want to schedule a Demo"
      }
    }
  };

  const content = t[language];

  const useCaseIcons = [
    <PieChart size={20} />,
    <Settings size={20} />,
    <CheckSquare size={20} />,
    <Users size={20} />
  ];

  const useCaseImages = [
    "/assets/modules/VOTACIONES/caso_de_uso_1.png",
    "/assets/modules/VOTACIONES/caso_de_uso_2.png",
    "/assets/modules/VOTACIONES/caso_de_uso_3.png",
    "/assets/modules/VOTACIONES/caso_de_uso_4.png"
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
                <span className="w-9 h-9 bg-domo rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">7</span>
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
                  <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
                    <img
                      src="/assets/modules/VOTACIONES/HEADER.png"
                      alt="Vista del módulo de votaciones"
                      className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* FRONT LAYER: Phone Animation */}
                <div className="absolute bottom-[-10%] left-0 md:-left-4 z-10 w-[240px] md:w-[300px]">
                  <div className="bg-white p-6 rounded-[2.5rem] shadow-[0_30px_80px_rgba(130,10,209,0.25)] border border-gray-100 transform -rotate-1 transition-all duration-500">
                    <div className="flex gap-2 items-end justify-center h-40 pb-4 border-b border-gray-100">
                      <div className="w-12 bg-purple-100 rounded-t-lg h-[40%] relative"><span className="absolute -top-6 w-full text-center text-xs font-bold text-gray-400">20%</span></div>
                      <div className="w-12 bg-domo rounded-t-lg h-[80%] relative"><span className="absolute -top-6 w-full text-center text-xs font-bold text-domo">60%</span></div>
                      <div className="w-12 bg-purple-200 rounded-t-lg h-[30%] relative"><span className="absolute -top-6 w-full text-center text-xs font-bold text-gray-400">20%</span></div>
                    </div>
                    <p className="text-center mt-4 font-bold text-torre">{content.hero.phone.results}</p>
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
        imageSrc="/assets/modules/VOTACIONES/como_funciona.png"
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
                  <>Con <span className="domonow-gradient">DomoNow</span> {content.situation.solutions.title}</>
                ) : (
                  <>With <span className="domonow-gradient">DomoNow</span> {content.situation.solutions.title}</>
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
            {content.footerCTA.title1} <span className="domonow-gradient">DomoNow</span>{content.footerCTA.title2}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><Button size="lg" className="bg-domo text-white hover:bg-torre hover:text-white transition-colors px-12 text-lg shadow-xl shadow-domo/20" onClick={onOpenDemo}>{content.footerCTA.button}</Button></div>
        </div>
      </section>
    </div>
  );
};
