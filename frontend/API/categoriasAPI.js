const url = "http://localhost:9000/api/categorias/all";
const urlUno = "http://localhost:9000/api/categorias/getone";
const urlNuevo = "http://localhost:9000/api/categorias/add";
const urlBorrar = "http://localhost:9000/api/categorias/delete";
const urlActualizar = "http://localhost:9000/api/categorias/update";

  export const getCategorias= async ()=>{
    try {
        const categoria = await fetch (`${url}/`);
        const datoCategorias = await categoria.json();
        console.log(datoCategorias);
        return datoCategorias;
    } catch (error) {
      console.log(error);
    }
  };

  export const getCategoria = async (id) => {
    try {
      const response = await fetch(`${urlUno}/${id}`);
      const result = await response.json();
        return result;
    } catch (error) {
      console.log(error);
    }
  }

  export const postCategorias = async (categorias) => {
    try {
      await fetch(`${urlNuevo}/`,{
          method: "POST",
          body:JSON.stringify(categorias),
          headers:{
              'Content-Type':'application/json'
          },
      });
      window.location.href ="../views/categorias.html"
  } catch (error) {
      console.log(error,"Wrong");
  }
};


export const deleteCategorias = async (id) => {
  try {
    await fetch(`${urlBorrar}/${id}`,{
        method:'DELETE',
        headers: {
            "Content-Type":"application/json",
        }
    })
    window.location.href ="../views/categorias.html"
} catch (error) {
    console.log(error, "Wrong");
}
};


export const putCategorias = async (data,id) =>{
  try {
    await fetch(`${urlActualizar}/${id}`,{
    method: "PUT",
    body: JSON.stringify(data),
    headers:{
        'Content-Type':"application/json",
    },
});
window.location.href = "../views/categorias.html"
} catch (error) {
console.log(error);
}
};