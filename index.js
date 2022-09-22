const express = require('express');
const dotenv = require('dotenv');


const app = express();
const router = require('./app/router');
app.use(express.urlencoded({ extended: true }));

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen (PORT, () => {
  console.log(`listening on port ${PORT}`)
})