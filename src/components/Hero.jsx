import React, { useState } from 'react';

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <>
      <div className='testi-main w-[calc(100vw-220px)] h-[100vh] bg-primary '>
        <div className='flex flex-col py-10 items-center justify-center '>
          <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Hover over me!
          </span>
          {hovered && <p className='text-white'>Hovered!</p>}

          <span className='text-white'>
            🌟 A wizard of the digital world turning user needs into 📸
            pixel-perfect realities with a flick of their 📲 design wand 🪄.
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
