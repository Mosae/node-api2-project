const express = require('express');
const Blog = require('../data/db.js');
const router = express.Router();
// const server = express();

// router.get('/', (req, res) => {
// 	res.send(`
//       <h2>Lambda Hubs API</h>
//       <p>Welcome to the Lambda Hubs API</p>
//     `);
// });
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

module.exports = router;
