import {
  americanTypewriterBold,
  americanTypewriter,
  avantGardeBold
} from '../../fonts';
import { blue } from '../../colors';

export default () => ({
  root: {
    width: '100%',
    height: '100vh',
    padding: '2% 20%',
    position: 'relative',
    overflow: 'hidden'
  },
  inner: {
    display: 'flex'
  },
  interview: {
    columnCount: 3,
    ...americanTypewriter,
    fontSize: 12,
    color: blue,
    lineHeight: 1.4,

    '& h2': {
      ...americanTypewriterBold,
      fontSize: 12,
      columnSpan: 'all',
      marginBottom: 12,
      textTransform: 'uppercase'
    }
  },
  buttons: {
    position: 'relative',
    left: '50%',
    height: 150,
    display: 'flex',
    alignItems: 'center'
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
