import { Card, Checkbox, Header } from '@/shared/ui';
import { TaskModel } from '../../models';

interface Props {
  task: TaskModel;
  onTaskClick: () => void;
  onCheckboxClick: React.ChangeEventHandler<HTMLInputElement>;
}

export const TaskCard = ({ task, onTaskClick, onCheckboxClick }: Props) => {
  return (
    <Card
      onClick={onTaskClick}
      className="flex w-fit flex-col justify-between gap-2"
    >
      <div className="flex w-full items-center justify-between gap-4">
        <Header title={task.title} />
        <Checkbox isChecked={task.completed} onChange={onCheckboxClick} />
      </div>

      <p className="text-sm text-neutral-500">{task.description}</p>
    </Card>
  );
};
