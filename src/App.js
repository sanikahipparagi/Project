import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './Routes';
import './styles.css'
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/" className='bal'>Inflated Ballon</Link>
          </li>
          <li>
            <Link to="/form" className='for'>Form Page</Link>
          </li>
        </ul>
      </nav>
      <Routes />
    </Router>
  );
}

export default App;
