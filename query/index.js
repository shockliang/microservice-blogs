const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/posts', (req, res) => {});

app.post('/events', (req, res) => {

});

app.listen(6000, () => {
  console.log('Listen on port 6000');
})