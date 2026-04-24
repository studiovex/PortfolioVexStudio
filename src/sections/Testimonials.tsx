import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { CONTENT } from '../constants/content';
import { AnimatedText } from '../components/AnimatedText';

const Testimonials = () => {
  const { testimonials } = CONTENT;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="py-32 bg-bg-secondary relative overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 grid-pattern opacity-30 h-[140%] -top-[20%]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="section-label text-vex-violet justify-center mb-8 block">{testimonials.label}</span>
          <h2 className="font-display font-bold text-5xl md:text-7xl leading-[0.9] tracking-tight">
            <AnimatedText text={testimonials.title} /> <br />
            <AnimatedText text={testimonials.titleHighlight} className="text-gradient inline-block" delay={0.2} />
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.items.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }} viewport={{ once: true }}
              className="relative p-10 rounded-[2rem] bg-bg-card border border-white/[0.04] hover:border-vex-violet/20 transition-all duration-500 flex flex-col">
              <Quote className="w-8 h-8 text-vex-violet/20 mb-6" />
              <p className="text-cream font-light leading-relaxed text-lg flex-1 mb-8">"{t.quote}"</p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-vex-green fill-vex-green" />
                ))}
              </div>
              <div className="pt-6 border-t border-white/[0.04]">
                <p className="font-display font-bold text-cream text-sm">{t.author}</p>
                <p className="text-cream-dark text-xs font-mono mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
