'use client';

import { ConfigProvider } from 'antd';

ConfigProvider.config({
  theme: {
    primaryColor: '#7546c9',
    errorColor: '#ff4d4f',
    warningColor: '#faad14',
    successColor: '#52c41a',
    infoColor: '#1890ff',
  },
});

const ThemeProvider = ({ children }: LayoutProps) => {
  return <ConfigProvider>{children}</ConfigProvider>;
};

export default ThemeProvider;
