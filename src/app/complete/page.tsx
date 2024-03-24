import { CardTask } from '@/components/CardTask';
import { ModalForm } from '@/components/Modal/ModalForm';
import { TitlePage } from '@/components/Title';
import { getTasks } from '@/utils/db';

export default async function CompletePage() {
  const completedTasks = await getTasks(undefined, true);
  if (!completedTasks) {
    return;
  }

  return (
    <div>
      <TitlePage>Completed task</TitlePage>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
        {completedTasks.map((task: any) => {
          return <CardTask key={task.id} task={task} />;
        })}
        <ModalForm type='add' />
      </div>
    </div>
  );
}
