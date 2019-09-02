/* eslint-disable react/no-danger */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import cursor from '../../assets/cursor.png';

import styles from './styles';

let zIndex = 2;

const LithoPicture = ({ classes, src, title, width }) => {
  const element = useRef(null);
  let shiftX = 0;
  let shiftY = 0;
  let offsetX = 0;
  let offsetY = 0;
  let mouseX = 0;
  let mouseY = 0;

  useEffect(() => {
    const el = document.addEventListener('dragover', event => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    });

    return document.removeEventListener('dragover', el);
  });

  const moveAt = (clientX, clientY) => {
    element.current.style.left = `${clientX - shiftX - offsetX}px`;
    element.current.style.top = `${clientY - shiftY - offsetY}px`;
  };

  const onDrag = () => {
    if (mouseX > 0 && mouseY > 0 && shiftX > 0 && shiftY > 0) {
      moveAt(mouseX, mouseY);
    }
  };

  const bringToFront = () => {
    zIndex += 1;
    element.current.style.zIndex = zIndex;
  };

  const onDragStart = event => {
    const img = new Image();
    event.dataTransfer.setDragImage(img, 0, 0);

    offsetX = element.current.parentNode.getBoundingClientRect().left;
    offsetY = element.current.parentNode.getBoundingClientRect().top;

    shiftX = event.clientX - element.current.getBoundingClientRect().left;
    shiftY = event.clientY - element.current.getBoundingClientRect().top;

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
