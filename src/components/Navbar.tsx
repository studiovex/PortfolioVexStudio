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
    if (el) el.scrollIntoView({ behavior: 'smooth' });
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
          className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cream"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="glass-strong mx-4 mt-3 rounded-3xl p-8 flex flex-col gap-6">
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
                    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
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
