const express = require('express')
const app  = express()
const path = require('path')
require('dotenv').config()
const helmet = require('helmet');
app.use(express.static(path.join(__dirname, "views")));
// const {
//     passport,
//   } = require('./saml-login');
  
app.listen(process.env.PORT, ()=>{
    console.log("Server working at", process.env.PORT)
})