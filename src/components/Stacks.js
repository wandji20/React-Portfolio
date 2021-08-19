import React from 'react';
import PropTypes from 'prop-types';

const Stacks = (props) => {
  const { stacks } = props;
  return (
    <p className="">
      {
        stacks.map((stack) => (
          <button className="btn" type="button" key={stack}>
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
