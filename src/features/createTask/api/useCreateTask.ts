import { supabase } from '@/shared/api';

interface Props {
  title: string;
  description: string;
}

export const createTask = async ({ title, description }: Props) => {
  return await supabase.from('tasks').insert({
    title: title,
    description: description
  });
};
