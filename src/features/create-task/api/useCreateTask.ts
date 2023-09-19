import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/shared/api';

interface Props {
  title: string;
  description: string;
}

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation(['createTask'], {
    mutationFn: async ({ description, title }: Props) => {
      await supabase.from('tasks').insert({
        title: title,
        description: description
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    }
  });
};
