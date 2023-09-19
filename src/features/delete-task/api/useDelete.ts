import { useQueryClient, useMutation } from '@tanstack/react-query';
import { supabase } from '@/shared/api';

export const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation(['deleteTask'], {
    mutationFn: async (id: string) => {
      await supabase.from('tasks').delete().match({ id: id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    }
  });
};
