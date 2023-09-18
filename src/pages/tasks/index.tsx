import { motion } from 'framer-motion';
import { CreateTaskCard } from '@/features/createTask/ui';

const TasksPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center gap-4 p-4 pt-10 lg:px-[20%]"
    >
      <h1 className="text-4xl font-medium text-neutral-700">lemniscate</h1>

      {/* create task  */}
      <CreateTaskCard />

      {/* tasks list */}
    </motion.div>
  );
};

export default TasksPage;
