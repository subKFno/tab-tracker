console.log("hello backend");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config/config");
const { sequelize } = require("./models");
const routes = require("./routes");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

routes(app);

sequelize.sync().then(() => {
    app.listen(config.port);
    console.log(`Server started on port ${config.port}`);
});
