import { useState } from 'react';
import { DeleteIcon } from '@/assets/icons';
import { Card, Checkbox, Header } from '@/shared/ui';
import { TaskModel } from '../../models';

interface Props {
  task: TaskModel;
  onTaskClick: () => void;
  onCheckboxClick: React.ChangeEventHandler<HTMLInputElement>;
  onDeleteClick: () => void;
}

export const TaskCard = ({
  task,
  onTaskClick,
  onCheckboxClick,
  onDeleteClick
}: Props) => {
  const [showMenuButtons, setShowMenuButtons] = useState(false);

  return (
    <Card
      onClick={onTaskClick}
      className="relative flex w-fit cursor-pointer flex-col justify-between gap-2 hover:bg-gray-100"
      onMouseEnter={() => setShowMenuButtons(true)}
      onMouseLeave={() => setShowMenuButtons(false)}
    >
      <div className="flex w-full items-center justify-between gap-4">
        <Header title={task.title} />
        <Checkbox isChecked={task.completed} onChange={onCheckboxClick} />
      </div>

      <p className="text-sm text-neutral-500">{task.description}</p>

      {showMenuButtons && (
        <button
          onClick={onDeleteClick}
          className="absolute right-[-10px] top-[-12px] cursor-pointer rounded-full border border-neutral-400 bg-white p-1"
        >
          <img src={DeleteIcon} alt="menu" height={14} width={14} />
        </button>
      )}
    </Card>
  );
};
