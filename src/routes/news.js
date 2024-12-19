// Nạp
const express = require('express');
const router = express.Router();

// Gọi đến NewsController để lấy đường dẫn như Get, Post
const newsController = require('../app/controllers/NewsController');

//truyền đến controller/newController
router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;
