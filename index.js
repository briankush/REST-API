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
        const users= await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send("An error occured in fetching the users")
    }
});

// fetch a user by id
app.get('/api/user/:id', async (req, res)=>{
    try {
        const {id} = req.params;
        const user= await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send("An error occured in fetching the user")
    }
});

//Create a user
app.post('/api/users', async (req, res)=>{
    try {
        await User.create(req.body);
        res.status(200).send("User created successfully").json(User);
    } catch (error) {
        res.status(500).send("An error occured in Creating the user")
    }
});

// delete user by id
app.delete('/api/user/:id', async (req, res)=>{
    try {
        const {id}= req.params
        await User.findByIdAndDelete(id);
        res.status(200).send("User deleted successfully");
    } catch (error) {
        res.status(500).send("User deletion failed")
    }
});

// delete all users
app.delete('/api/users', async (req, res)=>{
    try {
        await User.deleteMany();
        res.status(200).send("Users deleted successfully");
    } catch (error) {
        res.status(500).send("User deletion failed")
    }
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});