import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

export const Router = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <Suspense fallback="loading...">{children}</Suspense>
    </BrowserRouter>
  );
};
