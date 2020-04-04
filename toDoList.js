
//const tareas = require ("./tareas.json"), no vamos a importar tareas de esta forma, sino utilizanzo la libreria fs

const accion = process.argv[2]; // va a tomar lo que yo escriba despues del nombre del archivo en la terminal

const tareas = require ("./funcionTareas.js")



switch (accion) {
    case "listar":
        const tareasArray = tareas.leer ();

        /*
        for (let i = 0; i < tareasArray.length; i++) {
            console.log (i + 1 + ". " + tareasArray [i].descripcion + " " + tareasArray[i].estado)
        }
        
        lo escribimos usando forEach
        */
        console.log ("Listado de tareas ")
        tareasArray.forEach((tarea,index) => {
            console.log (index +1 + ") " + tarea.descripcion + " - " + tarea.estado )
        });
        break;
    case "agregar":
        const tituloTarea = process.argv [3];
        if (!tituloTarea ) {
            console.log ("Para agregar una nueva tarea hay que agragar un titulo ")
            break;
        }
        tareas.guardar (process.argv [3])
        console.log ("La tarea fue guardada exitosamente. Utilizar el comando listar para listar las tareas.");
        break;

    case  "filtrar":
        const estado = process.argv [3];
        tareas1 = tareas.leerPorEstado (estado);
        tareas1.forEach ((tarea, index) => {
            console.log ((index + 1 ) + " . " + tarea.descripcion + " => " + tarea.estado );
        });
        console.log ()
        break;

    case "modificar":
        const tareaAModificar = process.argv [3];
        const nuevoEstado = process.argv [4]
        if (!tareaAModificar || !nuevoEstado ) {
            setTimeout (function () {
                console.log ("Basado en la anterior lista numerada, ingrese modificar seguido del indice de la tarea y su nuevo estado ")
            }, 1000)
            break;
        }
        tareas.modificarEstado (tareaAModificar,nuevoEstado);
        setTimeout( function () {
           console.log ("Estado modificado con exito. Utilizar el comando listar para listar las tareas. ")
       }, 3000)
        break;    
    case undefined:
        console.log ("Accion desconocida ");
        break;
    default:
        console.log ("No es una accion valida.");
        break;
}

