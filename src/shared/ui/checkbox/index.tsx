import { motion } from 'framer-motion';
import { CheckIcon } from '@/assets/icons';

interface Props {
  isChecked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox = ({ isChecked, onChange }: Props) => {
  return (
    <label data-cy="task-checkbox-label">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="hidden"
        data-cy="task-checkbox"
      />
      <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[4px] border border-gray-500 p-[1.5px]">
        <motion.div
          className="h-full w-full rounded-[3px]"
          initial={false}
          animate={{
            opacity: isChecked ? 1 : 0,
            scale: isChecked ? 1 : 0
          }}
          transition={{ duration: 0.1 }}
        >
          {isChecked && <img src={CheckIcon} alt="check" />}
        </motion.div>
      </div>
    </label>
  );
};
