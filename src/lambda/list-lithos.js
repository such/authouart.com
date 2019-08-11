/* eslint-disable no-console */

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// {"products":[{"id":"prod_FbZfYqWnScBOBH","object":"product","active":true,"attributes":[],"caption":"Lithographie originale, 66 x 51 cm","created":1565550927,"deactivate_on":[],"description":"J’ai repris le thème sur la fin des cabines téléphoniques que j’avais traité dans ma série Out of Order afin d'en imaginer une illustration de la fameuse chanson des Rolling Stones.","images":[],"livemode":false,"metadata":{"Year":"2018"},"name":"Miss you","package_dimensions":null,"shippable":true,"type":"good","updated":1565550961,"url":""}

export async function handler() {
  try {
    const products = await stripe.products.list();

    return {
      statusCode: 200,
      body: JSON.stringify({ products: products.data })
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message })
    };
  }
}
