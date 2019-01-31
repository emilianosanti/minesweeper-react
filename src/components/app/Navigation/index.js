import React, { Component } from 'react';
import PropTypes from 'prop-types';

// App constants
import routes from '../../../constants/routes'

// Component style
import './style.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);

    // @TODO: Build Regex with `routes pathnames`.
    this.navigationItems = [
      {
        title: 'Setup Game',
        validationRegex: /^(?!.*\/board)(?!.*\/games).*$/,
        routePath: routes.setup,
      },
      {
        title: 'Board Game',
        validationRegex: /\/board\b/,
        routePath: routes.board,
      },
      {
        title: 'My Games',
        validationRegex: /\/games\b/,
        routePath: routes.games,
      },
    ];

    // Methods binding.
    this.renderNavigationItem = this.renderNavigationItem.bind(this);
  }

  renderNavigationItem(item, index) {
    const isItemActive = item.validationRegex.test(this.props.locationPathname);
    const className = `mwNavigation_item ${isItemActive ? '-active' : '' }`;

    return (
      <div
        key={index}
        className={className}
        onClick={() => this.props.navigate(item.routePath)}
      >
        {item.title}
      </div>
    );
  }

  render() {
    return (
      <div className='mwNavigation'>
        {this.navigationItems.map(this.renderNavigationItem)}
      </div>
    );
  }
}

Navigation.propTypes = {
  locationPathname: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
}

export default Navigation;
