import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import LithoItem from '../../components/LithoItem';

import styles from './styles';
import Layout from '../Layout';

const LithoList = ({ classes }) => (
  <Layout withTitle withNav>
    <div className={classes.list}>
      <LithoItem
        litho={{
          name: 'Name',
          caption: 'Caption',
          description: 'Description',
          metadata: { Year: 2018 },
          images: []
        }}
      />
      <LithoItem
        litho={{
          name: 'Name',
          caption: 'Caption',
          description: 'Description',
          metadata: { Year: 2018 },
          images: []
        }}
      />
    </div>
  </Layout>
);

LithoList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LithoList);
