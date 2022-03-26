import React from 'react';
import PropTypes from 'prop-types';
import Stacks from './Stacks';

const Project = (props) => {
  const { project } = props;
  const {
    title, url, live, source, description, stacks, id,
  } = project;

  return (
    <article className="my-2 my-md-3 my-lg-4">

      <div className={
        `d-flex flex-column align-items-center justify-content-md-center project ${id % 2 === 0 ? 'flex-md-row-reverse' : 'flex-md-row'}`
      }
      >
        <div className="col-sm-12 col-md-6 my-1 px-0 m-md-auto px-md-2 px-lg-3">
          <img src={url} alt="" className="img-fluid" />
        </div>
        <div className="col-sm-12 col-md-6 pt-1 my-1 px-0 m-auto px-md-2 px-lg-3">
          <div className="d-flex flex-column justify-content-center align-items-start">
            <h5 className="project-title ">{title}</h5>
            <p className="m-0 my-lg-2">
              {description}
            </p>
            <Stacks stacks={stacks} />
            <p className="project-links my-lg-2">
              <a className="inline-block mr-3" href={source} target="_blank" rel="noreferrer">
                <span>source code</span>
                <i className="pl-1 fab fa-github" />
              </a>
              <a className="inline-block" href={live} target="_blank" rel="noreferrer">
                <span>live</span>
                <i className="pl-1 fas fa-eye" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

Project.propTypes = {
  project: PropTypes.shape().isRequired,
};

export default Project;
