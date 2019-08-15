/* eslint-disable no-console */
import axios from 'axios';

// import list from './mocks/list-videos.mock.json';

const playlistID = 'UUyML6lz9ZrYrGLkCPMIaqlw';
const apiKey = process.env.YOUTUBE_API_KEY;
const youtubeUrl = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistID}&key=${apiKey}&fields=items&part=snippet&maxResults=20`;
// const mock = process.env.MOCK;

export async function handler() {
  try {
    // if (mock) {
    //   return {
    //     statusCode: 200,
    //     body: JSON.stringify({ videos: list })
    //   };
    // }

    const response = await axios.get(youtubeUrl, {
      headers: { Accept: 'application/json' }
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ data: response.data.items })
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message })
    };
  }
}
