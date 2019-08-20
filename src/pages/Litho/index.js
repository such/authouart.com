import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, Breadcrumbs } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useFetchLambda from '../../hooks/useFetchLambda';
import LithoDescription from '../../components/LithoDescription';
import whiteCaddie from '../../assets/white-caddie.png';
import formatPrice from '../../lib/formatPrice';
import StripeContext from '../../contexts/stripe';

import styles from './styles';
import Layout from '../Layout';

const Litho = ({ classes, match }) => {
  const [data] = useFetchLambda('list-lithos');
  const { name } = match.params;
  const { redirectToCheckout } = useContext(StripeContext);
  const [error, setError] = useState(null);

  if (!data) {
    return null;
  }
  const litho = data.find(l => l.product.name === name);

  if (!litho) {
    return null;
  }
  const { product, price, id } = litho;
  const {
    images,
    metadata: { Year }
  } = product;

  const buy = () => {
    redirectToCheckout({
      items: [{ sku: id, quantity: 1 }],
      successUrl: 'https://authouart.fr/success',
      cancelUrl: 'https://authouart.fr/cancel',
      billingAddressCollection: 'required'
    }).then(result => {
      setError(result.error.message);
    });
  };

  return (
    <Layout withNav withTitle>
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <Link to="/">AUTHOUART</Link>
        <Link to="/lithographies">Œuvres</Link>
        <span className={classes.litho}>
          {Year} - {name}
        </span>
      </Breadcrumbs>
      <div className={classes.root}>
        <div
          style={{ backgroundImage: `url(${images[0]})` }}
          className={classes.picture}
          alt={name}
        />
        <div className={classes.content}>
          {error && <span>{error}</span>}
          <LithoDescription
            product={product}
            classes={{ root: classes.description }}
          />
          <div className={classes.buy}>
            <span className={classes.price}>{formatPrice(price)}</span>
            <Button
              onClick={buy}
              classes={{
                root: classes.buyButton,
                label: classes.buyButtonLabel
              }}
            >
              Acheter
              <img src={whiteCaddie} alt="caddie" className={classes.caddie} />
            </Button>
          </div>
          <div className={classes.reinsurance}>
            <h3>AUTHENTIFICATION -</h3>
            <p>
              Signée et numérotée par l’artiste, sous contrôle d’un huissier de
              justice
            </p>
            <h3>PAIEMENT SÉCURISÉ -</h3>
            <p>
              Vous pouvez régler par carte bancaire. Transaction sécurisé par
              validation 3D secure.
            </p>
            <h3>LIVRAISON ASSURÉE -</h3>
            <p>Nous livrons via des transporteurs spécialisés.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Litho.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default withStyles(styles)(Litho);
