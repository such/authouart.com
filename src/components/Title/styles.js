import { blue } from '../../colors';
import { avantGardeBold } from '../../fonts';

export default () => ({
  root: {
    marginLeft: '-7%',
    zIndex: 20,
    position: 'relative',
    marginBottom: 12,
    textDecoration: 'none',
    display: 'block'
  },
  title: {
    ...avantGardeBold,
    textShadow: '5px 5px 0 #3E4C94',
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: '#933E73',
    zIndex: 10,
    color: '#9CF8D0',
    fontSize: 100,
    textTransform: 'uppercase',
    lineHeight: 1.1
  },
  titleA: {
    MozFontFeatureSettings: '"salt"',
    WebkitFontFeatureSettings: '"salt"',
    fontFeatureSettings: '"salt"'
  },
  subtitle: {
    ...avantGardeBold,
    position: 'relative',
    color: '#F5F89C',
    fontSize: 30,
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: blue,
    textShadow: `2px 2px 0 ${blue}`,
    zIndex: 10,
    left: 60
  }
});
