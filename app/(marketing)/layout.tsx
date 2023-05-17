import Link from 'next/link';
import React, { Suspense } from 'react';
import Loading from './loading';

const MarketingLayout = async ({ children }: { children: React.ReactNode }) => {
  await Promise.resolve((res: (value: string) => void) =>
    setTimeout(() => res('resolve About page'), 1000)
  );
  return (
    <section className="space-y-5 flex flex-col h-full">
      <div className="animate-pulse bg-slate-100 h-20 grid place-items-center square">
        Banner
      </div>
      <div className="grid grid-cols-12 gap-4 flex-1">
        <aside className="col-span-3 bg-slate-200 h-full auto-row-fr square">
          <ul className="space-y-4 px-4 py-2">
            <li className="square square--hovered">
              <Link className="py-2 px-4 w-full block" href="/about">
                About
              </Link>
            </li>
            <li className="square square--hovered">
              <Link className="py-2 px-4 w-full block" href="/profile">
                Profile
              </Link>
            </li>
          </ul>
        </aside>
        <div className="col-span-9 square">{children}</div>
      </div>
    </section>
  );
};

export default MarketingLayout;
