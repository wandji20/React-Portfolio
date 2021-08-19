import React from 'react';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#a">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#a">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#a">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#a" tabIndex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
);

export default Nav;
