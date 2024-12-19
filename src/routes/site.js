// Nạp
const express = require('express');
const router = express.Router();

// Gọi đến siteController để lấy đường dẫn như Get, Post
const siteController = require('../app/controllers/SiteController');

//truyền đến controller/newController
router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;
