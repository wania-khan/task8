import './headerSection.css';
import React from 'react';
import NGROK from '../assets/imgs/ngrok.png';

function headerSection(){
    return (
    <>
    <div className='navbar'>
        <br></br>
     <div className='logo'>
     <img src={NGROK} alt='error' className='ngrok-logo'/>
     </div>
     <div className='buttons'>
     <button className='login'>Login</button>
     <button className='signup'>Sign Up</button>
     </div>
     <br></br>
    </div>
    </>
    );
}

export default headerSection;