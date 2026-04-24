import { Instagram, Mail, Phone, ArrowUp } from 'lucide-react';
import { CONTENT } from '../constants/content';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const { agency, footer } = CONTENT;

  return (
    <footer className="relative bg-bg pt-24 pb-12 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-vex-green/20 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Big CTA Banner */}
        <div className="relative rounded-[3rem] bg-bg-secondary border border-white/5 p-12 md:p-20 mb-20 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-vex-green/5 blur-[100px] rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-vex-violet/5 blur-[100px] rounded-full" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h3 className="font-display font-bold text-4xl md:text-6xl mb-6 tracking-tight">
              ¿Listo para <span className="text-gradient">escalar?</span>
            </h3>
            <p className="text-cream-muted font-light text-lg mb-10">
              {footer.tagline}
            </p>
            <a
              href={agency.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-vex-green text-bg font-bold rounded-full hover:bg-vex-green-light hover:shadow-xl hover:shadow-vex-green/20 transition-all duration-300 active:scale-95 text-lg"
            >
              Hablemos por WhatsApp
            </a>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img src={agency.logo} alt="Vex Studio" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-cream-muted font-light text-sm leading-relaxed max-w-xs">
              {footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-cream font-bold mb-6">Navegación</h4>
            <div className="flex flex-col gap-3">
              {CONTENT.nav.links.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-cream-muted hover:text-vex-green transition-colors text-sm font-light"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-cream font-bold mb-6">Contacto</h4>
            <div className="flex flex-col gap-3 text-sm text-cream-muted font-light">
              <a href={`mailto:${agency.email}`} className="hover:text-vex-green transition-colors">{agency.email}</a>
              <a href={agency.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-vex-green transition-colors">{agency.phone}</a>
              <span>{agency.location}</span>
            </div>
            <div className="flex gap-3 mt-6">
              <a href={agency.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-cream-muted hover:text-vex-green hover:border-vex-green/30 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={`mailto:${agency.email}`} className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-cream-muted hover:text-vex-green hover:border-vex-green/30 transition-all">
                <Mail className="w-4 h-4" />
              </a>
              <a href={agency.whatsapp} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-cream-muted hover:text-vex-green hover:border-vex-green/30 transition-all">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-cream-dark font-mono">
            {footer.copyright}
          </p>
          <button onClick={scrollToTop} className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-cream-dark hover:text-vex-green transition-colors group">
            Volver arriba <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
