const mongoose = require('mongoose');
const Course = require('../models/Course');

// func controcter
class SiteController {
    // Get /
    async index(req, res) {
        try {
            const courses = await Course.find({});
            res.json(courses); // Xử lý thành công
        } catch (err) {
            res.status(400).json({ error: 'ERROR!!!' }); // Xử lý lỗi
        }
    }

    // GET /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
