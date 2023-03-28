import React, { useState, useEffect } from 'react';
import { next, prev } from '../assets/index.js';
import { testimonials } from '../constants/constant.js';

const Carousel = () => {
  const [data] = useState(testimonials);
  const [index, setIndex] = useState(0);
  const handlePrev = () => {
    setIndex(index - 1);
  };

  const handleNext = () => {
    setIndex(index + 1);
  };
  useEffect(() => {
    const LastIndex = data.length - 1;
    if (index < 0) {
      setIndex(LastIndex);
    }
    if (index > LastIndex) {
      setIndex(0);
    }
  }, [data, index]);
  return (
    <>
      {data.map((person, personId) => {
        let position = 'hidden';

        if (personId === index) {
          position = 'block';
        }

        return (
          <div
            className={`flex justify-between items-center max-w-[60vw] min-w-[60vw] h-[40vh] gap-5 ${position}`}
          >
            <button onClick={handlePrev}>
              <img src={prev} alt='' />
            </button>
            <div className='flex flex-col items-center justify-center'>
              <p className='text-white'>{person.recommendations}</p>
              <span className='w-full flex flex-col justify-center items-end'>
                <h1 className='text-white'>{person.names}</h1>
                <h4 className='text-white'>{person.designation}</h4>
              </span>
            </div>

            <button onClick={handleNext}>
              <img src={next} alt='' />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Carousel;
