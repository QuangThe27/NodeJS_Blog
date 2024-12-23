const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

// func controcter
class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        // xử lý bất đồng bộ
        Promise.all([Course.find({}), Course.countDocumentsWithDeleted({ deleted: true })])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);

        // Course.countDocumentsWithDeleted({ deleted: true })
        //     .then((deletedCount) => {
        //         console.log('Số khóa học đã xóa: ', deletedCount);
        //     })
        //     .catch(next);

        // Course.find({})
        //     .then((courses) =>
        //         res.render('me/stored-courses', {
        //             courses: mutipleMongooseToObject(courses),
        //         }),
        //     )
        //     .catch(next);
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
