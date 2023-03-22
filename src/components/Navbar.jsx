import React from 'react';
import { logo } from '../assets';

const Navbar = () => {
  return (
    <>
      <nav className='flex flex-col bg-primary justify-between  text-white h-[100vh] w-[220px] py-10 pl-5'>
        <img src={logo} alt='' className='h-[64px] w-[64px]' />
        <ul className='flex flex-col gap-5 mb-16'>
          <li>Welcome</li>
          <li>Work</li>
          <li>Publications</li>
          <li>Community Work</li>
          <li>Who Am I?</li>
          <li>What People Say ?</li>
        </ul>
        <a href='' className='pl-3'>
          Let's Discuss Design!
        </a>
      </nav>
    </>
  );
};

export default Navbar;
