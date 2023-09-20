import { useNavigate } from 'react-router-dom';
import { Loading, Message } from '@/shared/ui';
import { useToggle } from '@/features/toggle-task';
import { useDelete } from '@/features/delete-task';
import { TaskCard, useFetchTasks } from '@/entities/task';

export const TasksList = () => {
  const navigate = useNavigate();

  const {
    data: tasks,
    isLoading: isTasksLoading,
    error: tasksError
  } = useFetchTasks();

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
  };

  if (isTasksLoading) {
    return <Loading />;
  } else if (tasksError) {
    return <Message type="error" message={tasksError as string} />;
  }

  return (
    <div className="flex w-fit flex-wrap gap-3">
      {tasks?.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onTaskClick={() => {
            navigate(`/tasks/${task.id}`);
          }}
          onCheckboxClick={(e) => {
            e.stopPropagation();
            handleCheckboxClick(task.id, task.completed);
          }}
          onDeleteClick={() => {
            handleDeleteClick(task.id);
          }}
        />
      ))}
    </div>
  );
};
