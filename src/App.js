/* global Stripe */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

import StripeContext from './contexts/stripe';
import Home from './pages/Home';
import Oeuvres from './pages/Oeuvres';
import Litho from './pages/Litho';
import { canUseWebp } from './lib/webp';

import styles from './App.styles';

import './App.css';

const App = ({ classes }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <StripeContext.Provider
      value={Stripe('pk_test_w3Pvq7zERnQmPvqvbMKiEXuD00GthY2MHl')}
    >
      <div className={classnames({ webp: canUseWebp() })}>
        <Router>
          {loading && <div className={classes.loading} />}
          <div className={classnames(classes.content, { loading })}>
            <Route path="/" exact component={Home} />
            <Route exact path="/oeuvres" component={Oeuvres} />
            <Route exact path="/oeuvres/:name" component={Litho} />
          </div>
        </Router>
      </div>
    </StripeContext.Provider>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
