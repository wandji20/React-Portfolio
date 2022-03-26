import React from 'react';
import Project from '../presentation/Project';
import projects from '../../constants';

const Projects = () => (
  <section id="projects" className="container-fluid">
    <h3 className="">My Projects</h3>
    <hr className="hr" />
    <div className="projects w-100 d-flex flex-column">
      {
        projects.map((project) => <Project key={project.id} project={project} />)
      }
    </div>
  </section>
);

export default Projects;
