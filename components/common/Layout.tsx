'use client';

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, MenuProps, Space } from 'antd';
import React from 'react';

const { Header, Content, Sider } = Layout;

const items2: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <Layout className="h-full">
      <Sider
        className="bg-white flex-1"
        style={{ color: 'var(--ant-primary-color)' }}
      >
        <Menu mode="inline" items={items2} />
      </Sider>
      <Content style={{ color: 'var(--ant-primary-color)' }}>
        {children}
      </Content>
    </Layout>
  );
};

export default MainLayout;
