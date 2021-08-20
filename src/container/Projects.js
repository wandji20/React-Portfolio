import React from 'react';
import Project from '../components/Project';
import projects from '../constants';

const Projects = () => (
  <section id="projects" className="container-fluid p-0 py-2">
    <h3 className="ml-3">Projects</h3>
    <hr className="mx-3" />
    <div className="projects w-100 d-flex flex-column">
      {
        projects.map((project) => <Project key={project.id} project={project} />)
      }
    </div>
  </section>
);

export default Projects;
