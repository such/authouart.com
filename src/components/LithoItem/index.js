import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import formatPrice from '../../lib/formatPrice';
import LithoDescription from '../LithoDescription';
import caddie from '../../assets/caddie.png';

import styles from './styles';

const LithoItem = ({ classes, litho }) => {
  const { product, price } = litho;
  const { name, images } = product;

  return (
    <div className={classes.root}>
      <img className={classes.img} src={images[0]} alt={name} />
      <LithoDescription product={product} />
      <Button
        classes={{ root: classes.button }}
        component={Link}
        to={`/lithographies/${name}`}
      >
        {formatPrice(price)}
        <img src={caddie} alt="caddie" className={classes.caddie} />
      </Button>
    </div>
  );
};

LithoItem.propTypes = {
  classes: PropTypes.object.isRequired,
  litho: PropTypes.object.isRequired
};

export default withStyles(styles)(LithoItem);
