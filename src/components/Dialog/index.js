import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactMD from 'react-markdown/with-html';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import {
  Dialog as MuiDialog,
  IconButton,
  DialogTitle,
  DialogContent,
  Button
} from '@material-ui/core';
import styles from './styles';

const Dialog = ({ classes, title, source, open, onClose }) => {
  const [full, setFull] = useState(false);
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch(source)
      .then(response => response.text())
      .then(text => setContent(text));
  }, [source]);

  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      classes={{ root: classes.root, paper: classes.paper }}
    >
      <DialogTitle disableTypography className={classes.title}>
        {title}

        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <ReactMD
          source={content}
          escapeHtml={false}
          className={classnames(classes.content, { full })}
        />
        <Button
          onClick={() => setFull(true)}
          classes={{
            root: classnames(classes.button, { full }),
            label: classes.buttonLabel
          }}
        >
          Lire la suite
        </Button>
      </DialogContent>
    </MuiDialog>
  );
};

Dialog.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default withStyles(styles)(Dialog);
