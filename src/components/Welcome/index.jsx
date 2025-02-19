import React from 'react';
import Banner from './../Banner';
import Article from './../Article';
import { ReactFloatingBalloons } from '../../Balloons';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import Navbar from '../Navbar';

const Welcome = () => {
  const firebaseApp = firebase.apps[0]
  return (
    <div>
      <main className="main-content bg-gray">
        <div className="row" style={{ backgroundImage: 'url(/assets/img/fish/dog-cat.jpg)', backgroundSize: 'cover', height: '100vh', backgroundPosition: 'center' }}>
          <div style={{ position: 'relative' }} >
            < ReactFloatingBalloons />
          </div>
        </div>

      </main>

    </div>
  );
};

export default Welcome;