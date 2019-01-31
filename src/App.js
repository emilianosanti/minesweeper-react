import React from 'react';

// Components
import Header from './components/app/Header';
import NavigationContainer from './components/app/Navigation/container';

// App styles
import './app.scss';

function App({ children }) {
  return (
    <div className='mwApp'>
      <Header />
      <main>
        <NavigationContainer />
        {children}
      </main>
    </div>
  );
}

export default App;
