import React, { useState } from 'react';
import Banner from './../Banner';

const placeholder = 'Her eyebrows twitched and were mostly not eyebrows, mostly like ghosts of eyebrows, lighter than rest of her tan sunburnt face, flatter than the wrinkles on her forehead, like a spot where an eyebrow had been that she’d forgotten about when she was sunbathing and after she ripped off the eyebrows or they fell while she took a bath. And where the eyebrow was there was a light spot that was smooth and that was not touched by the sun, that kept twitching or crawling that she raised her hand up and her hand shaking and she put her finger on her eyebrow where it squirmed and she rubbed it there. And her lips which were not with any makeup got small and she rubbed like she was rubbing an afraid cat and her thin colorless lips the same tone as her skin but textured how lips are like a half - dried leaf her thin lips opened just enough to hum, softly, something she could feel more than hear.'
const subtitlePlaceholder = 'This text is bigger. This is where we put words that should be in bigger text. Why should these words be bigger ? For emphasis ? For grace ? We put words here, regardless of reason.'

const Services = () => {
  return (
    <div id="top">
      <Banner
        backgroundImage="url(assets/img/raves/rave-3.JPG)"
        title="Services"
        subtitle="Here's what we do."
      />

      <main className="main-content bg-gray">
        <div className="section" id="section-content">
          <div className="container">
            <div className='services-section' id="overview">
              <h5>
                Overview
              </h5>
              <p className='text-justify'>
                {placeholder}
              </p>
            </div>
            <hr className='dotted' />
            <h4 className='text-center'>Mentorship</h4>
            <hr className='dotted' />
            <div className='services-section' id="freshmen">
              <img className='left-side' src={'assets/img/heads/head-1.PNG'} />
              <div className="right-side">
                <h5> FRESHMEN </h5>
                <p className="lead">
                  {subtitlePlaceholder}
                </p>
                <hr className="w-100" />
                <p className='text-justify'>
                  {placeholder}
                </p>
              </div>
            </div>
            <div className='services-section' id="sophomores">
              <img className='left-side' src={'assets/img/heads/head-2.PNG'} />
              <div className="right-side">
                <h5> SOPHOMORES </h5>
                <p className="lead">
                  {subtitlePlaceholder}
                </p>
                <hr className="w-100" />
                <p className='text-justify'>
                  {placeholder}
                </p>
              </div>
            </div>
            <div className='services-section' id="juniors">
              <img className='left-side' src={'assets/img/heads/head-3.PNG'} />
              <div className="right-side">
                <h5> JUNIORS </h5>
                <p className="lead">
                  {subtitlePlaceholder}
                </p>
                <hr className="w-100" />
                <p className='text-justify'>
                  {placeholder}
                </p>
              </div>
            </div>
            <div className='services-section' id="seniors">
              <img className='left-side' src={'assets/img/heads/head-4.PNG'} />
              <div className="right-side">
                <h5> SENIORS </h5>
                <p className="lead">
                  {subtitlePlaceholder}
                </p>
                <hr className="w-100" />
                <p className='text-justify'>
                  {placeholder}
                </p>
              </div>
            </div>
            <hr className='dotted' />
            <h4 className='text-center'>Essay Prep</h4>
            <hr className='dotted' />
            <div className='services-section' id="essay">
              <img className='left-side' src={'assets/img/heads/head-1.PNG'} />
              <div className="right-side">
                <h5> WORKSHOPS </h5>
                <p className="lead">
                  {subtitlePlaceholder}
                </p>
                <hr className="w-100" />
                <p className='text-justify'>
                  {placeholder}
                </p>
              </div>
            </div>
            <hr className='dotted' />
            <h4 className='text-center'>Tutoring</h4>
            <hr className='dotted' />
            <div className='services-section' id="tutoring">
              <img className='left-side' src={'assets/img/heads/head-1.PNG'} />
              <div className="right-side">
                <h5> TEST PREP </h5>
                <p className="lead">
                  {subtitlePlaceholder}
                </p>
                <hr className="w-100" />
                <p className='text-justify'>
                  {placeholder}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;