import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Facebook, MessageCircle, Linkedin, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-white pt-12 pb-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end pb-12 border-b border-gray-200">
                    <div className="flex flex-col items-center md:items-start">
                        <Link to="/">
                            <img
                                src="/assets/logo/LogoPiramide.png"
                                alt="DomoNow"
                                className="h-12 w-auto mb-4"
                            />
                        </Link>
                        <div className="flex gap-4 mt-6 justify-center md:justify-start">
                            <a href="mailto:hola@domonow.com" target="_blank" rel="noopener noreferrer">
                                <Mail className="w-5 h-5 text-torre cursor-pointer hover:text-domo transition-colors" />
                            </a>
                            <a href="https://wa.link/pyhyu4" target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="w-5 h-5 text-torre cursor-pointer hover:text-domo transition-colors" />
                            </a>
                            <a href="https://www.instagram.com/DomoNow_co?igsh=MThkcTViMWtlNmJpYg%3D%3D" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-5 h-5 text-torre cursor-pointer hover:text-domo transition-colors" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61570948971057" target="_blank" rel="noopener noreferrer">
                                <Facebook className="w-5 h-5 text-torre cursor-pointer hover:text-domo transition-colors" />
                            </a>
                            <a href="https://www.linkedin.com/in/DomoNow-co-122a453a5" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-5 h-5 text-torre cursor-pointer hover:text-domo transition-colors" />
                            </a>
                            <a href="https://www.youtube.com/channel/UC4vw1PqmOfxSuiq1kdDD-zQ" target="_blank" rel="noopener noreferrer">
                                <Youtube className="w-5 h-5 text-torre cursor-pointer hover:text-domo transition-colors" />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 md:mt-0 text-small text-center md:text-left">
                        <div className="flex flex-col gap-3">
                            <span className="font-bold text-torre mb-2">{t('footer.account')}</span>
                            <a href="https://app.DomoNow.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-torre">{t('footer.login')}</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="font-bold text-torre mb-2">{t('footer.help')}</span>
                            <Link to="/centro-de-ayuda" className="text-gray-500 hover:text-torre cursor-pointer">{t('footer.helpCenter')}</Link>
                            <Link to="/centro-de-ayuda" className="text-gray-500 hover:text-torre cursor-pointer">{t('footer.faq')}</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="font-bold text-torre mb-2">{t('footer.company')}</span>
                            <Link to="/nosotros" className="text-gray-500 hover:text-torre cursor-pointer">{t('footer.aboutUs')}</Link>
                            <Link to="/contacto" className="text-gray-500 hover:text-torre cursor-pointer">{t('footer.contact')}</Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-tiny text-gray-400">
                    <p>&copy; {new Date().getFullYear()} <span className="domonow-gradient">DomoNow</span>. {t('footer.copyright')}</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link to="/privacidad">{t('footer.privacy')}</Link>
                        <a href="#">{t('footer.terms')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
