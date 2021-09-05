require('dotenv').config()
const express= require('express');
const app=express();
const port=8888;

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

app.get('/', (req,res)=>{
    // res.send("Hello World!");
    const data= {
        name: 'avishek',
        isAwesome: true
    };
    res.json(data)
});

app.get('/login',(req, res)=>{
    res.send("log in to spotify");
});

app.listen(port, ()=>{
    console.log(`Express app listening at http://localhost:${port}`);
});