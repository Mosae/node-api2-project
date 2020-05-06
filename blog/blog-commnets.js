const express = require('express');
const Comment = require('../data/db.js');
const router = express.Router();

router.get('/', (req, res) => {
	Comment.findPostComments(req.query)
		.then((comment) => {
			res.status(200).json(comment);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Error getting comment' });
		});
});

module.exports = router;
