import React from 'react';
import { useLocation } from 'react-router';
import { Router } from 'react-router-dom';
import { history } from './redux/store/store';
import Routes from './routes/routes';
import LayoutUp from './layouts/LayoutUp';
import LayoutDown from './layouts/LayoutDown';

function App() {
  const location = useLocation();
  console.log(location.pathname === '/');

  return (
    <div className="App">
      <Router history={history}>
        {location.pathname === '/' ? (
          <LayoutDown>
            <Routes />
          </LayoutDown>
        ) : (
          <LayoutUp>
            <Routes />
          </LayoutUp>
        )}
      </Router>
    </div>
  );
}

export default App;
