import express from "express";

const router = express.Router();

import {obtenerCategorias, agregarCategoria, borrarCategorias, actualizarCategorias, obtenerCategoriaID} from "../controllers/categoria.controllers.js"

router.get("/all", obtenerCategorias);
router.get("/getone/:id", obtenerCategoriaID);
router.post("/add", agregarCategoria);
router.delete("/remove/:id", borrarCategorias);
router.patch("/update/:id", actualizarCategorias)

export default router;