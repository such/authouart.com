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

    const [prices, products] = await Promise.all([
      stripe.prices.list({ limit: 100, active: true }),
      stripe.products.list({ limit: 100, active: true })
    ]);

    const data = prices.data
      .map(price => {
        const product = products.data.find(p => p.id === price.product);
        return product ? { ...price, product } : null;
      })
      .filter(Boolean);

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
