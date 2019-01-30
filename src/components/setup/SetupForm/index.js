import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SetupForm extends Component {
  constructor(props) {
    super(props);

    // TODO: move this to a config file
    this.state = {
      rows: 10,
      columns: 10,
      bombs: 20,
    };

    // Methods binding.
    this.onInputChange = this.onInputChange.bind(this);
    this.onClickNewGameButton = this.onClickNewGameButton.bind(this);
  }

  onInputChange(inputValue, type) {
    const value = parseInt(inputValue.target.value, 10) || 0;
    const newState = { ...this.state };

    newState[type] = value;

    this.setState(newState);
  }

  onClickNewGameButton() {
    const { rows, columns, bombs } = this.state;

    this.props.startGame({ rows, columns, bombs });
  }

  render() {
    const { rows, columns, bombs } = this.state;

    return (
      <div className='mwSetupForm'>
        <div>Setup your game</div>
        <label>Rows:</label>
        <input value={rows} onChange={value => this.onInputChange(value, 'rows')} />
        <label>Columns:</label>
        <input value={columns} onChange={value => this.onInputChange(value, 'columns')} />
        <label>Bombs Difficulty level:</label>
        <input value={bombs} onChange={value => this.onInputChange(value, 'bombs')}
        />
        <button onClick={this.onClickNewGameButton}>Start New Game</button>
      </div>
    );
  }
}

SetupForm.propTypes = {
  startGame: PropTypes.func.isRequired,
}

export default SetupForm;
