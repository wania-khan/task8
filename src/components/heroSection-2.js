import './heroSection-2.css';
import React, { useState } from 'react';

const userReviews = [
    { title: "ngrok is about 1000x better than any other local tunnel tool I've used. Usually they are a nightmare.", 
    content: "- matt at populi" },
    { title: "@inconshreveable No need to download the newest ngrok because... it updates itself! You are the best.", 
    content: "- @brent_noorda" },
    { title: "@ngrok; moved -/bin already, the web inspector is gold", 
    content: "- @pedromelo" },
    { title: "ngrok is pretty much my favorite thing right now", content: "- @EWDurbin" },
    { title: "ngrok, probably the best tool I have started to use for my webwork since firebug also great support @inconshreveable",
    content: "- @Botto" },
    { title: "Holy crap! #ngrok. Tell everyone! The most useful thing ever!", 
    content: "- @paulcampbell_" },
    { title: "#ngrok is a dream for testing localhost with remote APIs!", content: "- @davejlong" },
    { title: "holy crap. ngrok.com is awesome, this solves pretty much all local developer problems.", 
    content: "- @julianwachholz" },
    { title: "so ngrok.com is basically the greatest thing ever", 
    content: "- @philadams" },
    { title: "ngrok is about 1000x better than any other local tunnel tool I've used. Usually they are a nightmare.", 
    content: "- matt at populi" },
    { title: "@inconshreveable No need to download the newest ngrok because... it updates itself! You are the best.", 
    content: "- @brent_noorda" },
    { title: "ngrok is pretty much my favorite thing right now", content: "- @EWDurbin" },
    { title: "ngrok, probably the best tool I have started to use for my webwork since firebug also great support @inconshreveable",
    content: "- @Botto" },
    { title: "#ngrok is a dream for testing localhost with remote APIs!", content: "- @davejlong" },
    { title: "holy crap. ngrok.com is awesome, this solves pretty much all local developer problems.", 
    content: "- @julianwachholz" },
    { title: "@ngrok; moved -/bin already, the web inspector is gold", 
    content: "- @pedromelo" },
    { title: "Holy crap! #ngrok. Tell everyone! The most useful thing ever!", 
    content: "- @paulcampbell_" },
    { title: "so ngrok.com is basically the greatest thing ever", 
    content: "- @philadams" },

  ];
  
  function HeroSection2() {
    const [showMore, setShowMore] = useState(9); // Initially shows 9 reviews
  
    const handleShowMore = () => {
      setShowMore(userReviews.length); // Set to show all reviews
    };
  
    const handleShowLess = () => {
      setShowMore(9); // Reset back to initial 9 reviews
    };
  
    const slicedReviews = userReviews.slice(0, showMore);
  
    return (
      <>
         <div className='hero2-container'>
        <div className='hero-2'>
          <br />
          <br />
          <br />
          <div className='content-hero2'>
            <p className='heading-1'>Developers</p>
            <p className='heading-2'>Trusted by over 5 million developers</p>
            <p className='heading-3'>Read a few kind words from our users</p>
          </div>
          <br />
          <div className='content-reviews'>
            <section className="reviews">
              {slicedReviews.map((review, index) => (
                <article
                  key={review.title}
                  className={`review-items ${
                    showMore !== userReviews.length && (index + 1) % 3 === 0
                      ? 'half-opaque'
                      : ''
                  }`}>
                  <h3 className="review-title">{review.title}</h3>
                  <p className="review-content">{review.content}</p>
                </article>
              ))}
            </section>
            {showMore < userReviews.length && (
              <center>
                <button className="see-more" onClick={handleShowMore}>
                  See More
                </button>
              </center>
            )}
            {showMore > 9 && (
              <center>
                <button className="see-less" onClick={handleShowLess}>
                  See Less
                </button>
              </center>
            )}
          </div>
          <br />
        </div>
      </div>
      </>
    );
  }  
  
  export default HeroSection2;