import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './style.scss';

/**
 * It displays a base Input text component.
 * @extends {Component}
 */
class Input extends Component {
  constructor(props) {
    super(props);

    /**
     * Component initial state.
     * @type {Object}
     * @property {String} value It handles the state of the input
     *                          It takes the default value from the value props.
     */
    this.state = {
      value: props.value,
    };

    // Method binding
    this.onChange = this.onChange.bind(this);
  }

  /**
   * It is called on the input event callback. It executes the `onChange` prop and updates the input state value.
   * @param {Object} event input `onChange` data event.
   */
  onChange(event) {
    const { value } = event.target;

    this.setState({ value });
    this.props.onChange(value);
  }

  /**
   * @returns {ReactElement}
   */
  render() {
    const { className, placeholder } = this.props;

    return (
      <input
        className={`baseInput ${className}`}
        value={this.state.value}
        onChange={this.onChange}
        placeholder={placeholder}
      />
    );
  }
}

/**
 * Component default props.
 */
Input.defaultProps = {
  value: '',
  className: '',
};

/**
 * Component PropTypes
 * @type {Object}
 * @property {String|Number} value       If defined, the default value of the input.
 * @property {String}        className   Custom className for styling the input element.
 * @property {String}        placeholder It defines the input placeholder.
 * @property {Function}      onChange    Callback that is executed on input change.
 */
Input.PropTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;