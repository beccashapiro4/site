import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp/index';
import SingleArticle from './components/SingleArticle';
import CreateArtice from './components/CreateArticle';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import SampleEssaysPage from './components/SampleEssaysPage';
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

const Main = withRouter(({ location }) => {
  return (
    <div style={{ backgroundImage: 'url(http://www.birds.com/wp-content/uploads/home/bird4.jpg)', backgroundSize: 'cover', height: '100%' }} >

      {
        location.pathname !== '/login' && location.pathname !== '/signup' &&
        <Navbar />
      }

      <Route exact path="/" component={Welcome} />
      <Route path="/blog" component={Blog} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/services" component={Services} />
      <Route path="/samples" component={SampleEssaysPage} />
      <Route path="/login" component={Login} />
      <Route path="/article/:slug" component={SingleArticle} />
      <Route path="/articles/create" component={CreateArtice} />
      <Route path="/signup" component={SignUp} />

    </div>
  );
});

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
