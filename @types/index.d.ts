import Error from 'next/error';
import { ReactNode } from 'react';

declare global {
  interface IParams {
    params: {
      [key: string]: string;
    };
  }
  interface IError {
    error: Error;
    reset: () => void;
  }
  interface LayoutProps {
    children: ReactNode;
  }

  interface NavItemProps {
    title: string;
    href: string;
    children?: Array<NavItemProps>;
  }
}

export {};
