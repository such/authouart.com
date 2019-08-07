import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import source from './bio.md';

import Dialog from '../../components/Dialog';
import styles from './styles';

const Bio = ({ classes, open, onClose }) => (
  <Dialog
    classes={classes}
    title="Biographie de l'artiste"
    source={source}
    open={open}
    onClose={onClose}
  />
);

Bio.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default withStyles(styles)(Bio);
