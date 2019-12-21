import React from 'react';
import { Router } from 'react-router';
import MainRouter from './js/router/index';
import History from './js/History';
import NavBar from './js/component/navigator/Navbar';
import './style/main.css';
import './style/animate.css';
import './style/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Router history={History}>
        <NavBar/>
        
        <MainRouter/>
      </Router>
    </div>
  );
}

export default App;