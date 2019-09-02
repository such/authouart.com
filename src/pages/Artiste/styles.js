import cinema from '../../assets/cinema.png';
import cinemaWebp from '../../assets/cinema.webp';
import { webpBackgroundImage } from '../../lib/webp';

export default {
  root: {
    height: '100vh',
    width: '100%',
    padding: 0,
    display: 'flex',
    position: 'relative'
  },
  inner: {
    display: 'flex'
  },
  main: {
    ...webpBackgroundImage(cinema, cinemaWebp),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    pointerEvents: 'none',
    zIndex: 2,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  playlist: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '80%',
    overflowY: 'scroll',
    pointerEvents: 'all'
  },
  preview: {
    boxShadow: '9px 1px 27px rgba(0, 0, 0, 0.7)',
    border: '2px solid #FFFFFF',
    padding: 0,
    marginBottom: 10
  },
  iframe: {
    left: '13%',
    top: '13%',
    width: '75%',
    height: '70%',
    position: 'absolute'
  }
};
