import React from 'react';
import Project from '../components/Project';
import projects from '../constants';

const Projects = () => (
  <section id="projects" className="container-fluid">
    <h3 className="">Projects</h3>
    <hr />
    <div className="projects w-100 d-flex flex-column">
      {
        projects.map((project) => <Project key={project.url} project={project} />)
      }
    </div>
  </section>
);

export default Projects;
