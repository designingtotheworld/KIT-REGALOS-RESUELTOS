/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Gift, Sparkles, Check, ChevronRight, ChevronLeft, ShieldCheck, 
  Clock, AlertCircle, HelpCircle, Package, Play, ShoppingCart, Star, Plus, Flame, Award
} from 'lucide-react';

export default function App() {
  const [imageError, setImageError] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [upsellSelected, setUpsellSelected] = useState(false);

  // Dynamic today's date in Spanish for urgency banner
  const todayFormatted = new Date().toLocaleDateString('es-ES', { 
    day: 'numeric', 
    month: 'long' 
  });

  const giftIdeas = [
    { title: "Regalo 1: Tote Bags Navideñas", desc: "Bolsas económicas que se consiguen en Mercado Libre, sin moverte de tu casa. Incluye estampas para 3 bolsos.", category: "Textil", tag: "Más Vendido", img: "https://i.imgur.com/u46bIIo.jpeg" },
    { title: "Regalo 2: Neceser y Cartucheras", desc: "Neceser y cartucheras prácticas para regalar con cosméticos o artículos de uso diario.", category: "Textil", tag: "Muy Popular", img: "https://i.imgur.com/w6LtWRI.jpeg" },
    { title: "Regalo 3: Tazas de Cerámica", desc: "Tazas de cerámica clásicas que nunca fallan con diseños navideños exclusivos.", category: "Cerámica", tag: "Clásico", img: "https://i.imgur.com/NTqfQGg.jpeg" },
    { title: "Regalo 4: Vasos Térmicos DTF UV", desc: "Vasos térmicos con acabado brillante y resistente al agua sin necesidad de horno.", category: "DTF UV", tag: "Tendencia", img: "https://i.imgur.com/OkFfucE.jpeg" },
    { title: "Regalo 5: Botellas Metálicas Premium", desc: "Botellas de acero inoxidable, personalización premium para regalar a seres queridos.", category: "Metálicos", tag: "Elegante", img: "https://i.imgur.com/Avz1vCz.jpeg" },
    { title: "Regalo 6: Agendas & Cuadernos", desc: "Agendas y cuadernos con tapas personalizadas para recibir el año con todo.", category: "Papelería", tag: "Útil", img: "https://i.imgur.com/8TMfEkX.jpeg" },
    { title: "Regalo 7: Delantales de Cocina", desc: "Delantales de cocina perfectos para los amantes de la gastronomía y cenas navideñas.", category: "Textil", tag: "Familiar", img: "https://i.imgur.com/yiG3Cg1.jpeg" },
    { title: "Regalo 8: Cajas Navideñas Madera", desc: "Cajas de madera para presentación elegante de pan dulces, sidras y vinos.", category: "Madera", tag: "Exclusivo", img: "https://i.imgur.com/t7r5am6.jpeg" },
    { title: "Regalo 9: Llaveros de Acrílico", desc: "Accesorios económicos ideales para regalar masivamente en oficinas o grupos.", category: "Acrílico", tag: "Económico", img: "https://i.imgur.com/lBCSEfS.jpeg" },
    { title: "Regalo 10: Velas Aromáticas", desc: "Velas en frasco de vidrio decoradas con etiquetas especiales navideñas.", category: "Hogar", tag: "Emocionante", img: "https://i.imgur.com/mR5Vu6w.jpeg" },
  ];

  const faqs = [
    { q: "¿Necesito una máquina de estampado profesional?", a: "¡No! Una de las grandes ventajas de este kit es que la guía te enseña paso a paso cómo estampar perfectamente usando la plancha hogareña de tu casa y cómo aplicar DTF UV en superficies rígidas sin equipos costosos." },
    { q: "¿Cómo recibo los archivos después de comprar?", a: "El acceso es inmediato. Una vez procesado el pago, descargas todos los diseños en alta resolución y las guías en PDF y video." },
    { q: "¿Qué impresiones necesito encargar en la imprenta?", a: "Solo llevas nuestros archivos a cualquier imprenta gráfica que haga DTF Textil y DTF UV por metro o plancha. Te entregamos los archivos ya armados con la máxima optimización." },
    { q: "¿Sirve aunque nunca haya hecho manualidades antes?", a: "¡Totalmente! Está diseñado paso a paso para emprendedores y principiantes, con instrucciones visuales claras para que disfrutes el proceso." }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1C1C1E] font-sans antialiased selection:bg-[#E05A47]/20 selection:text-[#E05A47]">
      {/* CSS KEYFRAMES FOR BELL SWINGING ANIMATION */}
      <style>{`
        @keyframes ring {
          0% { transform: rotate(0deg); }
          20% { transform: rotate(18deg); }
          40% { transform: rotate(-18deg); }
          60% { transform: rotate(12deg); }
          80% { transform: rotate(-12deg); }
          100% { transform: rotate(0deg); }
        }
        .bell-ring {
          animation: ring 1.1s ease-in-out infinite;
          display: inline-block;
          transform-origin: top center;
        }
      `}</style>

      {/* TOP URGENCY BANNER WITH SWINGING BELLS & WHITE GAP */}
      <div className="bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#B8860B] text-white py-3.5 px-4 text-center text-xs md:text-sm font-black tracking-wider uppercase flex items-center justify-center gap-3 shadow-lg sticky top-0 z-50">
        <span className="bell-ring text-lg">🔔</span>
        <span>⚡ OFERTA DE LANZAMIENTO HASTA HOY, {todayFormatted.toUpperCase()} • 50% OFF ⚡</span>
        <span className="bell-ring text-lg">🔔</span>
      </div>

      {/* WHITE AIR GAP BETWEEN URGENCY BANNER AND GRAPHIC */}
      <div className="h-6 w-full bg-[#FAF9F5]"></div>

      {/* TOP BRAND BANNER */}
      <header className="w-full bg-white border-b border-[#E5E5EA]">
        {!imageError ? (
          <img 
            src="https://i.imgur.com/dmuw46z.jpeg" 
            alt="Regalos Resueltos - Promesa Principal" 
            className="w-full h-auto object-cover shadow-sm mx-auto max-w-5xl"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-64 bg-slate-100 flex items-center justify-center text-slate-500 font-medium">
            Regalos Resueltos
          </div>
        )}
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">
        
        {/* HERO SUBHEADLINE & CTA */}
        <section className="text-center max-w-4xl mx-auto space-y-6 pt-2">
          <p className="text-xl md:text-2xl font-medium text-[#6E6E73] max-w-3xl mx-auto leading-relaxed">
            10 ideas de regalos + archivos listos para mandar a imprimir y armar regalos únicos desde tu casa, aunque nunca lo hayas hecho antes.
          </p>

          <div className="pt-2 flex justify-center">
            <a 
              href="https://patatas-store.impultienda.ar/checkout" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#D93829] text-white font-extrabold text-base rounded-2xl hover:bg-[#C02F21] transition-colors shadow-lg shadow-red-600/25 inline-flex items-center gap-3"
            >
              <ShoppingCart className="w-5 h-5 text-white" />
              <span>Quiero mi kit con 50% OFF</span>
            </a>
          </div>
        </section>

        {/* VIDEO DEMOSTRATIVO (YOUTUBE SHORTS EMBED) */}
        <section className="space-y-6 max-w-md mx-auto">
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1C1C1E]">
              Mirá lo fácil que es armar tus propios regalos personalizados
            </h3>
            <p className="text-xs text-[#6E6E73] uppercase tracking-wider font-semibold">
              Paso a paso: elegís diseño → mandás a imprimir → aplicás el DTF → resultado final.
            </p>
          </div>

          <div className="w-full aspect-[9/16] bg-black rounded-3xl shadow-2xl overflow-hidden border border-[#E5E5EA] relative">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/Ktjk-blCU9c" 
              title="Video Demostrativo Regalos Resueltos" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* GALERÍA DE LAS 10 IDEAS DE REGALO */}
        <section className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D93829] text-white font-extrabold text-xs uppercase tracking-widest border border-[#D4AF37] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Catálogo Oficial Exclusivo
            </span>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-[#1C1C1E]">
              Las 10 Ideas de Regalo Incluidas en el Kit
            </h3>
            <p className="text-sm md:text-base text-[#6E6E73]">
              Diseños profesionales listos para personalizar y deslumbrar a todos estas fiestas con acabado de tienda boutique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {giftIdeas.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border-2 border-[#E5E5EA] hover:border-[#D4AF37] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 space-y-5 flex flex-col justify-between group transform hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-full bg-[#FAF9F5] border-b border-[#E5E5EA] relative overflow-hidden flex items-center justify-center p-0 aspect-[4/5] group-hover:bg-amber-50/40 transition-colors">


                    {item.img ? (
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-4 text-[#6E6E73]">
                        <Gift className="w-10 h-10 text-[#E05A47] mb-2" />
                        <span className="text-xs font-bold text-[#1C1C1E]">{item.title}</span>
                      </div>
                    )}
                  </div>

                  <div className="px-6 space-y-1.5">
                    <h4 className="font-extrabold text-base md:text-lg text-[#1C1C1E] group-hover:text-[#D93829] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-[#6E6E73] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mx-6 mb-6 pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs font-bold text-[#1C1C1E]">
                  <span className="flex items-center gap-1.5 text-emerald-700">
                    <Check className="w-4 h-4 text-emerald-600 bg-emerald-100 rounded-full p-0.5" /> PNG 300 DPI Alta Resolución
                  </span>
                  <span className="text-xs text-[#996515] bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">HD / Impresión</span>
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* CÓMO FUNCIONA / CÓMO SE USA (ESTILO NAVIDEÑO ROJO Y DORADO) */}
        <section className="bg-gradient-to-br from-[#B31942] via-[#990000] to-[#700D22] border-2 border-[#D4AF37] rounded-3xl p-8 md:p-12 shadow-2xl space-y-10 text-white relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#D4AF37] px-4 py-1.5 bg-white/10 backdrop-blur rounded-full border border-[#D4AF37]/40">
              Súper Simple y Flexible
            </span>
            <h3 className="text-2xl md:text-4xl font-black tracking-tight text-white drop-shadow-sm">
              ¿Cómo funciona el sistema en 3 simples pasos?
            </h3>
            <p className="text-sm md:text-base text-white/90">
              Sin complicaciones ni límites: armá todos los regalos que necesites desde la comodidad de tu hogar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white text-[#1C1C1E] rounded-2xl border-2 border-[#D4AF37]/50 shadow-xl space-y-3 relative transform hover:scale-[1.02] transition-transform">
              <div className="w-10 h-10 rounded-xl bg-[#D93829] text-white flex items-center justify-center font-black text-base shadow-md">
                1
              </div>
              <h4 className="font-extrabold text-base md:text-lg text-[#1C1C1E]">Elegís y repetís sin límite</h4>
              <p className="text-xs md:text-sm text-[#6E6E73] leading-relaxed">
                Seleccionas solo los archivos de los regalos que querés hacer. <strong className="text-[#1C1C1E]">Podés mandar a imprimir un mismo archivo todas las veces que quieras</strong> para armar infinitos obsequios.
              </p>
            </div>

            <div className="p-6 bg-white text-[#1C1C1E] rounded-2xl border-2 border-[#D4AF37]/50 shadow-xl space-y-3 relative transform hover:scale-[1.02] transition-transform">
              <div className="w-10 h-10 rounded-xl bg-[#D93829] text-white flex items-center justify-center font-black text-base shadow-md">
                2
              </div>
              <h4 className="font-extrabold text-base md:text-lg text-[#1C1C1E]">Mandás a imprimir</h4>
              <p className="text-xs md:text-sm text-[#6E6E73] leading-relaxed">
                Llevás los archivos a cualquier imprenta gráfica que realice DTF Textil o DTF UV. Te entregamos todo optimizado para ahorrar al máximo el material.
              </p>
            </div>

            <div className="p-6 bg-white text-[#1C1C1E] rounded-2xl border-2 border-[#D4AF37]/50 shadow-xl space-y-3 relative transform hover:scale-[1.02] transition-transform">
              <div className="w-10 h-10 rounded-xl bg-[#D93829] text-white flex items-center justify-center font-black text-base shadow-md">
                3
              </div>
              <h4 className="font-extrabold text-base md:text-lg text-[#1C1C1E]">Aplicás en casa y listo</h4>
              <p className="text-xs md:text-sm text-[#6E6E73] leading-relaxed">
                Estampás con tu plancha hogareña o pegás sobre tus objetos rígidos con nuestras guías paso a paso. ¡Resultados de tienda boutique en minutos!
              </p>
            </div>
          </div>

          <div className="pt-2 flex justify-center">
            <a 
              href="https://patatas-store.impultienda.ar/checkout" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white hover:bg-amber-50 text-[#996515] border-2 border-[#D4AF37] font-black text-sm uppercase tracking-wider rounded-2xl shadow-xl transition-all inline-flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5 text-[#D4AF37]" />
              <span>Quiero mi kit con 50% OFF</span>
            </a>
          </div>
        </section>

        {/* VALUE STACK */}
        <section className="bg-white border border-[#E5E5EA] rounded-3xl p-8 md:p-10 shadow-sm space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1C1C1E]">
              Todo lo que recibís hoy al adquirir el Kit
            </h3>
            <p className="text-sm text-[#6E6E73]">Desglose del valor real de cada componente.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#E5E5EA] text-[#6E6E73] text-xs uppercase tracking-wider">
                  <th className="py-3 px-4">Componente del Kit</th>
                  <th className="py-3 px-4">Valor Percibido</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5EA]">
                <tr>
                  <td className="py-4 px-4 font-medium text-[#1C1C1E]">10 Diseños exclusivos para DTF Textil y DTF UV</td>
                  <td className="py-4 px-4 text-[#6E6E73]">$49.00 USD</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-[#1C1C1E]">Guía paso a paso para estampar con la plancha casera</td>
                  <td className="py-4 px-4 text-[#6E6E73]">$25.00 USD</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-[#1C1C1E]">Guía de proveedores en MercadoLibre (Bolsas, Tazas, Vasos)</td>
                  <td className="py-4 px-4 text-[#6E6E73]">$35.00 USD</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-[#1C1C1E]">🎁 BONO: Pack de etiquetas navideñas imprimibles</td>
                  <td className="py-4 px-4 text-[#6E6E73]">$15.00 USD</td>
                </tr>
                <tr className="bg-[#FAF9F5] font-bold">
                  <td className="py-4 px-4 text-[#1C1C1E]">VALOR TOTAL COMBINADO</td>
                  <td className="py-4 px-4 text-slate-500 line-through">$124.00 USD</td>
                </tr>
                <tr className="bg-[#E05A47]/10 text-[#E05A47] font-extrabold text-base">
                  <td className="py-4 px-4">PRECIO HOY (ACCESO VITALICIO)</td>
                  <td className="py-4 px-4">$29.00 USD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* BONOS EXCLUSIVOS ("LOS BONOS" / "NONOS") */}
        <section className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E05A47] px-3 py-1 bg-[#E05A47]/10 rounded-full">
              Regalos de Bienvenida Especiales
            </span>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1C1C1E]">
              Bonos Exclusivos Incluidos Gratis Hoy
            </h3>
            <p className="text-sm text-[#6E6E73]">
              Accede a estos 3 bonos valorados en $65 USD sin costo adicional al comprar hoy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-[#D4AF37]/50 rounded-2xl p-6 space-y-3 shadow-md relative overflow-hidden">
              <span className="absolute top-0 right-0 bg-[#D4AF37] text-white text-[9px] font-black uppercase px-3 py-1 rounded-bl-xl">VALOR $15 USD</span>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#996515] flex items-center justify-center font-bold">
                🎁
              </div>
              <h4 className="text-base font-bold text-[#1C1C1E]">Etiquetas Navideñas Imprimibles</h4>
              <p className="text-xs text-[#6E6E73] leading-relaxed">
                Tags con diseños listos para imprimir, recortar y colocar en cada uno de tus paquetes y regalos terminados.
              </p>
            </div>

            <div className="bg-white border-2 border-[#D4AF37]/50 rounded-2xl p-6 space-y-3 shadow-md relative overflow-hidden">
              <span className="absolute top-0 right-0 bg-[#D4AF37] text-white text-[9px] font-black uppercase px-3 py-1 rounded-bl-xl">VALOR $25 USD</span>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#996515] flex items-center justify-center font-bold">
                ⚡
              </div>
              <h4 className="text-base font-bold text-[#1C1C1E]">Guía y Video con Plancha Casera</h4>
              <p className="text-xs text-[#6E6E73] leading-relaxed">
                Aprende la temperatura y presión exacta usando la plancha de ropa de tu casa para lograr fijación profesional.
              </p>
            </div>

            <div className="bg-white border-2 border-[#D4AF37]/50 rounded-2xl p-6 space-y-3 shadow-md relative overflow-hidden">
              <span className="absolute top-0 right-0 bg-[#D4AF37] text-white text-[9px] font-black uppercase px-3 py-1 rounded-bl-xl">VALOR $35 USD</span>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#996515] flex items-center justify-center font-bold">
                📦
              </div>
              <h4 className="text-base font-bold text-[#1C1C1E]">Proveedores en MercadoLibre</h4>
              <p className="text-xs text-[#6E6E73] leading-relaxed">
                Listado directo de proveedores económicos para comprar tote bags, neceseres, tazas y vasos por cantidad al mejor precio.
              </p>
            </div>
          </div>
        </section>

        {/* UPSELLS */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-8 md:p-10 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                🔥 Oferta Especial de Último Minuto
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold text-[#1C1C1E]">
                Agregá la Colección Extra "Navidad Minimalista & Elegante"
              </h3>
              <p className="text-sm text-[#6E6E73] leading-relaxed">
                Llévate 10 diseños adicionales con estilo nórdico y minimalista por solo <strong className="text-[#1C1C1E]">$9 USD adicionales</strong> (Precio regular $30).
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 shrink-0">
              <button 
                onClick={() => setUpsellSelected(!upsellSelected)}
                className={`px-6 py-3 rounded-2xl text-xs font-bold transition-all shadow-sm flex items-center gap-2 ${
                  upsellSelected 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-[#1C1C1E] text-white hover:bg-slate-800'
                }`}
              >
                {upsellSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                <span>{upsellSelected ? '¡Colección Extra Agregada!' : 'Agregar por +$9 USD'}</span>
              </button>
            </div>
          </div>
        </section>

        {/* ESCASEZ / URGENCIA */}
        <section className="bg-red-50 border border-red-200 rounded-3xl p-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-widest">
            <Clock className="w-4 h-4" />
            <span>¡Atención: Tiempo Límite!</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1C1C1E]">
            Asegura tus impresiones antes de que las imprentas cierren por vacaciones
          </h3>
          <p className="text-sm text-[#6E6E73] max-w-xl mx-auto">
            Diciembre se acerca rápido y los talleres gráficos colapsan. Descarga hoy tus archivos y adelanta tus regalos con total tranquilidad.
          </p>
        </section>

        {/* OBJECIONES / FAQ */}
        <section className="space-y-6 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold tracking-tight text-[#1C1C1E]">
              Preguntas Frecuentes
            </h3>
            <p className="text-sm text-[#6E6E73]">
              Todo lo que necesitas saber antes de empezar.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-[#E5E5EA] rounded-2xl p-6 shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left font-bold text-sm text-[#1C1C1E]"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#E05A47] font-bold text-lg">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <p className="mt-3 text-xs text-[#6E6E73] leading-relaxed pt-3 border-t border-[#E5E5EA]">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* OFERTA FINAL, CTA Y CIERRE EMOCIONAL */}
        <section id="oferta" className="bg-white border-2 border-[#E05A47] rounded-3xl p-8 md:p-12 text-center space-y-8 shadow-xl max-w-3xl mx-auto">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E05A47] px-3 py-1 bg-[#E05A47]/10 rounded-full">
              Acceso Inmediato
            </span>
            <h3 className="text-3xl font-extrabold text-[#1C1C1E]">
              Haz que esta Navidad sea inolvidable
            </h3>
            <p className="text-sm text-[#6E6E73] max-w-lg mx-auto">
              Obtén el kit completo {upsellSelected ? '+ la colección extra minimalista' : ''} hoy mismo por solo <strong className="text-[#1C1C1E] text-base">${29 + (upsellSelected ? 9 : 0)} USD</strong>.
            </p>
          </div>

          <a 
            href="https://patatas-store.impultienda.ar/checkout"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-[#D93829] border-2 border-[#D4AF37] text-white font-extrabold rounded-2xl hover:bg-[#C02F21] transition-colors shadow-lg shadow-red-600/25 text-base inline-flex items-center justify-center gap-3"
          >
            <ShoppingCart className="w-5 h-5 text-[#D4AF37]" />
            <span>Quiero mi kit con 50% OFF</span>
          </a>

          <div className="pt-6 border-t border-[#E5E5EA] space-y-2 text-xs text-[#6E6E73]">
            <p className="font-semibold text-[#1C1C1E]">✨ Cierre Emocional</p>
            <p className="max-w-md mx-auto italic">
              "El mejor regalo no es el más caro, sino el que demuestra que alguien se tomó el tiempo de pensar en vos. Regalos Resueltos hace que ese momento mágico sea fácil y accesible."
            </p>
          </div>
        </section>

      </main>

      <footer className="mt-24 border-t border-[#E5E5EA] py-8 text-center text-xs text-[#6E6E73] bg-white">
        <p>© 2026 Regalos Resueltos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
