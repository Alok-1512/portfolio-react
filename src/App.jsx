import React from 'react';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import Intro from './components/Intro';
import './font.css';
import Hero from './components/Hero';

const App = () => {
  return (
    <>
      <div className='flex'>
        <Navbar />
        <div>
          <Hero />
          <Work />
          <Intro />
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default App;
