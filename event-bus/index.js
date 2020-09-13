const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', ((req, res) => {
  const event = req.body;

  axios.post('http://localhost:4000/events', event);  // post service
  axios.post('http://localhost:5000/events', event);  // comment service
  axios.post('http://localhost:5555/events', event);  // query service

  res.send({status: 'OK'});
}));

app.listen(7000, () => {
  console.log('Listen on port 7000');
})