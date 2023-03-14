const express = require('express');

const port = 7865;
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('Welcome to the payment system'));
app.get('/cart/:id(\\d+)', (req, res) => res.send(`Payment methods for cart ${req.params.id}`));
app.get('/available_payments', (req, res) => res.json({ payment_methods: { credit_cards: true, paypal: false } }));
app.post('/login', (req, res) => {
  let username = "";
  if (req.body.userName) username = req.body.userName;
  res.send(`Welcome ${username}`);
});

app.listen(port, () => console.log(`API available on localhost port ${port}`));

module.exports = app;
