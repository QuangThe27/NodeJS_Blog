// func controcter
class SiteController {
    // Get /
    index(req, res) {
        res.render('home');
    }

    // GET /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();