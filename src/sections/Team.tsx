import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const founders = [
  {
    name: 'Nicolás Aguirres',
    role: 'Technical Lead & Co-founder',
    desc: 'Especialista en desarrollo AI-Driven y sistemas escalables. Apasionado por transformar problemas de negocio en arquitecturas técnicas de vanguardia.',
    image: '/imagenes/team/nicolas-aguirres.jpg', // Placeholder, needs actual image
    skills: ['AI/LLMs', 'React', 'Cloud Arch'],
    links: {
      portfolio: 'https://nicolasaguirrescode.com/',
      linkedin: '#'
    }
  },
  {
    name: 'Nicolás Ozan',
    role: 'Systems Architect & Co-founder',
    desc: 'Arquitecto de infraestructura y automatización. Experto en backend robusto y optimización de procesos que permiten a las empresas escalar sin fricción.',
    image: '/imagenes/team/nicolas-ozan.jpg', // Placeholder
    skills: ['Backend', 'Security', 'DevOps'],
    links: {
      linkedin: '#'
    }
  }
];

const Team = () => {
  return (
    <section id="equipo" className="py-24 bg-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-vex-violet" />
            <span className="text-xs uppercase tracking-[0.2em] text-cream-muted">02 — Cofundadores</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-6">
            Mentes detrás de <br /><span className="text-gradient">la ingeniería.</span>
          </h2>
          <p className="text-cream-muted font-light text-lg">
            Combinamos visión estratégica con ejecución técnica de élite para construir el futuro de tu marca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {founders.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-8 items-center lg:items-start"
            >
              <div className="relative w-full lg:w-1/2 aspect-[4/5] rounded-[2rem] overflow-hidden group">
                <div className="absolute inset-0 bg-bg-tertiary animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60 z-10" />
                {/* Image placeholder - use generate_image if needed later */}
                <div className="absolute inset-0 flex items-center justify-center text-cream-dark italic font-display">
                   {f.name}
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-vex-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
              </div>

              <div className="flex-1 text-center lg:text-left">
                <h3 className="font-display font-bold text-3xl mb-2">{f.name}</h3>
                <span className="text-vex-green text-sm font-medium tracking-wider uppercase mb-6 block">
                  {f.role}
                </span>
                <p className="text-cream-muted font-light leading-relaxed mb-8">
                  {f.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
                  {f.skills.map(s => (
                    <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-cream-muted">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 justify-center lg:justify-start">
                  {f.links.portfolio && (
                    <Button variant="outline" size="sm" onClick={() => window.open(f.links.portfolio, '_blank')}>
                      Portfolio <ExternalLink className="ml-2 w-3 h-3" />
                    </Button>
                  )}
                  <Button variant="ghost" size="sm">
                    Ver perfil →
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
