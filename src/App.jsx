import React from 'react';
import Navbar from './components/Navbar';
// import Work from './components/Work';
// import Testimonials from './components/Testimonials';
import Intro from './components/Intro';
import './font.css';

const App = () => {
  return (
    <>
      <div className='flex'>
        <Navbar />
        <Intro />
      </div>
    </>
  );
};

export default App;
