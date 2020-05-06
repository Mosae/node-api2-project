const express = require('express');
const Blog = require('../data/db.js');
const router = express.Router();

router.get('/', (req, res) => {
	Blog.find(req.query)
		.then((post) => {
			res.status(200).json(post);
		})
		.catch((error) => {
			console.log(err);
			res.status(500).json({ message: 'Error getting posts' });
		});
});
router.get('/:id', (req, res) => {
	Blog.findById(req.params.id).then((post) => {
		if (post) {
			res.status(200).json(post);
		} else {
			res.status(404).json({ message: 'Post not found' });
		}
	});
});

module.exports = router;
