import React, { useState } from 'react';
import env from 'react-dotenv';
import emailjs from 'emailjs-com';
import { BlogEntry, blogConverter } from '../../blog-entry';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { getDatabase } from 'firebase/database'
import { getFirestore, collection, doc, setDoc, Timestamp } from "firebase/firestore";

/*
const db = getDatabase();
const serviceId = env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = env.REACT_APP_EMAILJS_TEMPLATE_ID;
const userId = env.REACT_APP_EMAILJS_PUBLIC_KEY;
const fakeImgURL = '../../public/assets/img/heads/heads-1.png';
const date = '00/00/00'
*/

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const db = getFirestore();
  const serviceId = env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userId = env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const fakeImgURL = '../../public/assets/img/heads/heads-1.png';
  const date = '00/00/00'

  /*
  const submit = () => {
    if (name && email && message) {
      const templateParams = {
        name,
        email,
        message
      };
      emailjs.send(serviceId, templateId, templateParams, userId)
        .then(response => console.log(response))
        .then(error => console.log(error));

      setName('');
      setEmail('');
      setMessage('');
      setEmailSent(true);
    } else {
      alert('Please fill in all fields.');
    }
  }
  */

  const submit = () => {
    if (name && email && message) {
      const timestamp = Timestamp.now();
      const templateParams = {
        name, // author
        message, // content
        fakeImgURL, // cover_img
        date, // date
        email, // subtitle
        timestamp, // timestamp
        name, // title
      };
      // Set with cityConverter
      const ref = doc(db, "articles", name).withConverter(blogConverter);
      setDoc(ref, new BlogEntry(
        name, // author
        message, // content
        fakeImgURL, // cover_img
        date, // date
        email, // subtitle
        timestamp, // timestamp
        name, // title
      ));
      emailjs.send(serviceId, templateId, templateParams, userId)
        .then(response => console.log(response))
        .then(error => console.log(error));

      setName('');
      setEmail('');
      setMessage('');
      setEmailSent(true);
    } else {
      alert('Please fill in all fields.');
    }
  }

  return (
    <div className="contact-form contact-form-form">
      <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
      <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
      <button onClick={submit}>Send</button>

      <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
    </div>
  );
};

export default ContactForm;