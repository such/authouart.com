import siteIntro from './assets/site-intro.gif';
import siteIntroWebp from './assets/site-intro.webp';
import { webpBackgroundImage } from './lib/webp';

export default () => ({
  loading: {
    background: `center / contain no-repeat #FFFFFF`,
    ...webpBackgroundImage(siteIntro, siteIntroWebp),
    width: '100%',
    height: '100%',
    zIndex: 40,
    position: 'relative'
  },
  content: {
    '&.loading': {
      opacity: 0
    },
    opacity: 1,
    transition: 'opacity 1s ease-in-out'
  }
});
