const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// courses/create
router.get('/create', courseController.create);

// courses/create
router.post('/store', courseController.store);

// (2) Khi nhận được :slug -> chuyền đến courseController
router.get('/:slug', courseController.show);

module.exports = router;
