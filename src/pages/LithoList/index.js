import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import LithoItem from '../../components/LithoItem';

import styles from './styles';
import Layout from '../Layout';
import useFetchLambda from '../../hooks/useFetchLambda';

const LithoList = ({ classes }) => {
  const [lithos] = useFetchLambda('list-lithos');

  if (!lithos) {
    return null;
  }

  return (
    <Layout withTitle withNav>
      <div className={classes.list}>
        {lithos.map(l => (
          <LithoItem key={l.id} litho={l} />
        ))}
      </div>
    </Layout>
  );
};

LithoList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LithoList);
