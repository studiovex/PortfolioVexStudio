import { motion } from 'framer-motion';
import { CONTENT } from '../constants/content';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.5, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-bg"
    >
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-vex-green/[0.05] blur-[100px] rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="relative mb-10">
          <motion.img 
            src={CONTENT.agency.logo} 
            alt="Vex Studio" 
            className="w-64 md:w-80 h-auto brightness-0 invert drop-shadow-2xl"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            initial={{ left: '-100%' }}
            animate={{ left: '200%' }}
            transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
          />
        </div>
        
        <motion.div 
          className="h-px bg-white/20 w-64 md:w-80 overflow-hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div 
            className="absolute top-0 left-0 h-full bg-vex-green"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-4"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-cream-dark font-mono">
            Iniciando
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
