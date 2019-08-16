import { blue } from '../../colors';
import { avantGardeBold } from '../../fonts';

export default () => ({
  root: {
    padding: '0 20%',
    width: '100%',
    height: '100vh'
  },
  inner: {
    minHeight: '100vh',
    position: 'relative',
    margin: 'auto',

    '.withPadding &': {
      paddingTop: 230
    }
  },
  button: {
    ...avantGardeBold,
    fontSize: 25,
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
    '&:hover': {
      color: '#9CF8D0',
      top: 'calc(4% - 2px)',
      right: 'calc(-4% + 2px)'
    }
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
  }
});
