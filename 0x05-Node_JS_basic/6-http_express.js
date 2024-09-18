const express = require('express');

const application = express();
const PORT = 1245;

application.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

application.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = application;
