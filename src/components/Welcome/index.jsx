import React from 'react';
import Banner from './../Banner';
import Article from './../Article';
import { ReactFloatingBalloons } from '../../Balloons';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import Navbar from '../Navbar';

//style={{ backgroundImage: 'url(/assets/img/fish/dog-cat.jpg)', backgroundSize: 'cover', height: '1000px' }}

const Welcome = () => {
  const firebaseApp = firebase.apps[0]
  return (
    <div>
      <main className="main-content bg-gray">

        <div className="row" style={{ backgroundImage: 'url(/assets/img/fish/dog-cat.jpg)', backgroundSize: 'cover', height: '1000px', backgroundPosition: 'center' }}>
          <div className="col-12 col-lg-6 offset-lg-3">
            <div style={{ position: 'relative', zIndex: 100 }} >
              < ReactFloatingBalloons />
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Welcome;