import siteIntro from './assets/site-intro.gif';

export default () => ({
  loading: {
    background: `center / contain no-repeat url(${siteIntro}), #FFFFFF`,
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
