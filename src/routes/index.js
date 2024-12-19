// import các routes được tách riêng biệt vào
const newsRouter = require('./news');
const siteRouter = require('./site');

// Gọi lại hàm để chạy routes
function route(app) {
    // Khi gọi /news thì gọi đến newsRouter, routes/news.js
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = route;
