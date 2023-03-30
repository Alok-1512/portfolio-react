import React, { useState } from 'react';
import { logo, arrow, arrowLeft } from '../assets';

const WorkCard = ({ Data, expanded, onToggle }) => {
  // const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    // setExpanded(!expanded);
    onToggle(Data.id);
  };
  return (
    <>
      <div className='h-[15vh] w-[50vw] flex items-center work-card mx-auto'>
        <span className='flex gap-5 w-[100%]'>
          <img src={logo} alt='' className='h-[60px] w-[60px] rounded-full' />
          <div className='text-white'>
            <h3>{Data.CompanyName}</h3>
            <h6>
              {Data.Post} <span> {Data.Tenure} </span>
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
          <h4>Accomplishments:</h4>
          <ul>
            {Data.accomplishments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default WorkCard;
