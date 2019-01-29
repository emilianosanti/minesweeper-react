import React from 'react';

// Components
import Header from './components/app/Header';

// App styles
import './app.scss';

function App({ children }) {
  return (
    <div className='mwApp'>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}

export default App;
