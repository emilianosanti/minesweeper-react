import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Base components
import Input from '../../base/Input';
import Button from '../../base/Button';

// Constants
import Settings from '../../../constants/settings';

// Styles
import './style.scss';

class SetupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: Settings.rowsDefaultValue,
      columns: Settings.columnsDefaultValue,
      bombs: Settings.bombsDefaultValue,
      isFormValid: true,
    };

    this.maxColumnsAllowed = 30;

    // Methods binding.
    this.onInputChange = this.onInputChange.bind(this);
    this.onClickNewGameButton = this.onClickNewGameButton.bind(this);
  }

  isFormValid() {
    const { columns, rows, bombs } = this.state;

    return (
      bombs < (rows * columns) &&
      bombs > 0 &&
      rows > 0 &&
      columns > 0 &&
      columns <= this.maxColumnsAllowed
    );
  }

  onInputChange(inputValue, type) {
    const value = parseInt(inputValue, 10) || 0;
    const newState = { ...this.state };

    newState[type] = value;

    this.setState(newState);
  }

  getNewGameButtonProps() {
    const disabled = !this.isFormValid();

    return {
      disabled: disabled,
      onClick: this.onClickNewGameButton,
      className: 'mwSetupForm_button',
    };
  }

  onClickNewGameButton() {
    const { rows, columns, bombs } = this.state;

    if (this.isFormValid()) {
      this.props.startGame({ rows, columns, bombs });
    }
  }

  render() {
    const { rows, columns, bombs } = this.state;

    return (
      <div className='mwSetupForm'>
        <div className='mwSetupForm_title'>Setup your game</div>
        <label className='mwSetupForm_label'>Rows:</label>
        <Input
          value={rows}
          onChange={value => this.onInputChange(value, 'rows')}
          className='mwSetupForm_input'
        />
        <label className='mwSetupForm_label'>
          Columns:
          <span className='mwSetupForm_maxValue'> (max: {this.maxColumnsAllowed})</span>
        </label>
        <Input
          value={columns}
          onChange={value => this.onInputChange(value, 'columns')}
          className='mwSetupForm_input'
        />
        <label className='mwSetupForm_label'>
          Bombs Difficulty level:
          <span className='mwSetupForm_maxValue'> (max: { rows * columns})</span>
        </label>
        <Input
          value={bombs}
          onChange={value => this.onInputChange(value, 'bombs')}
          className='mwSetupForm_input'
        />
        <Button {...this.getNewGameButtonProps()}>Start New Game</Button>
      </div>
    );
  }
}

SetupForm.propTypes = {
  startGame: PropTypes.func.isRequired,
}

export default SetupForm;
