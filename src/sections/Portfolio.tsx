import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { CONTENT } from '../constants/content';
import { AnimatedText } from '../components/AnimatedText';
import MagneticWrapper from '../components/MagneticWrapper';

// Inner component to handle individual parallax per card
const ProjectCard = ({ p, i }: { p: any, i: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax for the image inside the container
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }}
      viewport={{ once: true, margin: "-10%" }}
      className="group rounded-[2rem] overflow-hidden bg-bg-card border border-white/[0.04] hover:border-white/10 transition-all duration-500 cursor-pointer"
      onClick={() => window.open(p.link, '_blank')}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] md:aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-bg/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
        <motion.div style={{ y, height: "130%" }} className="absolute inset-x-0 -top-[15%] origin-center group-hover:scale-105 transition-transform duration-700">
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
        {/* Metric badge */}
        <div className="absolute top-5 right-5 z-30 px-4 py-2 rounded-full glass flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
          <TrendingUp className="w-3 h-3 text-vex-green" />
          <span className="text-[10px] font-mono font-bold text-vex-green">{p.metrics.label}: {p.metrics.value}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className="text-[9px] uppercase tracking-[0.3em] text-vex-green font-mono font-bold mb-2 block">{p.category}</span>
            <h3 className="text-xl font-display font-bold text-cream group-hover:text-vex-green transition-colors">{p.name}</h3>
          </div>
          <MagneticWrapper>
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/[0.06] flex items-center justify-center text-cream-dark group-hover:text-bg group-hover:bg-vex-green group-hover:border-vex-green transition-all shrink-0 mt-1">
              <ExternalLink className="w-4 h-4" />
            </div>
          </MagneticWrapper>
        </div>
        <p className="text-cream-muted text-sm font-light leading-relaxed mb-4 group-hover:text-cream/80 transition-colors">{p.description}</p>
        <div className="flex items-center gap-2 pt-4 border-t border-white/[0.04]">
          <TrendingUp className="w-3.5 h-3.5 text-vex-green shrink-0 group-hover:-translate-y-1 transition-transform duration-300" />
          <p className="text-vex-green text-xs font-semibold">{p.result}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const { portfolio } = CONTENT;
  return (
    <section id="portafolio" className="py-32 bg-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <span className="section-label text-vex-green mb-8 block">{portfolio.label}</span>
            <h2 className="font-display font-bold text-5xl md:text-7xl leading-[0.9] tracking-tight">
              <AnimatedText text={portfolio.title} /> <br className="hidden md:block" />
              <AnimatedText text={portfolio.titleHighlight} className="text-gradient inline-block" delay={0.2} />
            </h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-10%" }}
            className="max-w-sm text-cream-muted font-light text-lg leading-relaxed"
          >
            {portfolio.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolio.projects.map((p, i) => (
            <ProjectCard key={i} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
