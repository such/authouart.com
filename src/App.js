/* global Stripe */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

import StripeContext from './contexts/stripe';
import Home from './pages/Home';
import Oeuvres from './pages/Oeuvres';
import Litho from './pages/Litho';
import FlipBookLitho from './pages/FlipBookLitho';
import { canUseWebp } from './lib/webp';

import styles from './App.styles';

import './App.css';

const App = ({ classes }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  const webp = canUseWebp();

  return (
    <StripeContext.Provider
      value={Stripe('pk_live_BoFD8FywbH0GGuNabdjXfI2i00AQPNIYJu')}
    >
      <div className={classnames({ webp, nowebp: !webp })}>
        <Router>
          {loading && <div className={classes.loading} />}
          <div className={classnames(classes.content, { loading })}>
            <Switch>
              <Route exact path="/oeuvres" component={Oeuvres} />
              <Route exact path="/oeuvres/:name" component={Litho} />
              <Route exact path="/lalithographie" component={FlipBookLitho} />
              <Route path="/" component={Home} />
            </Switch>
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
