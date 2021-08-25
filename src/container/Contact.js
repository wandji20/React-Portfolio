import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import ContactLinks from '../components/ContactLinks';
import apikey from '../email';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [message, setMessage] = useState('');
  // const [status, setStatus] = useState(false);
  // const [error, setError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // const data = {
    //   name, email, website, message,
    // };
    setName('');
    setEmail('');
    setWebsite('');
    setMessage('');

    emailjs.sendForm('gmail', apikey.TEMPLATE_ID, e.target, apikey.USER_ID)
      .then((result) => {
        alert('Thank you for reaching out!', result.text);
      },
      (error) => {
        alert('An error occurred, Please try again', error.text);
      });
  };
  return (
    <section id="contact" className="container-fluid">
      <h3>Contact</h3>
      <hr className="hr" />
      <div className="d-md-flex justify-content-center align-items-center ">
        <div className="d-none d-md-flex flex-column align-items-start col-md-6 p-0">
          <h5 className="contact-text">
            <span className="d-block"> Talk is cheap. </span>
            <span className="d-block">
              Do reach out in case you need a collaborator,
              have a feature you need to be implemented,
              want to build an app, or just want to talk.
            </span>
            <br />
            <span className="d-block">Email: wbertrand10@gmail.com</span>
          </h5>
          <ContactLinks />
        </div>
        <form
          className="form col-md-6 p-0 align-self-md-start"
          onSubmit={handleFormSubmit}
        >
          <label className="w-100 p-0 col-md-12" htmlFor="name">
            Name
            <input
              className="w-100 p-0 col-md-12"
              type="text"
              name=""
              value={name}
              // required
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="w-100 p-0 col-md-12" htmlFor="email">
            Email
            <input
              className="w-100 p-0 col-md-12"
              // required
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="w-100 p-0 col-md-12" htmlFor="url">
            Website / url
            <input
              className="w-100 p-0 col-md-12"
              type="url"
              id="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </label>
          <label className="w-100 p-0 col-md-12" htmlFor="message">
            Comment / Message
            <textarea
              className="w-100 p-0 col-md-12"
              name=""
              id="message"
              // required
              value={message}
              rows="4"
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <label className="w-100 px-0 col-md-12" htmlFor="submit">
            <input
              className="submit-btn w-100"
              type="submit"
              value="get in touch"
            />
          </label>
        </form>
      </div>
    </section>
  );
};

export default Contact;
