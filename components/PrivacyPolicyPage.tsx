import React, { useEffect } from 'react';
import { Shield, Mail, Phone, FileText, Users, Database, Target, Scale, MessageSquare, ArrowLeft } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onOpenDemo?: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onOpenDemo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const SectionCard = ({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) => (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-purple-50 mb-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-domo">
          <Icon size={24} />
        </div>
        <h2 className="text-h4 md:text-h3 font-bold text-torre">{title}</h2>
      </div>
      <div className="text-gray-600 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );

  return (
    <div className="pt-20 bg-arquitectura font-sans text-torre min-h-screen">

      {/* Floating Back Button */}
      {onOpenDemo && (
        <button
          onClick={onOpenDemo}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-domo hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          <ArrowLeft size={18} />
          Volver al Formulario
        </button>
      )}

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-purple-50 to-arquitectura">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 mix-blend-multiply"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white border border-purple-100 shadow-sm text-tiny font-bold tracking-widest uppercase mb-6 text-domo">
              <Shield size={16} />
              Protección de Datos
            </div>
            <h1 className="text-h2 md:text-h1 font-bold mb-6 leading-tight">
              Aviso de Privacidad de <span className="text-domo">Datos Personales</span>
            </h1>
            <p className="text-lead text-gray-500 max-w-2xl mx-auto">
              En cumplimiento de la Ley 1377 de 2013, Ley 1581 de 2012 y Decreto 886 de 2014
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">

            {/* Intro */}
            <SectionCard icon={FileText} title="Información General">
              <p>
                <strong>OFIMA S.A.S</strong> como sociedad comercial en cumplimiento La Ley 1377 de 2013, Ley 1581 de 2012 y Decreto 886 de 2014, y normas concordantes, modificatorias y aclaratorias; y en orden a nuestra política de tratamiento de datos personales, nos permitimos emitir el presente aviso de privacidad informándole que los datos personales que usted nos suministre por medio de nuestros diversos canales de ingreso, serán tratados mediante el uso de medidas de seguridad técnicas y físicas que impiden de manera razonable el acceso de terceros no autorizados.
              </p>
              <p>
                El responsable del tratamiento de sus datos personales es <strong>OFIMA S.A.S</strong>, sociedad identificada con Nit. Número <strong>800.132.302</strong>, con domicilio en la ciudad de Medellín (Antioquia), teléfono <strong>(604) 6045557</strong>, así mismo, el delegado para la Protección de Datos podrá ser contactado al correo electrónico <a href="mailto:habeasdata@ofima.com" className="text-domo font-bold hover:underline">habeasdata@ofima.com</a>.
              </p>
            </SectionCard>

            {/* Uso de Datos */}
            <SectionCard icon={Target} title="Uso de sus Datos">
              <p>Recolectaremos a través de nuestros diferentes canales de comunicación sus datos, los cuales serán usados para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Capturar, actualizar y gestionar internamente los datos de nuestros clientes y usuarios.</li>
                <li>Contar con información que permita comunicarse eficientemente con nuestros clientes y usuarios de servicios.</li>
                <li>Responder a las regulaciones del Gobierno Nacional en relación con la fuente e intercambio de información.</li>
                <li>Propender por el uso adecuado en la administración y veracidad de la información recolectada.</li>
                <li>Enviar comunicaciones promocionales, publicitarias o informativas sobre nuestros productos, servicios, eventos o promociones especiales.</li>
                <li>Realizar encuestas o estudios de mercado para mejorar la calidad de nuestros productos y servicios.</li>
                <li>Atender y gestionar solicitudes, quejas o reclamaciones de nuestros clientes y usuarios.</li>
                <li>Realizar análisis estadísticos o de mercado para mejorar nuestra oferta y adaptarla a las necesidades de nuestros clientes.</li>
                <li>Procesar pagos, facturación y gestión contable relacionada con los servicios prestados.</li>
              </ul>
            </SectionCard>

            {/* Datos Recolectados */}
            <SectionCard icon={Database} title="Datos Personales Recolectados">
              <p>LA EMPRESA recopilará y tratará los siguientes datos personales:</p>
              <div className="space-y-4 mt-4">
                <div className="bg-purple-50 rounded-xl p-4">
                  <h4 className="font-bold text-torre mb-2">Datos de Identificación</h4>
                  <p className="text-sm">Nombre, apellido, dirección, teléfono, correo electrónico, documento de identidad.</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <h4 className="font-bold text-torre mb-2">Datos Profesionales</h4>
                  <p className="text-sm">Profesión, cargo, empresa u organización a la que pertenece el titular.</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <h4 className="font-bold text-torre mb-2">Datos de Transacciones</h4>
                  <p className="text-sm">Información sobre transacciones financieras y pagos realizados.</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-sm text-amber-800">
                  <strong>Datos Sensibles:</strong> No se recopilará o tratará datos sensibles, excepto cuando el Titular haya dado su autorización explícita, sea necesario para salvaguardar el interés vital del Titular, o se refiera a datos necesarios para el reconocimiento, ejercicio o defensa de un derecho en un proceso judicial.
                </p>
              </div>
            </SectionCard>

            {/* Finalidades */}
            <SectionCard icon={Users} title="Finalidades">
              <p>
                OFIMA S.A.S. tratará los datos personales para el desarrollo de su objeto social y la debida prestación del servicio o del producto adquirido, la adecuada información sobre sus proyectos, contratos y operaciones comerciales y la difusión mediante mensajes comerciales o publicitarios de sus proyectos.
              </p>

              <div className="space-y-4 mt-6">
                <div className="border-l-4 border-domo pl-4">
                  <h4 className="font-bold text-torre">Base de datos de Servicio</h4>
                  <p className="text-sm mt-1">Se tratan datos de clientes para ofrecer servicios especializados y ajustados a las necesidades por medio de productos y servicios a diferentes niveles.</p>
                </div>
                <div className="border-l-4 border-domo pl-4">
                  <h4 className="font-bold text-torre">Base de datos de Trabajadores</h4>
                  <p className="text-sm mt-1">Busca mantener actualizada la información de los funcionarios para la relación laboral, control contable y administrativo, y gestión del recurso humano.</p>
                </div>
                <div className="border-l-4 border-domo pl-4">
                  <h4 className="font-bold text-torre">Base de datos de Mercadeo</h4>
                  <p className="text-sm mt-1">Contar con información que permita generar espacios de comunicación con los usuarios de nuestros productos y servicios.</p>
                </div>
                <div className="border-l-4 border-domo pl-4">
                  <h4 className="font-bold text-torre">Base de datos Proveedores</h4>
                  <p className="text-sm mt-1">Conocer, gestionar, almacenar, procesar y actualizar toda la información suministrada para cumplir con obligaciones contractuales, comerciales, legales y tributarias.</p>
                </div>
                <div className="border-l-4 border-domo pl-4">
                  <h4 className="font-bold text-torre">Base de datos DomoNow</h4>
                  <p className="text-sm mt-1">Ofrecer servicios especializados y ajustados a las necesidades de los clientes, seguimiento de procesos internos, y creación de perfiles especializados.</p>
                </div>
                <div className="border-l-4 border-domo pl-4">
                  <h4 className="font-bold text-torre">Base de datos Fiji</h4>
                  <p className="text-sm mt-1">Ofrecer servicios especializados y ajustados a las necesidades de los clientes, seguimiento de procesos internos, y creación de perfiles especializados.</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-torre mb-2">Finalidad de datos sensibles</h4>
                <p className="text-sm">
                  Los datos sensibles solo pueden ser tratados para fines históricos, estadísticos o científicos con medidas de supresión de identidad; en relaciones contractuales, comerciales o de mercadeo; en actividades relacionadas con la salud, bienestar y recreativas; y para datos biométricos que sirvan para identificación, seguridad y salud laboral. Los titulares no están obligados a autorizar el tratamiento de datos sensibles según la ley.
                </p>
              </div>
            </SectionCard>

            {/* Derechos del Titular */}
            <SectionCard icon={Scale} title="Derechos del Titular">
              <p>Al titular de la información personal, le asiste como mínimo los siguientes derechos:</p>
              <ul className="space-y-3 mt-4">
                {[
                  "Derecho a conocer, actualizar y rectificar sus datos personales.",
                  "Solicitar a OFIMA S.A.S. previa solicitud, la prueba de la autorización otorgada.",
                  "Ser informado por OFIMA S.A.S respecto del uso y el fin que se les ha procurado a sus datos personales.",
                  "Presentar ante la Superintendencia de Industria y Comercio las correspondientes quejas.",
                  "Revocar la autorización expresa al tratamiento de datos.",
                  "Solicitar la supresión de datos personales cuando considere que con nuestro tratamiento no se respeten los principios, derechos y garantías constitucionales y legales.",
                  "Acceder sin costo alguno a sus datos personales que hayan sido objeto de tratamiento."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-domo text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>

            {/* Procedimientos */}
            <SectionCard icon={MessageSquare} title="Procedimientos">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="font-bold text-torre mb-2">Consultas</h4>
                  <p className="text-sm">Los Titulares pueden solicitar la consulta de su información. Ofima deberá brindar respuesta en un plazo máximo de <strong>diez (10) días hábiles</strong>.</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="font-bold text-torre mb-2">Reclamos</h4>
                  <p className="text-sm">Los Titulares podrán elevar reclamos solicitando actualización o rectificación. El término máximo para atender el reclamo será de <strong>quince (15) días hábiles</strong>.</p>
                </div>
              </div>
            </SectionCard>

            {/* Contacto */}
            <div className="bg-gradient-to-r from-domo to-purple-700 rounded-2xl p-8 text-white text-center">
              <h2 className="text-h3 font-bold mb-4">Contacto para Habeas Data</h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                <a href="mailto:habeasdata@ofima.com" className="flex items-center gap-2 hover:underline">
                  <Mail size={20} />
                  <span className="font-bold">habeasdata@ofima.com</span>
                </a>
                <a href="tel:6044407648" className="flex items-center gap-2 hover:underline">
                  <Phone size={20} />
                  <span className="font-bold">(604) 4407648</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
