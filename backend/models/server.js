import express from "express";
import cors from "cors";
import categoriasRoutes from '../routes/categorias.routes.js';
import clientesRoutes from '../routes/clientes.routes.js';
import empleadosRoutes from '../routes/empleados.routes.js';
import productosRoutes from '../routes/productos.routes.js';
import conexion from '../config/config.js';

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.categoriasPath = '/api/categorias';
        this.clientesPath = '/api/clientes';
        this.empleadosPath = '/api/empleados';
        this.productosPath = '/api/productos';
        this.conexion();
        this.middlewars();
        this.routes();
    }

    async conexion(){
        await conexion();
    }

    middlewars(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.categoriasPath, categoriasRoutes);
        this.app.use(this.clientesPath, clientesRoutes);
        this.app.use(this.empleadosPath, empleadosRoutes);
        this.app.use(this.productosPath, productosRoutes);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`El server está activo en el puerto ${this.port}`);
        });
    }
}

export default Server;