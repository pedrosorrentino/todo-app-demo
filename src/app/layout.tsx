import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { SidebarPanel } from '@/components/Sidebar';
import { ClerkProvider } from '@clerk/nextjs';

const fontfamily = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TODO App with Next.js',
  description: 'TODO App created by Pedro Sorrentino',
  publisher: 'Pedro Sorrentino',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${fontfamily.className} sm:flex`}>
          <SidebarPanel />
          <main className='my-10 mx-5 sm:w-full'>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
