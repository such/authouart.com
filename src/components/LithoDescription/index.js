import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const LithoDescription = ({ classes, product }) => {
  const { name, caption, description, metadata } = product;
  const { Year } = metadata;

  return (
    <div className={classes.root}>
      <div className={classes.year}>{Year}</div>
      <div className={classes.name}>{name}</div>
      <div className={classes.caption}>{caption}</div>
      <div className={classes.description}>{description}</div>
    </div>
  );
};

LithoDescription.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired
};

export default withStyles(styles)(LithoDescription);
