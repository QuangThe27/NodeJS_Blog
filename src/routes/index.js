// import các routes được tách riêng biệt vào
const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');

// Gọi lại hàm để chạy routes
function route(app) {
    // Khi gọi /news thì gọi đến newsRouter, routes/news.js
    app.use('/news', newsRouter);
    // (1) Khi url có /courses -> chuyền đến coursesRouter
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);
}

module.exports = route;
