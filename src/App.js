import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import LithoList from './pages/LithoList';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/lithographies" component={LithoList} />
    </Router>
  );
}

export default App;
