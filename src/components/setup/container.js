import { connect } from 'react-redux';

// App Actions
import { startGame } from '../../actions/setup';

// Components
import SetupForm from './SetupForm';

const mapDispatchToProps = dispatch => {
  return {
    startGame: setting => dispatch(startGame(setting)),
  };
}

const SetupContainer = connect(
  null,
  mapDispatchToProps,
)(SetupForm);

export default SetupContainer;
