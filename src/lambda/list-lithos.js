/* eslint-disable no-console */
import mockedData from './mocks/list-lithos.mock.json';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const mock = process.env.MOCK;

console.log(mock);

export async function handler() {
  try {
    if (mock) {
      return {
        statusCode: 200,
        body: JSON.stringify({ data: mockedData })
      };
    }

    const products = await stripe.products.list();

    return {
      statusCode: 200,
      body: JSON.stringify({ data: products.data })
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message })
    };
  }
}
