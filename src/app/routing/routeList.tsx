import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const TestPage = lazy(() => import('@/pages/sus'));

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<TestPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
