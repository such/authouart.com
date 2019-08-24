/* eslint-disable no-console */
import mockedData from './mocks/list-lithos.mock.json';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const mock = process.env.MOCK;

console.log(mock);

export async function handler() {
  try {
    if (mock === 'true') {
      return {
        statusCode: 200,
        body: JSON.stringify({ data: mockedData })
      };
    }

    const [skus, products] = await Promise.all([
      stripe.skus.list({ limit: 100 }),
      stripe.products.list({ limit: 100 })
    ]);

    const data = skus.data.map(sku => {
      sku.product = products.data.find(p => p.id === sku.product);
      return sku;
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ data })
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message })
    };
  }
}
