import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';

/**
 * It displays a base Icon component. It wraps the react icon external component.
 */
function Icon({ className, children }) {
  return (
    <IconContext.Provider value={{ className }}>
      <div>
        {children}
      </div>
    </IconContext.Provider>
  );
}

/**
 * Component PropTypes default props.
 * @type {Object}
 */
Icon.defaultProps = {
  className: '',
};

/**
 * Component PropTypes.
 * @type {Object}
 * @property {String} className Custom className for styling the Button element.
 * @property {Object} children  React icon element.
 */
Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Icon;
