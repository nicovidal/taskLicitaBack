const express=require('express')
require('dotenv').config();
const { dbConnection } = require('./database/config');


const app = express();

//database
dbConnection();

app.listen(process.env.PORT,()=>{
    console.log(`Servidor en puerto ${process.env.PORT}`)
})


//Lectura y parseo del body
app.use(express.json())

app.use(express.static('public'))


//routes
app.use('/api/tasks',require('./routes/task'))