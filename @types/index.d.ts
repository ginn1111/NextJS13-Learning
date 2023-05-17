import Error from 'next/error';

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
}

export {};
