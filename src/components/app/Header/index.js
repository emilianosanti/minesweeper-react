import React from 'react';

// Assets
import reactLogo from '../../../assets/logos/reactLogo.svg';

// Styles
import './styles.scss';

function Header() {
  return (
    <header className="mwHeader">
      <img src={reactLogo} className="mwHeader_reactLogo" alt="react logo" />
      <p>Minesweeper - React</p>
    </header>
  );
}

export default Header;
