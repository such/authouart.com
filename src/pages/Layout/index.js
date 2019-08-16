import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import Bio from '../Bio';
import Lieux from '../Lieux';
import Title from '../../components/Title';

import styles from './styles';

const Layout = ({ classes, children, withTitle, withNav, withPadding }) => {
  const [bioOpen, setBioOpen] = useState(false);
  const [lieuxOpen, setLieuxOpen] = useState(false);
  return (
    <div className={classnames(classes.root, { withPadding })}>
      {withNav && (
        <>
          <Bio onClose={() => setBioOpen(false)} open={bioOpen} />
          <Lieux onClose={() => setLieuxOpen(false)} open={lieuxOpen} />
        </>
      )}
      {withTitle && <Title />}
      <div className={classes.inner}>
        {withNav && (
          <>
            <Button
              classes={{ root: classnames(classes.button, classes.oeuvres) }}
              disableRipple
              component={Link}
              to="/lithographies"
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
  withTitle: PropTypes.bool,
  withPadding: PropTypes.bool
};

Layout.defaultProps = {
  withNav: false,
  withTitle: false,
  withPadding: false
};

export default withStyles(styles)(Layout);
