const urlEmpleados = "http://localhost:5000/empleado";

export const getEmpleados= async ()=>{
  try {
      const empleado = await fetch (`${urlEmpleados}/`);
      const datoEmpleados = await empleado.json();
      console.log(datoEmpleados);
      return datoEmpleados;
  } catch (error) {
      console.log(error);
  }
};
export const newEmpleados = async (registroEmpleado) => {
  console.log(registroEmpleado);
  try {
    await fetch(`${urlEmpleados}/add`,{
      method:'post',
      body: JSON.stringify(registroEmpleado),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    window.location = "./empleados.html";
  } catch (error) {
    console.log(error);
  }
};
export const deleteEmpleados = async idEmpleado =>{
  console.log(idEmpleado);
  try {
    await fetch (`${urlEmpleados}/del/${idEmpleado}`,{
        method:'DELETE'
    })
    window.location="./empleados.html" 
  } catch (error) {
    console.log(error);
  }
};
export const editEmpleados = async datos =>{
  console.log(datos._id)
  try {
    await fetch (`${urlEmpleados}/upd/${datos._id}`,{
      method:'PATCH',
      body:JSON.stringify(datos),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(response => response.json())
    .then(updateEmpleados => {
      console.log('DATOS Actualizados',updateEmpleados);
    })
    window.location="./empleados.html" 
  } catch (error) {
    console.log(error);
  }
};