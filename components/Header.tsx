import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';

interface HeaderProps {
  onOpenDemo: () => void;
}

const navigation = [
  { name: 'Inicio', href: '/', target: 'home' },
  {
    name: 'Soluciones',
    href: '/#soluciones',
    target: 'solution',
    submenu: [
      { name: 'Super Administrador', path: '/super-administrador' },
      { name: 'Comunicaciones', path: '/comunicaciones' },
      { name: 'Portería', path: '/porteria' },
      { name: 'Botón de pánico', path: '/panico' },
      { name: 'Reservas', path: '/reservas' },
      { name: 'Solicitudes', path: '/solicitudes' },
      { name: 'Documental', path: '/documental' },
      { name: 'Votaciones y encuestas', path: '/votaciones' },
      { name: 'Gestión financiera', path: '/gestion-financiera' },
      { name: 'Asambleas', path: '/asambleas' },
      { name: 'Eventos', path: '/eventos' },
      { name: 'Normativo', path: '/normativo' }
    ]
  },
  {
    name: 'Tipos de propiedad',
    href: '/propiedades',
    target: 'properties',
    submenu: [
      { name: 'Residencial', path: '/propiedades#residencial' },
      { name: 'Comercial', path: '/propiedades#comercial' },
      { name: 'Mixta', path: '/propiedades#mixta' }
    ]
  },
  { name: '¿Por qué elegirnos?', href: '/por-que-elegirnos', target: 'why-us' },
  { name: 'Centro de ayuda', href: '/centro-de-ayuda', target: 'help-center' },
  { name: 'Nosotros', href: '/nosotros', target: 'about' },
  { name: 'Contacto', href: '/contacto', target: 'contact' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change or resize
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileSubmenu = (name: string) => {
    if (mobileSubmenuOpen === name) {
      setMobileSubmenuOpen(null);
    } else {
      setMobileSubmenuOpen(name);
    }
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
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-white ${scrolled ? 'py-3 shadow-sm' : 'py-5'
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between relative">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 relative z-[101] group h-14">
            <img
              src="/assets/Logo/LogoPiramide.png"
              alt="DomoNow Logo"
              className="h-full w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group px-1">
                <Link
                  to={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="flex items-center gap-1 text-small font-medium text-torre hover:text-domo transition-colors py-4 cursor-pointer"
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />}
                </Link>

                {/* Desktop Dropdown */}
                {item.submenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform group-hover:translate-y-0 translate-y-2 w-max max-w-[90vw]">
                    <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent"></div>

                    {item.target === 'solution' ? (
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-[520px] grid grid-cols-2 gap-x-6">
                        {/* Left Column - First 6 items */}
                        <div className="flex flex-col">
                          {item.submenu.slice(0, 6).map((subItem: any) => {
                            const isSuperAdmin = subItem.name === 'Super Administrador';
                            return (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className={`block px-4 py-2.5 text-small rounded-lg transition-colors ${isSuperAdmin
                                  ? 'text-gray-600 font-bold hover:text-domo hover:bg-arquitectura'
                                  : 'text-gray-600 hover:text-domo hover:bg-arquitectura'
                                  }`}
                              >
                                {subItem.name}
                              </Link>
                            );
                          })}
                        </div>
                        {/* Right Column - Remaining items */}
                        <div className="flex flex-col border-l border-gray-100 pl-4">
                          {item.submenu.slice(6).map((subItem: any) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-2.5 text-small text-gray-600 hover:text-domo hover:bg-arquitectura rounded-lg transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 p-4 ${item.submenu.length > 5 ? 'w-[500px] grid grid-cols-2 gap-x-4' : 'w-56 flex flex-col'}`}>
                        {item.submenu.map((subItem: any) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2.5 text-small text-gray-600 hover:text-domo hover:bg-arquitectura rounded-lg transition-colors"
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
          <div className="flex items-center gap-4 relative z-[101]">
            <div className="hidden md:block">
              <Button size="sm" onClick={onOpenDemo}>
                Solicite Demo
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="xl:hidden text-torre p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-[90] transition-transform duration-300 ease-in-out pt-28 px-6 overflow-y-auto ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col gap-2 pb-20 max-w-lg mx-auto">
          {navigation.map((item) => (
            <div key={item.name} className="border-b border-gray-100 last:border-0">
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleMobileSubmenu(item.name)}
                    className="flex items-center justify-between w-full py-4 text-lead font-medium text-torre"
                  >
                    {item.name}
                    <ChevronDown size={20} className={`transition-transform duration-300 ${mobileSubmenuOpen === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileSubmenuOpen === item.name ? 'max-h-[800px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col gap-3 pl-4 border-l-2 border-domo/20 ml-2">
                      {item.submenu.map((subItem: any) => {
                        const isSuperAdmin = subItem.name === 'Super Administrador';
                        return (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className={`py-2 block text-body active:text-domo ${isSuperAdmin
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
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="block py-4 text-lead font-medium text-torre hover:text-domo active:text-domo"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-8">
            <Button fullWidth onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }} size="lg">
              Solicite Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
