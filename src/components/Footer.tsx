import React from 'react';
import { Instagram, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-20 bg-bg border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="text-center md:text-left">
            <img src="/public/imagenes/logo/logo sin fondo.png" alt="Vex Studio" className="h-10 w-auto filter invert mb-6 mx-auto md:mx-0" />
            <p className="text-cream-muted max-w-xs font-light">
              Construyendo el futuro digital con ingeniería de precisión y diseño inmersivo.
            </p>
          </div>

          <div className="flex gap-8 text-cream-muted uppercase text-[10px] tracking-[0.2em] font-medium">
            <a href="#nosotros" className="hover:text-vex-green transition-colors">Nosotros</a>
            <a href="#servicios" className="hover:text-vex-green transition-colors">Servicios</a>
            <a href="#portafolio" className="hover:text-vex-green transition-colors">Portafolio</a>
            <a href="#equipo" className="hover:text-vex-green transition-colors">Equipo</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-cream-muted hover:text-vex-green hover:border-vex-green transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-cream-muted hover:text-vex-green hover:border-vex-green transition-all">
              <Mail className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-cream-muted hover:text-vex-green hover:border-vex-green transition-all">
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5 text-[10px] uppercase tracking-widest text-cream-dark">
          <p>© 2026 Vex Studio. Todos los derechos reservados.</p>
          <button onClick={scrollToTop} className="flex items-center gap-2 group hover:text-vex-green transition-colors">
            Volver arriba <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
