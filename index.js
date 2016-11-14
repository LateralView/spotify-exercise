const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const commentController = require('./server/comment');
const app = express();

// Set default promise as provider and connect mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/spotifyzier');

app.use(cors());
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/comments', commentController);
app.listen((process.env.APP_PORT || 3000), () => {
  console.log('SERVER: 127.0.0.1:' + (process.env.APP_PORT || '3000'));
});
