// Create Web Server
const express = require('express');
const app = express();
// Create Web Server
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Create Web Server
const comments = require('./comments');
app.get('/comments', (req, res) => {
    res.json(comments.getComments());
});
app.post('/comments', (req, res) => {
    comments.addComment(req.body);
    res.json(comments.getComments());
});
app.listen(3001, () => {
    console.log('Web Server is running on port 3001!');
});
