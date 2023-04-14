import React, { useState } from 'react';
import './style/Hero.css';
import Frame1 from '../assets/Frame1.png';
import Frame1_black from '../assets/Frame1_black.png';
import Frame2 from '../assets/Frame2.png';
import Frame2_black from '../assets/Frame2_black.png';
import Frame3 from '../assets/Frame3.png';
import Frame3_black from '../assets/Frame3_black.png';
import Frame4 from '../assets/Frame4.png';
import Frame4_black from '../assets/Frame4_black.png';
import Frame5 from '../assets/Frame5.png';
import Frame5_black from '../assets/Frame5_black.png';

const Hero = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);

  const handleMouseEnter = (setStateFunc) => {
    setStateFunc(true);
  };

  const handleMouseLeave = (setStateFunc) => {
    setStateFunc(false);
  };

  return (
    <div className='testi-main w-[calc(100vw-220px)] h-screen bg-primary'>
      <div className='flex flex-col py-10 items-center justify-center'>
        <div className='img-container flex w-[60vw] mx-auto gap-5'>
          <div
            onMouseEnter={() => handleMouseEnter(setIsHovered1)}
            onMouseLeave={() => handleMouseLeave(setIsHovered1)}
          >
            <img
              src={isHovered1 ? Frame1 : Frame1_black}
              alt='Frame 1'
              className='h-[380px] w-[300px] z-10 frame1'
            />
          </div>
          <div
            onMouseEnter={() => handleMouseEnter(setIsHovered2)}
            onMouseLeave={() => handleMouseLeave(setIsHovered2)}
          >
            <img
              src={isHovered2 ? Frame2 : Frame2_black}
              alt='Frame 2'
              className='h-[380px] w-[300px] z-20 frame2'
            />
          </div>
          <div
            onMouseEnter={() => handleMouseEnter(setIsHovered3)}
            onMouseLeave={() => handleMouseLeave(setIsHovered3)}
          >
            <img
              src={isHovered3 ? Frame3 : Frame3_black}
              alt='Frame 3'
              className='h-[380px] w-[300px] z-30 frame3'
            />
          </div>
          <div
            onMouseEnter={() => handleMouseEnter(setIsHovered4)}
            onMouseLeave={() => handleMouseLeave(setIsHovered4)}
          >
            <img
              src={isHovered4 ? Frame4 : Frame4_black}
              alt='Frame 4'
              className='h-[380px] w-[300px] z-40 frame4'
            />
          </div>
          <div
            onMouseEnter={() => handleMouseEnter(setIsHovered5)}
            onMouseLeave={() => handleMouseLeave(setIsHovered5)}
          >
            <img
              src={isHovered5 ? Frame5 : Frame5_black}
              alt='Frame 5'
              className='h-[380px] w-[300px] z-50 frame5'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
