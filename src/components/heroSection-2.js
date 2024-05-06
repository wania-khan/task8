import './heroSection-2.css';
import React from 'react';

const userReviews = [
    { title: "ngrok is about 1000x better than any other local tunnel tool I've used. Usually they are a nightmare.", 
    content: "- matt at populi" },
    { title: "ngrok is pretty much my favorite thing right now", content: "- @EWDurbin" },
    { title: "#ngrok is a dream for testing localhost with remote APIs!", content: "- @davejlong" },
    { title: "@inconshreveable No need to download the newest ngrok because... it updates itself! You are the best.", 
    content: "- @brent_noorda" },
    { title: "ngrok, probably the best tool I have started to use for my webwork since firebug also great support @inconshreveable",
     content: "- @Botto" },
    { title: "holy crap. ngrok.com is awesome, this solves pretty much all local developer problems.", 
    content: "- @julianwachholz" },
  ];
  
function heroSection2(){
   return(
   <>
   <div className='hero2-container'>
   <div className='hero-2'>
    <br></br><br></br><br></br>
    <div className='content-hero2'>
        <p className='heading-1'>Developers</p>
        <p className='heading-2'>Trusted by over 5 million developers</p>
        <p className='heading-3'>Read a few kind words from our users</p>
    </div>
    <br></br>
    <div className='content-reviews'>
    <section className="reviews">
      {userReviews.map((review) => (
        <article key={review.title} className="review-items">
          <h3 className="review-title">{review.title}</h3>
          <p className="review-content">{review.content}</p>
        </article>
      ))}
    </section>
    </div>
    <br></br>
   </div>
   </div>
   </>
   );
}

export default heroSection2;