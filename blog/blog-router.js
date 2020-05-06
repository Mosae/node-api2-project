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
// router.post('/', (req, res) => {
// 	Blog.insert(req.body)
// 		.then((blog) => {
// 			res.status(201).json(blog);
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 			res.status(400).json({
// 				errorMessage: 'Please provide title and contents for the post.',
// 			});
// 		});
// });

router.post('/', (req, res) => {
	//check to see if request had valid body title and content
	if (!req.body.title || !req.body.contents) {
		res.status(400).json({
			errorMessage: 'Please provide title and contents for the post.',
		});
		//if valid we use .insert
	} else {
		Blog.insert(req.body).then((blog) => {
			res.status(201).json({ message: 'Created' });
		});
	}
});
//find comment
router.get('/', (req, res) => {
	Blog.findPostComments(postId).then((comment) => {
		if (post) {
			res.status(200).json(comment);
		} else {
			res.status(404).json({ message: 'Comment cannot be found' });
		}
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

//delete post using id
router.delete('/:id', (req, res) => {
	Blog.remove(req.params.id)
		.then((count) => {
			if (count > 0) {
				res.status(200).json({ message: 'The post was deleted ' });
			} else {
				res
					.status(404)
					.json({ message: 'The post with the specified ID does not exist.' });
			}
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: 'Error removing the post' });
		});
});

module.exports = router;
