import { cn } from '@/shared/utils';

interface Props {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const Card = ({
  children,
  onClick,
  className,
  onMouseEnter,
  onMouseLeave
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'rounded-md border border-neutral-400 px-3 py-2 shadow-sm',
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};
