import { connect } from 'react-redux';

// App Actions
import {
  gameWinAction,
  restartGame,
} from '../../actions/board';

// Components
import GameBoard from './GameBoard';

const mapStateToProps = state => {
  return {
    grid: state.board.grid,
    gameOver: state.board.gameOver,
    gameWin: state.board.gameWin,
    bombsQuantity: state.board.bombsQuantity,
    flagsQuantity: state.board.flagsQuantity,
    settings: state.setup.settings,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setGameWin: setting => dispatch(gameWinAction(true)),
    onRestartClick: () => dispatch(restartGame()),
  };
}

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameBoard);

export default BoardContainer;

