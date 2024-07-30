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
                <h2> You look great today. </h2>
                <h5>Seriously. Love what you're doing with your hair.</h5>
                <p>
                  My name’s Dani Shapiro. I’m a multidisciplinary artist, working across eclectic mediums including: fiction writing, screenwriting, illustration, animation, & standup comedy.
                  I was born in Philly, now based in Queens, NY.
                  I graduated from Duke University with a B.A. in Mathematics and Creative Writing.
                  I’ve nearly always got a pen in my hand and pins & needles in my toes.
                </p>
                <p>
                  My main pursuit at the moment is the creation (writing, directing, animating, scoring) of the animated show FRESHWATER: an absurdist dark-comedy about anthropomorphic fish struggling with existential dread.
                  I'm also developing a live-action feature, and completing a series of oil paintings called "Fish & Phalanges."
                </p>
                <p>
                  When I'm not neck-deep in fictional worlds, you can find me behind the bar at The Center For Fiction in Fort Greene, Brooklyn, where I work as a barista/bartender and enthusiastic book-recommender.
                </p>
                <p style={{ fontWeight: 'bold' }}>
                  I’m currently open for writing assignments, design work and commissions.
                  Please reach out via email or Instagram with any questions or if you wanna say what's up :)
                </p>
                <p>
                  - Dani
                </p>
                <p>
                  P.S. In case of confusion: you may know me as "Becca." In Spring of 2024 I started going by "Dani" short for Danielle.
                  I anticipate this name sticking for at least five years, but not more than a dozen.
                  It's good to refresh one's name about once a decade.
                  <a href='https://en.wikipedia.org/wiki/Special:Random'><img src={'assets/img/fish/work-mode.jpg'} style={{ width: '10%' }} /></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default About;
