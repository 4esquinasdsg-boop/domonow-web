import React from 'react';
import { Button } from './Button';
import { Check, Lock } from 'lucide-react';

export const ContactForm: React.FC = () => {
  
  // Reusable Component for Input Labels: Text + Asterisk + Tooltip (Triggered on Hover of either)
  const RequiredLabel = ({ text }: { text: string }) => (
    <label className="text-small font-bold text-gray-700 ml-1 inline-flex items-center gap-1 cursor-help group/label w-max">
      {text}
      <span className="relative flex items-center">
        <span className="text-domo font-bold text-lg leading-none">*</span>
        {/* Tooltip */}
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2.5 py-1 bg-gray-800 text-white text-[10px] font-medium rounded-md shadow-lg opacity-0 group-hover/label:opacity-100 transition-all duration-200 pointer-events-none select-none z-20 translate-y-1 group-hover/label:translate-y-0">
          Campo obligatorio
          <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-gray-800"></span>
        </span>
      </span>
    </label>
  );

  return (
    <form className="w-full">
        <div className="mb-8">
            <h3 className="text-h3 font-bold text-torre mb-2">Comencemos</h3>
            <p className="text-gray-500">Complete sus datos para agendar su sesión.</p>
        </div>

        <div className="space-y-5">
            {/* Names Row */}
            <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <RequiredLabel text="Nombre" />
                    <input 
                        required
                        type="text" 
                        placeholder="Ej. Carlos" 
                        className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-domo focus:ring-4 focus:ring-domo/10 border-2 rounded-xl py-3 px-4 text-torre transition-all outline-none placeholder:text-gray-400"
                    />
                </div>
                <div className="space-y-2">
                    <RequiredLabel text="Apellidos" />
                    <input 
                        required
                        type="text" 
                        placeholder="Ej. Pérez" 
                        className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-domo focus:ring-4 focus:ring-domo/10 border-2 rounded-xl py-3 px-4 text-torre transition-all outline-none placeholder:text-gray-400"
                    />
                </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
                <RequiredLabel text="Correo Corporativo" />
                <input 
                    required
                    type="email" 
                    placeholder="nombre@administracion.com" 
                    className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-domo focus:ring-4 focus:ring-domo/10 border-2 rounded-xl py-3 px-4 text-torre transition-all outline-none placeholder:text-gray-400"
                />
            </div>

            {/* Phone +57 */}
            <div className="space-y-2">
                <RequiredLabel text="Celular" />
                <div className="relative flex">
                    <div className="bg-gray-50 border-2 border-transparent border-r-gray-200 rounded-l-xl py-3 px-4 text-gray-500 font-bold flex items-center gap-2">
                        <span className="text-lg">🇨🇴</span> +57
                    </div>
                    <input 
                        required
                        type="tel" 
                        placeholder="300 000 0000" 
                        className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-domo focus:ring-4 focus:ring-domo/10 border-2 rounded-r-xl py-3 px-4 text-torre transition-all outline-none placeholder:text-gray-400"
                    />
                </div>
            </div>

            {/* Interest Description (Optional) */}
            <div className="space-y-2">
                <label className="text-small font-bold text-gray-700 ml-1">
                    ¿Qué busca mejorar? <span className="text-gray-400 font-normal text-tiny">(Opcional)</span>
                </label>
                <textarea
                    placeholder="Ej. Automatizar la citofonía, mejorar el recaudo, control de visitantes..."
                    rows={3}
                    className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-domo focus:ring-4 focus:ring-domo/10 border-2 rounded-xl py-3 px-4 text-torre transition-all outline-none placeholder:text-gray-400 resize-none"
                />
            </div>

            {/* Checkboxes */}
            <div className="pt-2 space-y-3">
                <label className="flex items-start gap-3 cursor-pointer group/check">
                    <div className="relative flex items-center mt-1">
                        <input required type="checkbox" className="peer sr-only" />
                        <div className="w-5 h-5 border-2 border-gray-300 rounded md:rounded-md peer-checked:bg-domo peer-checked:border-domo transition-all"></div>
                        <Check size={12} className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-small text-gray-500 leading-snug group-hover/check:text-gray-700 transition-colors group/tooltip relative cursor-help">
                        Acepto la <a href="#" className="text-domo font-bold hover:underline">Política de Privacidad</a> y el tratamiento de mis datos personales.
                        <span className="relative ml-1 inline-block">
                            <span className="text-domo font-bold text-lg leading-none">*</span>
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2.5 py-1 bg-gray-800 text-white text-[10px] font-medium rounded-md shadow-lg opacity-0 group-hover/tooltip:opacity-100 transition-all duration-200 pointer-events-none select-none z-20 translate-y-1 group-hover/tooltip:translate-y-0">
                                Campo obligatorio
                                <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-gray-800"></span>
                            </span>
                        </span>
                    </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group/check">
                    <div className="relative flex items-center mt-1">
                        <input required type="checkbox" className="peer sr-only" />
                        <div className="w-5 h-5 border-2 border-gray-300 rounded md:rounded-md peer-checked:bg-domo peer-checked:border-domo transition-all"></div>
                        <Check size={12} className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-small text-gray-500 leading-snug group-hover/check:text-gray-700 transition-colors group/tooltip relative cursor-help">
                        Acepto los <a href="#" className="text-domo font-bold hover:underline">Términos del Servicio</a>.
                        <span className="relative ml-1 inline-block">
                            <span className="text-domo font-bold text-lg leading-none">*</span>
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2.5 py-1 bg-gray-800 text-white text-[10px] font-medium rounded-md shadow-lg opacity-0 group-hover/tooltip:opacity-100 transition-all duration-200 pointer-events-none select-none z-20 translate-y-1 group-hover/tooltip:translate-y-0">
                                Campo obligatorio
                                <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-gray-800"></span>
                            </span>
                        </span>
                    </span>
                </label>
            </div>

            {/* Submit */}
            <div className="pt-4">
                <Button fullWidth size="lg" className="rounded-xl py-4 text-lg shadow-xl hover:shadow-domo/30">
                    Agendar Demostración
                </Button>
                <div className="flex items-center justify-center gap-2 mt-4 text-tiny text-gray-400">
                    <Lock size={12} />
                    <span>Sus datos están seguros y encriptados.</span>
                </div>
            </div>
        </div>
    </form>
  );
};