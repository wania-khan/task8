import React from "react";
import './footer.css';
import NGROK from '../assets/imgs/ngrok.png';
import Slack from '../assets/imgs/slack.svg';
import Twitter from '../assets/imgs/twitter.svg';
import Linkedin from '../assets/imgs/linkedin-in.svg';

function footer(){
    return(
    <>
    <div className="footer5-container">
    <br/><br />
    <div className="footer-container">
    <div className="footer-cont-1">
    <p className="footer-p1">Product</p>
    <p className="footer-p2">Pricing</p>
    <p className="footer-p3">Docs</p>
    <p className="footer-p4">Download</p>
    <p className="footer-p5">Careers</p>
    <p className="footer-p6">Blog</p>
    <p className="footer-p7">Trust Portal</p>
    <p className="footer-p8">Service Status</p>
    </div>
    <div className="footer-cont-2">
    <br /><br />
    <p className="footer-p9">Online in One Line</p>
    </div>
    <div className="footer-cont-3">
    <p className="footer-p10">Abuse</p>
    <p className="footer-p11">DPA</p>
    <p className="footer-p12">Privacy</p>
    <p className="footer-p13">Security</p>
    <p className="footer-p14">Terms of Service</p>
    <div className="footer-icons">
        <div className="footer-row1">
        <div className="icon-1"><img className="slack" alt="error-slack" src={Slack}/></div>
        <div className="icon-2"><img className="twitter" alt="error-twitter" src={Twitter}/></div>
        <div className="icon-3"><img className="linkedin" alt="error-linked-in" src={Linkedin}/></div>
        </div>
        <br />
        <img className="ngrok-footer" alt="error-ngrok" src={NGROK}/>
    </div>
    </div>
    </div>
    <br />
    <p className="copyright-footer">&copy; NGROK 2022</p>
    <br />
    </div>
    </>
    );
}

export default footer;