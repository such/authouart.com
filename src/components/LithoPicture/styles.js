import { avantGarde } from '../../fonts';

const randomPercentage = () => `${Math.random() * 80}%`;

export default () => ({
  root: {
    border: 'solid 1px #FFFFFF',
    position: 'absolute',
    backgroundColor: '#000000',
    boxShadow: '9px 0 27px rgba(0, 0, 0, 0.53)',
    cursor: 'move',
    top: randomPercentage,
    left: randomPercentage,
    zIndex: 2
  },
  cursor: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
    width: 20
  },
  title: {
    ...avantGarde,
    color: '#FFFFFF',
    padding: 8,
    fontSize: 10
  },
  picture: {
    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0))',
    WebkitUserDrag: 'none',
    KhtmlUserDrag: 'none',
    MozUserDrag: 'none',
    OUserDrag: 'none',
    userDrag: 'none'
  }
});
