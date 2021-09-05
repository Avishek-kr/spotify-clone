require('dotenv').config()
const express= require('express');
const querystring=require('querystring');
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

/**
 * Generate a random string containing numbers and letters
 * @param {number} length The length of the string
 * @returns {string} The generated string 
 */

const generatedRandomString = length =>{
    let text= '';
    const possible= 
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(let i=0; i<length; i++){
        text += possible.charAt(Math.floor(Math.random()* possible.length))
    }
    return text;
}

const stateKey= 'spotify_auth_state';

app.get('/login',(req, res)=>{
    const state= generatedRandomString(16);
    res.cookie(stateKey, state);

    const scope = 'user-read-private user-read-email';

    const queryParams= querystring.stringify({
       client_id: CLIENT_ID,
       response_type: 'code',
       redirect_uri: REDIRECT_URI,
       state: state,
       scope: scope
    })
    res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});

app.listen(port, ()=>{
    console.log(`Express app listening at http://localhost:${port}`);
});