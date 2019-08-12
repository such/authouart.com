import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const Title = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.subtitle}>ou la peinture narrative...</div>
    <div className={classes.title}>
      <span className={classes.titleA}>A</span>uthou
      <span className={classes.titleA}>A</span>rt
    </div>
  </div>
);

Title.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Title);
