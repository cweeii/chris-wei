const path = require('path');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.static('dist'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
