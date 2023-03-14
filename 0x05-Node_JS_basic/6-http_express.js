const express = require('express');

const port = 1245;
const app = express();

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = app;
