import Sidebar from '@/components/common/Sidebar';
import ThemeProvider from '@/providers/AntdConfigProvider';
import { Poppins } from 'next/font/google';
import { Suspense } from 'react';
import Loading from './(marketing)/loading';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'NextJS 13 Learning',
  description: 'NextJS 13 - The leader!',
};

const rootNavItem: Array<NavItemProps> = [
  { title: 'Home', href: '/' },
  { title: 'Parallel Routing', href: '/parallel' },
  {
    title: 'Ant design',
    href: '/antd',
    children: [
      {
        title: 'Table',
        href: '/antd/table',
      },
      {
        title: 'Pagination',
        href: '/antd/pagination',
      },
    ],
  },
];

export default async function RootLayout({ children }: LayoutProps) {
  await Promise.resolve((res: (value: string) => void) => {
    setTimeout(() => {
      res('abc');
    }, 1000);
  });
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <ThemeProvider>
          <main className="grid grid-cols-12">
            <Sidebar className="h-screen" navItems={rootNavItem} />
            <div className="col-span-10 px-4 py-2 h-screen">
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

{
}
