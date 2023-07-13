const urlProductos = "http://localhost:5000/producto";

export const getProductos= async ()=>{
  try {
      const producto = await fetch (`${urlProductos}/`);
      const datoProductos = await producto.json();
      console.log(datoProductos);
      return datoProductos;
  } catch (error) {
      console.log(error);
  }
};
export const newProductos = async (registroProducto) => {
  console.log(registroProducto);
  try {
    await fetch(`${urlProductos}/add`,{
      method:'post',
      body: JSON.stringify(registroProducto),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    window.location = "./productos.html";
  } catch (error) {
    console.log(error);
  }
};
export const deleteProductos = async idProducto =>{
  console.log(idProducto);
  try {
    await fetch (`${urlProductos}/del/${idProducto}`,{
        method:'DELETE'
    })
    window.location="./productos.html" 
  } catch (error) {
    console.log(error);
  }
};
export const editProductos = async datos =>{
  console.log(datos._id)
  try {
    await fetch (`${urlProductos}/upd/${datos._id}`,{
      method:'PATCH',
      body:JSON.stringify(datos),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(response => response.json())
    .then(updateProductos => {
      console.log('DATOS Actualizados',updateProductos);
    })
    window.location="./productos.html" 
  } catch (error) {
    console.log(error);
  }
};