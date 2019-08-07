export default () => ({
  root: {
    height: '100vh',
    width: '100%',
    padding: '2% 10%',
    display: 'flex',
    position: 'relative'
  },
  playlist: {
    position: 'absolute',
    right: '10%',
    bottom: 50,
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 700,
    overflow: 'auto',
    padding: '0 20px'
  },
  preview: {
    boxShadow: '3 1 9 rgba(0, 0, 0, 0.7)'
  },
  tv: {
    zIndex: 2,
    width: 900,
    position: 'absolute',
    pointerEvents: 'none',
    bottom: 0,
    left: '14%'
  },
  iframe: {
    left: 'calc(14% + 80px)',
    bottom: 235,
    position: 'absolute'
  }
});
