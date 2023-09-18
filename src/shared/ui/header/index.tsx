import { HTMLAttributes } from 'react';
import { cn } from '@/shared/utils';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
}

export const Header = ({ title, className }: Props) => {
  return <h2 className={cn('text-main-black' + className)}>{title}</h2>;
};
