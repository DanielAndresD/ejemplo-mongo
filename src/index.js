// declarar dependencias
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//configuraciones
const app = express();
const port = process.env.PORT || 9000;

//mensaje de bienvenida para validar que se den respuestas en el servicio
// routes
app.get("/", (req, res) => {
  res.send("Welcome to the jungle");
});

//conexion a mongoDB
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => console.log("Conectado a MongoDB"))
  .catch((error) => console.error(error));

//validar operacion en el puerto
app.listen(port, () =>
  console.log("El servicio opera correctamente en el puerto: ", port)
);
