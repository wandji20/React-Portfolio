import React from 'react';
import ContactLinks from '../presentation/ContactLinks';

const Home = () => (
  <section id="home" className="container-fluid">
    <div className="my-md-2">
      <h2>hi there!</h2>
      <h3 className="my-md-5">
        <span className="d-block my-md-3">I am Wandji Bertrand,</span>
        <span className="d-block my-md-3">a software developer living in Cameroon.</span>
        <span className="d-block my-md-3">Open to new roles.</span>
      </h3>
      <h2>lets connect</h2>
      <ContactLinks />
    </div>
  </section>
);

export default Home;
