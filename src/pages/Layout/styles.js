import { blue } from '../../colors';
import { avantGardeBold } from '../../fonts';

export default () => ({
  root: {
    padding: '0 20%',
    width: '100%',
    height: '100vh'
  },
  inner: {
    minHeight: 'calc(100vh - 40px)',
    position: 'relative',
    margin: 'auto',
    paddingTop: 30,
    marginBottom: 10
  },
  content: {
    position: 'relative'
  },
  button: {
    ...avantGardeBold,
    fontSize: 25,
    zIndex: 30,
    textTransform: 'uppercase',
    position: 'absolute',
    color: blue,
    '&:hover': {
      backgroundColor: 'transparent',
      textShadow: `2px 2px 0 ${blue}`,
      WebkitTextStrokeWidth: '1px',
      WebkitTextStrokeColor: blue
    }
  },
  oeuvres: {
    top: '4%',
    right: '-4%',
    '&:hover $oeuvresLabel': {
      color: '#9CF8D0',
      top: -2,
      right: 2
    }
  },
  oeuvresLabel: {
    position: 'relative'
  },
  bio: {
    bottom: '4%',
    left: '-4%',
    '&:hover': {
      color: '#FF6419',
      bottom: 'calc(4% + 2px)',
      left: 'calc(-4% - 2px)'
    }
  },
  lieux: {
    bottom: '4%',
    right: '-4%',
    '&:hover': {
      color: '#F5F89C',
      bottom: 'calc(4% + 2px)',
      right: 'calc(-4% + 2px)'
    }
  },
  caddie: {
    height: 25,
    marginLeft: 10
  }
});
