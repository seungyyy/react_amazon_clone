const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require('stripe')(
  'sk_test_51L6FL1BuvVzmK9LpL9m5TirtWDUaisGVSK64cyz47myrLFRPXewvr9BfvF9bzs2KqasizJwoRAIHMZASCsg2VOOz000K4jY8da'
);
const cookie = require('cookie');
const { response } = require("express");
// API

// -App config 
const app = express();

const corsOption = {
  origin: 'http://localhost:5001',
  credentials: true,
}

// -middlewares
app.use(cors(corsOption));
app.use(express.json())
// -API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => { 
  const total = request.query.total;
  console.log('payment request amount', total)
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  });
  
  // ok - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})
// -Listen command
exports.api = functions.https.onRequest(app)

// example endpoint
// http://localhost:5001/challenge-d087a/us-central1/api