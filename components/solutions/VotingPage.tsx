import React, { useEffect } from 'react';
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
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const appScreens = [
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600&h=1066",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=1066",
    "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=600&h=1066",
    "https://images.unsplash.com/photo-1555421689-4926331a981c?auto=format&fit=crop&q=80&w=600&h=1066",
    "https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&q=80&w=600&h=1066",
  ];

  const useCases = [
    { category: "Presupuestos", description: "Aprobación de presupuestos", icon: <PieChart size={20} />, image: "/assets/Modulos/VOTACIONES/caso_de_uso_1.png" },
    { category: "Reglamentos", description: "Cambios en reglamentos o normas internas", icon: <Settings size={20} />, image: "/assets/Modulos/VOTACIONES/caso_de_uso_2.png" },
    { category: "Obras", description: "Aprobar una obra grande o gasto extraordinario", icon: <CheckSquare size={20} />, image: "/assets/Modulos/VOTACIONES/caso_de_uso_3.png" },
    { category: "Elecciones", description: "Elección de junta, comités o proveedores", icon: <Users size={20} />, image: "/assets/Modulos/VOTACIONES/caso_de_uso_4.png" }
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
                <span className="text-base font-bold tracking-widest uppercase text-domo">VOTACIONES</span>
              </div>
              <p className="text-small text-gray-400 italic mb-4 ml-12">Decisiones importantes con respaldo oficial</p>
              <h1 className="text-h2 md:text-h1 font-bold leading-tight mb-6 text-torre">
                "Las votaciones tardan semanas<br />
                <span className="text-domo">y después se cuestionan"</span>
              </h1>
              <div className="prose text-lead text-gray-500 mb-8 leading-relaxed">
                <p className="mb-4 text-torre font-bold">
                  Pocos asisten, no hay suficientes votos, las decisiones no son válidas.
                </p>
                <p>
                  <strong className="text-torre"><span className="domonow-gradient">DomoNow</span> digitaliza votaciones oficiales.</strong> Participación remota válida y resultados en tiempo real.
                </p>
              </div>
              <div className="flex gap-4"><Button size="lg" onClick={onOpenDemo} className="shadow-xl shadow-domo/20">Conoce cómo funciona</Button></div>
            </div>

            <div className="lg:w-7/12 relative w-full mt-12 lg:mt-0">
              <div className="relative w-full max-w-[850px] ml-auto">
                {/* BACK LAYER: Dashboard */}
                <div className="relative z-0 ml-8 md:ml-24 transform rotate-1 hover:rotate-0 transition-all duration-700">
                  <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
                    <img
                      src="/assets/Modulos/VOTACIONES/header.png"
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
                    <p className="text-center mt-4 font-bold text-torre">Resultados en Tiempo Real</p>
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
          <h2 className="text-h2 font-bold text-center mb-16 text-torre">Casos de uso</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((item, index) => (
              <div key={index} className="relative h-[500px] rounded-[2rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 w-full h-full">
                  <img src={item.image} alt={item.category} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30"></div>
                </div>
                <div className="absolute top-6 left-6 z-10"><h3 className="text-h4 font-bold text-white drop-shadow-md tracking-tight">{item.category}</h3></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-6 rounded-[2rem] shadow-xl flex flex-col gap-4 h-40 border border-white/50">
                  <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-domo shrink-0">{item.icon}</div>
                  <div><p className="text-small font-medium text-torre leading-snug">{item.description}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorksSection
        title="Conoce cómo funciona"
        imageSrc="/assets/Modulos/VOTACIONES/como_funciona.png"
        items={[
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
        ]}
      />

      {/* 2. PROBLEM VS SOLUTION */}
      <section className="py-24 bg-arquitectura relative z-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6"><span className="h-px w-8 bg-red-400"></span><span className="text-red-400 font-bold tracking-widest uppercase text-tiny">SITUACIÓN ACTUAL</span><span className="h-px w-8 bg-red-400"></span></div>
            <h2 className="text-h2 font-bold text-torre mb-8 leading-tight">El problema que viven hoy las comunidades.</h2>
            <div className="relative inline-block">
              <Quote className="absolute -top-4 -left-8 text-gray-200 w-10 h-10 transform -scale-x-100 z-0 opacity-50" />
              <p className="relative z-10 text-h4 text-gray-500 leading-relaxed font-medium">"Tomar decisiones en comunidad no debería ser tan complicado: baja asistencia, votaciones informales y dudas sobre la validez generan fricción constante."</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Problem */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 group hover:border-red-100 transition-colors duration-300 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-8"><div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-400"><X size={16} strokeWidth={3} /></div><span className="font-bold text-gray-400 uppercase tracking-widest text-[10px] md:text-tiny">Lo que pasa hoy</span></div>
              <div className="space-y-8 flex-grow">
                {[{ title: "Votaciones presenciales", desc: "Pocos asisten, no se alcanzan los votos necesarios" }, { title: "Procesos lentos", desc: "Las decisiones toman semanas o meses" }, { title: "Se cuestionan después", desc: "Sin respaldo claro de validez" }].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start"><div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 shrink-0 group-hover:bg-red-50 group-hover:text-red-400 transition-colors"><X size={20} /></div><div><h4 className="font-bold text-torre text-body mb-1">{item.title}</h4><p className="text-small text-gray-500 leading-relaxed">{item.desc}</p></div></div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div className="bg-[#F9F5FF] p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-domo/5 border border-purple-100 group hover:border-domo/30 transition-colors duration-300 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-8"><div className="w-8 h-8 rounded-full bg-domo/10 flex items-center justify-center text-domo"><Check size={16} strokeWidth={3} /></div><span className="font-bold text-domo uppercase tracking-widest text-[10px] md:text-tiny">Con <span className="domonow-gradient">DomoNow</span> obtienes</span></div>
              <div className="space-y-8 flex-grow">
                {[{ title: "Participación desde cualquier lugar", desc: "Más propietarios votan, decisiones válidas" }, { title: "Resultados inmediatos", desc: "Ves en tiempo real el avance de la votación" }, { title: "Respaldo completo", desc: "Resultados oficiales con toda la trazabilidad" }].map((item, i) => (
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
            <span className="text-domo font-bold tracking-widest uppercase text-tiny mb-2 block">Flujo de Trabajo</span>
            <h2 className="text-h2 font-bold text-torre">Tu comunidad, paso a paso</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-transparent hover:border-domo hover:shadow-xl transition-all duration-300 group h-full flex flex-col items-center text-center">
              <div className="flex justify-center mb-8">
                <div className="w-10 h-10 bg-gray-100 group-hover:bg-domo rounded-full flex items-center justify-center text-torre group-hover:text-white text-small font-bold transition-colors duration-300">1</div>
              </div>
              <h3 className="text-h4 font-bold text-torre mb-3">Creas la votación oficial</h3>
              <p className="text-body text-gray-500 leading-relaxed">Defines el tema, votos necesarios por coeficiente y quiénes pueden participar.</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-transparent hover:border-domo hover:shadow-xl transition-all duration-300 group h-full flex flex-col items-center text-center">
              <div className="flex justify-center mb-8">
                <div className="w-10 h-10 bg-gray-100 group-hover:bg-domo rounded-full flex items-center justify-center text-torre group-hover:text-white text-small font-bold transition-colors duration-300">2</div>
              </div>
              <h3 className="text-h4 font-bold text-torre mb-3">La comunidad participa desde la app</h3>
              <p className="text-body text-gray-500 leading-relaxed">Cada residente recibe una notificación y vota de forma segura desde su celular.</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-transparent hover:border-domo hover:shadow-xl transition-all duration-300 group h-full flex flex-col items-center text-center">
              <div className="flex justify-center mb-8">
                <div className="w-10 h-10 bg-gray-100 group-hover:bg-domo rounded-full flex items-center justify-center text-torre group-hover:text-white text-small font-bold transition-colors duration-300">3</div>
              </div>
              <h3 className="text-h4 font-bold text-torre mb-3">Resultados respaldados</h3>
              <p className="text-body text-gray-500 leading-relaxed">Los resultados se consolidan automáticamente y quedan registrados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 bg-gradient-to-br from-white to-purple-100 text-torre text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-h3 font-bold mb-8 leading-tight text-torre">Toma decisiones oficiales respaldadas y sin cuestionamientos con <span className="domonow-gradient">DomoNow</span>.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><Button size="lg" className="bg-domo text-white hover:bg-torre hover:text-white transition-colors px-12 text-lg shadow-xl shadow-domo/20" onClick={onOpenDemo}>Quiero agendar una Demo</Button></div>
        </div>
      </section>
    </div>
  );
};