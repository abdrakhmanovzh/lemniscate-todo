import { cn } from '@/shared/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Box = ({ children, className }: Props) => {
  return (
    <div className={cn('rounded-md border border-neutral-500 p-2', className)}>
      {children}
    </div>
  );
};
