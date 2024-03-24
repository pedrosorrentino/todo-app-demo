import { auth, useAuth } from '@clerk/nextjs';

export const fetchTask = async (isImportant: boolean, isCompleted: boolean) => {
  const { userId } = auth();
  const userToken = await auth().getToken();
  const res = await fetch(
    `${process.env.HOSTNAME}/api/task?user=${userId}&isImportant=${isImportant}&isCompleted=${isCompleted}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    }
  );
  const data = await res.json();
  return data;
};
