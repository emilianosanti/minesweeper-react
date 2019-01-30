import { connect } from 'react-redux';
import {
  openCellAction,
  gameOverAction,
  setFlagAction,
} from '../../../actions/board';
import Cell from './index';

const mapStateToProps = (state, ownProps) => {
  return {
    grid: state.board.grid,
    data: ownProps.data,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openCell: coordinates => dispatch(openCellAction(coordinates)),
    gameOver: coordinates => dispatch(gameOverAction(coordinates)),
    setFlag: (coordinates, flagValue) => dispatch(setFlagAction(coordinates, flagValue)),
  };
}

const CellContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);

export default CellContainer;
