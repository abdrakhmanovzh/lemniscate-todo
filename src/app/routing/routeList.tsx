import { Route, Routes, Navigate } from 'react-router-dom';
import TasksPage from '@/pages/tasks';

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
