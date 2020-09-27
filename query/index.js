const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

const handleEvent = (type, data) => {
  if (type === 'PostCreated') {
    const {id, title} = data;

    posts[id] = {id, title, comments: []};
  }

  if (type === 'CommentCreated') {
    const {id, content, postId, status} = data;
    const post = posts[postId];

    post.comments.push({id, content, status});
  }

  if (type === 'CommentUpdated') {
    const {id, content, postId, status} = data;
    const post = posts[postId];
    const comment = post.comments.find(comment => comment.id === id);

    console.log('CommentUpdated comment', comment);

    comment.status = status;
    comment.content = content;
  }
}

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const {type, data} = req.body;

  handleEvent(type, data);

  res.send({});
});

app.listen(5555, async () => {
  console.log('Listen on port 5555');
  const res = await axios.get('http://event-bus-service:7000/events');

  for (let event of res.data) {
    console.log('Processing event:', event.type);
    handleEvent(event.type, event.data);
  }
});