import React from "react";
import Arrow from '../assets/imgs/arrow-f.png';
import './heroSection-5.css';

function heroSection5(){
    return(
    <>
    <div className='hero5-container'>
    <br /><br /><br /><br /><br /><br /><br /><br />
    <div className="hero5-content">
    <p className="h-5-1">Talk to an expert</p>
    <p className="p-5-1">Let&apos;s discuss your project</p>
    </div>
    <br/> <br />
    <div className='button-cont'>
    <button className='gsn-button'>Get started now</button>
    <button className='touch-button'>Get in touch <img src={Arrow} alt='error' className='arrow-logo'/></button>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br />
    </div>
    </>
    );
}

export default heroSection5;