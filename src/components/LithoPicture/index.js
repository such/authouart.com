/* eslint-disable react/no-danger */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import cursor from '../../assets/cursor.png';

import styles from './styles';

let zIndex = 2;

const LithoPicture = ({ classes, src, title, width }) => {
  const element = useRef(null);

  const moveAt = (pageX, pageY) => {
    element.current.style.left = `${pageX - element.current.offsetWidth / 2}px`;
    element.current.style.top = `${pageY - element.current.offsetHeight / 2}px`;
  };

  const onDrag = ({ clientX, clientY }) => {
    if (clientX && clientY) {
      moveAt(clientX, clientY);
    }
  };

  const bringToFront = () => {
    zIndex += 1;
    element.current.style.zIndex = zIndex;
  };

  const onDragStart = event => {
    const img = new Image();
    event.dataTransfer.setDragImage(img, 0, 0);

    bringToFront();
  };

  return (
    <div
      draggable
      className={classes.root}
      ref={element}
      onDrag={onDrag}
      onDragStart={onDragStart}
      onClick={bringToFront}
      onKeyDown={bringToFront}
      role="button"
      tabIndex={-1}
    >
      <img src={cursor} alt="cursor" className={classes.cursor} />
      <img src={src} alt={title} className={classes.picture} width={width} />
      <div
        className={classes.title}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
};

LithoPicture.propTypes = {
  classes: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
};

export default withStyles(styles)(LithoPicture);
