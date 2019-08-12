import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import classnames from 'classnames';

import Bio from '../Bio';
import Lieux from '../Lieux';
import Title from '../../components/Title';

import styles from './styles';

const Layout = ({ classes, children, withTitle, withNav }) => {
  const [bioOpen, setBioOpen] = useState(false);
  const [lieuxOpen, setLieuxOpen] = useState(false);
  return (
    <div className={classes.root}>
      {withNav && (
        <>
          <Bio onClose={() => setBioOpen(false)} open={bioOpen} />
          <Lieux onClose={() => setLieuxOpen(false)} open={lieuxOpen} />
        </>
      )}
      <div className={classes.inner}>
        {withTitle && <Title />}
        {withNav && (
          <>
            <Button
              classes={{ root: classnames(classes.button, classes.oeuvres) }}
              disableRipple
            >
              Œuvres
            </Button>
            <Button
              classes={{ root: classnames(classes.button, classes.bio) }}
              onClick={() => setBioOpen(true)}
            >
              Bio
            </Button>
            <Button
              classes={{ root: classnames(classes.button, classes.lieux) }}
              onClick={() => setLieuxOpen(true)}
            >
              Lieux d&apos;expo
            </Button>
          </>
        )}
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  withNav: PropTypes.bool,
  withTitle: PropTypes.bool
};

Layout.defaultProps = {
  withNav: false,
  withTitle: false
};

export default withStyles(styles)(Layout);
