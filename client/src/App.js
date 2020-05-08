import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Profile from './components/Profile';
import Meals from './components/meals/Meals';
import Search from './components/search/Search';

function App() {
  return (
    <Router>
      <Nav />
      <Route path='/' exact component={Profile}/>
      <Route path='/meals' exact component={Meals}/>
      <Route path='/search' exact component={Search}/>
    </Router>
  );
}

export default App;
