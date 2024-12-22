const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// courses/create
router.get('/create', courseController.create);

// courses/create
router.post('/store', courseController.store);

router.get('/:id/edit', courseController.edit);

router.put('/:id', courseController.update);

router.delete('/:id', courseController.destroy);

router.get('/:slug', courseController.show);

module.exports = router;
