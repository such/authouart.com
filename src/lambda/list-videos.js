/* eslint-disable no-console */
import axios from 'axios';

const playlistID = 'UUyML6lz9ZrYrGLkCPMIaqlw';
const apiKey = process.env.YOUTUBE_API_KEY;
const youtubeUrl = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistID}&key=${apiKey}&fields=items&part=snippet&maxResults=20`;

// { videos:[{"kind":"youtube#playlistItem","etag":"\"nlUZBA6NbTS7q9G8D1GljyfTIWI/xcT_23eVboDKM205d4S40Q8OM9Y\"","id":"VVV5TUw2bHo5WnJZckdMa0NQTUlhcWx3LjBpQV9HUjZ0Q2hr","snippet":{"publishedAt":"2018-09-23T08:13:24.000Z","channelId":"UCyML6lz9ZrYrGLkCPMIaqlw","title":"SAMO la lithographie de Daniel AUTHOUART - 2018","description":"En direct de Ateliers Stéphane Guilbaud, tirage de la 8ème couleur (le noir) de la lithographie SAMO. A découvrir dès le 4 octobre 2018 lors de l'exposition des lithographies de Daniel Authouart au Viaduc des Arts, 63 avenue Daumesnil Paris XII","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/0iA_GR6tChk/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/0iA_GR6tChk/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/0iA_GR6tChk/hqdefault.jpg","width":480,"height":360},"standard":{"url":"https://i.ytimg.com/vi/0iA_GR6tChk/sddefault.jpg","width":640,"height":480},"maxres":{"url":"https://i.ytimg.com/vi/0iA_GR6tChk/maxresdefault.jpg","width":1280,"height":720}},"channelTitle":"Daniel Authouart","playlistId":"UUyML6lz9ZrYrGLkCPMIaqlw","position":0,"resourceId":{"kind":"youtube#video","videoId":"0iA_GR6tChk"}}}]}

export async function handler() {
  try {
    const response = await axios.get(youtubeUrl, {
      headers: { Accept: 'application/json' }
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ videos: response.data.items })
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message })
    };
  }
}
