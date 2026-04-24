import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { CONTENT } from '../constants/content';
import { AnimatedText } from '../components/AnimatedText';
import MagneticWrapper from '../components/MagneticWrapper';

const Contact = () => {
  const { contact, agency } = CONTENT;
  return (
    <section id="contacto" className="py-32 bg-bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-vex-green/[0.04] blur-[150px] rounded-full" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <span className="section-label text-vex-green mb-8 block">{contact.label}</span>
            <h2 className="font-display font-bold text-5xl md:text-7xl leading-[0.9] tracking-tight mb-8">
              <AnimatedText text={contact.title} /> <br />
              <AnimatedText text={contact.titleHighlight} className="text-gradient inline-block" delay={0.2} />
            </h2>
            <p className="text-cream-muted font-light text-lg mb-16 max-w-md leading-relaxed">{contact.subtitle}</p>
            <div className="space-y-6">
              <a href={`mailto:${agency.email}`} className="flex items-center gap-5 group cursor-pointer p-4 -mx-4 rounded-2xl hover:bg-white/[0.02] transition-colors">
                <MagneticWrapper>
                  <div className="w-12 h-12 rounded-2xl bg-vex-green/[0.06] border border-vex-green/10 flex items-center justify-center group-hover:bg-vex-green/10 transition-colors">
                    <Mail className="w-5 h-5 text-vex-green pointer-events-none" />
                  </div>
                </MagneticWrapper>
                <div>
                  <p className="text-[9px] text-cream-dark uppercase tracking-[0.3em] font-mono mb-1">Email</p>
                  <p className="text-cream font-medium text-sm">{agency.email}</p>
                </div>
              </a>
              <a href={agency.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group cursor-pointer p-4 -mx-4 rounded-2xl hover:bg-white/[0.02] transition-colors">
                <MagneticWrapper>
                  <div className="w-12 h-12 rounded-2xl bg-vex-green/[0.06] border border-vex-green/10 flex items-center justify-center group-hover:bg-vex-green/10 transition-colors">
                    <Phone className="w-5 h-5 text-vex-green pointer-events-none" />
                  </div>
                </MagneticWrapper>
                <div>
                  <p className="text-[9px] text-cream-dark uppercase tracking-[0.3em] font-mono mb-1">WhatsApp</p>
                  <p className="text-cream font-medium text-sm">{agency.phone}</p>
                </div>
              </a>
              <div className="flex items-center gap-5 p-4 -mx-4 group cursor-default">
                <MagneticWrapper>
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.05] transition-colors">
                    <MapPin className="w-5 h-5 text-cream-dark pointer-events-none" />
                  </div>
                </MagneticWrapper>
                <div>
                  <p className="text-[9px] text-cream-dark uppercase tracking-[0.3em] font-mono mb-1">Base</p>
                  <p className="text-cream font-medium text-sm">{agency.location}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
            className="p-10 md:p-12 rounded-[2.5rem] bg-bg-card border border-white/[0.04] shadow-2xl">
            <h3 className="text-xl font-display font-bold mb-8 text-cream">{contact.formTitle}</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.3em] text-cream-dark font-mono">Nombre</label>
                <input type="text" className="w-full bg-bg border border-white/[0.06] rounded-xl p-4 outline-none transition-all text-cream text-sm placeholder:text-cream-dark" placeholder="Tu nombre" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.3em] text-cream-dark font-mono">Email</label>
                <input type="email" className="w-full bg-bg border border-white/[0.06] rounded-xl p-4 outline-none transition-all text-cream text-sm placeholder:text-cream-dark" placeholder="tu@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.3em] text-cream-dark font-mono">Tipo de Proyecto</label>
                <select className="w-full bg-bg border border-white/[0.06] rounded-xl p-4 outline-none transition-all text-cream text-sm">
                  <option value="">Seleccionar...</option>
                  <option value="web">Desarrollo Web</option>
                  <option value="system">Sistema a Medida</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="ai">Automatización & IA</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.3em] text-cream-dark font-mono">Mensaje</label>
                <textarea rows={4} className="w-full bg-bg border border-white/[0.06] rounded-xl p-4 outline-none transition-all text-cream text-sm resize-none placeholder:text-cream-dark" placeholder="Contanos sobre tu proyecto..." />
              </div>
              <Button size="lg" className="w-full">
                <Send className="w-4 h-4" />
                {contact.formCta}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
