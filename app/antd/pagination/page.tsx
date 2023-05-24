'use client';

import { Pagination } from 'antd';
import React from 'react';

const Page = () => {
  const onChange = (page: number, pageSize: number) => {
    console.log(page, pageSize);
  };
  return (
    <section className="square h-full flex justify-center items-center">
      <Pagination
        defaultCurrent={1}
        total={500}
        onChange={onChange}
        defaultPageSize={5}
        pageSizeOptions={[10, 20, 30]}
        showQuickJumper
      />
    </section>
  );
};

export default Page;
