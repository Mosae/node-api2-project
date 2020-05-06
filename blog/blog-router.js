const express = require('express');
const Blog = require('../data/db.js');
const router = express.Router();

//Get all posts
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
//get posts by id
router.get('/:id', (req, res) => {
	Blog.findById(req.params.id).then((post) => {
		if (post) {
			res.status(200).json(post);
		} else {
			res.status(404).json({ message: 'Post not found' });
		}
	});
});

//add post to list
router.post('/', (req, res) => {
	Blog.insert(req.body)
		.then((blog) => {
			res.status(201).json(blog);
		})
		.catch((error) => {
			console.log(error);
			res.status(400).json({
				errorMessage: 'Please provide title and contents for the post.',
			});
		});
});

//edit post using id
router.put('/:id', (req, res) => {
	const changes = req.body;
	Blog.update(req.params.id, changes)
		.then((blog) => {
			if (blog) {
				res.status(200).json(blog);
			} else {
				res.status(400).json({ message: 'blog cant be found' });
			}
		})
		.catch((error) => {
			res
				.status(404)
				.json({ message: 'The post with the specified ID does not exist.' });
		});
});

module.exports = router;
