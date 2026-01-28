import React, { useState, useEffect, useMemo } from 'react';
import { Button } from './Button';
import {
  User, ShieldCheck, Briefcase, Play,
  ChevronRight, Search, PlayCircle,
  HelpCircle, BookOpen, Layers, X
} from 'lucide-react';

interface HelpCenterPageProps {
  onOpenDemo: () => void;
}

type RoleType = 'resident' | 'admin' | 'security';

export const HelpCenterPage: React.FC<HelpCenterPageProps> = ({ onOpenDemo }) => {
  const [activeRole, setActiveRole] = useState<RoleType>('resident');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roles = [
    { id: 'resident' as RoleType, label: 'Arrendatario / Residente', icon: <User size={18} /> },
    { id: 'admin' as RoleType, label: 'Administrador', icon: <Briefcase size={18} /> },
    { id: 'security' as RoleType, label: 'Seguridad', icon: <ShieldCheck size={18} /> },
  ];

  // NOTE: In a real app, you would replace these videoId values with your actual YouTube video IDs.
  // We are using a placeholder ID 'M7fiCo4tQfk' for demonstration purposes.
  const content = {
    resident: [
      {
        section: "Empecemos",
        icon: <PlayCircle size={24} />,
        items: [
          { id: "res-1", title: "¿Cómo iniciar sesión y acceder a la plataforma?", videoId: "Q1S_iHfuJTE" },
          { id: "res-2", title: "¿Cómo personalizar y actualizar tu información personal?", videoId: "GDvTJiFJRwY" }
        ]
      },
      {
        section: "Solicitudes",
        icon: <HelpCircle size={24} />,
        items: [
          { id: "res-3", title: "¿Cómo crear una solicitud a la administración y hacer seguimiento a su estado?", videoId: "zhB6tiSQGFQ" }
        ]
      },
      {
        section: "Áreas comunes",
        icon: <Layers size={24} />,
        items: [
          { id: "res-4", title: "¿Cómo reservar un área común y consultar la disponibilidad?", videoId: "bq1JJMsQQek" }
        ]
      },
      {
        section: "Alerta de emergencia",
        icon: <ShieldCheck size={24} />,
        items: [
          { id: "res-5", title: "¿Cómo activar el botón de emergencia en caso de una situación crítica?", videoId: "TkH6H-7dUBI" }
        ]
      },
      {
        section: "Comunicaciones",
        icon: <BookOpen size={24} />,
        items: [
          { id: "res-6", title: "¿Cómo interactuar y reaccionar al muro de comunicaciones de la comunidad?", videoId: "sNmekh_RvAc" }
        ]
      },
      {
        section: "Accesos",
        icon: <User size={24} />,
        items: [
          { id: "res-7", title: "¿Cómo crear un pase de acceso para visitantes o proveedores?", videoId: "rzr7B8kY6ls" }
        ]
      }
    ],
    admin: [
      {
        section: "Publicaciones y comunicaciones",
        icon: <BookOpen size={24} />,
        items: [
          { id: "adm-1", title: "¿Cómo crear y gestionar publicaciones en el muro de comunicaciones?", videoId: "YvNvJyu_3Us" }
        ]
      },
      {
        section: "Solicitudes",
        icon: <HelpCircle size={24} />,
        items: [
          { id: "adm-2", title: "¿Cómo visualizar, gestionar y dar respuesta a las solicitudes de residentes y arrendatarios?", videoId: "JJD6169p-60" }
        ]
      },
      {
        section: "Accesos",
        icon: <User size={24} />,
        items: [
          { id: "adm-3", title: "¿Cómo administrar los pases de acceso y revisar el historial?", videoId: "0SeDfFNmaq4" }
        ]
      },
      {
        section: "Áreas comunes",
        icon: <Layers size={24} />,
        items: [
          { id: "adm-4", title: "¿Cómo configurar, aprobar y controlar las reservas de áreas comunes?", videoId: "8kQWkvHXHXc0" }
        ]
      },
      {
        section: "Configuración",
        icon: <Briefcase size={24} />,
        items: [
          { id: "adm-5", title: "¿Cómo configurar los parámetros generales de la comunidad, roles y permisos?", videoId: "tfrg9Wiudik" }
        ]
      }
    ],
    security: [
      {
        section: "Pases de acceso",
        icon: <ShieldCheck size={24} />,
        items: [
          { id: "sec-1", title: "¿Cómo crear y validar pases de acceso para visitantes, proveedores o residentes?", videoId: "6KC4aBll4pY" }
        ]
      }
    ]
  };

  // Flatten content for search
  const allItems = useMemo(() => {
    const items: any[] = [];
    Object.keys(content).forEach((roleKey) => {
      const role = roleKey as RoleType;
      const roleLabel = roles.find(r => r.id === role)?.label || role;

      content[role].forEach(section => {
        section.items.forEach(item => {
          items.push({
            ...item,
            role,
            roleLabel,
            sectionName: section.section,
            sectionIcon: section.icon
          });
        });
      });
    });
    return items;
  }, []);

  // Filter items based on search query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const lowerQuery = searchQuery.toLowerCase();
    return allItems.filter(item =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.sectionName.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery, allItems]);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="pt-20 bg-arquitectura font-sans text-torre min-h-screen flex flex-col">

      {/* 1. HERO & TOOLBAR */}
      <section className="relative pt-20 pb-12 bg-white border-b border-gray-100">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-domo/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="container mx-auto px-6 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block py-1.5 px-4 rounded-full bg-purple-50 border border-purple-100 text-domo text-tiny font-bold tracking-widest uppercase mb-6">
              Biblioteca de recursos
            </span>
            <h1 className="text-h2 md:text-h1 font-bold text-torre mb-6">
              Centro de Ayuda
            </h1>
            <p className="text-lead text-gray-500">
              Resuelve tus dudas rápidamente y aprovecha al máximo las funcionalidades de DomoNow.
            </p>
          </div>

          {/* Combined Toolbar: Roles + Search */}
          <div className="max-w-5xl mx-auto bg-white rounded-[2rem] p-2 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Role Tabs - Only show if not searching or if no results */}
            <div className={`flex p-1 bg-arquitectura rounded-[1.5rem] w-full md:w-auto overflow-x-auto no-scrollbar transition-opacity duration-300 ${searchQuery ? 'opacity-50 pointer-events-none md:opacity-100 md:pointer-events-auto' : ''}`}>
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => { setActiveRole(role.id); setActiveVideo(null); setSearchQuery(''); }}
                  className={`flex items-center gap-2 px-5 py-3 rounded-[1.2rem] text-small font-bold transition-all duration-300 whitespace-nowrap ${activeRole === role.id && !searchQuery
                      ? 'bg-white text-domo shadow-md'
                      : 'text-gray-500 hover:text-torre hover:bg-white/50'
                    }`}
                >
                  {role.icon}
                  {role.label}
                </button>
              ))}
            </div>

            {/* Divider (Desktop) */}
            <div className="hidden md:block w-px h-8 bg-gray-200"></div>

            {/* Search Input */}
            <div className="relative w-full md:flex-1 px-2 md:pr-4">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar temas, preguntas o guías..."
                className="w-full bg-gray-50 border-none rounded-xl py-3 pl-12 pr-10 text-torre placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-domo/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-torre p-1"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTENT GRID */}
      <section className="py-16 flex-grow">
        <div className="container mx-auto px-6 max-w-6xl">

          {searchQuery ? (
            // ================= SEARCH RESULTS VIEW =================
            <div className="animate-[fadeIn_0.3s_ease-out]">
              <h3 className="text-h4 font-bold text-torre mb-8 flex items-center gap-3">
                <Search size={24} className="text-domo" />
                Resultados para "{searchQuery}"
                <span className="text-gray-400 text-body font-normal ml-2">({searchResults.length} encontrados)</span>
              </h3>

              {searchResults.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {searchResults.map((item) => (
                    <div
                      key={item.id}
                      className={`group rounded-2xl p-5 border transition-all duration-300 bg-white ${activeVideo === item.id
                          ? 'border-domo shadow-lg ring-1 ring-domo'
                          : 'border-gray-100 hover:border-domo/30 hover:shadow-md cursor-pointer'
                        }`}
                    >
                      {/* Role Badge for context in search */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-arquitectura text-gray-500 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                          {item.roleLabel}
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="text-[10px] font-bold text-domo flex items-center gap-1">
                          {item.sectionName}
                        </span>
                      </div>

                      <div
                        onClick={() => setActiveVideo(activeVideo === item.id ? null : item.id)}
                        className="flex justify-between items-start gap-3 cursor-pointer"
                      >
                        <span className={`text-body font-medium leading-snug transition-colors ${activeVideo === item.id ? 'text-domo font-bold' : 'text-gray-700 group-hover:text-torre'}`}>
                          {item.title}
                        </span>
                        <div className={`shrink-0 transition-transform duration-300 ${activeVideo === item.id ? 'rotate-90 text-domo' : 'text-gray-300 group-hover:text-domo'}`}>
                          <ChevronRight size={20} />
                        </div>
                      </div>

                      {/* Video Player */}
                      <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${activeVideo === item.id ? 'grid-rows-[1fr] mt-5' : 'grid-rows-[0fr]'}`}>
                        <div className="overflow-hidden">
                          <div
                            className="mx-auto w-full max-w-[280px] bg-black rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative"
                            style={{ aspectRatio: '9/16' }}
                          >
                            {activeVideo === item.id && (
                              <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1`}
                                title={item.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                              ></iframe>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-[2.5rem] border border-gray-100 border-dashed">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                    <Search size={32} />
                  </div>
                  <h3 className="text-h4 font-bold text-gray-400">No encontramos resultados</h3>
                  <p className="text-gray-400 mt-2">Intenta con otras palabras clave o navega por las categorías.</p>
                  <button
                    onClick={handleClearSearch}
                    className="mt-6 text-domo font-bold hover:underline"
                  >
                    Limpiar búsqueda
                  </button>
                </div>
              )}
            </div>
          ) : (
            // ================= STANDARD CATEGORY VIEW =================
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16 items-start animate-[fadeIn_0.5s_ease-out]">
              {content[activeRole].map((group, index) => (
                <div key={index} className="space-y-6">

                  {/* Section Header */}
                  <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
                    <div className="text-domo bg-purple-50 p-2 rounded-lg">
                      {group.icon}
                    </div>
                    <h3 className="text-h4 font-bold text-torre">{group.section}</h3>
                  </div>

                  {/* Questions List */}
                  <div className="space-y-3">
                    {group.items.map((item) => (
                      <div
                        key={item.id}
                        className={`group rounded-2xl p-5 border transition-all duration-300 bg-white ${activeVideo === item.id
                            ? 'border-domo shadow-lg ring-1 ring-domo'
                            : 'border-transparent hover:border-gray-200 hover:shadow-md cursor-pointer'
                          }`}
                      >
                        {/* Header of the item (Click to toggle) */}
                        <div
                          onClick={() => setActiveVideo(activeVideo === item.id ? null : item.id)}
                          className="flex justify-between items-start gap-3 cursor-pointer"
                        >
                          <span className={`text-body font-medium leading-snug transition-colors ${activeVideo === item.id ? 'text-domo font-bold' : 'text-gray-600 group-hover:text-torre'}`}>
                            {item.title}
                          </span>
                          <div className={`shrink-0 transition-transform duration-300 ${activeVideo === item.id ? 'rotate-90 text-domo' : 'text-gray-300 group-hover:text-domo'}`}>
                            <ChevronRight size={20} />
                          </div>
                        </div>

                        {/* Accordion Content: Vertical Video Player (9:16) */}
                        <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${activeVideo === item.id ? 'grid-rows-[1fr] mt-5' : 'grid-rows-[0fr]'}`}>
                          <div className="overflow-hidden">
                            {/* 9:16 Aspect Ratio Container centered */}
                            <div
                              className="mx-auto w-full max-w-[280px] bg-black rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative"
                              style={{ aspectRatio: '9/16' }}
                            >
                              {activeVideo === item.id && (
                                <iframe
                                  width="100%"
                                  height="100%"
                                  src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1`}
                                  title={item.title}
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                  className="absolute inset-0 w-full h-full"
                                ></iframe>
                              )}
                              {/* Loading State / Placeholder if needed */}
                              {!activeVideo && (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                                  <div className="w-8 h-8 border-4 border-domo border-t-transparent rounded-full animate-spin"></div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. SUPPORT SECTION (FULL WIDTH - WHITE) */}
      <section className="py-16 bg-white border-t border-gray-100 relative overflow-hidden">
        {/* Decorative background elements - adjusted for white background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-domo/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-domo/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm text-domo border border-purple-100">
              <Briefcase size={32} />
            </div>
            <h2 className="text-h2 font-bold text-torre mb-4">
              ¿Necesitas soporte personalizado?
            </h2>
            <p className="text-lead text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
              Si no encuentras la respuesta que buscas, nuestro equipo de expertos está listo para ayudarte a resolver cualquier inconveniente técnico.
            </p>
            <Button
              size="lg"
              onClick={onOpenDemo}
              className="bg-domo text-white hover:bg-torre hover:text-white border-0 px-12 py-4 text-lg shadow-xl shadow-domo/20"
            >
              Contactar Soporte
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};