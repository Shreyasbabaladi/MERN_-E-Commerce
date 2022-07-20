const express = require('express')
const app = express()
const port = 3000


app.get('/login' , (req, res) => res.send('<H1> Shreyas </H1>') )

app.listen(port , () => console.log('server is runing ', port))

const isAdmin = (req, res, next) => {
    console.log("this is passed to isAdmin")
    next();
}

const isLoggedIn = (res, req, next) => {
    console.log("this is admin")
    next()
}


app.get('/admin',isLoggedIn ,isAdmin , (req, res) => res.send('This is admin dashboard'))

app.get('/signup' , (req, res) => res.send('You are signup'))

app.get('/Shreyas' , (req , res) => res.send('Hey i am shreyas looking to work with you'));