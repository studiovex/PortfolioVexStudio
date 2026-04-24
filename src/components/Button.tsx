import { cn } from '../lib/utils';
import MagneticWrapper from './MagneticWrapper';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = ({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) => {
  const base = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 active:scale-[0.97] cursor-pointer select-none';

  const variants = {
    primary: 'bg-vex-green text-bg hover:bg-vex-green-light shadow-lg shadow-vex-green/20 hover:shadow-vex-green/30 hover:shadow-xl',
    outline: 'border border-white/10 text-cream hover:border-vex-green/40 hover:text-vex-green hover:bg-vex-green/5',
    ghost: 'text-cream-muted hover:text-cream hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-xs gap-2',
    md: 'px-7 py-3.5 text-sm gap-2',
    lg: 'px-9 py-4.5 text-base gap-3 font-semibold',
  };

  return (
    <MagneticWrapper>
      <button
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    </MagneticWrapper>
  );
};

export default Button;
