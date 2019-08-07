import React, { useRef } from 'react';

import Lithographie from '../Lithographie';
import Artiste from '../Artiste';
import Menu from '../Menu';

const scrollToRef = ref =>
  window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop });

const Home = () => {
  const litho = useRef(null);
  const artiste = useRef(null);

  return (
    <>
      <Menu
        scrollToLitho={() => scrollToRef(litho)}
        scrollToArtiste={() => scrollToRef(artiste)}
      />
      <Lithographie ref={litho} />
      <Artiste ref={artiste} />
    </>
  );
};

export default Home;
