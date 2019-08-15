import { useEffect, useState } from 'react';

export default endpoint => {
  const [data, setData] = useState(null);

  const url = `/.netlify/functions/${endpoint}`;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setData(json.data));
  }, [url]);

  return [data, setData];
};
