const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    var post = {
        id: crypto.randomUUID(),
        title: req.body.title,
    }

    posts[post.id] = post;
    res.status(201).send(post);
});

app.listen(4000, () => {
   console.log('Listening on port 4000')
});