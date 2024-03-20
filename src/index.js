import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Blog from './components/Blog';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Cocktail from './components/CFF_Cocktail';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
//import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

//<img src={'assets/img/fish/background.jpg'} />
//url('http://www.birds.com/wp-content/uploads/home/bird4.jpg')

function Main() {
  return (
    <div style={{ backgroundImage: 'url(http://www.birds.com/wp-content/uploads/home/bird4.jpg)', backgroundSize: 'cover', height: '100%' }} >

      <Navbar />
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/cocktail" element={<Cocktail />} />
      </Routes>

    </div>
  );
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
