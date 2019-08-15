import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import caddie from '../../assets/caddie.png';

import styles from './styles';

const LithoItem = ({ classes, litho }) => {
  const { name, caption, description, metadata, images } = litho;
  const { Year } = metadata;

  return (
    <div className={classes.root}>
      <img className={classes.img} src={images[0]} alt={name} />
      <div className={classes.year}>{Year}</div>
      <div className={classes.name}>{name}</div>
      <div className={classes.caption}>{caption}</div>
      <div className={classes.description}>{description}</div>
      <Button classes={{ root: classes.button }}>
        2000 € <img src={caddie} alt="caddie" className={classes.caddie} />
      </Button>
    </div>
  );
};

LithoItem.propTypes = {
  classes: PropTypes.object.isRequired,
  litho: PropTypes.object.isRequired
};

export default withStyles(styles)(LithoItem);
