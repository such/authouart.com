import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRightAlt';

import pictoFacebook from '../../assets/picto-facebook.png';
import pictoInsta from '../../assets/picto-insta.png';
import pictoLinkedIn from '../../assets/picto-linkedin.png';

import Layout from '../Layout';

import styles from './styles';

const Menu = ({ classes, scrollToLitho, scrollToArtiste }) => (
  <Layout classes={{ content: classes.inner }} withNav withTitle>
    <div
      className={classnames(classes.innerButton, classes.litho)}
      onClick={scrollToLitho}
      onKeyDown={scrollToLitho}
      role="button"
      aria-label="lithographies"
      tabIndex="-1"
    />
    <div
      className={classnames(classes.innerButton, classes.artiste)}
      onClick={scrollToArtiste}
      onKeyDown={scrollToArtiste}
      role="button"
      aria-label="artiste"
      tabIndex="-1"
    />
    <div className={classes.social}>
      <Button
        href="https://www.facebook.com/DanielAuthouart/"
        target="_blank"
        rel="noopener"
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
        rel="noopener"
        classes={{ root: classnames(classes.socialButton, classes.photos) }}
      >
        <img src={pictoInsta} alt="instagram" className={classes.socialPicto} />
        <ArrowRightIcon /> Publications
      </Button>
      <Button
        href="https://www.linkedin.com/in/daniel-authouart-1a8513b0"
        target="_blank"
        rel="noopener"
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
  </Layout>
);

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  scrollToLitho: PropTypes.func.isRequired,
  scrollToArtiste: PropTypes.func.isRequired
};

export default withStyles(styles)(Menu);
