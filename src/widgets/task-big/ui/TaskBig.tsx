import { DeleteIcon } from '@/assets/icons';
import { useFetchTaskById } from '@/entities/task';
import { useDelete } from '@/features/delete-task';
import { useToggle } from '@/features/toggle-task';
import { Box, Checkbox, Loading, Message } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';

export const TaskBig = ({ id }: { id: string }) => {
  const navigate = useNavigate();

  const {
    data: task,
    isLoading: isTaskLoading,
    isError: taskError
  } = useFetchTaskById(id);

  const { mutate: toggle } = useToggle();
  const { mutate: deleteTask } = useDelete();

  const handleCheckboxClick = (id: string, completed: boolean) => {
    toggle({
      id,
      completedValue: completed
    });
  };

  const handleDeleteClick = (id: string) => {
    deleteTask(id);
    navigate('/');
  };

  if (isTaskLoading) return <Loading />;

  if (taskError) return <Message type="error" message="something went wrong" />;

  return (
    <div className="flex w-full flex-col gap-2">
      <Box className="flex flex-col gap-1 p-3 lg:p-2">
        <h3 className="w-full text-center text-xl font-medium lg:text-lg">
          {task.title}
        </h3>
        <hr className="bg-neutral-400" />
        <p className="w-full text-lg lg:text-base">{task.description}</p>
      </Box>
      <div className="flex gap-2">
        <Box
          className="flex flex-1 cursor-pointer items-center gap-2 lg:hover:bg-gray-100"
          onClick={() => {
            handleCheckboxClick(task.id, task.completed);
          }}
        >
          <Checkbox isChecked={task.completed} onChange={() => {}} />
          <p className="text-lg lg:text-base" data-cy="task-checkbox-p">
            done
          </p>
        </Box>
        <Box
          className="flex flex-1 cursor-pointer items-center gap-2 lg:hover:bg-gray-100"
          onClick={() => {
            handleDeleteClick(task.id);
          }}
        >
          <img src={DeleteIcon} alt="delete" className="h-5 w-5" />
          <p className="text-lg lg:text-base">delete</p>
        </Box>
      </div>
    </div>
  );
};
