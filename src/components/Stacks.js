import React from 'react';
import PropTypes from 'prop-types';

const Stacks = (props) => {
  const { stacks } = props;
  return (
    <p className="d-flex flex-wrap stacks">
      {
        stacks.map((stack) => (
          <button className="btn m-1 px-1 py-0" type="button" key={stack}>
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
