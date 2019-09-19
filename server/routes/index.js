const express = require('express');
const api = express();

const postsRouter = require('./posts');

api.use('/posts', postsRouter)

module.exports = api;
