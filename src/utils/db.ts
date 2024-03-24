'use server';
import { auth } from '@clerk/nextjs';
import prisma from './prisma';
import { FormValues } from '@/components/Modal/FormAdd';

export async function getTasks(isImportant?: boolean, isCompleted?: boolean) {
  try {
    const { userId } = auth();
    if (!userId) {
      throw new Error('Unauthorized');
    }

    const whereClause: any = { userId: userId };

    if (isImportant !== undefined) {
      whereClause.isImportant = isImportant;
    }

    if (isCompleted !== undefined) {
      whereClause.isCompleted = isCompleted;
    }

    const res = await prisma.task.findMany({
      where: whereClause,
      orderBy: {
        createdAt: 'desc',
      },
    });
    return res;
  } catch (error: any) {
    console.log('GET ALL TASK: ', error.message);

    return null;
  }
}

export async function deleteTask(id: string) {
  try {
    const { userId } = auth();
    if (!userId) {
      throw new Error('Unauthorized');
    }
    const res = await prisma.task.delete({
      where: {
        id: id,
        userId: userId,
      },
    });
    return res;
  } catch (error: any) {
    console.log('DELETE TASK: ', error.message);

    return null;
  }
}

export async function createTask(data: FormValues) {
  try {
    const { userId } = auth();
    if (!userId) {
      throw new Error('Unauthorized');
    }
    const res = await prisma.task.create({
      data: {
        ...data,
        userId: userId,
        expiredDate: data.expiredDate ? new Date(data.expiredDate) : undefined,
      },
    });
    return res;
  } catch (error: any) {
    console.log('CREATE TASK: ', error.message);

    return null;
  }
}

export async function getTaskId(id: string) {
  try {
    const { userId } = auth();
    if (!userId) {
      throw new Error('Unauthorized');
    }
    const res = await prisma.task.findFirst({
      where: {
        id: id,
        userId: userId,
      },
    });
    return res;
  } catch (error: any) {
    console.log('GET TASK ID: ', error.message);

    return null;
  }
}

export async function updateTask(id: string, data: FormValues) {
  try {
    const { userId } = auth();
    if (!userId) {
      throw new Error('Unauthorized');
    }

    const res = await prisma.task.update({
      where: {
        id: id,
      },
      data: {
        ...data,
        userId: userId,
        expiredDate: data.expiredDate ? new Date(data.expiredDate) : undefined,
      },
    });
    return res;
  } catch (error: any) {
    console.log('UPDATE TASK: ', error.message);
    return null;
  }
}
