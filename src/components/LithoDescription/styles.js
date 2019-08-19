import { avantGardeBold } from '../../fonts';

export default () => ({
  root: {},
  year: {
    color: '#0f1756',
    fontSize: 12
  },
  name: {
    ...avantGardeBold,
    fontSize: 16,
    color: '#0f1756'
  },
  caption: {
    color: '#818181',
    fontSize: 14,
    marginBottom: 5
  },
  description: {
    color: '#969696',
    fontSize: 14,
    lineHeight: '16px'
  }
});
