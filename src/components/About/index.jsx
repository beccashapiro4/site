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
                  Becca Shapiro is an author/illustrator who splits time between Philadelphia, PA and Queens, NY.
                  In 2019 Becca received her B.A. in Mathematics and Creative Writing
                  from Duke University. She went on to create the experimental social media startup
                  <a href="https://techcrunch.com/2020/08/25/muze-redesigns-mobile-messaging-as-a-free-form-canvas-for-creativity/"> Muze Collective </a>
                  where she worked until May 2021. In addition to her creative pursuits, Becca works as a software engineer, tutor,
                  and anything else you'll pay her for within reasonable physical and/or legal safety standards.
                  Please reach out via email or Instagram with any questions or if you just want to chat.
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