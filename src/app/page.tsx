export default function Home() {
  return (
    <main>
      <div className='max-w-2xl space-y-3'>
        <h1 className='text-3xl font-bold text-pretty'>
          Welcome to TODO App demo!
        </h1>
        <p>
          TODO App demo is a task management app designed to help you organize
          your tasks efficiently. You can create, edit, and delete tasks with
          optional expiration dates. The app is built using Next.js, TypeScript,
          Tailwind CSS, Prisma, MongoDB, and Clerk Auth for secure user
          authentication.
        </p>
        <h2 className='text-xl font-bold text-pretty'>Key Features:</h2>
        <ul>
          <li>Create, edit, and delete tasks</li>
          <li>Set optional expiration dates for tasks</li>
        </ul>
        <h2 className='text-xl font-bold text-pretty'>Technologies Used:</h2>
        <ul>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Prisma</li>
          <li>MongoDB</li>
          <li>Clerk Auth</li>
        </ul>
        <div className='text-center pt-5'>
          <span className='bg-slate-200 rounded-xl p-2 font-mono'>
            Visit my{' '}
            <a
              className='text-[#103FEF] font-semibold'
              href='https://github.com/pedrosorrentino'
              target='_blank'
            >
              Github profile
            </a>{' '}
            for more projects
          </span>
        </div>
      </div>
    </main>
  );
}
