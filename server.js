require("dotenv").config();
const app = require("./app.js");
const sequelize = require("./config/db.js");

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
    app.listen((PORT), () => {
        console.log(`listing to port ${PORT}`);
    });
}).catch(err => {
    console.error(err);
    process.exit(1);
});