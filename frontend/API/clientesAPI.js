const url = "http://localhost:5000/cliente";



export const getClientes= async ()=>{
  try {
      const cliente = await fetch (`${url}/`);
      const datoClientes = await cliente.json();
      console.log(datoClientes);
      return datoClientes;
  } catch (error) {
      console.log(error);
  }
};
export const newClientes = async (registroCliente) => {
  console.log(registroCliente);
  try {
    await fetch(`${url}/add`,{
      method:'post',
      body: JSON.stringify(registroCliente),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    window.location = "./clientes.html";
  } catch (error) {
    console.log(error);
  }
};
export const deleteClientes = async idCliente =>{
  console.log(idCliente);
  try {
    await fetch (`${url}/del/${idCliente}`,{
        method:'DELETE'
    })
    window.location="./clientes.html" 
  } catch (error) {
    console.log(error);
  }
};
export const editClientes = async datos =>{
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
    .then(updateClientes => {
      console.log('Los datos han sido actualizados satisfactoriamente',updateClientes);
    })
    window.location="./clientes.html" 
  } catch (error) {
    console.log(error);
  }
};