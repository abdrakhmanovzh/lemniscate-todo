import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { TaskBig } from '@/widgets/task-big/ui';
import { BackIcon } from '@/assets/icons';

const TaskPage = () => {
  const { id } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0.5, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center gap-4 p-4 pt-10 lg:px-[20%]"
    >
      <Link to="/" className="absolute left-[20%] top-12">
        <img src={BackIcon} alt="back" height={28} width={28} />
      </Link>
      <h1 className="text-4xl font-medium text-neutral-700">task</h1>
      <TaskBig id={id as string} />
    </motion.div>
  );
};

export default TaskPage;
