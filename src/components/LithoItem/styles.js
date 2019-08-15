import { avantGarde, avantGardeBold } from '../../fonts';

export default () => ({
  root: {
    ...avantGarde,
    borderBottom: '4px solid #f0eded',
    margin: '0 30px',
    width: 200
  },
  img: {
    boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.25)',
    maxHeight: 160,
    marginBottom: 10
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
    fontSize: 12,
    marginBottom: 5
  },
  description: {
    color: '#969696',
    fontSize: 12,
    lineHeight: '16px',
    marginBottom: 20
  },
  button: {
    ...avantGardeBold,
    color: '#0f1756',
    lineHeight: '0.8',
    boxShadow:
      '0 1px 1px rgba(0, 0, 0, 0.25), inset -1px 1px 1px rgba(0, 0, 0, 0.93)',
    borderRadius: 5,
    padding: '7px 5px 5px 5px',
    border: '1px solid #010201',
    backgroundColor: '#ffffff',
    marginBottom: 10
  },
  caddie: {
    width: 12,
    marginLeft: 4
  }
});
