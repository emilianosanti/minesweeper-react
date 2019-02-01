import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Icons
import { MdRefresh } from 'react-icons/md';

// Styles
import './style.scss';

// Components
import CellContainer from '../Cell/container';

// Base components
import Icon from '../../base/Icon';

// App APIs
import GameApi from '../../../APIs/game';

class GameBoard extends Component {
  constructor(props) {
    super(props);

    // Methods binding.
    this.renderRow = this.renderRow.bind(this);
  }

  componentDidUpdate() {
    const {
      grid,
      setGameWin,
      bombsQuantity,
      settings: {
        rows, columns,
      }
    } = this.props;

    if (GameApi.gameWin(grid, bombsQuantity, rows, columns)) {
      setGameWin();
    }
}

  renderRow(row, index) {
    return (
      <div className='mwGameBoard_row' key={index}>
        {row.map(this.renderCell)}
      </div>
    );
  }

  renderCell(cell, index) {
    return <CellContainer data={cell} key={index} />;
  }

  renderRemainingBombs() {
    const { bombsQuantity, flagsQuantity } = this.props;
    const remainingBombs = bombsQuantity - flagsQuantity;
    const remainingBombsChecked = remainingBombs < 0 ? 0 : remainingBombs;

    return <div className='mwGameBoard_remainingBombs'>Remaining Bombs: { remainingBombsChecked }</div>;
  }

  renderDefaultMessage() {
    const { gameWin, gameOver } = this.props;
    const isMessageVisible = (!gameOver || gameWin) && (gameOver || !gameWin);
    return isMessageVisible ? <div>Let's play!</div> : null;
  }

  renderWinGame() {
    return this.props.gameWin ? <div>Congratulation, You win the game!</div> : null;
  }

  renderGameOver() {
    const { onRestartClick, gameOver } = this.props;

    if (gameOver) {
      return (
        <div onClick={onRestartClick} className='mwGameBoard_restart'>
          Game Over!
          <Icon className='mwGameBoard_restartIcon'><MdRefresh /></Icon>
        </div>
      );
    }

    return null;
  }

  renderGameBoardHeader() {
    return (
      <React.Fragment>
        <div className='mwGameBoard_messageSection'>
          {this.renderDefaultMessage()}
          {this.renderWinGame()}
          {this.renderGameOver()}
        </div>
        {this.renderRemainingBombs()}
      </React.Fragment>
    );
  }

  render() {
    const { grid } = this.props;

    if (!grid.length) {
      return <div>Please, setup your game first</div>;
    }

    return (
      <div className='mwGameBoard'>
        {this.renderGameBoardHeader()}
        {grid.map(this.renderRow)}
      </div>
    );
  }
}

GameBoard.propTypes = {
  grid: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired,
  bombsQuantity: PropTypes.number.isRequired,
  flagsQuantity: PropTypes.number.isRequired,
  gameOver: PropTypes.bool.isRequired,
  gameWin: PropTypes.bool.isRequired,
  setGameWin: PropTypes.func.isRequired,
  onRestartClick: PropTypes.func.isRequired,
}

export default GameBoard;
