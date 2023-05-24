'use client';

import { Table } from 'antd';
import { ColumnProps } from 'antd/lib/table';

type DataType = {
  name: string;
  position: 'FE' | 'BE' | 'DevsOps' | 'FullStack';
};

const DUMMY_DATA: Array<DataType> = [
  {
    name: 'Thuan',
    position: 'FE',
  },
  {
    name: 'Binh',
    position: 'FullStack',
  },
];

const Page = () => {
  const columns: ColumnProps<DataType>[] = [
    {
      title: <p>STT</p>,
      dataIndex: '',
      key: '',
      render: (_, __, idx) => <span>{idx + 1}</span>,
    },
    {
      title: <p>Name</p>,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: <p>Position</p>,
      dataIndex: 'position',
      key: 'position',
    },
  ];
  return (
    <section className="square h-full">
      <Table columns={columns} dataSource={DUMMY_DATA} size="small" />
    </section>
  );
};

export default Page;
