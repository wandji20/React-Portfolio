import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
  const { message, error } = useSelector((state) => state.contactReducer);

  return (
    <div className="position-relative">
      {
        error && <p className="bg-danger text-center">{error}</p>
      }
      {
        message && <p className="bg-success text-center">{message}</p>
      }
    </div>
  );
};

export default Notification;
