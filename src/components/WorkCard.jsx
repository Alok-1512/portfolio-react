import React, { useState } from 'react';
import { logo, arrow, arrowLeft } from '../assets';

const WorkCard = () => {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <div className='h-[10vh] w-[60vw] flex items-center work-card'>
        <span className='flex gap-5'>
          <img src={logo} alt='' className='h-[60px] w-[60px] rounded-full' />
          <div className='text-white'>
            <h3>World of Wealth</h3>
            <h6>
              Ux Designer Intern <span> June 2022-Feb 2022 </span>
            </h6>
          </div>
        </span>

        <button onClick={handleToggle}>
          <img
            src={expanded ? arrowLeft : arrow}
            alt=''
            className='h-[30px] w-[30px]'
          />
        </button>
      </div>
      {expanded && (
        <div className='text-white'>
          <p>Expanded content goes here...</p>
        </div>
      )}
    </>
  );
};

export default WorkCard;
