import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const LithoDescription = ({ classes, product }) => {
  const { name, metadata } = product;
  const { year, caption, description } = metadata;

  return (
    <div className={classes.root}>
      <div className={classes.year}>{year}</div>
      <div className={classes.name}>{name}</div>
      <pre className={classes.caption}>{caption}</pre>
      <div className={classes.description}>{description}</div>
    </div>
  );
};

LithoDescription.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired
};

export default withStyles(styles)(LithoDescription);
