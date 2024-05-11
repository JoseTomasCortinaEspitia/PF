const {Router} = require("express");

const userRouter = Router();

//Importar los handlers
const {createUserHandler} = require("../handlers/userHandlers");

//Rutas
userRouter.post("/", createUserHandler);

module.exports = userRouter;