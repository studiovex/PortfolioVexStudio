import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Zap, User } from 'lucide-react';
import { CONTENT } from '../constants/content';
import Button from '../components/Button';
import { AnimatedText } from '../components/AnimatedText';
import MagneticWrapper from '../components/MagneticWrapper';

const Team = () => {
  const { team } = CONTENT;
  return (
    <section id="equipo" className="py-32 bg-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-vex-violet/[0.04] blur-[120px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-24">
          <span className="section-label text-vex-violet mb-8 block">{team.label}</span>
          <h2 className="font-display font-bold text-5xl md:text-7xl leading-[0.9] tracking-tight mb-8">
            <AnimatedText text={team.title} /> <br />
            <AnimatedText text={team.titleHighlight} className="text-gradient inline-block" delay={0.2} />
          </h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-10%" }}
            className="text-cream-muted font-light text-xl leading-relaxed max-w-xl"
          >
            {team.subtitle}
          </motion.p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {team.members.map((f, i) => (
            <motion.div key={f.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: i * 0.2 }} viewport={{ once: true }}
              className="group relative rounded-[2.5rem] bg-bg-card border border-white/[0.04] hover:border-white/10 transition-all duration-700 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Avatar */}
                <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto min-h-[280px] bg-bg-tertiary overflow-hidden">
                  <div className="absolute inset-0 dot-pattern opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <User className="w-20 h-20 text-cream-dark/10 group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-bg-card to-transparent">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-vex-green/10 border border-vex-green/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-vex-green animate-pulse" />
                      <span className="text-[9px] uppercase tracking-[0.3em] text-vex-green font-mono font-bold">Disponible</span>
                    </div>
                  </div>
                </div>
                {/* Info */}
                <div className="flex-1 p-8 md:p-10 flex flex-col">
                  <div className="mb-6">
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-cream group-hover:text-vex-green transition-colors duration-300 mb-2">{f.name}</h3>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-cream-dark font-mono block">{f.role}</span>
                  </div>
                  <p className="text-cream-muted font-light text-sm leading-relaxed mb-8 line-clamp-3">{f.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {f.skills.map(s => (
                      <span key={s} className="px-3 py-1.5 bg-white/[0.03] border border-white/[0.04] rounded-lg text-[9px] text-cream-dark uppercase tracking-[0.2em] font-mono">{s}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link to={`/equipo/${f.id}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full group/btn">
                        Ver Perfil <Zap className="w-3 h-3 text-vex-green group-hover/btn:scale-125 transition-transform" />
                      </Button>
                    </Link>
                    {f.portfolio && (
                      <MagneticWrapper>
                        <button onClick={() => window.open(f.portfolio, '_blank')} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.04] text-cream-dark hover:text-vex-green hover:border-vex-green/30 transition-all cursor-pointer">
                          <ExternalLink className="w-4 h-4 pointer-events-none" />
                        </button>
                      </MagneticWrapper>
                    )}
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

export default Team;
