import { getCategorias , getCategoria, postCategorias , deleteCategorias , putCategorias } from "../API/categoriasAPI.js";

addEventListener('DOMContentLoaded',()=>{
  loading();
});

async function loading(){
  const categoria = await getCategorias();
  console.log(categoria);
  const tablaCategoria = document.querySelector("#categories");
  categoria.forEach((element,index) => {
    const {_id , CategoriaNombre , Descripcion  , Imagen} = element;
    tablaCategoria.innerHTML+= `
      <tr>
        <th scope="row">${index+1}</th>
        <td>${CategoriaNombre}</td>
        <td>${Descripcion}</td>
        <td>${Imagen}</td>
        <td><button class="btn btn-outline-danger delete" id="${_id}">Eliminar</button></td>
        <td><button class="btn btn-outline-warning edit" data-bs-toggle="modal" data-bs-target="#modalUpdate" id="${_id}" Nombre="${CategoriaNombre}" Descripcion="${Descripcion}" Imagen="${Imagen}">Editar</button></td>
      </tr>
    `
  });
};


const formulario = document.getElementById('addCategorias');
formulario.addEventListener("submit", postCategoria);


function postCategoria(e){
  e.preventDefault();
  const CategoriaNombre = document.querySelector('#CategoriaNombre').value;
  const Descripcion = document.querySelector('#Descripcion').value;
  const Imagen  = document.querySelector('#Imagen').value;

  const registro = {
    CategoriaNombre,
    Descripcion,
    Imagen,
  }
  console.log(registro);

  if(validation(registro)){
    alert("Todos los datos son obligatorios");
  }return postCategorias(registro);
}

function validation(Objeto){
  return !Object.values(Objeto).every(element => element !== '')
}

const eliminar = document.querySelector('#categories');
eliminar.addEventListener('click',deleteCategoria);

function deleteCategoria (e){
  if(e.target.classList.contains('delete')){
    console.log(e.target);
    const id = e.target.getAttribute('id');
    console.log(id);

    const confir = confirm("¿Quieres eliminar esta categoria?");
    if(confir){
      deleteCategorias(id);
    };
  }
};

const infoCategoria = document.querySelector('#categories')
infoCategoria.addEventListener('click',getInfo)


async function getInfo(e){
  e.preventDefault();

  if (e.target.classList.contains("edit")) {
    const id = e.target.getAttribute("id");
    const informacion = await getCategoria(id);

    const {_id, CategoriaNombre, Descripcion, Imagen } = informacion;

    const CategoriaNombreEdit = document.querySelector('#CategoriaNombreEdit');
    const DescripcionEdit = document.querySelector('#DescripcionEdit');
    const ImagenEdit = document.querySelector('#ImagenEdit');
    const idEdit = document.querySelector('#idEdit');

    CategoriaNombreEdit.value = CategoriaNombre;
    DescripcionEdit.value = Descripcion;
    ImagenEdit.value = Imagen;
    idEdit.value = _id; 
}
};


//Update
const editar = document.querySelector("#formEditCategoria");
editar.addEventListener('submit', actualizar)

function actualizar(e){
e.preventDefault();
const id = document.querySelector('#idEdit').value;
const CategoriaNombre = document.querySelector('#CategoriaNombreEdit').value;
const Descripcion = document.querySelector('#DescripcionEdit').value;
const Imagen = document.querySelector('#ImagenEdit').value;

const datos ={
    CategoriaNombre,
    Descripcion,
    Imagen
}

alert('Datos editados correctamente');

return putCategorias(datos,id);
}; 

    