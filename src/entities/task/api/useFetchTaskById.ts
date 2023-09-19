import { supabase } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';
import { TaskModel } from '..';

export const useFetchTaskById = (id: string) => {
  return useQuery(['tasks', id], async () => {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data as TaskModel;
  });
};
