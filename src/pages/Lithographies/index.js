import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import source from './lithographies.md';

import Dialog from '../../components/Dialog';
import styles from './styles';

const Lithographies = ({ classes, open, onClose }) => (
  <Dialog
    classes={classes}
    title="Les lithographies"
    source={source}
    open={open}
    onClose={onClose}
  />
);

Lithographies.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default withStyles(styles)(Lithographies);
