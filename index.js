const express = require('express');
const database = require('./configs/db.js');
const User= require('./models/user.js')
const PORT= 3000;

const app = express();

// routes
app.get('/', (req, res)=>{
    res.send("Hello from POST API");
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});