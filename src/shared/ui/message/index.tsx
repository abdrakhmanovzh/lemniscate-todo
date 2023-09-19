import { cn } from '@/shared/utils';

interface Props {
  type: 'success' | 'error';
  message: string;
}

export const Message = ({ type, message }: Props) => {
  return (
    <div
      className={cn(
        'w-full rounded-md p-2',
        type === 'success' ? 'bg-green-200' : 'bg-red-200'
      )}
    >
      <p className="text-center text-lg">{message}</p>
    </div>
  );
};
