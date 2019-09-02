/* eslint-disable react/no-danger */

import React, { useRef } from 'react';
import Draggable from 'react-draggable'; // The default
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import cursor from '../../assets/cursor.png';

import styles from './styles';

let zIndex = 2;

const LithoPicture = ({ classes, src, title, width }) => {
  const element = useRef(null);

  const bringToFront = () => {
    zIndex += 1;
    element.current.style.zIndex = zIndex;
  };

  return (
    <Draggable onMouseDown={bringToFront}>
      <div className={classes.root} ref={element}>
        <img src={cursor} alt="cursor" className={classes.cursor} />
        <img src={src} alt={title} className={classes.picture} width={width} />
        <div
          className={classes.title}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
    </Draggable>
  );
};

LithoPicture.propTypes = {
  classes: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
};

export default withStyles(styles)(LithoPicture);
