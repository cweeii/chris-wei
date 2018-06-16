const express = require('express');
const helmet = require('helmet');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello Tori! and hi Steph');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
