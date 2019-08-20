/* global Stripe */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import StripeContext from './contexts/stripe';
import Home from './pages/Home';
import LithoList from './pages/LithoList';
import Litho from './pages/Litho';
import './App.css';

function App() {
  return (
    <StripeContext.Provider
      value={Stripe('pk_test_w3Pvq7zERnQmPvqvbMKiEXuD00GthY2MHl')}
    >
      <Router>
        <Route path="/" exact component={Home} />
        <Route exact path="/lithographies" component={LithoList} />
        <Route exact path="/lithographies/:name" component={Litho} />
      </Router>
    </StripeContext.Provider>
  );
}

export default App;
