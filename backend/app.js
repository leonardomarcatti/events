const bodyParser = require('body-parser');
const express = require('express');

const eventRoutes = require('./routes/events');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/events', eventRoutes);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong.';
  res.status(status).json({ message: message });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, '0.0.0.0', () => {
   console.log(`Backend rodando em http://0.0.0.0:${PORT}`);
});
