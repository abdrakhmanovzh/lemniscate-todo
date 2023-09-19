import { supabase } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';
import { TaskModel } from '..';

export const useFetchTasks = () => {
  return useQuery(['tasks'], async () => {
    const { data, error } = await supabase.from('tasks').select('*');
    if (error) throw error;
    return data as TaskModel[];
  });
};
