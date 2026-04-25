import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { CONTENT } from '../constants/content';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    if (!isHome) return;
    const el = document.querySelector(href);
    if (el) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(el);
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-500',
        scrolled
          ? 'py-3 glass-strong'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <img src={CONTENT.agency.logo} alt="Vex Studio" className="h-8 w-auto brightness-0 invert group-hover:opacity-80 transition-opacity" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {CONTENT.nav.links.map((link) => (
            isHome ? (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-[11px] uppercase tracking-[0.2em] text-cream-muted hover:text-vex-green transition-colors font-medium"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                to={`/${link.href}`}
                className="text-[11px] uppercase tracking-[0.2em] text-cream-muted hover:text-vex-green transition-colors font-medium"
              >
                {link.name}
              </Link>
            )
          ))}
          <Button
            size="sm"
            onClick={() => {
              if (isHome) {
                document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#contacto';
              }
            }}
          >
            {CONTENT.nav.cta}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cream active:scale-95 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-[110] top-[70px] pointer-events-none"
          >
            <div className="glass-strong mx-4 rounded-3xl p-8 flex flex-col gap-6 pointer-events-auto">
              {CONTENT.nav.links.map((link) => (
                isHome ? (
                  <button
                    key={link.name}
                    onClick={() => { handleNavClick(link.href); setIsOpen(false); }}
                    className="text-2xl font-display font-bold text-cream text-left hover:text-vex-green transition-colors"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={`/${link.href}`}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-display font-bold text-cream hover:text-vex-green transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Button 
                size="lg" 
                className="w-full mt-4"
                onClick={() => {
                  setIsOpen(false);
                  if (isHome) {
                    const el = document.querySelector('#contacto');
                    if (el) {
                      if ((window as any).lenis) (window as any).lenis.scrollTo(el);
                      else el.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    window.location.href = '/#contacto';
                  }
                }}
              >
                {CONTENT.nav.cta}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
