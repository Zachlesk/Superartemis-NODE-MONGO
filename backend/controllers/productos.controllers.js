import Producto from "../models/productos.js";

const obtenerProductos = async (req,res) => {
    const productos = await Producto.find();
    res.json(productos);
}

const obtenerProductoID = async (req,res) => {
    const productos = await Producto.findOne({_id:req.params.id});
    res.json(productos);
}


const agregarProductos = async (req, res) => {
    const productos = new Producto(req.body);
    try {
        const nuevoProducto = await productos.save();
        res.json(nuevoProducto)
    } catch (error) {
        console.log(error);
    }
}

const borrarProductos = async (req, res) => { 

    try {
        await Producto.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
    }

}

const actualizarProductos = async (req, res) => {
    try {
        const producto = await Producto.findOne({_id:req.params.id});
        if (req.body.ProductoNombre){
            categoria.ProductoNombre = req.body.ProductoNombre;
        }
        if (req.body.ProveedorID){
            categoria.ProveedorID = req.body.ProveedorID;
        }
        if (req.body.CategoriaID){
            categoria.CategoriaID = req.body.CategoriaID;
        }
        if (req.body.CategoriaPorUnidad){
            categoria.CategoriaPorUnidad = req.body.CategoriaPorUnidad;
        }
        if (req.body.PrecioUnitario){
            categoria.PrecioUnitario = req.body.PrecioUnitario;
        }
        if (req.body.UnidadesStock){
            categoria.UnidadesStock = req.body.UnidadesStock;
        }
        if (req.body.UnidadesPedidas){
            categoria.UnidadesPedidas = req.body.UnidadesPedidas;
        }
        if (req.body.NivelReorden){
            categoria.NivelReorden = req.body.NivelReorden;
        }
        if (req.body.Discontinuado){
            categoria.Discontinuado = req.body.Discontinuado;
        }

        await producto.save()
        res.send(producto)
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
    }
}

export {obtenerProductos, obtenerProductoID, agregarProductos, borrarProductos, actualizarProductos}