import bg from '../../assets/home-background-nb.png';
import bgWebp from '../../assets/home-background-nb.webp';
import bgLitho from '../../assets/home-background-lithographie.png';
import bgLithoWebp from '../../assets/home-background-lithographie.webp';
import bgArtiste from '../../assets/home-background-artiste-big.png';
import bgArtisteWebp from '../../assets/home-background-artiste-big.webp';
import { avantGardeBold } from '../../fonts';
import { webpBackgroundImage } from '../../lib/webp';

export default theme => ({
  root: {
    margin: 'auto',
    height: '100vh'
  },
  layoutContent: {
    ...webpBackgroundImage(bg, bgWebp),
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    marginTop: -172,
    zIndex: 0,
    height: '100%',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: -100
    }
  },
  layoutInner: {
    height: '100%'
  },
  innerButton: {
    cursor: 'pointer',
    height: '100%',
    width: '100%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    opacity: 0,
    backgroundPosition: 'top center',
    boxSizing: 'content-box',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    '&:hover': {
      opacity: 1
    },
    [theme.breakpoints.down('md')]: {
      opacity: 1
    }
  },
  litho: {
    ...webpBackgroundImage(bgLitho, bgLithoWebp),
    // Generated with: https://bennettfeely.com/clippy/
    clipPath:
      'polygon(100% 0%, 0% 0%, 0% 100%, 12% 92%, 31% 91%, 36% 71%, 44% 67%, 50% 62%, 52% 56%, 52% 54%, 66% 54%, 68% 49%, 67% 44%, 60% 44%, 60% 24%, 97% 25%, 96% 14%)',
    WebkitClipPath:
      'polygon(100% 0%, 0% 0%, 0% 100%, 12% 92%, 31% 91%, 36% 71%, 44% 67%, 50% 62%, 52% 56%, 52% 54%, 66% 54%, 68% 49%, 67% 44%, 60% 44%, 60% 24%, 97% 25%, 96% 14%)'
  },
  artiste: {
    ...webpBackgroundImage(bgArtiste, bgArtisteWebp),
    // Generated with: https://bennettfeely.com/clippy/
    clipPath:
      'polygon(100% 13%, 89% 13%, 89% 25%, 57% 24%, 57% 44%, 63% 45%, 63% 53%, 50% 53%, 50% 56%, 48% 56%, 47% 61%, 43% 61%, 38% 65%, 30% 74%, 30% 81%, 30% 87%, 31% 98%, 36% 100%, 39% 92%, 42% 92%, 42% 95%, 46% 96%, 48% 94%, 58% 92%, 98% 92%, 99% 68%)',
    WebkitClipPath:
      'polygon(100% 13%, 89% 13%, 89% 25%, 57% 24%, 57% 44%, 63% 45%, 63% 53%, 50% 53%, 50% 56%, 48% 56%, 47% 61%, 43% 61%, 38% 65%, 30% 74%, 30% 81%, 30% 87%, 31% 98%, 36% 100%, 39% 92%, 42% 92%, 42% 95%, 46% 96%, 48% 94%, 58% 92%, 98% 92%, 99% 68%)'
  },
  social: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'absolute',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      transform: 'rotate(-90deg)',
      marginLeft: -240,
      top: '50%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      top: '100%'
    }
  },
  socialButton: {
    ...avantGardeBold,
    marginRight: 20,
    [theme.breakpoints.down('md')]: {
      fontSize: 13
    }
  },
  socialPicto: {
    width: 20,
    [theme.breakpoints.down('md')]: {
      width: 16
    }
  }
});
