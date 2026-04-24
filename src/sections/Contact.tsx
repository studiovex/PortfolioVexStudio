import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-bg relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-vex-green" />
              <span className="text-xs uppercase tracking-[0.2em] text-cream-muted">04 — Contacto</span>
            </div>
            <h2 className="font-display font-bold text-5xl md:text-7xl mb-8">
              ¿Listo para <br /><span className="text-gradient">dominar?</span>
            </h2>
            <p className="text-cream-muted font-light text-lg mb-12 max-w-md">
              Cada gran proyecto comienza con una conversación. Cuéntanos tu idea y recibe una propuesta estratégica en 24 horas.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.open('mailto:studiovex06@gmail.com')}>
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-vex-green/50 transition-colors">
                  <Mail className="w-5 h-5 text-vex-green" />
                </div>
                <div>
                  <p className="text-xs text-cream-dark uppercase tracking-widest mb-1">Email</p>
                  <p className="text-cream font-medium">studiovex06@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.open('https://wa.me/2615349682')}>
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-vex-green/50 transition-colors">
                  <Phone className="w-5 h-5 text-vex-green" />
                </div>
                <div>
                  <p className="text-xs text-cream-dark uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="text-cream font-medium">+54 261 534 9682</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-vex-green" />
                </div>
                <div>
                  <p className="text-xs text-cream-dark uppercase tracking-widest mb-1">Ubicación</p>
                  <p className="text-cream font-medium">Mendoza, Argentina · Global</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-10 rounded-[3rem] bg-bg-secondary border border-white/5 shadow-2xl"
          >
            <h3 className="text-2xl font-display font-bold mb-8 text-cream">Inicia tu proyecto ahora</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-cream-dark">Nombre</label>
                <input type="text" className="w-full bg-bg border border-white/10 rounded-2xl p-4 focus:border-vex-green/50 outline-none transition-colors text-cream" placeholder="Tu nombre" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-cream-dark">Email</label>
                <input type="email" className="w-full bg-bg border border-white/10 rounded-2xl p-4 focus:border-vex-green/50 outline-none transition-colors text-cream" placeholder="tu@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-cream-dark">Mensaje</label>
                <textarea rows={4} className="w-full bg-bg border border-white/10 rounded-2xl p-4 focus:border-vex-green/50 outline-none transition-colors text-cream resize-none" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
              </div>
              <Button size="lg" className="w-full">Enviar propuesta</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
