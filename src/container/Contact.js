import React from 'react';
import ContactLinks from '../components/ContactLinks';

const Contact = () => (
  <section id="contact" className="container-fluid px-3 py-2">
    <h3>Contact</h3>
    <hr />
    <div className="d-md-flex justify-content-center pb-1">
      <div className="d-none d-md-flex flex-column align-items-start">
        <h5>
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
      <form className="form " action="">
        <label htmlFor="name">
          Name
          <input className="w-100" type="text" name="" id="name" />
        </label>
        <label htmlFor="email">
          Email
          <input className="w-100" type="email" id="email" />
        </label>
        <label htmlFor="url">
          Website / url
          <input className="w-100" type="url" id="url" />
        </label>
        <label htmlFor="message">
          Comment / Message
          <textarea className="w-100" name="" id="message" cols="20" rows="7" />
        </label>
        <input className="submit-btn w-100" type="button" value="get in touch" />
      </form>
    </div>
  </section>
);

export default Contact;
