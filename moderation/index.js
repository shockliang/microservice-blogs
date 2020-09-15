const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {

});

app.listen(5888, () => {
  console.log('Listen port on 5888');
});