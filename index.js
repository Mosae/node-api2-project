const express = require('express');
// const Blog = require('./data/db.js');
const blogRouter = require('./blog/blog-router.js');
const commentRouter = require('./blog/blog-commnets');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
	res.send(`
       <h2>Lambda Blog Post</h>
      
   `);
});

server.use('/api/posts', blogRouter);
server.use('/api/posts/:id/comments', commentRouter);
server.listen(4000, () => {
	console.log('Server up and running');
});
