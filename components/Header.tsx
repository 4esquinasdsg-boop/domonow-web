import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './Button';

type NavigationTarget = 'home' | 'properties' | 'solution' | 'about' | 'contact' | 'why-us' | 'help-center';

interface HeaderProps {
  onNavigate: (target: string, subTarget?: string) => void;
  onOpenDemo: () => void;
}

const navigation = [
  { name: 'Inicio', href: '#', target: 'home' as const },
  {
    name: 'Soluciones',
    href: '#solution',
    target: 'solution' as const,
    submenu: [
      { name: 'Comunicaciones', enabled: true },
      { name: 'Seguridad y control de accesos', enabled: true },
      { name: 'Alertas de emergencia', enabled: true },
      { name: 'Áreas comunes', enabled: true },
      { name: 'Solicitudes', enabled: true },
      { name: 'Gestión documental', enabled: false },
      { name: 'Votaciones y encuestas', enabled: false },
      { name: 'Gestión financiera', enabled: false },
      { name: 'Asambleas', enabled: false },
      { name: 'Eventos', enabled: false },
      { name: 'Compliance', enabled: false }
    ]
  },
  {
    name: 'Tipos de propiedad',
    href: '#',
    target: 'properties' as const,
    submenu: [
      'Residencial',
      'Comercial',
      'Mixta'
    ]
  },
  { name: '¿Por qué elegirnos?', href: '#', target: 'why-us' as const },
  { name: 'Centro de ayuda', href: '#', target: 'help-center' as const },
  { name: 'Nosotros', href: '#about', target: 'about' as const },
  { name: 'Contacto', href: '#', target: 'contact' as const },
];

export const Header: React.FC<HeaderProps> = ({ onNavigate, onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop to avoid UI glitches
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

  const handleNavClick = (e: React.MouseEvent, item: any, subItem?: string) => {
    e.preventDefault();

    // Logic for items with submenu (Parent click)
    if (item.submenu && !subItem) {
      if (item.target === 'solution') {
        onNavigate('home');
        setTimeout(() => {
          const element = document.getElementById('solution');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (item.target === 'properties') {
        onNavigate('properties');
        setMobileMenuOpen(false);
        window.scrollTo(0, 0);
      }
      return;
    }

    if (item.target) {
      onNavigate(item.target, subItem);
      setMobileMenuOpen(false);
      window.scrollTo(0, 0);
    } else if (item.href.startsWith('#')) {
      onNavigate('home');
      setMobileMenuOpen(false);
      setTimeout(() => {
        const element = document.querySelector(item.href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
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
          <a href="#" onClick={(e) => handleNavClick(e, { target: 'home', href: '#' })} className="flex items-center gap-2 relative z-[101] group h-14">
            <img
              src="/assets/Logo/LogoPiramide.png"
              alt="DomoNow Logo"
              className="h-full w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group px-1">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="flex items-center gap-1 text-small font-medium text-torre hover:text-domo transition-colors py-4 cursor-pointer"
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />}
                </a>

                {/* Desktop Dropdown */}
                {item.submenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform group-hover:translate-y-0 translate-y-2 w-max max-w-[90vw]">
                    <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent"></div>

                    {item.target === 'solution' ? (
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-[500px] grid grid-cols-2 gap-x-6">
                        {/* Enabled Items Column */}
                        <div className="flex flex-col">
                          {item.submenu.filter((sub: any) => sub.enabled !== false).map((subItem: any) => (
                            <a
                              key={typeof subItem === 'string' ? subItem : subItem.name}
                              href="#"
                              onClick={(e) => handleNavClick(e, item, typeof subItem === 'string' ? subItem : subItem.name)}
                              className="block px-4 py-2.5 text-small text-gray-600 hover:text-domo hover:bg-arquitectura rounded-lg transition-colors"
                            >
                              {typeof subItem === 'string' ? subItem : subItem.name}
                            </a>
                          ))}
                        </div>
                        {/* Disabled Items Column with Próximamente */}
                        <div className="flex flex-col border-l border-gray-100 pl-4">
                          <span className="text-domo font-bold text-tiny uppercase tracking-widest mb-2 px-4">Próximamente</span>
                          {item.submenu.filter((sub: any) => sub.enabled === false).map((subItem: any) => (
                            <span
                              key={typeof subItem === 'string' ? subItem : subItem.name}
                              className="block px-4 py-2.5 text-small text-gray-300 cursor-not-allowed"
                            >
                              {typeof subItem === 'string' ? subItem : subItem.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 p-4 ${item.submenu.length > 5 ? 'w-[500px] grid grid-cols-2 gap-x-4' : 'w-56 flex flex-col'}`}>
                        {item.submenu.map((subItem: any) => (
                          <a
                            key={typeof subItem === 'string' ? subItem : subItem.name}
                            href="#"
                            onClick={(e) => handleNavClick(e, item, typeof subItem === 'string' ? subItem : subItem.name)}
                            className="block px-4 py-2.5 text-small text-gray-600 hover:text-domo hover:bg-arquitectura rounded-lg transition-colors"
                          >
                            {typeof subItem === 'string' ? subItem : subItem.name}
                          </a>
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
                      {/* NEW: Allow clicking parent item in mobile menu as first option if it's a navigational item */}
                      {(item.target === 'properties' || item.target === 'solution') && (
                        <a
                          href="#"
                          className="text-domo font-bold py-2 block text-body active:text-domo"
                          onClick={(e) => handleNavClick(e, item)}
                        >
                          Ver Todo en {item.name}
                        </a>
                      )}

                      {item.target === 'solution' ? (
                        <>
                          {/* Enabled Items */}
                          {item.submenu.filter((sub: any) => sub.enabled !== false).map((subItem: any) => (
                            <a
                              key={typeof subItem === 'string' ? subItem : subItem.name}
                              href="#"
                              className="text-gray-500 hover:text-domo py-2 block text-body active:text-domo"
                              onClick={(e) => handleNavClick(e, item, typeof subItem === 'string' ? subItem : subItem.name)}
                            >
                              {typeof subItem === 'string' ? subItem : subItem.name}
                            </a>
                          ))}
                          {/* Próximamente Section */}
                          <span className="text-domo font-bold text-tiny uppercase tracking-widest mt-4 mb-1 block">Próximamente</span>
                          {item.submenu.filter((sub: any) => sub.enabled === false).map((subItem: any) => (
                            <span
                              key={typeof subItem === 'string' ? subItem : subItem.name}
                              className="text-gray-300 py-2 block text-body cursor-not-allowed"
                            >
                              {typeof subItem === 'string' ? subItem : subItem.name}
                            </span>
                          ))}
                        </>
                      ) : (
                        item.submenu.map((subItem: any) => (
                          <a
                            key={typeof subItem === 'string' ? subItem : subItem.name}
                            href="#"
                            className="text-gray-500 hover:text-domo py-2 block text-body active:text-domo"
                            onClick={(e) => handleNavClick(e, item, typeof subItem === 'string' ? subItem : subItem.name)}
                          >
                            {typeof subItem === 'string' ? subItem : subItem.name}
                          </a>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="block py-4 text-lead font-medium text-torre hover:text-domo active:text-domo"
                >
                  {item.name}
                </a>
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