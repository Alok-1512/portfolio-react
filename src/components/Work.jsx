import React, { useState } from 'react';
import WorkCard from './WorkCard';
import { experience } from '../constants/constant';

const Work = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    if (id === expandedId) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };
  return (
    <div className='bg-primary w-[calc(100vw-220px)] h-[100vh] flex flex-col gap-5 '>
      <h2 className='text-white text-6xl mx-auto'>Previously Worked With..</h2>
      {experience.map((exp) => (
        <WorkCard
          key={exp.id}
          Data={exp}
          expanded={exp.id === expandedId}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default Work;
