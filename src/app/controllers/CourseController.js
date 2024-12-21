const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

// func controcter
class CourseController {
    // GET /courses/:slug
    show(req, res, next) {
        // Ở courses.js đặt là /:slug thì ở dưới dùng là slug
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                // res.json(course);
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
