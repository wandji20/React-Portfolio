import React from 'react';
import ContactLinks from '../components/ContactLinks';

const Home = () => (
  <section id="home" className="container-fluid px-3 py-2 mx-md-1">
    <div className="py-2">
      <h2>hi there!</h2>
      <h3 className="py-3">
        <span className="d-block py-2 ">I am Wandji Bertrand,</span>
        <span className="d-block py-2">a software developer living in Cameroon.</span>
        <span className="d-block py-2">Open to new roles.</span>
      </h3>
      <h2>lets connect</h2>
      <ContactLinks />
    </div>
  </section>
);

export default Home;
