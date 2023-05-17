'use client';

import Typography from '@/components/common/Typography';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="mt-10 space-y-5">
      <Typography
        className="text-rose-300 text-font-bold"
        content={error.message}
      />
      <button className="mx-auto block btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Error;
