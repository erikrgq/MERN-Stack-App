import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Nav />
      <Route path='/profile' exact component={Profile}/>
    </Router>
  );
}

export default App;
