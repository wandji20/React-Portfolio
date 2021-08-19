import React from 'react';
import ContactLinks from '../components/ContactLinks';

const Contact = () => (
  <section id="contact" className="container-fluid py-2">
    <h3>Contact</h3>
    <hr />
    <div className="contact-details">
      <div className="contact-text">
        <h4>
          <span> Talk is cheap. </span>
          <span>
            Do reach out in case you need a collaborator,
            have a feature you need to be implemented,
            want to build an app, or just want to talk.
          </span>
          <br />
          <span>Email: wbertrand10@gmail.com</span>
        </h4>
        <ContactLinks />
      </div>
      <form action="">
        <label htmlFor="name">
          Name
          <input type="text" name="" id="name" />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" id="email" />
        </label>
        <label htmlFor="url">
          Website / url
          <input type="url" id="url" />
        </label>
        <label htmlFor="message">
          Comment / Message
          <textarea name="" id="message" cols="20" rows="7" />
        </label>
        <input className="submit-btn" type="button" value="get in touch" />
      </form>
    </div>
  </section>
);

export default Contact;
