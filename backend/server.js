const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

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

app.listen(3001, async () => {
    console.log("Listening on port 3001");
});