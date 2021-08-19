import React from 'react';
import ContactLinks from '../components/ContactLinks';

const Intro = () => (
  <section id="home" className="container-fluid">
    <div className="main">
      <h2>hi there!</h2>
      <h3>
        <span>I am Wandji Bertrand,</span>
        <span>a software developer living in Cameroon.</span>
        <span>Open to new roles.</span>
      </h3>
      <h2>lets connect</h2>
      <ContactLinks />
      <img src="#" alt="" className="img-fluid remove-border" />
    </div>
  </section>
);

export default Intro;
