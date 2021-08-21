import React from 'react';
import PropTypes from 'prop-types';

const Stacks = (props) => {
  const { stacks } = props;
  return (
    <p className="d-flex flex-wrap mt-1 mb-0 stacks mb-md-1">
      {
        stacks.map((stack) => (
          <button className="btn my-1 mr-2 py-0 px-1" type="button" key={stack}>
            {stack}
          </button>
        ))
      }
    </p>
  );
};

Stacks.propTypes = {
  stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Stacks;
