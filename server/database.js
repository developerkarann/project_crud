require('dotenv').config()
const mongoose = require("mongoose");

const Url = process.env.MONGO_URL;

mongoose.connect(Url)
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((error) => {
        console.log("Database not conneced", error.message);
    });
