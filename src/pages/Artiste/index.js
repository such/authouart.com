import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import useFetchLambda from '../../hooks/useFetchLambda';
import Layout from '../Layout';

import styles from './styles';

const Artiste = React.forwardRef(({ classes }, ref) => {
  const [playlistItems] = useFetchLambda('list-videos');
  const [mainVideo, setMainVideo] = useState(null);

  if (!playlistItems) {
    return null;
  }

  if (!mainVideo) {
    setMainVideo(playlistItems[0]);
    return null;
  }

  return (
    <Layout classes={{ content: classes.root, inner: classes.inner }} ref={ref}>
      <div className={classes.main}>
        <div className={classes.playlist}>
          {playlistItems.map(item => (
            <Button
              key={item.id}
              classes={{ root: classes.preview }}
              onClick={() => setMainVideo(item)}
            >
              <img
                src={item.snippet.thumbnails.default.url}
                alt={item.snippet.title}
              />
            </Button>
          ))}
        </div>
      </div>
      <iframe
        title="main"
        src={`https://www.youtube.com/embed/${mainVideo.snippet.resourceId.videoId}`}
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        className={classes.iframe}
      />
    </Layout>
  );
});

Artiste.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Artiste);
