import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <main className="main-content">
        <div className="section" id="section-content" style={{ backgroundImage: 'url(/assets/img/fish/background.jpg)', backgroundSize: 'cover' }}>
          <div className="container" id="no-touch">
            <div className="row" id="about">
              <img className='left-side' id='rainbow-logo' src={'assets/img/fish/fish-hand.PNG'} />
              <div className="right-side" >
                <h2> About Becca Shapiro </h2>
                <h5>I made this website.</h5>
                <h6>(Don't click too aggressively, it will break.)</h6>
                <p>
                  Howdy! My name's Becca. Some of my friends call me "Dragon Lord" but you don't have to. Just a suggestion.
                  I'm an author/visual artist/amateur comedian in Sunnyside, Queens.
                  I spend most of my time reading or pacing.
                  I own a small but respectable collection of plastic lobsters. They are not real, and therefore will never die.
                  Born and raised in Philly, I support the Philadelphia Eagles despite my general distaste for traumatic brain injuries.
                  I studied Math & Creative Writing at Duke University. I say "y'all" now.
                  After graduating I moved to New York to build the experimental social media startup
                  <a href="https://techcrunch.com/2020/08/25/muze-redesigns-mobile-messaging-as-a-free-form-canvas-for-creativity/"> Muze Collective </a>
                  with a few of my buddies. I coded this website; it only halfway functions.
                  I’m currently a barista at The Center For Fiction in Brooklyn, NY where I get to say funny stuff and babble about books.
                  I've got a bunch of projects in the works, including an animated show called 'Freshwater' about anthropomorphic fish,
                  a collection of oil paintings called 'Fish & Phalanges,' and a prog-rock-EDM-noise-punk band that convenes annually on the first full moon of August.
                  In addition to my creative pursuits, I work as an SAT/ACT tutor, freelance writer, animator,
                  and just about anything else you'll pay for within reasonable physical and/or legal limits.
                  Please reach out via email or Instagram with any questions or if you wanna say what's up :)
                </p>
                <p>
                  - B
                </p>
                <p>
                  P.S. If you haven't tried popping the bubbles on my home screen, you really should.
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
