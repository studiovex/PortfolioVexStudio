
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'Éclat Beauté',
    cat: 'Landing Inmersiva',
    image: '/imagenes/proyectos/eclatestetica.png',
    link: 'https://eclatestetica.netlify.app/'
  },
  {
    name: 'Gentleman Barber',
    cat: 'Identidad Visual',
    image: '/imagenes/proyectos/gentleman.png',
    link: 'https://gentleman-barbershop.netlify.app/'
  },
  {
    name: 'Nature Medical',
    cat: 'Landing Page',
    image: '/imagenes/proyectos/nature.png',
    link: 'https://naturemedical.netlify.app/'
  },
  {
    name: 'Apex Gym',
    cat: 'Web + Sistema',
    image: '/imagenes/proyectos/apexgym.png',
    link: 'https://apexgimnasio.netlify.app/'
  }
];

const Portfolio = () => {
  return (
    <section id="portafolio" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-vex-green" />
              <span className="text-xs uppercase tracking-[0.2em] text-cream-muted">03 — Portafolio</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-6xl">
              Proyectos con <br /><span className="italic font-light italic-accent">visión de futuro.</span>
            </h2>
          </div>
          <p className="max-w-xs text-cream-muted font-light">
            Una selección de trabajos donde la ingeniería y el diseño convergen para crear impacto real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-[2.5rem] overflow-hidden bg-bg-tertiary aspect-video cursor-pointer"
              onClick={() => window.open(p.link, '_blank')}
            >
              <div className="absolute inset-0 bg-bg/40 z-10 group-hover:bg-bg/20 transition-colors duration-500" />
              <img
                src={p.image}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-vex-green font-bold mb-2 block">
                      {p.cat}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-cream">
                      {p.name}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-cream text-bg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
