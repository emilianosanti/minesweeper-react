import { connect } from 'react-redux';

// Components
import GameList from './GameList';

const mapStateToProps = state => {
  return { data: state.games.data };
}

const GamesContainer = connect(
  mapStateToProps
)(GameList);

export default GamesContainer;

