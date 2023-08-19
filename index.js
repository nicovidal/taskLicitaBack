const express=require('express')
require('dotenv').config();
const { dbConnection } = require('./database/config');


const app = express();

//database
dbConnection();

app.listen(process.env.PORT,()=>{
    console.log(`Servidor en puerto ${process.env.PORT}`)
})

app.use(express.static('public'))