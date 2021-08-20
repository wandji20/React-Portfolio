import NavItem from '../components/NavItem';

const Nav = () => (
  <header className="container remove-padding" id="header">

    <nav className="w-100 px-5 navbar navbar-expand-lg align-items-center ">
      <div className="container-fluid w-100">
        <h3 className="navbar-brand m-auto">
          <a href="#home">Wandji</a>
        </h3>
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
          <ul className="navbar-nav w-50 justify-content-between mb-2 mb-lg-0">
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
