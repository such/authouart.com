import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const Title = ({ classes }) => (
  <Link to="/" className={classes.root}>
    <div className={classes.subtitle}>ou la peinture narrative...</div>
    <div className={classes.title}>
      <span className={classes.titleA}>A</span>uthou
      <span className={classes.titleA}>A</span>rt
    </div>
  </Link>
);

Title.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Title);
