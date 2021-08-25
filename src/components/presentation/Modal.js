import React from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const { result, error, handleVisibility } = props;
  return (
    <div className="container w-100 bg-light px-0 mx-0 mw-100">
      <p className="d-flex justify-content-between w-100">
        <span className="inline-block m-auto text-dark">Hi</span>
        <button
          className="btn inline-block bg-dark text-light py-0 px-2"
          type="button"
          onClick={handleVisibility}
        >
          close
        </button>
      </p>
      {
        result !== ''
          && (
          <p className="text-success m-auto text-center">
            Thank you for reaching out!
          </p>
          )
      }
      {
        error !== ''
          && (
          <p className="text-danger m-auto text-center">
            An error occurred. Please try again!
          </p>
          )
      }
    </div>
  );
};

Modal.propTypes = {
  result: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  handleVisibility: PropTypes.func.isRequired,
};

export default Modal;
