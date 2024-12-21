const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

// func controcter
class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        // res.send('MeController!!!');
        // res.render('me/stored-courses');

        Course.find({})
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
