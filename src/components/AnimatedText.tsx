import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
}

export const AnimatedText = ({ text, className = '', once = true, delay = 0 }: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  // Split text into words, then words into characters for a very smooth staggered reveal
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      style={{ display: "inline-block", perspective: 1000 }}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {words.map((word, index) => (
        <span key={index} style={{ display: "inline-block", marginRight: "0.25em", whiteSpace: "nowrap" }}>
          {Array.from(word).map((letter, i) => (
            <motion.span
              key={i}
              variants={child}
              style={{ display: "inline-block" }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};
