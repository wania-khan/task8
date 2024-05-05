import './heroSection-1.css';
import React from 'react';
import group from '../assets/imgs/Group.png';
import Arrow from '../assets/imgs/arrow-f.png';

function heroSection1(){
    return (
    <>
    <div className='hero-1'>
     <div className='text-block'>
     <p className='header-black'>Trusted by </p>
     <p className='header-purple'> over 5 million developers</p>
     <p className='content-p'>Trusted by the <b> best teams.</b><br>
     </br> Recommended by <b>category leaders.</b></p>
     <br></br><br></br>
     <div className='button-container'>
    <button className='try-button'>Try ngrok for free</button>
    <button className='touch-button'>Get in touch <img src={Arrow} alt='error' className='arrow-logo'/></button>
    <div className='content-break'>
    <br></br><br></br><br></br><br></br>
    </div>
    </div>
     </div>
     <div className='img-block'>
     <img src={group} alt='error' className='img-hero1' />
     </div>
     <br></br><br></br><br></br>
    </div>
    </>
    );
}

export default heroSection1;