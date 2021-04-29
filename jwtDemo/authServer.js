require('dotenv').config()
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

//handle the data that is passed inside req.body
app.use(express.json())


function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    if(token == null)
        return res.sendStatus(401)
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if(err) return res.sendStatus(403)

        req.user = user
        next()

    })
    
}

refreshTokens = []

app.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if(refreshToken == null)
        return res.sendStatus(401)

    if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403)

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user)=>{
        if(err) return res.sendStatus(403)

        const accessToken = generateAccessToken({name: user.name})

        res.json({accessToken: accessToken})
    })
})

//creating and sending the token to the client
app.post('/login', (req, res)=>{
    //Authenticate the user

    const username = req.body.username
    const user = {name: username}

    const accessToken = generateAccessToken(user)
    const refeshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    refreshTokens.push(refeshToken)
    res.json({accessToken: accessToken, refeshToken: refeshToken})
})


function generateAccessToken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'25s'})
}

app.listen(4000)