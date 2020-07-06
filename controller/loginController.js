function showLoginPage(app) {
    app.get("/", function(req, res) {
        res.render("login");
    })
}

module.exports = {
    showLoginPage: showLoginPage
}