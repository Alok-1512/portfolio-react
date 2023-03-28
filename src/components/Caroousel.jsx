import React, { useState, useEffect } from 'react';
import { testimonials } from '../constants/constant.js';

const Carousel = () => {
  const [data] = useState(testimonials);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        return index > data.length - 1 ? 0 : index;
      });
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [index, data]);

  return (
    <div className='carousel relative overflow-hidden'>
      {data.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;

        let position = 'hidden';
        if (personIndex === index) {
          position = 'active';
        }

        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === data.length - 1)
        ) {
          position = 'last';
        }

        return (
          <div
            key={id}
            className={`carousel-item absolute w-full transition-opacity duration-500 ease-in-out ${position}`}
          >
            <img
              src={image}
              alt={name}
              className='person-img mx-auto mb-4 rounded-full object-cover'
            />
            <h4 className='title text-xl font-bold text-gray-700'>{name}</h4>
            <p className='text-lg font-medium text-gray-500 mb-4'>{title}</p>
            <p className='text-lg font-medium text-gray-700 leading-relaxed mb-4'>
              {quote}
            </p>
            <div className='quote-icon'>"</div>
          </div>
        );
      })}
      <button
        className='prev-arrow absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white text-2xl font-bold py-2 px-4 rounded-l-md'
        onClick={() => setIndex((oldIndex) => oldIndex - 1)}
      >
        &#60;
      </button>
      <button
        className='next-arrow absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white text-2xl font-bold py-2 px-4 rounded-r-md'
        onClick={() => setIndex((oldIndex) => oldIndex + 1)}
      >
        &#62;
      </button>
    </div>
  );
};

export default Carousel;
