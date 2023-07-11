import express from "express";

const router = express.Router();

import { obtenerEmpleado, obtenerEmpleadoID, agregarEmpleado, borrarEmpleado, actualizarEmpleado } from "../controllers/empleados.controllers.js";

router.get('/all', obtenerEmpleado);
router.get('/getone/:id', obtenerEmpleadoID);
router.post('/add', agregarEmpleado);
router.delete('/remove/:id', borrarEmpleado);
router.patch('/update/:id', actualizarEmpleado);

export default router;