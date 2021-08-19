import React from 'react';
import PropTypes from 'prop-types';

const NavItem = (props) => {
  const { text } = props;
  return (
    <li
      className="nav-item"
    >
      <a
        className="nav-link"
        aria-current="page"
        href={`#${text}`}
      >
        {
        text.substring(0, 1).toUpperCase() + text.substring(1)
      }
      </a>
    </li>
  );
};

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NavItem;
