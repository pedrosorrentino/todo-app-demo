'use client';
import { createTask } from '@/utils/db';
import { CirclePlus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export type FormValues = {
  title: string;
  description: string;
  isImportant: boolean;
  expiredDate?: Date;
};

export function FormAdd() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const [addedTask, setAddedTask] = useState(false);
  const [resError, setResError] = useState(false);
  const currentDate = new Date().toISOString().split('T')[0];
  const router = useRouter();
  const onSubmit = async (data: FormValues) => {
    setAddedTask(false);
    setResError(false);

    const res = await createTask({
      ...data,
    });
    console.log(res);
    if (!res) {
      setResError(true);
      return;
    }
    setAddedTask(true);
    setTimeout(() => {
      reset();
      setAddedTask(false);
    }, 1500);
    router.refresh();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text'>Title</span>
          </div>
          <input
            className='input input-bordered w-full max-w-xs'
            type='text'
            {...register('title', {
              required: {
                value: true,
                message: 'Title is required',
              },
              maxLength: {
                value: 30,
                message: 'Max. 30 characters',
              },
              minLength: {
                value: 10,
                message: 'Min. 10 characters',
              },
            })}
          />
          {errors.title && (
            <div className='label'>
              <span className='label-text-alt text-red-400'>
                {errors.title.message}
              </span>
            </div>
          )}
        </label>
        <label className='form-control'>
          <div className='label'>
            <span className='label-text'>Description</span>
          </div>
          <textarea
            className='textarea textarea-bordered h-20'
            {...register('description', {
              required: {
                value: true,
                message: 'Description is required',
              },
              maxLength: {
                value: 160,
                message: 'Max. 160 characters',
              },
              minLength: {
                value: 15,
                message: 'Min. 15 characters',
              },
            })}
          />
          {errors.description && (
            <div className='label'>
              <span className='label-text-alt text-red-400'>
                {errors.description.message}
              </span>
            </div>
          )}
        </label>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Expired date for this task?</span>
            <input
              className='input input-bordered max-w-xs'
              type='date'
              placeholder='date'
              min={currentDate}
              {...register('expiredDate')}
            />
          </label>
        </div>
        <div className='form-control'>
          <label className='cursor-pointer label'>
            <span className='label-text'>Mark if this task is important</span>
            <input
              type='checkbox'
              {...register('isImportant')}
              className='checkbox checkbox-accent'
            />
          </label>
        </div>

        <button type='submit' className='btn my-2 btn-sm flex gap-2'>
          <CirclePlus size={16} strokeWidth={2} /> Add task
        </button>
      </form>
      <div>
        {addedTask && (
          <div role='alert' className='alert alert-success  mt-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='stroke-current shrink-0 w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              ></path>
            </svg>
            <span>New task added</span>
          </div>
        )}
        {resError && (
          <div role='alert' className='alert alert-error mt-5 p-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='stroke-current shrink-0 w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              ></path>
            </svg>
            <span>Ups! have an error to add new task, try again</span>
          </div>
        )}
      </div>
    </>
  );
}
