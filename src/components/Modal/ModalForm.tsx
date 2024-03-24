import { SquarePen } from 'lucide-react';
import { FormAdd } from './FormAdd';

export const ModalForm = () => {
  return (
    <div className='flex items-center justify-center w-80 bg-white hover:bg-slate-100 rounded-lg border border-dashed border-slate-500 transition-colors duration-300'>
      <label
        htmlFor='my_modal'
        className='flex items-center justify-center gap-3 text-lg cursor-pointer font-semibold hover:text-[#103FEF] transition-colors duration-300 p-4'
      >
        <SquarePen size={20} strokeWidth={1.5} /> Add new task
      </label>
      <input type='checkbox' id='my_modal' className='modal-toggle' />
      <div className='modal' role='dialog'>
        <div className='modal-box'>
          <p className='text-lg font-bold flex items-center gap-2'>
            <SquarePen size={24} strokeWidth={2} /> Add new Task
          </p>
          <FormAdd />
        </div>
        <label className='modal-backdrop' htmlFor='my_modal'>
          Close
        </label>
      </div>
    </div>
  );
};
