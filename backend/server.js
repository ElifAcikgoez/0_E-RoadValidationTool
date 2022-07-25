const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.json());
// enable cors for all requests
app.use(cors());
app.use('/', routes);

// connect to mongoDB
mongoose.connect('mongodb://127.0.0.1:27017/data', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to DB');
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server started and listening on port ${PORT} ... `);
  }
});
