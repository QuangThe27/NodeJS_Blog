// Nạp
const express = require('express');
const router = express.Router();

// Gọi đến siteController để lấy đường dẫn như Get, Post
const siteController = require('../app/controllers/SiteController');

//truyền đến controller/newController
router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;
