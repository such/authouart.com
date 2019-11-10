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
  Button,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import styles from './styles';

const Dialog = ({ classes, title, source, open, onClose, children }) => {
  const [full, setFull] = useState(false);
  const [content, setContent] = useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (source) {
      fetch(source)
        .then(response => response.text())
        .then(text => setContent(text));
    }
  }, [source]);

  return (
    <MuiDialog
      fullScreen={fullScreen}
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
      <DialogContent
        onWheel={() => setFull(true)}
        classes={{ root: classes.content }}
      >
        <div className={classnames(classes.md, { full })}>
          {content ? <ReactMD source={content} escapeHtml={false} /> : children}
        </div>
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
  source: PropTypes.string,
  children: PropTypes.any,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

Dialog.defaultProps = {
  source: null,
  children: null
};

export default withStyles(styles)(Dialog);
