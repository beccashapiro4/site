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
                <h2> Howdy! </h2>
                <h5>Sit down, stay awhile. Coat rack is to the left.</h5>
                <p>
                  My name's Becca Shapiro.
                  I'm an author/visual artist/amateur comedian in Sunnyside, Queens.
                  I spend most of my time reading or pacing.
                  I own a small but respectable collection of plastic lobsters.
                  I own no real lobsters, nor am I a certified scuba diver.
                  Wonderful news: the shape of the to-go coffee cup works to the advantage of every member of the to-go coffee supply chain (manufactures, suppliers, consumers),
                  despite its unintuitive top-heavy design.
                  Born and raised in Philly, I support the Philadelphia Eagles. I struggle to negotiate my football fanaticism with my general distaste for traumatic brain injuries.
                  I studied Math & Creative Writing at Duke University.
                  I consistently finished last in both Slalom and Giant Slalom USCSA ski races.
                  I moved to New York to build the experimental social media startup
                  <a href="https://techcrunch.com/2020/08/25/muze-redesigns-mobile-messaging-as-a-free-form-canvas-for-creativity/"> Muze Collective </a>
                  with a few of my buddies. I spent some time in Prague, writing and reading (and pacing).
                  I’m currently a barista/bartender at The Center For Fiction in Brooklyn, NY.
                  I've got a few projects in the works, primarily an animated show called 'Freshwater,' which I am scripting, animating, and recording.
                  Other works-in-progress include: a collection of oil paintings called 'Fish & Phalanges' and a prog-rock-EDM-noise-punk band that convenes annually on the first full moon of August.
                  In addition to my creative pursuits, I work as an SAT/ACT tutor, web developer/designer, freelance writer, animator,
                  and just about anything else you'll pay for within reasonable physical and/or legal limits.
                  Please reach out via email or Instagram with any questions or if you wanna say what's up :)
                </p>
                <p>
                  - B
                </p>
                <p>
                  P.S. Apologies for technical difficulties! I am still in the process of developing this site.
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
