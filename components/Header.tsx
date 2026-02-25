import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  onOpenDemo: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemo }) => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    { name: t('header.nav.home'), href: '/', target: 'home' },
    {
      name: t('header.nav.solutions'),
      href: '/#soluciones',
      target: 'solution',
      submenu: [
        { name: t('header.submenu.superAdmin'), path: '/super-administrador' },
        { name: t('header.submenu.porteria'), path: '/porteria' },
        { name: t('header.submenu.panico'), path: '/panico' },
        { name: t('header.submenu.comunicaciones'), path: '/comunicaciones' },
        { name: t('header.submenu.pqrs'), path: '/solicitudes' },
        { name: t('header.submenu.reservas'), path: '/reservas' },
        { name: t('header.submenu.eventos'), path: '/eventos' },
        { name: t('header.submenu.votaciones'), path: '/votaciones' },
        { name: t('header.submenu.encuestas'), path: '/encuestas' },
        { name: t('header.submenu.asambleas'), path: '/asambleas' },
        { name: t('header.submenu.normativo'), path: '/normativo' },
        { name: t('header.submenu.documental'), path: '/documental' },
        { name: t('header.submenu.financiera'), path: '/gestion-financiera' }
      ]
    },
    {
      name: t('header.nav.propertyTypes'),
      href: '/propiedades',
      target: 'properties',
      submenu: [
        { name: t('header.submenu.residencial'), path: '/propiedades#residencial' },
        { name: t('header.submenu.comercial'), path: '/propiedades#comercial' },
        { name: t('header.submenu.mixta'), path: '/propiedades#mixta' }
      ]
    },
    { name: t('header.nav.whyUs'), href: '/por-que-elegirnos', target: 'why-us' },
    { name: t('header.nav.helpCenter'), href: '/centro-de-ayuda', target: 'help-center' },
    { name: t('header.nav.about'), href: '/nosotros', target: 'about' },
    { name: t('header.nav.contact'), href: '/contacto', target: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const toggleMobileSubmenu = (name: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === name ? null : name);
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const id = href.split('#')[1];
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      {/* ═══ HEADER BAR ═══ */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-white ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm' : ''}`}
      >
        <div className={`container mx-auto px-4 md:px-6 transition-all duration-300 ${scrolled ? 'py-2 md:py-3' : 'py-3 md:py-5'}`}>
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 h-10 md:h-8 lg:h-9 xl:h-11 2xl:h-14 shrink-0">
              <img
                src="/assets/logo/LogoPiramide.png"
                alt="DomoNow Logo"
                className="h-full w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav — visible from md (768px) up */}
            <nav className="hidden md:flex items-center md:gap-1 lg:gap-2 xl:gap-4 2xl:gap-6">
              {navigation.map((item) => (
                <div key={item.name} className="relative group px-0.5 lg:px-1">
                  <Link
                    to={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className="flex items-center gap-0.5 md:text-[10px] lg:text-xs xl:text-tiny 2xl:text-small font-medium text-torre hover:text-domo transition-colors py-4 cursor-pointer whitespace-nowrap"
                  >
                    {item.name}
                    {item.submenu && <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-200" />}
                  </Link>

                  {/* Desktop Dropdown */}
                  {item.submenu && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform group-hover:translate-y-0 translate-y-2 w-max max-w-[90vw] z-50">
                      <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent"></div>

                      {item.target === 'solution' ? (
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-[420px] lg:w-[520px] grid grid-cols-2 gap-x-4 lg:gap-x-6">
                          <div className="flex flex-col">
                            {item.submenu.slice(0, 6).map((subItem: any) => {
                              const isSuperAdmin = subItem.name === t('header.submenu.superAdmin');
                              return (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className={`block px-3 lg:px-4 py-2 lg:py-2.5 text-xs lg:text-small rounded-lg transition-colors ${isSuperAdmin
                                    ? 'text-gray-600 font-bold hover:text-domo hover:bg-arquitectura'
                                    : 'text-gray-600 hover:text-domo hover:bg-arquitectura'
                                    }`}
                                >
                                  {subItem.name}
                                </Link>
                              );
                            })}
                          </div>
                          <div className="flex flex-col border-l border-gray-100 pl-3 lg:pl-4">
                            {item.submenu.slice(6).map((subItem: any) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className="block px-3 lg:px-4 py-2 lg:py-2.5 text-xs lg:text-small text-gray-600 hover:text-domo hover:bg-arquitectura rounded-lg transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 p-4 ${item.submenu.length > 5 ? 'w-[420px] lg:w-[500px] grid grid-cols-2 gap-x-4' : 'w-48 lg:w-56 flex flex-col'}`}>
                          {item.submenu.map((subItem: any) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-3 lg:px-4 py-2 lg:py-2.5 text-xs lg:text-small text-gray-600 hover:text-domo hover:bg-arquitectura rounded-lg transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Action Button & Mobile Toggle */}
            <div className="flex items-center gap-2 md:gap-3 shrink-0">
              <div className="hidden md:block">
                <Button size="sm" onClick={onOpenDemo} className="md:text-[10px] lg:text-xs xl:text-small md:px-3 lg:px-4 xl:px-6 md:py-1.5 lg:py-2">
                  {t('header.demoButton')}
                </Button>
              </div>

              {/* Hamburger — only on phones (<768px) */}
              <button
                className="md:hidden text-torre p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Slogan Bar */}
        <div className="bg-gray-100 text-torre py-2 relative z-10">
          <div className="flex justify-center items-center">
            <span className="inline-flex items-center gap-2 text-xs md:text-tiny font-semibold tracking-wide">
              <span className="text-domo">✦</span>
              {t('header.ticker').split('comunidades').length > 1 ? (
                <>
                  {t('header.ticker').split('comunidades')[0]}<span className="domonow-gradient">comunidades</span>
                </>
              ) : (
                t('header.ticker')
              )}
              <span className="text-domo">✦</span>
            </span>
          </div>
        </div>
      </header>

      {/* ═══ MOBILE FULLSCREEN MENU (rendered OUTSIDE header to avoid clipping) ═══ */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-[199] md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <div
        className={`fixed inset-0 bg-white z-[200] transition-transform duration-300 ease-in-out flex flex-col md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'}`}
      >
        {/* Header bar with logo + X close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 h-10">
            <img src="/assets/logo/LogoPiramide.png" alt="DomoNow Logo" className="h-full w-auto object-contain" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Cerrar menú"
          >
            <X size={28} className="text-torre" />
          </button>
        </div>

        {/* Scrollable nav items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <div key={item.name} className="border-b border-gray-100 last:border-0">
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleMobileSubmenu(item.name)}
                      className="flex items-center justify-between w-full py-3.5 text-base font-medium text-torre"
                    >
                      {item.name}
                      <ChevronDown size={18} className={`transition-transform duration-300 ${mobileSubmenuOpen === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileSubmenuOpen === item.name ? 'max-h-[800px] opacity-100 mb-3' : 'max-h-0 opacity-0'}`}>
                      <div className="flex flex-col gap-1 pl-4 border-l-2 border-domo/20 ml-2">
                        {item.submenu.map((subItem: any) => {
                          const isSuperAdmin = subItem.name === t('header.submenu.superAdmin');
                          return (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`py-2 block text-sm active:text-domo ${isSuperAdmin
                                ? 'text-gray-500 font-bold hover:text-domo'
                                : 'text-gray-500 hover:text-domo'
                                }`}
                            >
                              {subItem.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={(e) => { handleAnchorClick(e, item.href); setMobileMenuOpen(false); }}
                    className="block py-3.5 text-base font-medium text-torre hover:text-domo active:text-domo"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-6 pb-6">
              <Button fullWidth onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }} size="lg">
                {t('header.demoButton')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
