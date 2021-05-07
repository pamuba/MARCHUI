require('dotenv').config()

const express = require('express')
const axios = require('axios')

const clientID = '01fc32d2537ac39b8ad7'
const clientSecret = '2861fcb5dbb258694a0808cb10a7581380b010dd'
const app = express();

app.set('view engine', 'ejs')
var access_token = ""

app.get('/', function(req, res){
    res.render('pages/index', {client_id:clientID});
});
const port = process.env.PORT || 2400;
app.listen(port, () => console.log('App listening @2400'))

app.get('/github/callback', (req, res) => {

    const requestToken = req.query.code

    axios({
        method: 'post',
        url:`https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
        headers:{
            accept:'application/json'
        }

    }).then((response) => {
        access_token = response.data.access_token
        res.redirect('/success');
    });
});

app.get('/success', (req, res)=>{
    axios({
        method:'get',
        url:`https://api.github.com/user`, 
        headers:{
            Authorization:'token '+access_token
        }
    }).then((response)=>{
        res.render('pages/success', {userData: response.data})
    })
});


