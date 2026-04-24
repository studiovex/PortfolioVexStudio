import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Layout, Code, ShoppingCart, Zap, ArrowUpRight } from 'lucide-react';
import { CONTENT } from '../constants/content';
import { AnimatedText } from '../components/AnimatedText';
import MagneticWrapper from '../components/MagneticWrapper';

const iconMap: Record<string, React.ElementType> = {
  layout: Layout, code: Code, shopping: ShoppingCart, zap: Zap,
};

const Services = () => {
  const { services } = CONTENT;
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineY1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const lineY2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section id="servicios" ref={containerRef} className="py-32 bg-bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div style={{ y: lineY1 }} className="absolute -top-[50%] left-[25%] w-px h-[200%] bg-gradient-to-b from-transparent via-white/[0.05] to-transparent" />
        <motion.div style={{ y: lineY2 }} className="absolute -top-[50%] left-[75%] w-px h-[200%] bg-gradient-to-b from-transparent via-white/[0.05] to-transparent" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <span className="section-label text-vex-green mb-8 block">{services.label}</span>
            <h2 className="font-display font-bold text-5xl md:text-7xl leading-[0.9] tracking-tight">
              <AnimatedText text={services.title} /> <br className="hidden md:block" />
              <AnimatedText text={services.titleHighlight} className="text-gradient inline-block" delay={0.2} />
            </h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-10%" }}
            className="max-w-sm text-cream-muted font-light text-lg leading-relaxed"
          >
            {services.subtitle}
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.items.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div 
                key={s.id} 
                initial={{ opacity: 0, y: 50, scale: 0.95 }} 
                whileInView={{ opacity: 1, y: 0, scale: 1 }} 
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }} 
                viewport={{ once: true, margin: "-10%" }}
                className="group relative p-10 md:p-12 rounded-[2rem] bg-bg-card border border-white/[0.04] hover:border-vex-green/20 transition-all duration-700 card-glow flex flex-col overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-vex-green/[0.03] blur-[80px] rounded-full group-hover:bg-vex-green/[0.08] transition-all duration-700 pointer-events-none" />
                <div className="flex justify-between items-start mb-10 relative z-10">
                  <MagneticWrapper>
                    <div className="p-4 rounded-2xl bg-vex-green/[0.06] border border-vex-green/10 text-vex-green group-hover:bg-vex-green/10 transition-all duration-500">
                      <Icon className="w-7 h-7" />
                    </div>
                  </MagneticWrapper>
                  <ArrowUpRight className="w-5 h-5 text-cream-dark opacity-0 group-hover:opacity-100 group-hover:text-vex-green transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-8 text-cream group-hover:text-vex-green transition-colors duration-300 relative z-10">{s.title}</h3>
                <div className="space-y-6 flex-1 relative z-10">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-cream-dark font-mono mb-2">Problema</p>
                    <p className="text-cream-muted font-light text-sm leading-relaxed group-hover:text-cream/70 transition-colors">{s.problem}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-vex-green font-mono mb-2">Solución</p>
                    <p className="text-cream font-medium text-sm leading-relaxed">{s.solution}</p>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-white/[0.04] relative z-10">
                  <p className="text-vex-green text-sm font-semibold mb-4 flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">↑</span> {s.benefit}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map(t => (
                      <span key={t} className="text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 bg-white/[0.03] border border-white/[0.04] rounded-lg text-cream-dark font-mono group-hover:border-vex-green/20 transition-colors duration-300">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
