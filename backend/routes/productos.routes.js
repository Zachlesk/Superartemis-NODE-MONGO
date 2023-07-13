import express from "express";

const router = express.Router();

import { obtenerProductos, obtenerProductoID, agregarProductos, borrarProductos , actualizarProductos } from "../controllers/productos.controllers.js";

router.get('/all', obtenerProductos);
router.get('/getone/:id', obtenerProductoID);
router.post('/add', agregarProductos);
router.delete('/remove/:id', borrarProductos);
router.patch('/update/:id', actualizarProductos);

export default router;
