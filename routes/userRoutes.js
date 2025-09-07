const express= require("express");
const router= express.Router();
const User= require("../models/user.js");

router.get('/api/users', async (req, res) => {
      try {
        const users= await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send("An error occured in fetching the users")
    }
});