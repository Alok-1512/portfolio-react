import React from 'react';
import Carousel from './Carousel';

const Testimonials = () => {
  return (
    <>
      <div className='testi-main w-[calc(100vw-220px)] h-[100vh] bg-primary '>
        <div className='flex flex-col items-center justify-center text-white h-[100vh] w-50vw gap-5'>
          <h1 className='w-full text-start font-semibold text-2xl'>
            What people say?
          </h1>
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
