import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { i18n } = useTranslation();
  const [activeRole, setActiveRole] = useState<RoleType>('resident');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const language = (i18n.language?.startsWith('en') ? 'en' : 'es') as 'es' | 'en';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = {
    es: {
      hero: {
        title: "Centro de Ayuda",
        subtitle: "Resuelve tus dudas rápidamente y aprovecha al máximo las funcionalidades de ",
        searchPlaceholder: "Buscar temas, preguntas o guías...",
      },
      roles: {
        resident: "Comunidad",
        admin: "Administrador",
        security: "Seguridad",
      },
      search: {
        resultsFor: "Resultados para",
        found: "encontrados",
        noResults: "No encontramos resultados",
        noResultsDesc: "Intenta con otras palabras clave o navega por las categorías.",
        clear: "Limpiar búsqueda",
      },
      support: {
        title: "¿Necesitas soporte personalizado?",
        desc: "Si no encuentras la respuesta que buscas, nuestro equipo de expertos está listo para ayudarte a resolver cualquier inconveniente técnico.",
        button: "Contactar Soporte",
      }
    },
    en: {
      hero: {
        title: "Help Center",
        subtitle: "Solve your doubts quickly and make the most of ",
        searchPlaceholder: "Search topics, questions or guides...",
      },
      roles: {
        resident: "Community",
        admin: "Administrator",
        security: "Security",
      },
      search: {
        resultsFor: "Results for",
        found: "found",
        noResults: "No results found",
        noResultsDesc: "Try other keywords or browse categories.",
        clear: "Clear search",
      },
      support: {
        title: "Need custom support?",
        desc: "If you don't find the answer you're looking for, our team of experts is ready to help you resolve any technical issue.",
        button: "Contact Support",
      }
    }
  }[language];

  const roles = [
    { id: 'resident' as RoleType, label: t.roles.resident, icon: <User size={18} /> },
    { id: 'admin' as RoleType, label: t.roles.admin, icon: <Briefcase size={18} /> },
    { id: 'security' as RoleType, label: t.roles.security, icon: <ShieldCheck size={18} /> },
  ];

  const content = {
    es: {
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
    },
    en: {
      resident: [
        {
          section: "Let's Get Started",
          icon: <PlayCircle size={24} />,
          items: [
            { id: "res-1", title: "How to log in and access the platform?", videoId: "Q1S_iHfuJTE" },
            { id: "res-2", title: "How to customize and update your personal information?", videoId: "GDvTJiFJRwY" }
          ]
        },
        {
          section: "Requests",
          icon: <HelpCircle size={24} />,
          items: [
            { id: "res-3", title: "How to create a request to the administration and track its status?", videoId: "zhB6tiSQGFQ" }
          ]
        },
        {
          section: "Common Areas",
          icon: <Layers size={24} />,
          items: [
            { id: "res-4", title: "How to reserve a common area and check availability?", videoId: "bq1JJMsQQek" }
          ]
        },
        {
          section: "Emergency Alert",
          icon: <ShieldCheck size={24} />,
          items: [
            { id: "res-5", title: "How to activate the emergency button in case of a critical situation?", videoId: "TkH6H-7dUBI" }
          ]
        },
        {
          section: "Communications",
          icon: <BookOpen size={24} />,
          items: [
            { id: "res-6", title: "How to interact and react to the community communications wall?", videoId: "sNmekh_RvAc" }
          ]
        },
        {
          section: "Accesses",
          icon: <User size={24} />,
          items: [
            { id: "res-7", title: "How to create an access pass for visitors or providers?", videoId: "rzr7B8kY6ls" }
          ]
        }
      ],
      admin: [
        {
          section: "Posts and Communications",
          icon: <BookOpen size={24} />,
          items: [
            { id: "adm-1", title: "How to create and manage posts on the communications wall?", videoId: "YvNvJyu_3Us" }
          ]
        },
        {
          section: "Requests",
          icon: <HelpCircle size={24} />,
          items: [
            { id: "adm-2", title: "How to view, manage, and respond to requests from residents and tenants?", videoId: "JJD6169p-60" }
          ]
        },
        {
          section: "Accesses",
          icon: <User size={24} />,
          items: [
            { id: "adm-3", title: "How to manage access passes and review history?", videoId: "0SeDfFNmaq4" }
          ]
        },
        {
          section: "Common Areas",
          icon: <Layers size={24} />,
          items: [
            { id: "adm-4", title: "How to configure, approve, and control common area reservations?", videoId: "8kQWkvHXHXc0" }
          ]
        },
        {
          section: "Settings",
          icon: <Briefcase size={24} />,
          items: [
            { id: "adm-5", title: "How to configure general community parameters, roles and permissions?", videoId: "tfrg9Wiudik" }
          ]
        }
      ],
      security: [
        {
          section: "Access Passes",
          icon: <ShieldCheck size={24} />,
          items: [
            { id: "sec-1", title: "How to create and validate access passes for visitors, providers or residents?", videoId: "6KC4aBll4pY" }
          ]
        }
      ]
    }
  };

  // Flatten active language content for search
  const allItems = useMemo(() => {
    const items: any[] = [];
    const activeContent = content[language];
    Object.keys(activeContent).forEach((roleKey) => {
      const role = roleKey as RoleType;
      const roleLabel = roles.find(r => r.id === role)?.label || role;

      activeContent[role].forEach(section => {
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
  }, [language]);

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

          <div className="text-center max-w-4xl mx-auto mb-12">
            <img
              src="/assets/CENTRODEAYUDA_HERO.png"
              alt="¿Tienes problemas usando DomoNow?"
              className="w-full max-w-4xl mx-auto mb-8 rounded-2xl"
            />

            <p className="text-lead text-gray-500">
              {t.hero.subtitle} <span className="domonow-gradient">DomoNow</span>.
            </p>
          </div>

          {/* Combined Toolbar: Roles + Search + Language */}
          <div className="max-w-6xl mx-auto bg-white rounded-[2rem] p-2 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-4">

            {/* Role Tabs - Only show if not searching or if no results */}
            <div className={`flex p-1 bg-arquitectura rounded-[1.5rem] w-full lg:w-auto overflow-x-auto no-scrollbar transition-opacity duration-300 ${searchQuery ? 'opacity-50 pointer-events-none lg:opacity-100 lg:pointer-events-auto' : ''}`}>
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
            <div className="hidden lg:block w-px h-8 bg-gray-200"></div>

            {/* Search Input */}
            <div className="relative w-full lg:flex-1 px-2">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.hero.searchPlaceholder}
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
                {t.search.resultsFor} "{searchQuery}"
                <span className="text-gray-400 text-body font-normal ml-2">({searchResults.length} {t.search.found})</span>
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
                  <h3 className="text-h4 font-bold text-gray-400">{t.search.noResults}</h3>
                  <p className="text-gray-400 mt-2">{t.search.noResultsDesc}</p>
                  <button
                    onClick={handleClearSearch}
                    className="mt-6 text-domo font-bold hover:underline"
                  >
                    {t.search.clear}
                  </button>
                </div>
              )}
            </div>
          ) : (
            // ================= STANDARD CATEGORY VIEW =================
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16 items-start animate-[fadeIn_0.5s_ease-out]">
              {content[language][activeRole].map((group, index) => (
                <div key={index} className="space-y-6">

                  {/* Section Header */}
                  <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
                    <div className="text-white bg-domo p-2.5 rounded-full">
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
              {t.support.title}
            </h2>
            <p className="text-lead text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t.support.desc}
            </p>
            <Button
              size="lg"
              onClick={onOpenDemo}
              className="bg-domo text-white hover:bg-torre hover:text-white border-0 px-12 py-4 text-lg shadow-xl shadow-domo/20"
            >
              {t.support.button}
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};
