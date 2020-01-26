import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Breadcrumbs } from '@material-ui/core';
import { Link } from 'react-router-dom';

import LithoItem from '../../components/LithoItem';

import styles from './styles';
import Layout from '../Layout';
import useFetchLambda from '../../hooks/useFetchLambda';

const Oeuvres = ({ classes }) => {
  const [lithos] = useFetchLambda('list-lithos');

  return (
    <Layout withTitle withNav>
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <Link to="/">AUTHOUART</Link>
        <span>Œuvres</span>
      </Breadcrumbs>
      {lithos && (
        <div className={classes.list}>
          {lithos
            .sort((l, m) => m.product.metadata.year - l.product.metadata.year)
            .map(l => (
              <LithoItem key={l.id} litho={l} />
            ))}
        </div>
      )}
    </Layout>
  );
};

Oeuvres.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Oeuvres);
