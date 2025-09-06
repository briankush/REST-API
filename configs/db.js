const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/RESTAPI');
        console.log("Database connected successfully");

    } catch (error) {
        console.error("Database connection failed", error);
        }
};

module.exports = connectDB;
