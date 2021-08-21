import React from 'react';
import ContactLinks from '../components/ContactLinks';

const Home = () => (
  <section id="home" className="container-fluid">
    <div className="">
      <h2>hi there!</h2>
      <h3 className="">
        <span className="d-block">I am Wandji Bertrand,</span>
        <span className="d-block">a software developer living in Cameroon.</span>
        <span className="d-block">Open to new roles.</span>
      </h3>
      <h2>lets connect</h2>
      <ContactLinks />
    </div>
  </section>
);

export default Home;
