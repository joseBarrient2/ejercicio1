//EVENTOS  - LISTENER

// 1. Elemento que se le asignara el evento
// 2. tipo de evento
// 3 . Callback o funcion
// 4. elemento.addEventListener('tipoEvento', callBack)


//DOMContentLoader : ejecuta una accion al cargar todos los elementos de la pagina.


//const sectionElement = document.querySelector

const btn_add = document.querySelector('.btn_enviar');
const input = document.querySelector('#miTarea');
const workList = [];

btn_add.addEventListener('click', (e) =>{
    e.preventDefault();
    const tarea = input.value;
    workList.push(tarea);
    //console.log(workList);
    crearElemento();
});

function crearElemento(){
    const boxList = document.querySelector('.listWork');
    const formulralio = document.querySelector('.form');
    boxList.innerHTML = "";
    
    workList.forEach(element => {      
        boxList.innerHTML += element + "<br>";
    });

    formulralio.reset(); 
    
    //console.log(nodo);
}