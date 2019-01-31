import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './style.scss';

/**
 * It displays a base Button component.
 * @extends {Component}
 */
function Button({ className, disabled, children, onClick }) {
  const disabledClassName = disabled ? '-disabled' : '';

  return (
    <button
      className={`baseButton ${disabledClassName} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

/**
 * Component PropTypes default props.
 * @type {Object}
 */
Button.defaultProps = {
  disabled: false,
  className: '',
};

/**
 * Component PropTypes.
 * @type {Object}
 * @property {Boolean}  disabled  If true, it disables the button.
 * @property {string}   className Custom className for styling the Button element.
 * @property {String}   children  It specifies the button text.
 * @property {Function} onClick   Callback to execute when the button is clicked.
 */
Button.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
