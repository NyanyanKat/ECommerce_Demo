
const app = require("./app");
const port = process.env.PORT || 3000;


require("./db").once('open', () => {
    app.listen(port, () => {
        console.log("server is up " + port);
    });
});
