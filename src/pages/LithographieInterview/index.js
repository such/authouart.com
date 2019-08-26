import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactMD from 'react-markdown';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRightAlt';

import LithoPicture from '../../components/LithoPicture';
import Lithographies from '../Lithographies';

import litho1 from '../../assets/litho-1.jpg';
import litho2 from '../../assets/litho-2.jpg';
import litho3 from '../../assets/litho-3.jpg';
import litho4 from '../../assets/litho-4.jpg';
import litho5 from '../../assets/litho-5.jpg';
import litho6 from '../../assets/litho-6.jpg';
import litho7 from '../../assets/litho-7.jpg';

import Layout from '../Layout';
import interview from './interview.md';
import styles from './styles';

const LithographieInterview = React.forwardRef(({ classes }, ref) => {
  const [content, setContent] = useState(null);
  const [lithographiesOpen, setLithographiesOpen] = useState(false);

  useEffect(() => {
    fetch(interview)
      .then(response => response.text())
      .then(text => setContent(text));
  }, []);
  return (
    <Layout classes={{ root: classes.root }} ref={ref}>
      <Lithographies
        onClose={() => setLithographiesOpen(false)}
        open={lithographiesOpen}
      />
      <LithoPicture
        src={litho1}
        title="1. Authouart, séance de croquis à vue, New York"
        width={518}
      />
      <LithoPicture
        src={litho2}
        title="2. Coffee shop, Aquarelle"
        width={368}
      />
      <LithoPicture
        src={litho3}
        title="3. Authouart, Atelier Arts Lithos, 1978<br />
        1ère lithographie Le manège de l’Avenir (en arrière-plan)"
        width={344}
      />
      <LithoPicture
        src={litho4}
        title="4. Geneviève Authouart, Atelier Bellini, 1979"
        width={458}
      />
      <LithoPicture
        src={litho5}
        title="5. Décor du show d’Eddy Mitchell"
        width={236}
      />
      <LithoPicture
        src={litho6}
        title="6. Authouart, décor pour la pièce de théâtre La Station Service de Gildas Bourdet, 1982"
        width={683}
      />
      <LithoPicture
        src={litho7}
        title="7. Authouart, devant sa presse lithographique"
        width={389}
      />
      <div className={classes.buttons}>
        <Button
          classes={{ root: classes.button }}
          onClick={() => setLithographiesOpen(true)}
        >
          <ArrowRightIcon />
          <span className={classes.buttonLabel}>Les lithographies</span>
        </Button>
        <Button classes={{ root: classes.button }}>
          <ArrowRightIcon />
          <span className={classes.buttonLabel}>
            Qu&apos;est-ce que c&apos;est ?
          </span>
        </Button>
      </div>
      <ReactMD
        source={content}
        escapeHtml={false}
        className={classes.interview}
      />
    </Layout>
  );
});

LithographieInterview.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LithographieInterview);
