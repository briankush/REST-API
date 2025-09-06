const express = require("express");
const connectDB = require("./configs/db.js")
const User= require("./models/user.js");
const PORT = 3000;

const app = express();
app.use(express.json());
connectDB();

// routes
app.get('/', (req, res)=>{
    res.send("Hello from POST API");
});


// fetch all users
app.get('/api/users', async (req, res)=>{
    try {
        await User.find();
        res.status(200).json(User);
    } catch (error) {
        res.status(500).send("An error occured in fetching the users")
    }
});

// fetch a user by id
app.get('/api/user/:id', async (req, res)=>{
    try {
        const id = req.params;
        await User.findById(id);
        res.status(200).json(User);
    } catch (error) {
        res.status(500).send("An error occured in fetching the users")
    }
});

//Create a user
app.post('/api/users', async (req, res)=>{
    try {
         await User.create(req.body);
        res.status(200).json(User);
    } catch (error) {
        res.status(500).send("An error occured in fetching the users")
    }
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});