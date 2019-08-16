import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import LithoList from './pages/LithoList';
import Litho from './pages/Litho';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route exact path="/lithographies" component={LithoList} />
      <Route exact path="/lithographies/:name" component={Litho} />
    </Router>
  );
}

export default App;
