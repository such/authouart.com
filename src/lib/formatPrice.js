export default priceInCents =>
  new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(
    priceInCents / 100
  );
