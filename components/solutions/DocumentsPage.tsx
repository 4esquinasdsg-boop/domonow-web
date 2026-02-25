import React, { useEffect, useState } from 'react';
import { toYouTubeEmbed } from '../../utils/youtube';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
import { ImageCarousel } from '../ImageCarousel';
import { HowItWorksSection } from '../HowItWorksSection';
import { ParticleBackground } from '../ParticleBackground';
import {
  Folder, Search, Shield, FileText,
  X, Check, Quote, Cloud, Eye, UserCheck
} from 'lucide-react';

interface DocumentsPageProps {
  onOpenDemo: () => void;
}

export const DocumentsPage: React.FC<DocumentsPageProps> = ({ onOpenDemo }) => {
  const { i18n } = useTranslation();
  const language = (i18n.language?.startsWith('en') ? 'en' : 'es') as 'es' | 'en';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const t = {
    es: {
      hero: {
        tag: "MÓDULO DOCUMENTAL",
        subtitle: "Documentos organizados, accesibles y seguros",
        title1: "¿Dónde encuentro",
        title2: "el reglamento?",
        problem: "Archivos en carpetas personales, que generan búsquedas eternas.",
        solution: "centraliza todos los documentos. Encuentras lo que necesitas en segundos.",
        cta: "Conoce cómo funciona"
      },
      useCases: {
        title: "Casos de uso",
        items: [
          { category: "Residentes consultan el reglamento", videoUrl: "" },
          { category: "Junta revisa actas en segundos", videoUrl: "" },
          { category: "Nuevos residentes informados desde el primer día", videoUrl: "" },
          { category: "Consultas resueltas sin buscar en archivos físicos", videoUrl: "" }
        ]
      },
      howItWorks: {
        title: "Conoce cómo funciona",
        items: [
          {
            problem: "Carpetas básicas sin estructura",
            solution: "Permisos personalizables"
          },
          {
            problem: "Acceso general sin restricciones",
            solution: "Búsqueda inteligente por contenido"
          },
          {
            problem: "Búsqueda solo por nombre de archivo",
            solution: "Notificaciones de nuevos documentos"
          }
        ]
      },
      situation: {
        tag: "SITUACIÓN ACTUAL",
        title: "El problema que viven hoy las comunidades.",
        quote: "\"En la mayoría de copropiedades, los documentos están dispersos. Cada solicitud se vuelve una búsqueda innecesaria que genera reprocesos y desgasta a la administración.\"",
        problems: {
          title: "Los problemas de hoy",
          items: [
            { title: "Documentos Perdidos", desc: "Horas buscando contratos extraviados" },
            { title: "Versiones Confusas", desc: "Múltiples copias del mismo archivo" },
            { title: "Riesgos de Cumplimiento", desc: "Vencimientos ignorados" }
          ]
        },
        solutions: {
          title: "Con DomoNow obtienes",
          items: [
            { title: "Control total", desc: "Encuentra cualquier documento en segundos" },
            { title: "Trazabilidad Completa", desc: "Historial de cambios y versiones" },
            { title: "Seguridad garantizada", desc: "Respaldos automáticos y permisos por usuario" }
          ]
        }
      },
      workflow: {
        tag: "Flujo de Trabajo",
        title: "Tu comunidad, paso a paso",
        steps: [
          {
            title: "Carga y organiza",
            desc: "La administración sube los documentos y los clasifica por tipo o categoría."
          },
          {
            title: "Acceso claro y controlado",
            desc: "Cada usuario ve solo la información que le corresponde, desde la app."
          },
          {
            title: "Consulta inmediata",
            desc: "Cuando alguien necesita un documento, lo encuentra en segundos, sin llamadas ni correos."
          }
        ]
      },
      footerCTA: {
        title: "Organiza hoy la documentación de tu comunidad con DomoNow. Empieza a gestionar con menos fricción y más control desde un solo lugar.",
        button: "Quiero agendar una Demo"
      }
    },
    en: {
      hero: {
        tag: "DOCUMENTARY MODULE",
        subtitle: "Organized, accessible and secure documents",
        title1: "Where do I find",
        title2: "the bylaws?",
        problem: "Files in personal folders, which generate eternal searches.",
        solution: "centralizes all documents. Find what you need in seconds.",
        cta: "See how it works"
      },
      useCases: {
        title: "Use cases",
        items: [
          { category: "Residents consult the bylaws", videoUrl: "" },
          { category: "Board reviews minutes in seconds", videoUrl: "" },
          { category: "New residents informed from day one", videoUrl: "" },
          { category: "Queries resolved without searching physical archives", videoUrl: "" }
        ]
      },
      howItWorks: {
        title: "See how it works",
        items: [
          {
            problem: "Basic folders without structure",
            solution: "Customizable permissions"
          },
          {
            problem: "General access without restrictions",
            solution: "Intelligent search by content"
          },
          {
            problem: "Search only by file name",
            solution: "Notifications for new documents"
          }
        ]
      },
      situation: {
        tag: "CURRENT SITUATION",
        title: "The problem communities face today.",
        quote: "\"In most co-properties, documents are scattered. Each request becomes an unnecessary search that generates re-work and wears down the administration.\"",
        problems: {
          title: "Today's problems",
          items: [
            { title: "Lost Documents", desc: "Hours searching for misplaced contracts" },
            { title: "Confusing Versions", desc: "Multiple copies of the same file" },
            { title: "Compliance Risks", desc: "Ignored expirations" }
          ]
        },
        solutions: {
          title: "With DomoNow you get",
          items: [
            { title: "Total control", desc: "Find any document in seconds" },
            { title: "Complete Traceability", desc: "Change history and versions" },
            { title: "Guaranteed security", desc: "Automatic backups and per-user permissions" }
          ]
        }
      },
      workflow: {
        tag: "Workflow",
        title: "Your community, step by step",
        steps: [
          {
            title: "Upload and organize",
            desc: "The administration uploads documents and classifies them by type or category."
          },
          {
            title: "Clear and controlled access",
            desc: "Each user sees only the information that corresponds to them, from the app."
          },
          {
            title: "Immediate inquiry",
            desc: "When someone needs a document, they find it in seconds, without calls or emails."
          }
        ]
      },
      footerCTA: {
        title: "Organize your community's documentation today with DomoNow. Start managing with less friction and more control from one single place.",
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
    <FileText size={20} />,
    <Search size={20} />,
    <UserCheck size={20} />,
    <Folder size={20} />
  ];

  const useCaseImages = [
    "/assets/modules/DOCUMENTAL/CASO DE USO 1.png",
    "/assets/modules/DOCUMENTAL/CASO DE USO 2.png",
    "/assets/modules/DOCUMENTAL/CASO DE USO 3.png",
    "/assets/modules/DOCUMENTAL/CASO DE USO 4.png"
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
                <span className="w-9 h-9 bg-domo rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">11</span>
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
                  <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
                    <img
                      src="/assets/modules/DOCUMENTAL/HEADER.png"
                      alt="Vista del módulo de documentos"
                      className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* FRONT LAYER: Phone Animation */}
                <div className="absolute bottom-[-10%] left-0 md:-left-4 z-10 w-[240px] md:w-[300px]">
                  <div className="bg-white p-6 rounded-[2.5rem] shadow-[0_30px_80px_rgba(130,10,209,0.25)] border border-gray-100 transform rotate-1 transition-all duration-500">
                    <div className="space-y-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-purple-50 transition-colors">
                          <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-domo"><FileText size={20} /></div>
                          <div className="flex-1"><div className="h-3 w-3/4 bg-gray-200 rounded-full mb-2"></div><div className="h-2 w-1/2 bg-gray-100 rounded-full"></div></div>
                        </div>
                      ))}
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
          @keyframes pulseGlow {
              0%, 100% { box-shadow: 0 0 0 0 rgba(130, 10, 209, 0.5); transform: scale(1); }
              50% { box-shadow: 0 0 20px 6px rgba(130, 10, 209, 0.35); transform: scale(1.05); }
          }
          .btn-pulse-glow {
              animation: pulseGlow 2s ease-in-out infinite;
          }
      `}</style>

      {/* USE CASES */}
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
        imageSrc="/assets/modules/DOCUMENTAL/CÓMO FUNCIONA.png"
        items={content.howItWorks.items}
      />

      {/* PROBLEM VS SOLUTION */}
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
              <div className="flex items-center gap-3 mb-8"><div className="w-8 h-8 rounded-full bg-domo flex items-center justify-center text-white"><Check size={16} strokeWidth={3} /></div><span className="font-bold text-domo uppercase tracking-widest text-[10px] md:text-tiny">
                {language === 'es' ? (
                  <>Con <span className="domonow-gradient">DomoNow</span> obtienes</>
                ) : (
                  <>With <span className="domonow-gradient">DomoNow</span> you get</>
                )}
              </span></div>
              <div className="space-y-8 flex-grow">
                {content.situation.solutions.items.map((item, i) => (
                  <div key={i} className="flex gap-5 items-start"><div className="w-12 h-12 bg-domo rounded-full flex items-center justify-center text-white shrink-0"><Check size={20} /></div><div><h4 className="font-bold text-torre text-body mb-1">{item.title}</h4><p className="text-small text-gray-500 leading-relaxed">{item.desc}</p></div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
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
              <>Organiza hoy la documentación de tu comunidad con <span className="domonow-gradient">DomoNow</span>. Empieza a gestionar con menos fricción y más control desde un solo lugar.</>
            ) : (
              <>Organize your community's documentation today with <span className="domonow-gradient">DomoNow</span>. Start managing with less friction and more control from one single place.</>
            )}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><Button size="lg" className="bg-domo text-white hover:bg-torre hover:text-white transition-colors px-12 text-lg shadow-xl shadow-domo/20" onClick={onOpenDemo}>{content.footerCTA.button}</Button></div>
        </div>
      </section>
    </div>
  );
};
