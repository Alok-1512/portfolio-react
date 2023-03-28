import React from 'react';
import { spiderman } from '../assets';

const Intro = () => {
  return (
    <>
      <div className='flex items-center h-[100vh] bg-primary w-[calc(100vw-220px)] justify-center'>
        <div className='left-container text-white w-[35vw] text-[18px] p-6'>
          <h3 className='text-5xl mb-6'>Who am I ?</h3>
          <p>
            I'm like <span className='text-customRed'> Spiderman </span>, minus
            the spider powers, but with a love for all things heroic, a
            programming expertise, and storytelling skills that would make Peter
            Parker proud.
            <br /> I strive to bring a bit of superhero magic into the real
            world and tackle any challenge that comes my way. I'm a
            problem-solving ninja, a creative wizard, and a giver at heart. I
            believe that sharing my knowledge is the best way to make a positive
            impact, just like how Spiderman uses his powers to help others. I'm
            always looking for ways to give back to my community, just like your
            friendly neighborhood Spiderman. In short, I'm a modern-day
            superhero in the making, using my unique combination of skills and
            passions to make a real difference in the world, just like the
            web-slinging hero himself.
          </p>
        </div>
        <div className='right-container h-[500px] w-[35vw]'>
          <img src={spiderman} alt='' />
        </div>
      </div>
    </>
  );
};

export default Intro;
