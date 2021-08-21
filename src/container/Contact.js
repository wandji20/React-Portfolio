import React from 'react';
import ContactLinks from '../components/ContactLinks';

const Contact = () => (
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
      <form className="form col-md-6 p-0 align-self-md-start" action="">
        <label className="w-100 p-0 col-md-12" htmlFor="name">
          Name
          <input className="w-100 p-0 col-md-12" type="text" name="" id="name" />
        </label>
        <label className="w-100 p-0 col-md-12" htmlFor="email">
          Email
          <input className="w-100 p-0 col-md-12" type="email" id="email" />
        </label>
        <label className="w-100 p-0 col-md-12" htmlFor="url">
          Website / url
          <input className="w-100 p-0 col-md-12" type="url" id="url" />
        </label>
        <label className="w-100 p-0 col-md-12" htmlFor="message">
          Comment / Message
          <textarea className="w-100 p-0 col-md-12" name="" id="message" rows="4" />
        </label>
        <label className="w-100 px-0 col-md-12" htmlFor="submit">
          <input className="submit-btn w-100" type="button" value="get in touch" />
        </label>
      </form>
    </div>
  </section>
);

export default Contact;
