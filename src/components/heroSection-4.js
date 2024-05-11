import React from "react";
import './heroSection-4.css';
import Okta from '../assets/imgs/okta.png';
import Zoom from '../assets/imgs/zoom.png';
import Twilio from '../assets/imgs/twilio.png';
import MS from '../assets/imgs/ms.png';
import GitHub from '../assets/imgs/git2.png';
import SendGrid from '../assets/imgs/sendgrid.png';
import Slack from '../assets/imgs/slack.png';
import Shopify from '../assets/imgs/shopify.png';

const logoItems=[
  {img:Twilio},
  {img:SendGrid},
  {img:GitHub},
  {img:Slack},
  {img:Okta},
  {img:MS},
  {img:Zoom},
  {img:Shopify},
  {img:Slack},
  {img:GitHub},
  {img:SendGrid},
  {img:Twilio},
  {img:Zoom},
  {img:Shopify},
  {img:Okta},
  {img:MS}
];
function heroSection4(){
    return(
    <>
     <div className='hero4-container'>
        <div className='hero-4'>
        <br /><br /><br />
        <div className='content-hero4'>
            <p className='heading-1'>CATEGORY LEADERS</p>
            <p className='heading-2'>Recommended by category leaders</p>
            <p className='heading-3'>ngrok is recommended by many developer platforms and category
            leaders<br></br> for systems and webhook development:</p>
          </div>
          <br />
          <ul className="logo-list">
      <div className="logo-container">
        {logoItems.map((logo) => (
          <li key={logo.title} className="logo-item">
            <div className='item'>
              <img src={logo.img} alt="error" className="logo-img" />
            </div>
          </li>
        ))}
      </div>
    </ul>
    <br /><br /><br /><br />
        </div>
      </div>
    </>
    );
}

export default heroSection4;