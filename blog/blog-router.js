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
router.get('/api/posts', (reg, res) => {
	res.send(`
    <h2>Lambda Blog Posts</h>

  `);
});

module.exports = router;
