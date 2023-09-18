import { Card, Checkbox, Header } from '@/shared/ui';
import { Task } from '../../models';

interface Props {
  task: Task;
  onTaskClick: () => void;
  onCheckboxClick: React.ChangeEventHandler<HTMLInputElement>;
}

export const TaskCard = ({ onTaskClick, onCheckboxClick, task }: Props) => {
  return (
    <Card onClick={onTaskClick}>
      <Header title={task.title} />
      <div className="absolute right-4 top-[13px]">
        <Checkbox isChecked={true} onChange={onCheckboxClick} />
      </div>
    </Card>
  );
};
