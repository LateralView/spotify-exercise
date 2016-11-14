const cors = require('cors');
const express = require('express');
const Comment = require('./models/comment');
const router = express.Router();

router.options('*', cors());

router.get('/:albumId', (req, res) => {
  Comment.find({albumId: req.params.albumId})
  .then(
    (docs) => res.status(200).json(docs),
    (err) => res.status(400).send(err)
  );
});

router.post('/', (req, res) => {
  let comment = new Comment(req.body);

  comment.save()
  .then(
    (commentSaved) => res.status(200).json(commentSaved),
    (err) => res.status(400).send(err)
  );
});

module.exports = router;
