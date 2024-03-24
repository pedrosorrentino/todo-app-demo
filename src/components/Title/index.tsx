export const TitlePage = ({ children }: { children: string }) => {
  return (
    <>
      <h1 className='text-3xl font-bold mb-1'>{children}</h1>
      <div className='w-20 h-1 bg-[#103FEF] mb-10'></div>
    </>
  );
};
