import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ArrowRight, Sparkles, Code2, Cpu } from 'lucide-react';
import { CONTENT } from '../constants/content';

const Hero = () => {
  const { hero } = CONTENT;
  const loadDelay = 3.2; // Delay animations to wait for the intro loader

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-vex-green/[0.05] blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-vex-violet/[0.05] blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: loadDelay }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] shadow-xl backdrop-blur-md mb-8">
                <Sparkles className="w-3.5 h-3.5 text-vex-green animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-cream-muted font-mono">{hero.badge}</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: loadDelay + 0.2 }}
              className="font-display font-extrabold text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-tight mb-8"
            >
              {hero.title.line1}{' '}
              <span className="text-gradient inline-block">{hero.title.line2}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: loadDelay + 0.4 }}
              className="text-lg md:text-xl text-cream-muted leading-relaxed font-light mb-10 max-w-lg"
            >
              {hero.description}
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: loadDelay + 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group"
                onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {hero.ctas.primary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.querySelector('#portafolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {hero.ctas.secondary}
              </Button>
            </motion.div>
          </div>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: loadDelay + 0.5, ease: "easeOut" }}
            className="relative w-full max-w-md mx-auto lg:max-w-none mt-12 lg:mt-0 perspective-1000"
          >
            {/* Decorative abstract elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-gradient-radial from-vex-green/[0.05] to-transparent rounded-full" />
            
            {/* Floating glass cards */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 w-full max-w-md mx-auto glass-strong rounded-[2rem] p-6 md:p-8 border-t-white/10 border-l-white/10"
            >
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="w-12 h-12 rounded-xl bg-vex-green/10 flex items-center justify-center text-vex-green shrink-0">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs md:text-sm font-mono text-cream-muted mb-1">Arquitectura</div>
                  <div className="text-base md:text-lg font-display font-bold text-cream">React + Node.js</div>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="w-12 h-12 rounded-xl bg-vex-violet/10 flex items-center justify-center text-vex-violet shrink-0">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs md:text-sm font-mono text-cream-muted mb-1">Inteligencia Artificial</div>
                  <div className="text-base md:text-lg font-display font-bold text-cream leading-tight">Agentes LLM Integrados</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-bg border-2 border-white/10 flex items-center justify-center">
                    <span className="text-xs font-mono text-vex-green">100</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-bg border-2 border-white/10 flex items-center justify-center">
                    <span className="text-xs font-mono text-vex-violet">SEO</span>
                  </div>
                </div>
                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-mono text-vex-green px-3 py-1.5 bg-vex-green/10 rounded-full">
                  Performance Optimal
                </div>
              </div>
            </motion.div>

            {/* Code floating element */}
            <motion.div 
              animate={{ y: [15, -15, 15] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-0 md:-right-8 -bottom-8 md:-bottom-12 z-30 glass rounded-2xl p-4 md:p-5 border border-white/10 shadow-2xl backdrop-blur-xl max-w-[90%] md:max-w-none overflow-hidden"
            >
              <pre className="text-[10px] md:text-xs font-mono text-cream-muted overflow-x-auto scrollbar-hide">
                <span className="text-vex-violet">const</span> <span className="text-cream">growth</span> = <span className="text-vex-green">await</span> <span className="text-accent-blue">VexStudio</span>({`\n  tech: `}<span className="text-accent-orange">'elite'</span>{`,\n  scale: `}<span className="text-accent-orange">'global'</span>{`\n`});
              </pre>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats - moved to be inline with the left content bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: loadDelay + 0.8, duration: 0.8 }}
          className="mt-20 pt-10 border-t border-white/[0.04] grid grid-cols-2 md:grid-cols-3 gap-10 lg:max-w-2xl"
        >
          {hero.stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-3xl md:text-4xl font-display font-bold text-cream mb-2">{stat.value}</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-cream-dark font-mono">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
