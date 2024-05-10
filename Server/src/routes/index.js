const {Router} = require("express");
//Importar rutas
const userRouter = require("./userRouter");
const suplementRouter = require("./suplementRouter");

const routes = Router();

//Rutas
routes.use("/users", userRouter);
routes.use("/suplements", suplementRouter);

module.exports = routes;