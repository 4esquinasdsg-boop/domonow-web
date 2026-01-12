import React, { useEffect } from 'react';
import { Button } from '../Button';
import { ImageCarousel } from '../ImageCarousel';
import { 
  Folder, Search, Shield, FileText,
  X, Check, Quote, Cloud, Eye, UserCheck
} from 'lucide-react';

interface DocumentsPageProps {
  onOpenDemo: () => void;
}

export const DocumentsPage: React.FC<DocumentsPageProps> = ({ onOpenDemo }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const appScreens = [
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600&h=1066",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=1066",
    "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=600&h=1066",
    "https://images.unsplash.com/photo-1555421689-4926331a981c?auto=format&fit=crop&q=80&w=600&h=1066",
    "https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&q=80&w=600&h=1066",
  ];

  const useCases = [
    { category: "Reglamento", description: "Residentes consultan el reglamento", icon: <FileText size={20} />, image: "https://images.unsplash.com/photo-1550966871-3ed3c622bc13?auto=format&fit=crop&q=80&w=800" },
    { category: "Actas", description: "Junta directiva revisa actas y documentos en segundos", icon: <Search size={20} />, image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" },
    { category: "Bienvenida", description: "Nuevos residentes acceden a la información clave desde el primer día", icon: <UserCheck size={20} />, image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800" },
    { category: "Consultas", description: "Administración responde consultas sin buscar archivos uno por uno", icon: <Folder size={20} />, image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800" }
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
              <span className="inline-block py-1.5 px-4 rounded-full bg-purple-50 border border-purple-100 text-domo text-tiny font-bold tracking-widest uppercase mb-6">Módulo 04</span>
              <h1 className="text-h2 md:text-h1 font-bold leading-tight mb-6 text-torre">Gestión <br/><span className="text-domo">documental</span></h1>
              <div className="prose text-lead text-gray-500 mb-8 leading-relaxed">
                <p>DomoNow <strong>centraliza los documentos clave</strong> para que administración y residentes los encuentren siempre actualizados, seguros y en un solo lugar.</p>
              </div>
              <div className="flex gap-4"><Button size="lg" onClick={onOpenDemo} className="shadow-xl shadow-domo/20">Conoce cómo funciona</Button></div>
            </div>
            
            <div className="lg:w-7/12 relative w-full mt-12 lg:mt-0">
                <div className="relative w-full max-w-[850px] ml-auto">
                    {/* BACK LAYER: Dashboard */}
                    <div className="relative z-0 ml-8 md:ml-24 transform rotate-1 hover:rotate-0 transition-all duration-700">
                        <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
                            <img 
                                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200" 
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
                                 {[1,2,3].map(i => (
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

      {/* 2. PROBLEM VS SOLUTION */}
      <section className="py-24 bg-arquitectura relative z-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
             <div className="flex items-center justify-center gap-3 mb-6"><span className="h-px w-8 bg-red-400"></span><span className="text-red-400 font-bold tracking-widest uppercase text-tiny">SITUACIÓN ACTUAL</span><span className="h-px w-8 bg-red-400"></span></div>
             <h2 className="text-h2 font-bold text-torre mb-8 leading-tight">El problema que viven hoy las comunidades.</h2>
             <div className="relative inline-block">
                 <Quote className="absolute -top-4 -left-8 text-gray-200 w-10 h-10 transform -scale-x-100 z-0 opacity-50" />
                 <p className="relative z-10 text-h4 text-gray-500 leading-relaxed font-medium">"En la mayoría de copropiedades, los documentos están dispersos. Cada solicitud se vuelve una búsqueda innecesaria que genera reprocesos y desgasta a la administración."</p>
             </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Problem */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 group hover:border-red-100 transition-colors duration-300 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8"><div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-400"><X size={16} strokeWidth={3} /></div><span className="font-bold text-gray-400 uppercase tracking-widest text-[10px] md:text-tiny">Lo que pasa hoy</span></div>
                <div className="space-y-8 flex-grow">
                    {[{ title: "Reglamentos que nadie encuentra", desc: "" }, { title: "Riesgo por accesos no controlados o información mal gestionada", desc: "" }].map((item, i) => (
                        <div key={i} className="flex gap-5 items-start"><div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 shrink-0 group-hover:bg-red-50 group-hover:text-red-400 transition-colors"><X size={20} /></div><div><h4 className="font-bold text-torre text-body mb-1">{item.title}</h4></div></div>
                    ))}
                </div>
            </div>

            {/* Solution */}
            <div className="bg-[#F9F5FF] p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-domo/5 border border-purple-100 group hover:border-domo/30 transition-colors duration-300 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8"><div className="w-8 h-8 rounded-full bg-domo/10 flex items-center justify-center text-domo"><Check size={16} strokeWidth={3} /></div><span className="font-bold text-domo uppercase tracking-widest text-[10px] md:text-tiny">Con DomoNow obtienes</span></div>
                <div className="space-y-8 flex-grow">
                    {[{ title: "Repositorio digital seguro para toda la comunidad", desc: "" }, { title: "Centralizar reglamentos, actas y políticas", desc: "" }, { title: "Encontrar archivos fácilmente con búsqueda inteligente", desc: "Es ahorrar tiempo, reducir fricción y dar respuestas claras, sin desgaste." }].map((item, i) => (
                        <div key={i} className="flex gap-5 items-start"><div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-domo shrink-0 shadow-sm group-hover:bg-domo group-hover:text-white transition-colors"><Check size={20} /></div><div><h4 className="font-bold text-torre text-body mb-1">{item.title}</h4>{item.desc && <p className="text-small text-gray-500 leading-relaxed">{item.desc}</p>}</div></div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 CAROUSEL */}
      <section className="py-20 bg-white border-t border-gray-100 overflow-hidden relative z-10">
         <div className="container mx-auto px-6 mb-12 text-center">
             <h3 className="text-h3 font-bold text-torre">Interfaz moderna e intuitiva</h3>
             <p className="text-gray-500 mt-2 text-lead">Diseñada para que cualquier residente pueda usarla fácilmente.</p>
         </div>
         <div className="-mx-4 md:-mx-8"><ImageCarousel images={appScreens} heightClass="h-[550px] md:h-[600px]" /></div>
         <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-20"></div>
         <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-20"></div>
      </section>

      {/* 3. WORKFLOW */}
      <section className="py-24 bg-arquitectura relative z-10">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-domo font-bold tracking-widest uppercase text-tiny mb-2 block">Flujo de Trabajo</span>
                <h2 className="text-h2 font-bold text-torre">Tu comunidad, paso a paso</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                    <div className="flex justify-between items-start mb-8"><div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-torre group-hover:bg-domo group-hover:text-white transition-colors"><Cloud size={20} /></div><span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-3">PASO 1</span></div>
                    <h3 className="text-h4 font-bold text-torre mb-3">Carga y organiza</h3>
                    <p className="text-body text-gray-500 leading-relaxed">La administración sube los documentos y los clasifica por tipo o categoría.</p>
                </div>
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                    <div className="flex justify-between items-start mb-8"><div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-torre group-hover:bg-horizonte group-hover:text-torre transition-colors"><Shield size={20} /></div><span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-3">PASO 2</span></div>
                    <h3 className="text-h4 font-bold text-torre mb-3">Acceso claro y controlado</h3>
                    <p className="text-body text-gray-500 leading-relaxed">Cada usuario ve solo la información que le corresponde, desde la app.</p>
                </div>
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                    <div className="flex justify-between items-start mb-8"><div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-torre group-hover:bg-domo group-hover:text-white transition-colors"><Search size={20} /></div><span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-3">PASO 3</span></div>
                    <h3 className="text-h4 font-bold text-torre mb-3">Consulta inmediata</h3>
                    <p className="text-body text-gray-500 leading-relaxed">Cuando alguien necesita un documento, lo encuentra en segundos, sin llamadas ni correos.</p>
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
                             <img src={item.image} alt={item.category} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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

      {/* 5. CTA */}
      <section className="py-24 bg-[#E9D5FF] text-torre text-center px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
          <div className="container mx-auto max-w-3xl relative z-10">
              <h2 className="text-h2 font-bold mb-8 leading-tight text-torre">Organiza hoy la documentación de tu comunidad con DomoNow. Empieza a gestionar con menos fricción y más control desde un solo lugar.</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"><Button size="lg" className="bg-domo text-white hover:bg-torre hover:text-white transition-colors px-12 text-lg shadow-xl shadow-domo/20" onClick={onOpenDemo}>Quiero agendar una Demo</Button></div>
          </div>
      </section>
    </div>
  );
};