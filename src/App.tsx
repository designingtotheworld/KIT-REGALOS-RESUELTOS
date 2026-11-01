/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Gift, Sparkles, Check, ChevronRight, ChevronLeft, ShieldCheck, 
  Clock, AlertCircle, HelpCircle, Package, Play, ShoppingCart, Star, Plus, Flame, Award, Video, FileText
} from 'lucide-react';

export default function App() {
  const [imageError, setImageError] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [bonusImgUrl, setBonusImgUrl] = useState('');

  // Dynamic today's date in Spanish for urgency banner
  const todayFormatted = new Date().toLocaleDateString('es-ES', { 
    day: 'numeric', 
    month: 'long' 
  });

  const giftIdeas = [
    "https://i.imgur.com/5RAt3Wt.jpeg",
    "https://i.imgur.com/itRWi7G.jpeg",
    "https://i.imgur.com/ICg7Nvq.jpeg",
    "https://i.imgur.com/lqSZLb2.jpeg",
    "https://i.imgur.com/hWaunHL.jpeg",
    "https://i.imgur.com/ucCNftW.jpeg",
    "https://i.imgur.com/mEPNn7N.jpeg",
    "https://i.imgur.com/5ND6nB8.jpeg",
    "https://i.imgur.com/SYZLJGr.jpeg",
    "https://i.imgur.com/x3gTi4P.jpeg",
    "https://i.imgur.com/yk5gz8F.jpeg",
  ];

  const faqs = [
    { q: "¿Necesito una máquina de estampado profesional?", a: "¡No! Una de las grandes ventajas de este kit es que la guía te enseña paso a paso cómo estampar perfectamente usando la plancha hogareña de tu casa y cómo aplicar DTF UV en superficies rígidas sin equipos costosos." },
    { q: "¿Cómo recibo los archivos después de comprar?", a: "El acceso es inmediato. Una vez procesado el pago, descargas todos los diseños en alta resolución y las guías en PDF y video." },
    { q: "¿Qué impresiones necesito encargar en la imprenta?", a: "Solo llevas nuestros archivos a cualquier imprenta gráfica que haga DTF Textil y DTF UV por metro o plancha. Te entregamos los archivos ya armados con la máxima optimización." },
    { q: "¿Sirve aunque nunca haya hecho manualidades antes?", a: "¡Totalmente! Está diseñado paso a paso para emprendedores y principiantes, con instrucciones visuales claras para que disfrutes el proceso." }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1C1C1E] font-sans antialiased selection:bg-[#E05A47]/20 selection:text-[#E05A47]">
      {/* CSS KEYFRAMES FOR BELL SWINGING & ZEN ANIMATION */}
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
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        .animate-zen {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes blink-light {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.2); filter: drop-shadow(0 0 10px #FFD700); }
        }
        .garland-light-1 { animation: blink-light 0.9s ease-in-out infinite; }
        .garland-light-2 { animation: blink-light 0.9s ease-in-out infinite 0.3s; }
        .garland-light-3 { animation: blink-light 0.9s ease-in-out infinite 0.6s; }
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
            className="w-full h-auto object-cover shadow-sm"
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
            10 ideas de regalos con sus kits imprimibles para armar más de 50 regalos únicos desde tu casa, aunque nunca lo hayas hecho antes.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://patatas-store.impultienda.ar/checkout" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-5 bg-[#1B4D3E] text-white font-extrabold rounded-2xl hover:bg-[#143B30] transition-colors shadow-xl shadow-emerald-900/30 flex flex-col items-center justify-center text-center gap-1 order-2 sm:order-1 border-2 border-[#D4AF37]"
            >
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-sm md:text-base uppercase tracking-wider font-extrabold">QUIERO MI KIT</span>
              </div>
              <span className="text-2xl md:text-3xl font-black text-[#FFF8DC] tracking-tight">POR $12.5 USD</span>
            </a>

            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 flex items-center justify-center order-1 sm:order-2">
              <img 
                src="https://i.imgur.com/TOdn8ow.png" 
                alt="Papá Noel Zen" 
                className="w-full h-full object-contain animate-zen filter drop-shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* VIDEO DEMOSTRATIVO (YOUTUBE SHORTS EMBED) */}
        <section className="space-y-6 max-w-md mx-auto">
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1C1C1E] leading-snug">
              Mirá lo fácil que es armar tus<br />regalos <span className="text-[#D93829]">personalizados</span>
            </h3>
            <p className="text-xs text-[#6E6E73] uppercase tracking-wider font-semibold">
              Paso a paso: elegís diseño → mandás a imprimir → aplicás el DTF → resultado final.
            </p>
          </div>

          <div className="w-full aspect-[9/16] bg-black rounded-3xl shadow-2xl overflow-hidden border border-[#E5E5EA] relative">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/MTc-B42KoB0" 
              title="Video Demostrativo Regalos Resueltos" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* GALERÍA DE LAS 10 IDEAS DE REGALO (EDGE TO EDGE, NO ROUNDED CORNERS) */}
        <section className="space-y-12 bg-white/80 border border-[#E5E5EA] rounded-3xl p-8 md:p-14 shadow-sm">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {giftIdeas.map((imgUrl, idx) => (
              <div 
                key={idx} 
                className="bg-white border-2 border-[#D4AF37] rounded-none shadow-lg overflow-hidden flex flex-col items-center justify-center p-0"
              >
                <img 
                  src={imgUrl} 
                  alt={`Regalo #${idx + 1}`} 
                  className="w-full h-auto object-contain block m-0 p-0"
                  referrerPolicy="no-referrer"
                />
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
            <div className="p-6 bg-white text-[#1C1C1E] rounded-2xl border-2 border-[#D4AF37]/50 shadow-xl space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-[#D93829] text-white flex items-center justify-center font-black text-base shadow-md">
                1
              </div>
              <h4 className="font-extrabold text-base md:text-lg text-[#1C1C1E]">Elegís y repetís sin límite</h4>
              <p className="text-xs md:text-sm text-[#6E6E73] leading-relaxed">
                Seleccionas solo los archivos de los regalos que querés hacer. <strong className="text-[#1C1C1E]">Podés mandar a imprimir un mismo archivo todas las veces que quieras</strong> para armar infinitos obsequios.
              </p>
            </div>

            <div className="p-6 bg-white text-[#1C1C1E] rounded-2xl border-2 border-[#D4AF37]/50 shadow-xl space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-[#D93829] text-white flex items-center justify-center font-black text-base shadow-md">
                2
              </div>
              <h4 className="font-extrabold text-base md:text-lg text-[#1C1C1E]">Mandás a imprimir</h4>
              <p className="text-xs md:text-sm text-[#6E6E73] leading-relaxed">
                Llevás los archivos a cualquier imprenta gráfica que realice DTF Textil o DTF UV. Te entregamos todo optimizado para ahorrar al máximo el material.
              </p>
            </div>

            <div className="p-6 bg-white text-[#1C1C1E] rounded-2xl border-2 border-[#D4AF37]/50 shadow-xl space-y-3 relative">
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
              className="px-8 py-4 bg-[#1B4D3E] hover:bg-[#143B30] text-white border-2 border-[#D4AF37] font-black text-sm uppercase tracking-wider rounded-2xl shadow-xl transition-all inline-flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5 text-[#D4AF37]" />
              <span>QUIERO MI KIT DIGITAL REGALOS RESUELTOS</span>
            </a>
          </div>
        </section>

        {/* SINGLE CONSOLIDATED VALUE STACK CARD ("TODO LO QUE RECIBÍS HOY") */}
        <section className="max-w-3xl mx-auto">
          <div className="bg-white border-4 border-[#D4AF37] rounded-3xl overflow-hidden shadow-2xl space-y-8">
            {/* Top Graphic Base Image (Edge-to-edge, no rounded corners) */}
            <div className="w-full m-0 p-0 bg-[#FAF9F5]">
              <img 
                src="https://i.imgur.com/0M1eeP4.png" 
                alt="Kit Regalos Resueltos - Todo lo que recibís" 
                className="w-full h-auto object-cover m-0 p-0 rounded-none block"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 md:p-10 space-y-8">
              {/* Top Badge & Title */}
              <div className="text-center space-y-3">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#996515] text-white font-extrabold text-xs uppercase tracking-widest shadow-sm">
                  <Package className="w-4 h-4 text-[#D4AF37]" /> Paquete Completo Todo Incluido
                </span>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[#1C1C1E]">
                  Todo lo que recibís hoy al adquirir el Kit
                </h3>
                <p className="text-xs md:text-sm text-[#6E6E73] max-w-lg mx-auto">
                  Acceso inmediato y vitalicio a todo el material profesional para resolver tus regalos de fin de año.
                </p>
              </div>

            {/* Checklist of Deliverables in One Card */}
            <div className="space-y-6 bg-[#FAF9F5] border border-[#D4AF37]/30 rounded-2xl p-6 md:p-8 shadow-inner">
              {/* Check 1 */}
              <div className="flex items-start gap-4 pb-6 border-b border-[#E5E5EA]">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8860B] text-white flex items-center justify-center shrink-0 font-black shadow-md">
                  ✓
                </div>
                <div className="flex-1 space-y-2">
                  <h4 className="font-extrabold text-sm md:text-base text-[#1C1C1E]">10 KITS PARA ARMAR 10 IDEAS DE REGALO</h4>
                  <p className="text-xs text-[#6E6E73] leading-relaxed">
                    Archivos PNG 300 DPI listos para mandar a imprimir y armar <strong className="text-[#1C1C1E]">más de 50 regalos únicos</strong>.
                  </p>
                  <div className="pt-1 font-black text-sm">
                    <span className="line-through text-red-600 font-extrabold mr-2">$25 USD</span>
                  </div>
                </div>
              </div>

              {/* Check 2 */}
              <div className="flex items-start gap-4 pb-6 border-b border-[#E5E5EA]">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8860B] text-white flex items-center justify-center shrink-0 font-black shadow-md">
                  ✓
                </div>
                <div className="flex-1 space-y-2">
                  <h4 className="font-extrabold text-sm md:text-base text-[#1C1C1E]">VIDEOS EXPLICATIVOS + GUÍA EXCLUSIVA CANVA</h4>
                  <p className="text-xs text-[#6E6E73] leading-relaxed">
                    Como te mostramos en videos simples y cortos, el proceso de cómo estampar tus objetos con la plancha que tenés en casa y cómo aplicar el DTF UV en tus objetos rígidos.
                  </p>
                  <div className="pt-1 flex items-center gap-3 font-black text-sm">
                    <span className="line-through text-red-600 font-extrabold">$10 USD</span>
                    <span className="bg-[#1B4D3E] text-white text-xs font-black px-3 py-1 rounded-full shadow-sm">GRATIS CON TU KIT</span>
                  </div>
                </div>
              </div>

              {/* Check 3 */}
              <div className="flex items-start gap-4 pb-6 border-b border-[#E5E5EA]">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8860B] text-white flex items-center justify-center shrink-0 font-black shadow-md">
                  ✓
                </div>
                <div className="flex-1 space-y-2">
                  <h4 className="font-extrabold text-sm md:text-base text-[#1C1C1E]">TAGS PARA REGALOS IMPRIMIBLES</h4>
                  <p className="text-xs text-[#6E6E73] leading-relaxed">
                    Diseños de etiquetas y tags navideños a juego para una presentación impecable.
                  </p>
                  <div className="pt-1 flex items-center gap-3 font-black text-sm">
                    <span className="line-through text-red-600 font-extrabold">US$5</span>
                    <span className="bg-[#1B4D3E] text-white text-xs font-black px-3 py-1 rounded-full shadow-sm">GRATIS CON TU KIT</span>
                  </div>
                </div>
              </div>

              {/* Bonus Exclusive Header inside checklist */}
              <div className="pt-2 space-y-4">
                <div className="bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#B8860B] rounded-2xl p-4 text-white shadow-xl flex items-center justify-between border-2 border-white/40">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl animate-bounce">🎁</span>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-90 text-amber-100">Regalo Especial</p>
                      <h4 className="text-lg md:text-xl font-black tracking-tight text-white drop-shadow-sm">BONO EXCLUSIVO</h4>
                    </div>
                  </div>
                  <span className="text-xs font-black bg-[#1B4D3E] text-white px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/30 shadow-md">
                    100% GRATIS HOY
                  </span>
                </div>
              </div>
            </div>

            {/* Bonus Image Absolute Margin-to-Margin with Pinterest Warm White Fairy Lights Garland */}
            <div className="w-full bg-white border-y-4 border-[#D4AF37] shadow-2xl overflow-hidden relative p-0 m-0">
              {/* Garland lights top bar - Pinterest warm white style */}
              <div className="absolute top-0 inset-x-0 h-5 bg-[#1B4D3E] flex items-center justify-around px-4 z-10 border-b border-[#D4AF37]">
                <span className="w-2.5 h-2.5 rounded-full bg-white garland-light-1 shadow-[0_0_8px_white]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-100 garland-light-2 shadow-[0_0_8px_white]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-white garland-light-3 shadow-[0_0_8px_white]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-100 garland-light-1 shadow-[0_0_8px_white]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-white garland-light-2 shadow-[0_0_8px_white]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-100 garland-light-3 shadow-[0_0_8px_white]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-white garland-light-1 shadow-[0_0_8px_white]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-100 garland-light-2 shadow-[0_0_8px_white]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-white garland-light-3 shadow-[0_0_8px_white]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-100 garland-light-1 shadow-[0_0_8px_white]"></span>
              </div>

              <img 
                src="https://i.imgur.com/ECPthhX.png" 
                alt="Bono Exclusivo" 
                className="w-full h-auto object-cover m-0 p-0 block pt-5 pb-5"
                referrerPolicy="no-referrer"
              />

              {/* Garland lights bottom bar - Pinterest warm white style */}
              <div className="absolute bottom-0 inset-x-0 h-5 bg-[#1B4D3E] flex items-center justify-around px-4 z-10 border-t border-[#D4AF37]">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-100 garland-light-2 shadow-[0_0_8px_white]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-white garland-light-3 shadow-[0_0_8px_white]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-100 garland-light-1 shadow-[0_0_8px_white]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-white garland-light-2 shadow-[0_0_8px_white]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-100 garland-light-3 shadow-[0_0_8px_white]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-white garland-light-1 shadow-[0_0_8px_white]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-100 garland-light-2 shadow-[0_0_8px_white]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-white garland-light-3 shadow-[0_0_8px_white]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-100 garland-light-1 shadow-[0_0_8px_white]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-white garland-light-2 shadow-[0_0_8px_white]"></span>
              </div>
            </div>

            <div className="p-6 md:p-10 pt-2 space-y-6">
              <p className="text-xs text-[#6E6E73] text-center italic font-medium">
                Kit de etiquetas y presentación incluido 100% gratis con tu compra hoy.
              </p>
            </div>

            {/* Price Box inside the Single Card */}
            <div className="bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#B8860B] rounded-3xl p-6 md:p-10 text-white shadow-2xl text-center space-y-6 border-2 border-white/60">
              <div className="space-y-2">
                <span className="text-xs md:text-sm font-black uppercase tracking-widest bg-white/25 px-5 py-2 rounded-full inline-block shadow-sm">
                  🔥 OFERTA DE LANZAMIENTO IRRESISTIBLE
                </span>
                <p className="text-sm font-medium opacity-90 pt-1">Valor regular anterior: <span className="line-through font-black text-base text-white decoration-white">$25 USD</span></p>
              </div>

              {/* Price displayed very big, clear and easy to read */}
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 border-2 border-white/40 inline-block px-10 py-5 shadow-inner">
                <p className="text-xs md:text-sm uppercase tracking-widest font-black opacity-95 text-amber-100">SOLO HOY PAGÁS</p>
                <p className="text-6xl md:text-7xl font-black tracking-tight text-white drop-shadow-lg">$12.5 <span className="text-2xl md:text-3xl font-extrabold text-[#FFF8DC]">USD</span></p>
              </div>

              {/* Two Separate Checkout Buttons: Argentina (Mercado Pago) & Exterior (Dólares) */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Button Argentina - Mercado Pago */}
                <a 
                  href="https://patatas-store.impultienda.ar/checkout" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 px-6 py-4 bg-[#009EE3] hover:bg-[#0082BD] text-white font-black text-xs md:text-sm uppercase tracking-wider rounded-2xl shadow-2xl transition-all flex items-center justify-center gap-3 border-2 border-white/60"
                >
                  <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shrink-0 shadow">
                    <span className="text-[#009EE3] font-black text-xs">💙</span>
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase opacity-90">🇦🇷 Si estás en Argentina</div>
                    <div className="text-sm md:text-base font-black">Pagar en Pesos (Mercado Pago)</div>
                  </div>
                </a>

                {/* Button Exterior - Dólares */}
                <a 
                  href="https://patatas-store.impultienda.ar/checkout" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 px-6 py-4 bg-[#1B4D3E] hover:bg-[#143B30] text-white font-black text-xs md:text-sm uppercase tracking-wider rounded-2xl shadow-2xl transition-all flex items-center justify-center gap-3 border-2 border-[#D4AF37]"
                >
                  <div className="w-7 h-7 bg-[#D4AF37] rounded-full flex items-center justify-center shrink-0 shadow">
                    <span className="text-white font-black text-xs">🌍</span>
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase opacity-90">🌍 Desde el Exterior</div>
                    <div className="text-sm md:text-base font-black">Pagar en Dólares ($12.5 USD)</div>
                  </div>
                </a>
              </div>
              
              {/* Trust & Reassurance Badges */}
              <div className="pt-4 border-t border-white/30 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-amber-100">
                <span>🔒 Pago 100% Seguro</span>
                <span>•</span>
                <span>⚡ Acceso Inmediato y Vitalicio</span>
                <span>•</span>
                <span>🛡️ Garantía de Satisfacción</span>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* GIF ANIMADO ANTES DE ESCASEZ / URGENCIA */}
        <div className="flex justify-center">
          <img 
            src="https://media.giphy.com/media/3ov9jLsBqPh6rjuHuM/giphy.gif" 
            alt="GIF Animado" 
            className="w-24 h-24 md:w-32 md:h-32 object-contain filter drop-shadow-lg"
            referrerPolicy="no-referrer"
          />
        </div>

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
              Obtén el kit completo hoy mismo por solo <strong className="text-[#1C1C1E] text-base">$12.5 USD</strong>.
            </p>
          </div>

          {/* Giphy GIF before final checkout button */}
          <div className="flex justify-center">
            <img 
              src="https://media.giphy.com/media/3ov9jLsBqPh6rjuHuM/giphy.gif" 
              alt="GIF Animado Giphy" 
              className="w-24 h-24 md:w-28 md:h-28 object-contain filter drop-shadow-md"
              referrerPolicy="no-referrer"
            />
          </div>

          <a 
            href="https://patatas-store.impultienda.ar/checkout"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-[#1B4D3E] border-2 border-[#D4AF37] text-white font-extrabold rounded-2xl hover:bg-[#143B30] transition-colors shadow-xl shadow-emerald-900/30 text-base inline-flex items-center justify-center gap-3"
          >
            <ShoppingCart className="w-5 h-5 text-[#D4AF37]" />
            <span>Quiero mi kit por solo $12.5 USD</span>
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
