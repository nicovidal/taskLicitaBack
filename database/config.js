const mongoose=require('mongoose');

const dbConnection=async()=>{
    try{

        await mongoose.connect(process.env.DB_CONECTION);

        console.log('db online')

    }catch(error){
        console.log(error)
        throw new Error('Error al iniciar bd')
    }
}

module.exports={
    dbConnection
}