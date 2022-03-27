const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI, (e) => {
    if (e) {
        console.log("Error connecting to database.");
        console.log(e);
    } else {
        console.log("Successfully connected to database.");
    }
});