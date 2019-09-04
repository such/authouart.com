import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const FlipBookLitho = ({ classes }) => (
  <div className={classes.root}>
    <iframe
      title="Authouart et l'art de la lithographie"
      src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=fvp5wmjt4"
      width="100%"
      seamless="seamless"
      scrolling="no"
      frameBorder="0"
      allowFullScreen
      className={classes.flipbook}
    />
  </div>
);

FlipBookLitho.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FlipBookLitho);
