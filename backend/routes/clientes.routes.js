import express from "express";

const router = express.Router();

import {obtenerClientes, agregarCliente, obtenerClienteID, borrarCliente, actualizarCliente, } from "../controllers/clientes.controllers.js"

router.get("/all", obtenerClientes);
router.get("/getone/:id", obtenerClienteID);
router.post("/add", agregarCliente);
router.delete("/remove/:id", borrarCliente);
router.patch("/update/:id", actualizarCliente)

export default router;