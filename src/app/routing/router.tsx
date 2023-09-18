import { Loading } from '@/shared/ui';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

export const Router = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </BrowserRouter>
  );
};
