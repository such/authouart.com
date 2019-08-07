import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import source from './lieux.md';

import Dialog from '../../components/Dialog';
import styles from './styles';

const Lieux = ({ classes, open, onClose }) => (
  <Dialog
    classes={classes}
    title="Lieux d'exposition et de vente"
    source={source}
    open={open}
    onClose={onClose}
  />
);

Lieux.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default withStyles(styles)(Lieux);
