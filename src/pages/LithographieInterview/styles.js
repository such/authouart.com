import {
  americanTypewriterBold,
  americanTypewriter,
  avantGardeBold
} from '../../fonts';
import { blue } from '../../colors';

export default theme => ({
  root: {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      padding: '2% 20%',
      height: '100vh'
    },
    [theme.breakpoints.down('md')]: {
      padding: '0 20px'
    }
  },
  inner: {
    display: 'flex'
  },
  interview: {
    ...americanTypewriter,
    columnCount: 3,
    fontSize: 12,
    color: blue,
    lineHeight: 1.4,

    '& h2': {
      ...americanTypewriterBold,
      fontSize: 12,
      columnSpan: 'all',
      marginBottom: 12,
      textTransform: 'uppercase'
    },
    [theme.breakpoints.down('md')]: {
      columnCount: 1
    }
  },
  buttons: {
    position: 'relative',
    left: '50%',
    height: 150,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      left: '20%',
      width: 300
    }
  },
  button: {
    transform: 'rotate(-30deg)',
    marginRight: -50
  },
  buttonLabel: {
    ...avantGardeBold,
    color: blue,
    fontSize: 10
  }
});
