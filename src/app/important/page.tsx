import { CardTask } from '@/components/CardTask';
import { ModalForm } from '@/components/Modal/ModalForm';
import { TitlePage } from '@/components/Title';
import { getTasks } from '@/utils/db';

export default async function ImportantPage() {
  const importantTasks = await getTasks(true);

  return (
    <div>
      <TitlePage>Important task</TitlePage>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
        {importantTasks.map((task: any) => {
          return <CardTask key={task.id} task={task} />;
        })}
        <ModalForm type='add' />
      </div>
    </div>
  );
}
