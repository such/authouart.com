import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import blackCaddie from '../../assets/black-caddie.png';
import Bio from '../Bio';
import Lieux from '../Lieux';
import Title from '../../components/Title';

import styles from './styles';

const Layout = React.forwardRef(
  ({ classes, children, withTitle, withNav }, ref) => {
    const [bioOpen, setBioOpen] = useState(false);
    const [lieuxOpen, setLieuxOpen] = useState(false);
    return (
      <div className={classnames(classes.root, { withTitle })} ref={ref}>
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
                component={Link}
                to="/lithographies"
              >
                <span className={classes.oeuvresLabel}>Œuvres</span>
                <img
                  src={blackCaddie}
                  alt="caddie"
                  className={classes.caddie}
                />
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
          <div className={classes.content}>{children}</div>
        </div>
      </div>
    );
  }
);

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
