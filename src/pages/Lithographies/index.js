import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ASCIIFolder from 'fold-to-ascii';

import lithographies from './lithographies';

import Dialog from '../../components/Dialog';
import styles from './styles';

const titleToPictureName = title =>
  `lithographies/cr-${ASCIIFolder.foldReplacing(
    title
      .split(',')[0]
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[!’]/, '')
  )}.jpg`;

const Lithographies = ({ classes, open, onClose }) => (
  <Dialog
    classes={classes}
    title="Catalogue raisonné des lithographies de Daniel Authouart"
    open={open}
    onClose={onClose}
  >
    {lithographies.map(l => (
      <div className={classes.litho} key={l.title}>
        <div className={classes.pictureContainer}>
          <img
            src={titleToPictureName(l.title)}
            alt={l.title}
            className={classes.picture}
          />
        </div>
        <div className={classes.description}>
          <span className={classes.title}>{l.title}</span>
          <span>{l.format}</span>
          <span>{l.colors}</span>
          <span>Papier {l.paper}</span>
          <span>Tirage {l.tirage}</span>
        </div>
      </div>
    ))}
  </Dialog>
);

Lithographies.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default withStyles(styles)(Lithographies);
