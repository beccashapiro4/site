import React from 'react';
import Banner from './../Banner';
import Article from './../Article';
import { ReactFloatingBalloons } from '../../Balloons';

const SampleEssaysPage = () => {
  return (
    <div>
      <Banner
        backgroundImage="url(assets/img/raves/rave-3.JPG)"
        title="Sample Essays"
        subtitle="Answers to all your questions, existential and otherwise."
      />



      <main className="main-content bg-gray">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3">
            <Article />
            <hr />
            <Article />
            <hr />
            <Article />
            <nav className="flexbox mt-50 mb-50">
              <a className="btn btn-white disabled">
                <i className="ti-arrow-left fs-9 mr-4" /> Newer</a>
              <a className="btn btn-white" href="#">Older
                <i className="ti-arrow-right fs-9 ml-4" />
              </a>
            </nav>
            <div style={{ position: 'relative', zIndex: 100 }} >
              < ReactFloatingBalloons />
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default SampleEssaysPage;