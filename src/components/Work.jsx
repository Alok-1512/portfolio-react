import React from 'react';
import WorkCard from './WorkCard';

const Work = () => {
  return (
    <div className='bg-primary w-[calc(100vw-220px)]'>
      <h2 className='text-white'>Previously Worked With..</h2>
      <WorkCard />
    </div>
  );
};

export default Work;
