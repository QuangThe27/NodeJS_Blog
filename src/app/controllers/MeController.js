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

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        // Hiển thị với khóa học đã xóa trong thùng giác có deleted: true
        Course.findWithDeleted({ deleted: true })
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
