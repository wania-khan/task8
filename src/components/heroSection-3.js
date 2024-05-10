import './heroSection-3.css';
import React from 'react';
import P1 from '../assets/imgs/pc1.png';
import P2 from '../assets/imgs/pc2.png';
import P3 from '../assets/imgs/pc3.png';
import Arrow from '../assets/imgs/arrow-f.png';

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
    <div className='item-background'>
      <img src={P1} alt='error' className='p1' />
    </div>
    <div className="item-content">
      <p className='head-1'>Zendesk keeps 200 engineers focused, productive and safe</p>
      <p className='p-1'>Nearly 200 software engineers across AMER, EMEA and APAC regions use ngrok every day. 
        New engineers up and running in less than 15 minutes.</p><br></br>
      <div class="read-more-container">
        <p class='read-more'>Read more </p>
        <img src={Arrow} alt='error' class='arrow' />
      </div>
    </div>
  </div>
     <div className='item-2'>
      <div className='item-background'>
     <img src={P2} alt='error' className='p2' />
     </div>
     <div className="item-content">
     <p className='head-1'>Copado extends the reach of their CI/CD platform without VPN friction</p>
     <p className='p-1'>With ngrok, Copado save weeks setting up new connections per customer,
     plus countless hours troubleshooting bad connectivity.</p>
     <div class="read-more-container">
     <p class='read-more'>Read more </p>
     <img src={Arrow} alt='error' class='arrow' />
     </div> 
     </div>
    </div>
     <div className='item-3'>
      <div className='item-background'>
     <img src={P3} alt='error' className='p3' />
     </div>
     <div className="item-content">
     <p className='head-1'>HENNGE extends Zero Trust access to on-prem systems with ngrok</p>
     <p className='p-1'>HENNGE adds SSO and MFA to on-prem apps such as Oracle, IBM,
        and SAP with the best time to value.</p><br></br>
        <div class="read-more-container">
       <p class='read-more'>Read more </p>
       <img src={Arrow} alt='error' class='arrow' />
     </div>
     </div> 
    </div>
    </div>
    </div>
    <br></br>
    </div>
    </>
    );
}

export default heroSection3;