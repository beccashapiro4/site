import React from 'react';
import Banner from './../Banner';
import ContactForm from '../ContactForm';
import ContactSheet from '../ContactSheet';

const Contact = () => {
  return (
    <div>
      <main className="main-content bg-gray">
        <div className="section" id="section-content" style={{ backgroundImage: 'url(/assets/img/fish/background.jpg)', backgroundSize: 'cover', height: '1000px' }}>
          <div className="container">
            <img className="background-hand" src={'assets/img/heads/dripping-head.png'} />
            <ContactSheet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;