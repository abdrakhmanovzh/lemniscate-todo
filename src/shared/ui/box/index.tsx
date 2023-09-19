import { cn } from '@/shared/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Box = ({ children, className, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={cn('rounded-md border border-neutral-400 p-2', className)}
    >
      {children}
    </div>
  );
};
