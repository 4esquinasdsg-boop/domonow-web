import React, { useState } from 'react';
import { Button } from './Button';
import { Check, Lock, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

// ⚠️ URL de Google Apps Script configurada
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxend8ZuPHgFlINohK5THedjxakf1FgYhdGA-F03kALgOdHggZUJX_N0l7JBgJ8GaDJPA/exec';

interface FormData {
    nombre: string;
    apellidos: string;
    email: string;
    telefono: string;
    mensaje: string;
    privacyAccepted: boolean;
    termsAccepted: boolean;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

interface ContactFormProps {
    onNavigate?: (target: string) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onNavigate }) => {
    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        apellidos: '',
        email: '',
        telefono: '',
        mensaje: '',
        privacyAccepted: false,
        termsAccepted: false,
    });

    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validación básica
        if (!formData.nombre || !formData.apellidos || !formData.email || !formData.telefono) {
            setErrorMessage('Por favor completa todos los campos obligatorios.');
            setSubmitStatus('error');
            return;
        }

        if (!formData.privacyAccepted || !formData.termsAccepted) {
            setErrorMessage('Debes aceptar la política de privacidad y los términos del servicio.');
            setSubmitStatus('error');
            return;
        }

        setSubmitStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Necesario para Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre: formData.nombre,
                    apellidos: formData.apellidos,
                    email: formData.email,
                    telefono: formData.telefono,
                    mensaje: formData.mensaje,
                    fecha: new Date().toISOString(),
                }),
            });

            // Con mode: 'no-cors', no podemos leer la respuesta, pero si no hay error, asumimos éxito
            setSubmitStatus('success');

            // Limpiar formulario después de éxito
            setFormData({
                nombre: '',
                apellidos: '',
                email: '',
                telefono: '',
                mensaje: '',
                privacyAccepted: false,
                termsAccepted: false,
            });

        } catch (error) {
            console.error('Error al enviar formulario:', error);
            setErrorMessage('Hubo un error al enviar el formulario. Por favor intenta de nuevo.');
            setSubmitStatus('error');
        }
    };

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

    // Mostrar mensaje de éxito
    if (submitStatus === 'success') {
        return (
            <div className="w-full text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-h3 font-bold text-torre mb-3">¡Gracias por contactarnos!</h3>
                <p className="text-gray-500 mb-6">
                    Hemos recibido tu información. Un asesor se pondrá en contacto contigo pronto.
                </p>
                <button
                    onClick={() => setSubmitStatus('idle')}
                    className="text-domo font-bold hover:underline"
                >
                    Enviar otro mensaje
                </button>
            </div>
        );
    }

    return (
        <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-8">
                <h3 className="text-h3 font-bold text-torre mb-2">Comencemos</h3>
                <p className="text-gray-500">Complete sus datos para agendar su sesión.</p>
            </div>

            {/* Error Message */}
            {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                </div>
            )}

            <div className="space-y-5">
                {/* Names Row */}
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <RequiredLabel text="Nombre" />
                        <input
                            required
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            placeholder="Ej. Carlos"
                            className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-domo focus:ring-4 focus:ring-domo/10 border-2 rounded-xl py-3 px-4 text-torre transition-all outline-none placeholder:text-gray-400"
                        />
                    </div>
                    <div className="space-y-2">
                        <RequiredLabel text="Apellidos" />
                        <input
                            required
                            type="text"
                            name="apellidos"
                            value={formData.apellidos}
                            onChange={handleInputChange}
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
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
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
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleInputChange}
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
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleInputChange}
                        placeholder="Ej. Automatizar la citofonía, mejorar el recaudo, control de visitantes..."
                        rows={3}
                        className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-domo focus:ring-4 focus:ring-domo/10 border-2 rounded-xl py-3 px-4 text-torre transition-all outline-none placeholder:text-gray-400 resize-none"
                    />
                </div>

                {/* Checkboxes */}
                <div className="pt-2 space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer group/check">
                        <div className="relative flex items-center mt-1">
                            <input required type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleInputChange} className="peer sr-only" />
                            <div className="w-5 h-5 border-2 border-gray-300 rounded md:rounded-md peer-checked:bg-domo peer-checked:border-domo transition-all"></div>
                            <Check size={12} className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-small text-gray-500 leading-snug group-hover/check:text-gray-700 transition-colors group/tooltip relative cursor-help">
                            Acepto la <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); onNavigate?.('privacy'); }} className="text-domo font-bold hover:underline">Política de Privacidad</button> y el tratamiento de mis datos personales.
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
                            <input required type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleInputChange} className="peer sr-only" />
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
                    <Button
                        type="submit"
                        fullWidth
                        size="lg"
                        className="rounded-xl py-4 text-lg shadow-xl hover:shadow-domo/30"
                        disabled={submitStatus === 'submitting'}
                    >
                        {submitStatus === 'submitting' ? (
                            <span className="flex items-center justify-center gap-2">
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Enviando...
                            </span>
                        ) : (
                            'Agendar Demostración'
                        )}
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