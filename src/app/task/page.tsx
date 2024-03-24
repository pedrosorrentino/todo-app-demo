import { CardTask } from '@/components/CardTask';
import { ModalForm } from '@/components/Modal/ModalForm';
import { TitlePage } from '@/components/Title';
import { getTasks } from '@/utils/db';

const TaskPage = async () => {
  const allTasks = await getTasks();
  if (!allTasks) {
    return;
  }
  return (
    <div>
      <TitlePage>All Task</TitlePage>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
        {allTasks.map((task: any) => {
          return <CardTask key={task.id} task={task} />;
        })}
        <ModalForm />
      </div>
    </div>
  );
};

export default TaskPage;
