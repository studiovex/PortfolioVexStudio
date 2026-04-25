import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CONTENT } from '../constants/content';
import Button from '../components/Button';
import { ArrowLeft, CheckCircle2, Globe, FileText, User, ArrowRight } from 'lucide-react';

const FounderDetail = () => {
  const { id } = useParams();
  const founder = CONTENT.team.members.find(f => f.id === id);

  if (!founder) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-cream gap-6">
        <p className="text-2xl font-display font-bold">Perfil no encontrado</p>
        <Link to="/"><Button variant="outline">Volver al inicio</Button></Link>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-bg pt-32 pb-24">
      <div className="container mx-auto px-6">
        <Link to="/#equipo" className="inline-flex items-center gap-2 text-cream-muted hover:text-vex-green mb-16 transition-colors text-sm">
          <ArrowLeft className="w-4 h-4" /> Volver al equipo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Left: Content (3 cols) */}
          <div className="lg:col-span-3">
            <span className="section-label text-vex-green mb-8 block">{founder.type} · {founder.shortRole}</span>
            <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.88] mb-10">
              {founder.name.split(' ')[0]}{' '}
              <span className="text-gradient">{founder.name.split(' ')[1]}</span>
            </h1>
            <p className="text-xl text-cream-muted font-light leading-relaxed mb-16 max-w-2xl">{founder.fullBio}</p>

            {/* Experience */}
            <div className="mb-16">
              <h3 className="text-xs uppercase tracking-[0.3em] text-cream font-mono font-bold mb-8">Áreas de Impacto</h3>
              <div className="space-y-4">
                {founder.experience.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                    className="p-6 rounded-2xl bg-bg-card border border-white/[0.04] hover:border-vex-green/20 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-vex-green shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-cream font-display font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-cream-muted text-sm font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stack */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-cream font-mono font-bold mb-8">Stack Tecnológico</h3>
              <div className="flex flex-wrap gap-3">
                {founder.stack.map(s => (
                  <div key={s} className="flex items-center gap-3 px-5 py-3 bg-bg-card border border-white/[0.04] rounded-xl hover:border-vex-green/20 transition-all">
                    <div className="w-2 h-2 rounded-full bg-vex-green" />
                    <span className="text-sm font-mono text-cream">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Visual + Actions (2 cols) */}
          <div className="lg:col-span-2 lg:sticky lg:top-32 space-y-8">
            {/* Avatar card */}
            <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-white/[0.06] bg-bg-card">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <User className="w-24 h-24 text-cream-dark/10" />
              </div>
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-vex-green/10 border border-vex-green/20 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-vex-green animate-pulse" />
                  <span className="text-[9px] uppercase tracking-[0.3em] text-vex-green font-mono font-bold">Disponible para proyectos</span>
                </div>
                <p className="text-cream font-display font-bold text-xl">{founder.role}</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3">
              {founder.portfolio && (
                <Button variant="outline" className="w-full h-14 rounded-2xl" onClick={() => window.location.href = founder.portfolio}>
                  <Globe className="w-4 h-4" /> Ver Portfolio
                </Button>
              )}
              {founder.cv && (
                <Button variant="outline" className="w-full h-14 rounded-2xl" onClick={() => window.location.href = founder.cv}>
                  <FileText className="w-4 h-4" /> Descargar CV
                </Button>
              )}
              <Button className="w-full h-16 rounded-2xl text-lg font-bold"
                onClick={() => window.open(founder.whatsapp || CONTENT.agency.whatsapp, '_blank')}>
                Contactar a {founder.name.split(' ')[0]}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FounderDetail;
