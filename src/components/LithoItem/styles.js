import { avantGarde, avantGardeBold } from '../../fonts';

export default () => ({
  root: {
    ...avantGarde,
    borderBottom: '4px solid #f0eded',
    margin: '0 30px'
  },
  img: {
    boxShadow: '1 2 4 rgba(0, 0, 0, 0.25)'
  },
  year: {
    color: '#0f1756',
    fontSize: 10
  },
  name: {
    ...avantGardeBold,
    fontSize: 14,
    color: '#0f1756'
  },
  caption: {
    color: '#818181',
    fontSize: 12
  },
  description: {
    color: '#969696',
    fontSize: 10
  }
});
