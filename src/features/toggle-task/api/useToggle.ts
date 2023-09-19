import { supabase } from '@/shared/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface Props {
  id: string;
  completedValue: boolean;
}

export const useToggle = () => {
  const queryClient = useQueryClient();

  return useMutation(['toggleTask'], {
    mutationFn: async ({ id, completedValue }: Props) => {
      await supabase
        .from('tasks')
        .update({ completed: !completedValue })
        .match({ id: id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
      queryClient.invalidateQueries(['task']);
    }
  });
};
