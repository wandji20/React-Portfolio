import React from 'react';
import { Github, Linkedin, Twitter } from 'react-bootstrap-icons';

const ContactLinks = () => (
  <div className="main-icons">
    <a
      href="https://github.com/wandji20"
      target="_blank"
      className="icon"
      rel="noreferrer"
    >
      <Github />
    </a>

    <a
      href="https://www.linkedin.com/in/wandji-bertrand/"
      target="_blank"
      className="icon"
      rel="noreferrer"
    >
      <Linkedin />
    </a>

    <a
      href="https://twitter.com/wandjibertrand"
      target="_blank"
      className="icon"
      rel="noreferrer"
    >
      <Twitter />
    </a>

  </div>
);

export default ContactLinks;
