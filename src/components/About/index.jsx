import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <main className="main-content">
        <div className="section" id="section-content" style={{ backgroundImage: 'url(/assets/img/fish/background.jpg)', backgroundSize: 'cover' }}>
          <div className="container">
            <div className="row" id="about">
              <img className='left-side' id='rainbow-logo' src={'assets/img/fish/fish-hand.PNG'} />
              <div className="right-side" >
                <h2> Nice To Meet You </h2>
                <h5>...this site is a work in progress...</h5>
                <p>
                  I am an author/illustrator/animator who splits time between Philadelphia, PA and Queens, NY.
                  I graduated from Duke University in 2019 with degrees in Mathematics and creative writing.
                  I spent a few years learning software engineering to build the experimental social media startup
                  <a href="https://techcrunch.com/2020/08/25/muze-redesigns-mobile-messaging-as-a-free-form-canvas-for-creativity/"> Muze Collective </a>
                  with a few of my buddies. In addition to my creative pursuits, I work as a barista, tutor, amateur comedian
                  and anything else you'll pay for within reasonable physical and/or legal limits.
                  Please reach out via email or Instagram with any questions or if you just want to chat :)
                </p>
                <a href='https://en.wikipedia.org/wiki/Special:Random'><img src={'assets/img/fish/work-mode.jpg'} style={{ width: '10%' }} /></a>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default About;
