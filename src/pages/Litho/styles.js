import { avantGardeBold, avantGarde } from '../../fonts';

export default theme => ({
  root: {
    display: 'flex',
    maxHeight: '80vh',
    margin: 'auto',
    height: '55vh',
    maxWidth: 900,
    [theme.breakpoints.up('md')]: {
      maxWidth: 1200
    }
  },
  breadcrumbs: {
    ...avantGarde,
    color: '#818181',
    fontFamily: 'ITC Avant Garde Std - Bk',
    fontSize: 12,
    marginBottom: 10,
    '& a': {
      color: 'inherit',
      textDecoration: 'none'
    },
    '& .MuiBreadcrumbs-separator': {
      marginLeft: 4,
      marginRight: 4
    }
  },
  picture: {
    width: '50%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right'
  },
  content: {
    width: 360,
    marginLeft: 80,
    display: 'flex',
    flexDirection: 'column',
    borderBottom: '4px solid #f0eded'
  },
  description: {
    width: '80%'
  },
  buy: {
    ...avantGardeBold,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 20,
    color: '#010101',
    marginTop: 50
  },
  buyButton: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    padding: '4px 70px 2px'
  },
  buyButtonLabel: {
    ...avantGarde,
    color: '#fdfdfd'
  },
  caddie: {
    position: 'absolute',
    right: 20,
    height: 16,
    top: 7
  },
  reinsurance: {
    marginTop: 'auto',
    marginBottom: 30,
    width: '80%',
    color: '#000000',
    '& h3': {
      ...avantGardeBold,
      textTransform: 'uppercase',
      fontSize: 16,
      marginBottom: 2
    },
    '& p': {
      ...avantGarde,
      color: '#818181',
      fontSize: 14,
      marginTop: 0
    }
  }
});
