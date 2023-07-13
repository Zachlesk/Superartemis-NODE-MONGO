  const url = "http://localhost:5000/categoria";


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


  export const postCategorias = async (registroCategoria) => {
    console.log(registroCategoria);
      try {
        await fetch(`${url}/add`,{
          method:'post',
          body: JSON.stringify(registroCategoria),
          headers:{
              'Content-Type': 'application/json'
          }
        });
    window.location = "./categorias.html";
  } catch (error) {
    console.log(error);
    }
  };


export const deleteCategorias = async idCategoria =>{
  console.log(idCategoria);
  try {
    await fetch (`${url}/del/${idCategoria}`,{
        method:'delete'
    })
    window.location="./categorias.html" 
  } catch (error) {
    console.log(error);
  }
};


export const patchCategorias = async datos =>{
  console.log(datos._id)
  try {
    await fetch (`${url}/upd/${datos._id}`,{
      method:'patch',
      body:JSON.stringify(datos),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(response => response.json())
    .then(updateCategorias => {
      console.log('DATOS Actualizados',updateCategorias);
    })
    window.location="./categorias.html" 
  } catch (error) {
    console.log(error);
  }
};