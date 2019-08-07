import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import tv from '../../assets/tv.png';

import styles from './styles';

const playlistID = 'UUyML6lz9ZrYrGLkCPMIaqlw';
const apiKey = 'AIzaSyDKdYd3MmI1YSC6kA8kDNk6zGT0zOCQx7s';
const youtubeUrl = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistID}&key=${apiKey}&fields=items&part=snippet&maxResults=20`;

const Artiste = React.forwardRef(({ classes }, ref) => {
  const [playlistItems, setPlaylistItems] = useState(null);
  const [mainVideo, setMainVideo] = useState(null);

  useEffect(() => {
    fetch(youtubeUrl)
      .then(response => response.json())
      .then(json => setPlaylistItems(json.items));
  }, []);

  if (!playlistItems) {
    return null;
  }

  if (!mainVideo) {
    setMainVideo(playlistItems[0]);
    return null;
  }

  return (
    <div className={classes.root} ref={ref}>
      <div className={classes.main}>
        <iframe
          width="580"
          height="430"
          title="main"
          src={`https://www.youtube.com/embed/${mainVideo.snippet.resourceId.videoId}`}
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className={classes.iframe}
        />
        <img src={tv} alt="tv" className={classes.tv} />
      </div>
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
  );
});

Artiste.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Artiste);
