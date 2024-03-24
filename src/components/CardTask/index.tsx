'use client';
import { deleteTask } from '@/utils/db';
import type { Task } from '@prisma/client';
import { FilePenLine, FileX2, Flame } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FormEdit } from '../Modal/FormEdit';
import { calculateTimeDifference } from '@/utils/func';

export const CardTask = ({ task }: { task: Task }) => {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    const res = await deleteTask(id);
    if (!res) {
      return;
    }
    router.refresh();
  };

  return (
    <div
      id='Card'
      className='pb-10 relative bg-base-100 shadow-md hover:shadow-lg rounded-lg p-3 w-80 space-y-4 transition-shadow duration-300 '
    >
      <div className='flex justify-between items-center'>
        <h2 className='font-semibold text-pretty'>{task.title}</h2>
        {task.isImportant && <Flame color='red' size={25} strokeWidth={2} />}
      </div>

      <p className='text-sm text-balance break-words'>{task.description}</p>
      <div className='flex items-center justify-between gap-10'>
        {task.isCompleted && (
          <p className='bg-lime-500 px-3 py-1 rounded-full text-white text-xs absolute bottom-2'>
            Completed
          </p>
        )}
        {task.expiredDate && !task.isCompleted && (
          <p className='text-xs absolute bottom-3 text-indigo-400'>
            {calculateTimeDifference(`${task.expiredDate}`)}
          </p>
        )}

        <div
          id='Edit&Delete'
          className='flex gap-4 items-center mb-2 mr-2 absolute bottom-0 right-0 text-slate-400'
        >
          {!task.isCompleted && (
            <>
              <button
                className='hover:text-blue-500 transition-colors duration-300'
                onClick={() => {
                  if (!document) return null;
                  const modal = document.getElementById(
                    'my_modal_' + task.id
                  ) as HTMLDialogElement;
                  if (modal) {
                    modal.showModal();
                  }
                }}
              >
                <FilePenLine size={20} strokeWidth={2} />
              </button>
              <dialog id={'my_modal_' + task.id} className='modal'>
                <div className='modal-box'>
                  <p className='font-bold text-lg'>Edit - {task.title}</p>
                  <FormEdit task={task} />
                </div>
                <form method='dialog' className='modal-backdrop'>
                  <button>close</button>
                </form>
              </dialog>
            </>
          )}
          <button
            onClick={() => handleDelete(task.id)}
            className='hover:text-red-500 transition-colors duration-300'
          >
            <FileX2 size={20} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
};
