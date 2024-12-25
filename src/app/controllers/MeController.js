const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

// func controcter
class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        // Lấy khóa học trong DB
        let courseQuery = Course.find({});

        // Kiểm tra cái key trong obj có tồn tại không
        if (req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type,
            });
        }

        // xử lý bất đồng bộ
        Promise.all([courseQuery, Course.countDocumentsWithDeleted({ deleted: true })])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: mutipleMongooseToObject(courses),
                });
            })
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
