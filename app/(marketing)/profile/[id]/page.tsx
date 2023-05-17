import Typography from '@/components/common/Typography';
import React from 'react';

interface IParams {
  params: {
    id: string;
  };
}

const ProfileDetail = ({ params }: IParams) => {
  throw new Error('Test error');
  return <Typography content={params.id} />;
};

export default ProfileDetail;
