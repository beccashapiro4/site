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
                <p>
                  Becca Shapiro is an author/illustrator/filmmaker living in Queens, New York.
                  Becca grew up in Lower Merion, PA. In 2019 Becca received her B.A. in Mathematics and Creative Writing
                  from Duke University. Becca helped found the experimental social media startup <a href='https://www.muze.nyc'> Muze </a>
                  where she worked until May 2021. In summer 2021 Becca attended the Prague Writer's Workshop.
                  In addition to her creative pursuits, Becca works as a software engineer and a test prep tutor.
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