import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const LanguageToggle: React.FC = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const currentLang = i18n.language;

    const switchTo = (lang: string) => {
        i18n.changeLanguage(lang);
        setOpen(false);
    };

    return (
        <div className="fixed bottom-6 left-6 z-[200] flex flex-col items-start gap-2">
            {/* Language options — shown when open */}
            {open && (
                <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-1 flex flex-col gap-0.5 animate-fade-in-up">
                    <button
                        onClick={() => switchTo('es')}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${currentLang === 'es'
                            ? 'bg-domo/10 text-domo'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-torre'
                            }`}
                    >
                        <span className="text-base">🇪🇸</span>
                        Español
                    </button>
                    <button
                        onClick={() => switchTo('en')}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${currentLang === 'en'
                            ? 'bg-domo/10 text-domo'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-torre'
                            }`}
                    >
                        <span className="text-base">🇺🇸</span>
                        English
                    </button>
                </div>
            )}

            {/* Floating globe button */}
            <button
                onClick={() => setOpen(!open)}
                className="w-12 h-12 bg-gradient-to-br from-domo to-[#7c3aed] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Change language"
            >
                <Globe size={22} />
            </button>
        </div>
    );
};
