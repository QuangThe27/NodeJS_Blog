// func controcter
class NewsController {
    // Get /news
    index(req, res) {
        res.render('news');
    }

    // GET /news/:slug (các trang con liên quan đến trang news)
    show(req, res) {
        res.send('NEWS DETAIL!!!');
    }
}

module.exports = new NewsController();
