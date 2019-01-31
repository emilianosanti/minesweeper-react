import { connect } from 'react-redux';
import { push } from 'connected-react-router';

// Components
import Navigation from './index';

const mapStateToProps = (state) => {
  return {
    locationPathname: state.router.location.pathname,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: newRoute => dispatch(push(newRoute)),
  };
}

const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);

export default NavigationContainer;
