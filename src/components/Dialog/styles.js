import { americanTypewriterBold, americanTypewriter } from '../../fonts';

export default theme => ({
  root: {},
  paper: {
    [theme.breakpoints.up('md')]: {
      padding: '0 50px',
      maxWidth: '80%'
    }
  },
  title: {
    ...americanTypewriterBold,
    padding: '100px 50px 0 50px',
    fontSize: 36,
    marginBottom: 30,
    [theme.breakpoints.down('md')]: {
      paddingTop: 50
    }
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  content: {
    padding: 0
  },
  md: {
    ...americanTypewriter,
    padding: '0 50px',
    fontSize: 24,
    height: '50vh',
    overflow: 'hidden',
    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0))',
    transition: 'all 0.4s',
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
      height: '70vh'
    },

    '&.full': {
      height: '100%',
      overflow: 'auto',
      maskImage: 'none'
    },
    '& h2': {
      fontSize: 22,
      marginTop: 40
    },
    '& a': {
      color: 'inherit'
    },
    '& p': {
      marginBottom: 35
    }
  },
  button: {
    margin: 'auto',
    display: 'block',
    backgroundColor: '#97eed0',
    padding: '0 30px',
    top: -70,
    '&.full': {
      display: 'none'
    }
  },
  buttonLabel: {
    ...americanTypewriter,
    fontSize: 22
  }
});
