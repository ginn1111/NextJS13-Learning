import Link from 'next/link';
import './globals.css';
import { Poppins } from 'next/font/google';
import { Suspense } from 'react';
import Loading from './(marketing)/loading';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'NextJS 13 Learning',
  description: 'NextJS 13 - The leader!',
};

const rootNavItem = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Profile', href: '/profile' },
];

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await Promise.resolve((res: (value: string) => void) => {
    setTimeout(() => {
      res('abc');
    }, 1000);
  });
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <main className="grid grid-cols-12">
          <aside className="col-span-3 h-screen bg-slate-100 square">
            <nav>
              <ul className="flex flex-col gap-2 px-4 py-2">
                {rootNavItem.map(({ title, href }) => (
                  <li key={title} className="square square--hovered">
                    <Link href={href}>
                      <p className="w-100 h-10 bg-sky-200 grid place-items-center">
                        {title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <div className="col-span-9 px-8 py-4 h-screen">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
        </main>
      </body>
    </html>
  );
}
