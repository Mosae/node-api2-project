const express = require('express');
const Comment = require('../data/db.js');
const router = express.Router();

// router.get('/', (req, res) => {
// 	Comment.findPostComments(postId);
// 	console
// 		.log(postId)
// 		.then((postId) => {
// 			res.status(200).json(postId);
// 		})
// 		.catch((err) => {
// 			res.status(500).json({ message: 'Error getting comment' });
// 		});
// });

module.exports = router;
