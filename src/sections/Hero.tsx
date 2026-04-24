import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-vex-green/10 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-vex-violet/10 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-vex-green animate-pulse" />
          <span className="text-xs uppercase tracking-[0.3em] text-cream-muted">Argentina · Global Studio</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-extrabold text-5xl md:text-8xl lg:text-[9rem] leading-[0.9] tracking-tight mb-12"
        >
          Diseño que impacta. <br />
          <span className="text-gradient">Código que escala.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl"
        >
          <p className="text-lg md:text-xl text-cream-muted leading-relaxed mb-12 font-light">
            Transformamos visiones en activos digitales de alto rendimiento. Especialistas en desarrollo fullstack,
            arquitectura de software y experiencias UX que dominan el mercado.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="group">
              Iniciar proyecto
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Ver portafolio
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-6 hidden md:block"
      >
        <div className="w-6 h-10 border border-cream/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-2 bg-vex-green rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
