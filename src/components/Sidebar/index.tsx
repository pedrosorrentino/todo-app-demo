'use client';
import { type MenuType, menu } from '@/utils/menu';
import { IconLucide } from '../ui/Icons';
import { usePathname } from 'next/navigation';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { LogIn } from 'lucide-react';

export const SidebarPanel = () => {
  const pathname = usePathname();
  return (
    <div className='bg-slate-300 sm:w-3/12 lg:w-2/12 sm:h-svh'>
      <div className='pt-5 flex justify-center font-semibold text-xl ml-4'>
        <SignedIn>
          <UserButton afterSignOutUrl='/' showName />
        </SignedIn>
        <SignedOut>
          <div className='flex gap-1 items-center hover:bg-slate-100 p-2 rounded-xl transition-colors duration-300 hover:shadow-sm'>
            <SignInButton afterSignInUrl='/task' />
            <LogIn />
          </div>
        </SignedOut>
      </div>
      <ul className='my-10'>
        {menu.map((item: MenuType) => {
          const link = item.href;
          return (
            <li
              className={`font-semibold flex gap-2 items-center pl-4 py-3 ${pathname === link ? 'bg-slate-300 border-r-4 border-[#103FEF]' : ''} hover:bg-slate-400 hover:border-r-4 hover:border-[#103FEF] transition-colors duration-300 hover:text-slate-200 `}
              key={item.id}
            >
              <IconLucide name={item.icon} size={20} strokeWidth={2} />{' '}
              <Link href={item.href}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
