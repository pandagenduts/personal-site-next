import React from 'react';

const Pill = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='py-[2px] px-2 rounded-full bg-redSecondary text-white text-xs'>
      {children}
    </div>
  );
};

export default Pill;
