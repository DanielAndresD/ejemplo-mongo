// declarar dependencias 
const express =require('express');
const mongoose= require('mongoose');


//configuraciones
const app=express();
const port=process.env.PORT ||9000;

//validar operacion en el puerto
app.listen(port,()=> console.log("El servicio opera correctamente en el puerto: ",port));

//mensaje de bienvenida para validar que se den respuestas en el servicio
// routes
app.get('/',(req,res) =>{
    res.send("Welcome to the jungle");
});