import React from 'react';
import Okta from '../assets/imgs/okta.png';
import Zoom from '../assets/imgs/zoom.png';
import Twilio from '../assets/imgs/twilio.png';
import MS from '../assets/imgs/ms.png';
import GitHub from '../assets/imgs/git2.png';
import SendGrid from '../assets/imgs/sendgrid.png';
import Slack from '../assets/imgs/slack.png';
import './logoBar.css';

function logoBar(){
    return(
    <>
    <br></br><br></br><br></br>
    <div className='logo-bar'>
    <img src={Twilio} alt='error' className='Twilio'/>
    <img src={SendGrid} alt='error' className='SendGrid'/>
    <img src={GitHub} alt='error' className='GitHub'/>
    <img src={Slack} alt='error' className='Slack'/>
    <img src={Okta} alt='error' className='Okta'/>
    <img src={MS} alt='error' className='MS' />
    <img src={Zoom} alt='error' className='Zoom'/>
    </div>
    <br></br><br></br>
    <br></br><br></br>
    <br></br><br></br>
    </>
    );
}

export default logoBar;