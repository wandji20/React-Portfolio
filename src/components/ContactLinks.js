import React from 'react';

const ContactLinks = () => (
  <div className="contact-links py-2">
    <span className="d-inline-block mr-4 text-light">
      <a
        href="https://github.com/wandji20"
        target="_blank"
        className="icon"
        rel="noreferrer"
      >
        <i className="fab fa-github" />
      </a>
    </span>

    <span className="d-inline-block mr-4">
      <a
        href="https://www.linkedin.com/in/wandji-bertrand/"
        target="_blank"
        className="icon"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin" />
      </a>
    </span>

    <span className="d-inline-block mr-4">
      <a
        href="https://twitter.com/wandjibertrand"
        target="_blank"
        className="icon"
        rel="noreferrer"
      >
        <i className="fab fa-twitter" />
      </a>
    </span>
  </div>
);

export default ContactLinks;
