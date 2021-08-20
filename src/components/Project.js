import React from 'react';
import PropTypes from 'prop-types';
import Stacks from './Stacks';

const Project = (props) => {
  const { project } = props;
  const {
    title, url, live, source, description, stacks, id,
  } = project;

  return (
    <article className="my-1 my-md-2">

      <div className={
        `d-flex flex-column align-items-center justify-content-md-center project ${id % 2 === 0 ? 'flex-md-row-reverse' : 'flex-md-row'}`
      }
      >
        <div className="col-sm-12 col-md-6 my-1">
          <img src={url} alt="" className="img-fluid img4 article-img" />
        </div>
        <div className="col-sm-12 col-md-6 pt-1 my-1">
          <div className="d-flex flex-column">
            <h5 className="project-title ">{title}</h5>
            <p>
              {description}
            </p>
            <Stacks stacks={stacks} />
            <p className="project-links">
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
  project: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Project;
