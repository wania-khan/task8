import './heroSection-1.css';
import React from 'react';
import group from '../assets/imgs/Group.png';

function heroSection(){
    return (
    <>
    <div className='hero-1'>
     <div className='text-block'>
     <p className='header-black'>Trusted by </p>
     <p className='header-purple'> over 5 million developers</p>
     </div>
     <div className='img-block'>
     <img src={group} alt='error' className='img-hero1' />
     </div>
    </div>
    </>
    );
}

export default heroSection;