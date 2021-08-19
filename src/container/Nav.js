import NavItem from '../components/NavItem';

const Nav = () => (
  <header className="container remove-padding bg-dark" id="header">

    <nav className="container-fluid navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">Wandji</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto w-75 justify-content-between mb-2 mb-lg-0">
            <NavItem text="home" />
            <NavItem text="projects" />
            <NavItem text="skills" />
            <NavItem text="contact" />
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Nav;
