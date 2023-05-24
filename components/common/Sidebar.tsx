'use client';

import Link from 'next/link';
import React, { HTMLProps, useState } from 'react';
import cx from 'clsx';
import { Space, Typography } from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';

type SidebarProps = {
  navItems: Array<NavItemProps>;
} & HTMLProps<HTMLBaseElement>;

const Sidebar = ({ className, navItems }: SidebarProps) => {
  const [isCollapse, setIsCollapse] = useState(true);
  return (
    <aside className={cx('col-span-2 bg-slate-100 square', className)}>
      <nav>
        <ul className="flex flex-col gap-2 px-4 py-2">
          {navItems.map(({ title, href, children }) => {
            let renderItem = (
              <p className="h-10 bg-sky-200 grid place-items-center flex-1">
                <Link href={href} className="block">
                  {title}
                </Link>
              </p>
            );
            if (children?.length) {
              renderItem = (
                <>
                  <div className="flex items-center bg-sky-200">
                    {renderItem}
                    <div
                      className="w-[20px] cursor-pointer ml-auto"
                      onClick={() => setIsCollapse((prev) => !prev)}
                    >
                      {isCollapse ? <CaretDownOutlined /> : <CaretUpOutlined />}
                    </div>
                  </div>
                  <Sidebar
                    navItems={children}
                    className={cx(
                      'grid  overflow-hidden transition-all col-span-1 border-0',
                      {
                        ['grid-rows-[0]']: isCollapse,
                        ['grid-rows-1']: !isCollapse,
                      }
                    )}
                  />
                </>
              );
            }
            return (
              <li
                key={title}
                className={cx('square grid', {
                  ['square--hovered']: !children?.length,
                })}
              >
                {renderItem}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
