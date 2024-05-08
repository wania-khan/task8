import './heroSection-3.css';
import React from 'react';
import P1 from '../assets/imgs/pc1.png';
import P2 from '../assets/imgs/pc2.png';
import P3 from '../assets/imgs/pc3.png';

function heroSection3(){
    return(
    <>
    <div className='hero3-container'>
   <div className='hero-3'>
   <br></br><br></br><br></br>
    <div className='content-hero3'>
        <p className='heading-1'>Customers</p>
        <p className='heading-2'>Trusted by the best teams</p>
        <p className='heading-3'>Companies trust in ngrok to increase their developer productivity, secure <br></br>
         remote access, enable B2B communications, and enable remote IoT access.</p>
    </div>
    <br></br>
    <div className='content-prod'>
     <div className='item-1'>
      <img src={P1} alt='error' className='p1' />
      <p className='head-1'>Zendesk keeps 200 engineers focused, productive and safe</p>
     </div>
     <div className='item-2'>
     <img src={P2} alt='error' className='p2' />
     <p className='head-1'>Copado extends the reach of their CI/CD platform without VPN friction</p>

     </div>
     <div className='item-3'>
     <img src={P3} alt='error' className='p3' />
     <p className='head-1'>HENNGE extends Zero Trust access to on-prem systems with ngrok</p>

     </div>
    </div>
    </div>
    </div>
    </>
    );
}

export default heroSection3;