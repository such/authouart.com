import { blue } from '../../colors';
import { avantGardeBold } from '../../fonts';

export default theme => ({
  root: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      padding: '0 20%',
      height: '100vh'
    },
    [theme.breakpoints.down('md')]: {
      padding: '0 20px'
    }
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
    position: 'fixed',
    color: blue,
    '&:hover': {
      backgroundColor: 'transparent',
      textShadow: `2px 2px 0 ${blue}`,
      WebkitTextStrokeWidth: '1px',
      WebkitTextStrokeColor: blue
    },
    '&:hover $buttonLabel': {
      color: '#9CF8D0'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 20
    }
  },
  oeuvres: {
    display: 'none',
    top: '4%',
    right: 'calc(4% - 40px)',
    '&:hover $buttonLabel': {
      color: '#9CF8D0'
    }
  },
  buttonLabel: {
    position: 'relative'
  },
  bio: {
    bottom: '4%',
    left: '4%',
    '&:hover $buttonLabel': {
      color: '#FF6419'
    }
  },
  lieux: {
    bottom: '4%',
    right: '4%',
    '&:hover $buttonLabel': {
      color: '#F5F89C'
    }
  },
  caddie: {
    height: 25,
    marginLeft: 10,
    position: 'relative',
    top: -3
  }
});
