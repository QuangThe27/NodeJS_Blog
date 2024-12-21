const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

// func controcter
class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        // Ở courses.js đặt là /:slug thì ở dưới dùng là slug
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                // res.json(course);
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }

    // [GET] /courses/create
    create(req, res, next) {
        // res.send('Create!!!');
        res.render('courses/create');
    }

    // [POST] /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save() // Lưu
            .then(() => res.redirect('/')) // thành công về trang chủ
            .catch((error) => {});
    }
}

module.exports = new CourseController();
