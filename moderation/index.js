const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
  const {type, data} = req.body;

  if(type === 'CommentCreated') {
    const status = data.content.includes('orange') ? 'rejected' : 'approved';

    await axios.post('http://localhost:7000/events', {
      type: 'CommentModeration',
      data: {
        id: data.id,
        postId: data.postId,
        content: data.content,
        status
      }
    });
  }

  res.send({});
});

app.listen(5888, () => {
  console.log('Listen port on 5888');
});