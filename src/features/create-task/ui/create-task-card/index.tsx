import { useState } from 'react';
import { useCreateTask } from '../../api/useCreateTask';
import { Box, Message } from '@/shared/ui';

export const CreateTaskCard = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { mutate: createTask, isLoading: createTaskLoading } = useCreateTask();

  const [status, setStatus] = useState<'error' | 'success' | null>(null);
  const [message, setMessage] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleClick = async () => {
    try {
      createTask(
        {
          title,
          description
        },
        {
          onSuccess: () => {
            setStatus('success');
            setMessage('task created successfully');
          },
          onError: () => {
            setStatus('error');
            setMessage('something went wrong');
          }
        }
      );

      setTimeout(() => {
        setStatus(null);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <Box className="flex flex-col gap-1 p-3 lg:p-2">
        <input
          type="text"
          className="w-full bg-transparent text-lg outline-none lg:text-base"
          placeholder="title"
          onChange={handleTitleChange}
        />
        <hr className="bg-neutral-700" />
        <textarea
          placeholder="description"
          className="h-24 resize-none text-lg outline-none lg:text-base"
          onChange={handleDescriptionChange}
        ></textarea>
      </Box>
      <Box className="p-1">
        <button
          onClick={handleClick}
          className="h-full w-full text-center text-lg lg:text-base"
        >
          {createTaskLoading ? <p>loading...</p> : 'create task'}
        </button>
      </Box>
      {status && <Message type={status} message={message} />}
    </div>
  );
};
