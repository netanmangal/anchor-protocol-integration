const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("./src/initiate-db.js");
const { anchorEarn } = require("./src/initiate-anchor.js");
const { anchorRoutes } = require("./src/routes/anchor.js");
const { userRoutes } = require("./src/routes/user.js");

const app = express();

app.use(express.json());        //for parsing application/json
app.use(express.urlencoded({    //for parsing application/x-www-form-urlencoded
    "extended": true
}));
app.use(morgan('tiny'));
app.use(cors());

app.get("/", (req, res, next) => {
    res.status(200).send("We are on homepage");
});

app.use("/anchor", anchorRoutes);
app.use("/user", userRoutes);

app.listen(3001, async () => {
    console.log("Listening on port 3001");
});