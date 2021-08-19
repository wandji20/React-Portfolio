import React from 'react';
import PropTypes from 'prop-types';
import Stacks from './Stacks';

const Project = (props) => {
  const { project } = props;
  const {
    title, url, live, source, description, stacks,
  } = project;
  return (
    <article className="">

      <div className="">
        <div>
          <img src={url} alt="" className="img-fluid img4 article-img" />
        </div>
        <div className="project-content">
          <div>
            <h5 className="project-title">{title}</h5>
            <p>
              {description}
            </p>
            <Stacks stacks={stacks} />
            <p className="project-links">
              <a href={source} target="_blank" rel="noreferrer">
                <span>Source Code  icon</span>
              </a>
              <a href={live} target="_blank" rel="noreferrer">
                <span>live icon</span>
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
