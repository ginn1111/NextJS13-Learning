import Sidebar from '@/components/common/Sidebar';
import React from 'react';

const ROOT_PATH = '/antd';

const navItemsSpace: Array<NavItemProps> = [
  {
    title: 'Table',
    href: `${ROOT_PATH}/table`,
  },
  {
    title: 'Space Component',
    href: `${ROOT_PATH}/space`,
  },
  {
    title: 'Pagination',
    href: `${ROOT_PATH}/pagination`,
  },
];

const Layout = ({ children }: LayoutProps) => {
  return (
    <section className="grid grid-cols-12 h-full gap-2">
      <Sidebar className="h-full" navItems={navItemsSpace} />
      <div className="col-span-10">{children}</div>
    </section>
  );
};

export default Layout;
