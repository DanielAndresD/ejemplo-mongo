// declarar dependencias
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//configuraciones
const app = express();
app.use(express.json()); //Serializa las entradas
const port = process.env.PORT || 9000;
const path = require("path");

//Importacion de rutas
const userRoutes = require("./routes/user");
//enrutamiento del paquete routes
app.use("/api", userRoutes);

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
