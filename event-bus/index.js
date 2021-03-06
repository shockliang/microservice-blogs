const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
  const event = req.body;
  events.push(event);

  axios.post('http://posts-clusterip-service:4000/events', event);  // post service
  axios.post('http://comments-service:5000/events', event);  // comment service
  axios.post('http://query-service:5555/events', event);  // query service
  axios.post('http://moderation-service:5888/events', event);  // moderation service

  res.send({status: 'OK'});
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(7000, () => {
  console.log('Listen on port 7000');
})