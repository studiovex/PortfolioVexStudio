import { motion } from 'framer-motion';
import { Layout, Code, ShoppingCart, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  {
    title: 'Desarrollo Web Premium',
    desc: 'Interfaces inmersivas que capturan la esencia de tu marca con una performance superior.',
    icon: <Layout className="w-8 h-8" />,
    tags: ['Next.js', 'React', 'GSAP'],
    color: 'bg-vex-green/5'
  },
  {
    title: 'Sistemas a Medida',
    desc: 'Arquitecturas escalables diseñadas para resolver problemas de negocio complejos.',
    icon: <Code className="w-8 h-8" />,
    tags: ['Backend', 'APIs', 'Node.js'],
    color: 'bg-vex-violet/5'
  },
  {
    title: 'E-commerce Élite',
    desc: 'Tiendas online optimizadas para maximizar la conversión y la experiencia del usuario.',
    icon: <ShoppingCart className="w-8 h-8" />,
    tags: ['Shopify', 'Custom', 'Payments'],
    color: 'bg-vex-green/5'
  },
  {
    title: 'Automatización & AI',
    desc: 'Integramos inteligencia artificial para optimizar procesos y escalar tu productividad.',
    icon: <Zap className="w-8 h-8" />,
    tags: ['AI Agent', 'Workflow', 'Automations'],
    color: 'bg-vex-violet/5'
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-vex-green" />
              <span className="text-xs uppercase tracking-[0.2em] text-cream-muted">01 — Servicios</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight">
              Ingeniería digital para <br /><span className="italic font-light italic-accent">líderes de industria.</span>
            </h2>
          </div>
          <p className="max-w-xs text-cream-muted font-light leading-relaxed">
            Cuatro pilares estratégicos diseñados para transformar tu presencia digital en un activo rentable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group p-8 rounded-3xl border border-cream/5 hover:border-vex-green/20 transition-all duration-500",
                s.color
              )}
            >
              <div className="mb-6 text-vex-green group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {s.icon}
              </div>
              <h3 className="font-display font-bold text-xl mb-4 text-cream group-hover:text-vex-green transition-colors">
                {s.title}
              </h3>
              <p className="text-cream-muted font-light text-sm leading-relaxed mb-8">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {s.tags.map(t => (
                  <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/5 rounded-full text-cream-muted">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
