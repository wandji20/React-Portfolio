import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactLinks from '../presentation/ContactLinks';
import { postEmailAction } from '../../redux/contact/contactAction';
import Notification from '../presentation/Notification';

const Contact = () => {
  const { sender } = useSelector((state) => state.contactReducer);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [message, setMessage] = useState('');

  const clearForm = () => {
    setName(sender.name);
    setWebsite(sender.website);
    setEmail(sender.email);
    setMessage(sender.message);
  };

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    const data = {
      name, email, website, message,
    };
    e.preventDefault();
    dispatch(postEmailAction(data));
  };

  useEffect(() => {
    clearForm();
  }, [sender]);

  return (
    <section id="contact" className="container-fluid">
      <h3>Contact</h3>
      <hr className="hr" />

      <Notification />
      <div className="d-md-flex justify-content-center align-items-center mb-2 ">
        <div className="d-none d-md-flex flex-column align-items-start col-md-6 p-0">
          <h5 className="contact-text">
            <span className="d-block pe-2">
              Reach out if you need a collaborator,
              <br />
              have a feature you need to be implemented,
              <br />
              or want to build an app.
            </span>
            <br />
            <span className="d-block">Email: wbertrand10@gmail.com</span>
          </h5>
          <ContactLinks />
        </div>
        <form
          className="contact-formform col-md-6 p-0 align-self-md-start  pb-2"
          onSubmit={handleFormSubmit}
        >
          <label className="form-label w-100 p-0 col-md-12" htmlFor="name">
            Name
            <input
              className="form-control w-100 ps-2 col-md-12"
              type="text"
              name=""
              value={name}
              required
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="form-label w-100 p-0 col-md-12" htmlFor="email">
            Email
            <input
              className="form-control w-100 ps-2 col-md-12"
              required
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="form-label w-100 p-0 col-md-12" htmlFor="url">
            Website / url
            <input
              className="form-control w-100 ps-2 col-md-12"
              type="url"
              id="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </label>
          <label className="form-label w-100 p-0 col-md-12" htmlFor="message">
            Comment / Message
            <textarea
              className="form-control w-100 px-2 col-md-12"
              name=""
              id="message"
              required
              value={message}
              rows="4"
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <label className="form-label w-100 px-0 col-md-12" htmlFor="submit">
            <input
              className=" form-submit btn submit-btn w-100"
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
