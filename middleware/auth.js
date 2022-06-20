const fs = require('fs');

const auth_session = (req, res, next) => {
    console.log(req.session);
    if (!req.session.username) {
        res.redirect("/login");
        console.log("Invalid Session! Redirecting to login page");
    }
    else next();
};

const logged_in = (req, res, next) => {
    if (req.session.username) {
        res.redirect("/order");
        console.log("Already logged in. Redirecting to order page");
    }
    else {
        console.log("not logged in");
        next();
    }
};

module.exports = {auth_session, logged_in};