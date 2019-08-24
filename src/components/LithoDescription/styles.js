import { avantGardeBold } from '../../fonts';

export default () => ({
  root: {
    marginBottom: 8,
    marginRight: 15
  },
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
    fontSize: 13,
    marginBottom: 8
  },
  description: {
    color: '#969696',
    fontSize: 14,
    lineHeight: '16px'
  }
});
