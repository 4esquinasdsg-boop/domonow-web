import React from 'react';
import { Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';

interface FooterProps {
    onNavigate: (target: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    const handleNavClick = (e: React.MouseEvent, target: string) => {
        e.preventDefault();
        onNavigate(target);
        window.scrollTo(0, 0);
    };

    return (
        <footer className="bg-white pt-12 pb-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end pb-12 border-b border-gray-200">
                    <div className="flex flex-col items-center md:items-start">
                        <img
                            src="/assets/Logo/LogoPiramide.png"
                            alt="DomoNow"
                            className="h-12 w-auto mb-4"
                        />
                        <div className="flex gap-4 mt-6 justify-center md:justify-start">
                            <a href="mailto:soporte@domonow.com" target="_blank" rel="noopener noreferrer">
                                <Mail className="w-5 h-5 text-torre cursor-pointer hover:text-domo transition-colors" />
                            </a>
                            <a href="https://wa.me/573015310367" target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="w-5 h-5 text-torre cursor-pointer hover:text-domo transition-colors" />
                            </a>
                            <a href="https://www.instagram.com/domonow_oficial" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-5 h-5 text-torre cursor-pointer hover:text-domo transition-colors" />
                            </a>
                            <a href="https://www.facebook.com/people/DomoNow/61570948971057/" target="_blank" rel="noopener noreferrer">
                                <Facebook className="w-5 h-5 text-torre cursor-pointer hover:text-domo transition-colors" />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 md:mt-0 text-small text-center md:text-left">
                        <div className="flex flex-col gap-3">
                            <span className="font-bold text-torre mb-2">Cuenta</span>
                            <a href="https://app.domonow.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-torre">Iniciar Sesión</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="font-bold text-torre mb-2">Ayuda</span>
                            <a href="#" onClick={(e) => handleNavClick(e, 'help-center')} className="text-gray-500 hover:text-torre cursor-pointer">Centro de Ayuda</a>
                            <a href="#" onClick={(e) => handleNavClick(e, 'help-center')} className="text-gray-500 hover:text-torre cursor-pointer">FAQ</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="font-bold text-torre mb-2">Empresa</span>
                            <a href="#" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-500 hover:text-torre cursor-pointer">Nosotros</a>
                            <a href="#" onClick={(e) => handleNavClick(e, 'contact')} className="text-gray-500 hover:text-torre cursor-pointer">Contacto</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-tiny text-gray-400">
                    <p>&copy; {new Date().getFullYear()} DomoNow. Todos los derechos reservados.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#">Privacidad</a>
                        <a href="#">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};