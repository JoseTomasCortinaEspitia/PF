const {Router} = require("express");

const suplementRouter = Router();

//Importa los handlers
const { getSuplementsHandler, getSuplementByIdHandler, createSuplementHandler } = require("../handlers/suplementHandlers");

//Rutas
suplementRouter.get("/", getSuplementsHandler);
suplementRouter.get("/:id", getSuplementByIdHandler);
suplementRouter.post("/", createSuplementHandler);

module.exports = suplementRouter;