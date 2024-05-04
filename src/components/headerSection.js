import './headerSection.css';
import React from 'react';
import NGROK from '../assets/imgs/ngrok.png';

function headerSection(){
    return (
    <>
    <div className='container'>
   <br></br>
   <div className='header-menu'>
      <div className='menu'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div className='navbar'>
     <div className='logo'>
     <img src={NGROK} alt='error' className='ngrok-logo'/>
     </div>
     <div className='buttons'>
     <button className='login'>Login</button>
     <button className='signup'>Sign Up</button>
     </div>
    </div>
    <br></br>
    </div>
    </>
    );
}

export default headerSection;