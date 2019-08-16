import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import LithoDescription from '../LithoDescription';
import caddie from '../../assets/caddie.png';

import styles from './styles';

const LithoItem = ({ classes, litho }) => {
  const { name, images } = litho;

  return (
    <div className={classes.root}>
      <img className={classes.img} src={images[0]} alt={name} />
      <LithoDescription litho={litho} />
      <Button
        classes={{ root: classes.button }}
        component={Link}
        to={`/lithographies/${name}`}
      >
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
