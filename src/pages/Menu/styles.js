import bg from '../../assets/home-background-nb.png';
import bgLitho from '../../assets/home-background-lithographie.png';
import bgArtiste from '../../assets/home-background-artiste-big.png';
import { avantGardeBold } from '../../fonts';

export default () => ({
  inner: {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top left',
    paddingTop: '77.7%',
    marginTop: -142,
    zIndex: 0
  },
  innerButton: {
    cursor: 'pointer',
    height: '100%',
    width: '100%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    opacity: 0,
    backgroundPosition: 'top left',
    boxSizing: 'content-box',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    '&:hover': {
      opacity: 1
    }
  },
  litho: {
    backgroundImage: `url(${bgLitho})`,
    // Generated with: https://bennettfeely.com/clippy/
    clipPath:
      'polygon(100% 0%, 0% 0%, 0% 100%, 12% 92%, 31% 91%, 36% 71%, 44% 67%, 50% 62%, 52% 56%, 52% 54%, 66% 54%, 68% 49%, 67% 44%, 60% 44%, 60% 24%, 97% 25%, 96% 14%)'
  },
  artiste: {
    backgroundImage: `url(${bgArtiste})`,
    // Generated with: https://bennettfeely.com/clippy/
    clipPath:
      'polygon(100% 13%, 89% 13%, 89% 25%, 57% 24%, 57% 44%, 63% 45%, 63% 53%, 50% 53%, 50% 56%, 48% 56%, 47% 61%, 43% 61%, 38% 65%, 30% 74%, 30% 81%, 30% 87%, 31% 98%, 36% 100%, 39% 92%, 42% 92%, 42% 95%, 46% 96%, 48% 94%, 58% 92%, 98% 92%, 99% 68%)'
  },
  social: {
    display: 'flex',
    position: 'absolute',
    transform: 'rotate(-90deg)',
    marginLeft: -240,
    top: '50%'
  },
  socialButton: {
    ...avantGardeBold,
    marginRight: 20
  },
  socialPicto: {
    width: 20
  }
});
