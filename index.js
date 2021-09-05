const express= require('express');

const app=express();

app.get('/', (req,res)=>{
    // res.send("Hello World!");
    const data= {
        name: 'avishek',
        isAwesome: true
    };
    res.json(data)
});

app.get('/awesome',(req, res)=>{
    const {name, isAwesome} = req.query;
    res.send(`${name} is ${JSON.parse(isAwesome)? 'really': 'not really'} awesome`)
});
const port=8888;

app.listen(port, ()=>{
    console.log(`Express app listening at http://localhost:${port}`);
});