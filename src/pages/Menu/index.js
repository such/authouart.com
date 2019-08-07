import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRightAlt';

import pictoFacebook from '../../assets/picto-facebook.png';
import pictoInsta from '../../assets/picto-insta.png';
import pictoLinkedIn from '../../assets/picto-linkedin.png';

import styles from './styles';
import Bio from '../Bio';
import Lieux from '../Lieux';

const Menu = ({ classes, scrollToLitho, scrollToArtiste }) => {
  const [bioOpen, setBioOpen] = useState(false);
  const [lieuxOpen, setLieuxOpen] = useState(false);

  return (
    <div className={classes.root}>
      <Bio onClose={() => setBioOpen(false)} open={bioOpen} />
      <Lieux onClose={() => setLieuxOpen(false)} open={lieuxOpen} />
      <div className={classes.inner}>
        <div className={classes.subtitle}>ou la peinture narrative...</div>
        <div className={classes.title}>
          <span className={classes.titleA}>A</span>uthou
          <span className={classes.titleA}>A</span>rt
        </div>
        <div
          className={classnames(classes.innerButton, classes.litho)}
          onClick={scrollToLitho}
          onKeyDown={scrollToLitho}
          role="button"
          tabIndex="-1"
        />
        <div
          className={classnames(classes.innerButton, classes.artiste)}
          onClick={scrollToArtiste}
          onKeyDown={scrollToArtiste}
          role="button"
          tabIndex="-1"
        />
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
        <div className={classes.social}>
          <Button
            href="https://www.facebook.com/DanielAuthouart/"
            target="_blank"
            classes={{ root: classnames(classes.socialButton, classes.actu) }}
          >
            <img
              src={pictoFacebook}
              alt="facebook"
              className={classes.socialPicto}
            />
            <ArrowRightIcon /> Actualité
          </Button>
          <Button
            href="https://www.instagram.com/danielauthouart/"
            target="_blank"
            classes={{ root: classnames(classes.socialButton, classes.photos) }}
          >
            <img
              src={pictoInsta}
              alt="instagram"
              className={classes.socialPicto}
            />
            <ArrowRightIcon /> Photos
          </Button>
          <Button
            href="https://www.linkedin.com/in/daniel-authouart-1a8513b0"
            target="_blank"
            classes={{ root: classnames(classes.socialButton, classes.photos) }}
          >
            <img
              src={pictoLinkedIn}
              alt="linkedin"
              className={classes.socialPicto}
            />
            <ArrowRightIcon /> Pro
          </Button>
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  scrollToLitho: PropTypes.func.isRequired,
  scrollToArtiste: PropTypes.func.isRequired
};

export default withStyles(styles)(Menu);
