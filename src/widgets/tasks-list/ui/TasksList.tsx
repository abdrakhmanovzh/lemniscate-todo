import { Loading, Message } from '@/shared/ui';
import { TaskCard, useFetchTasks } from '@/entities/task';

export const TasksList = () => {
  const {
    data: tasks,
    isLoading: isTasksLoading,
    error: tasksError
  } = useFetchTasks();

  if (isTasksLoading) {
    return <Loading />;
  } else if (tasksError) {
    return <Message type="error" message={tasksError as string} />;
  }

  return (
    <div className="flex w-fit flex-wrap gap-2">
      {tasks?.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onCheckboxClick={() => {}}
          onTaskClick={() => {}}
        />
      ))}
    </div>
  );
};
