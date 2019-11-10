import { americanTypewriterBold, americanTypewriter } from '../../fonts';

export default () => ({
  paper: {
    maxWidth: 600
  },
  litho: {
    ...americanTypewriter,
    display: 'flex',
    fontSize: 16,
    marginBottom: 45
  },
  pictureContainer: {
    width: 100,
    textAlign: 'center'
  },
  picture: {
    maxHeight: 100,
    maxWidth: 100
  },
  title: {
    ...americanTypewriterBold
  },
  description: {
    marginLeft: 38,
    display: 'flex',
    flexDirection: 'column'
  }
});
