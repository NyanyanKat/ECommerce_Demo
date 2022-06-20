const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../model/User");
const { auth_session, logged_in } = require("../middleware/auth")

const { body, validationResult } = require("express-validator");

const fs = require("fs");


router.post("/user/login", async (req, resp) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user || !username || !password || (! await bcrypt.compare(password, user.password)))
            console.log("Email or Password is incorrect!!!");
        else {
            req.session.username = username;
            resp.setHeader("SessionId", req.session.id);
            resp.setHeader("Sesson", req.session);
            resp.cookie(req.session);

            console.log("Successfully Logged In.");
            isLoggedIn = true;
            resp.status(200);
            resp.redirect("/order");
        }
    } catch (e) {
        console.log(e);
        resp.status(401).send({ errorMsg: e.message, redirect: "/login" });
    }
});


router.post("/user/register", body('email').isEmail(), async (req, resp) => {
    const errors = validationResult(req);

    try {
        const { username, email, password } = req.body;
        const user = await User.findOne({ username });
        const useremail = await User.findOne({ email });
        if (!username || !password || !email)
            console.log("Missing username , email, or password. Try again.");
        else if (!errors.isEmpty() && errors.errors[0].param === 'email') {
            console.log('Invalid email format. Please try again.');
        }
        else if (user || useremail) console.log("Username or email already exists. Try again.");
        else {
            req.body.password = await bcrypt.hash(req.body.password, Number(process.env.SALT));
            await User.create(req.body);
            console.log("Successfully Registered. Please log in.");
            resp.status(201);
            resp.redirect("/login");
        }
    } catch (e) {
        console.log(e);
        resp.status(400).send(e);
    }
});

router.get("/logout", auth_session, (req, resp) => {

    req.session.destroy();
    resp.clearCookie();
    console.log("Successfully logged out!!");
    resp.status(202);
    resp.redirect("/home");
});


router.get("/delete", async (req, resp) => {
    await User.deleteMany();
    resp.send("Deleting User database");
})



module.exports = router;