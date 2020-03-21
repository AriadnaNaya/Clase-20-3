let archivoTareas = require('./tareas');

let accion = process.argv[2];

let tareas = [];

// Este switch a continuación sirve para listar las acciones de la APP.

switch (accion) {
  case 'listar':
    console.log();    
    console.log('Listado de tareas');
    console.log('----------------');

    tareas = archivoTareas.leerJSON();

    tareas.forEach((tarea, index) => {
      console.log((index + 1) + '. ' + tarea.titulo + ' -> ' + tarea.estado);
    });

    console.log()
    break;

  case 'filtrar':
    console.log('Listado de tareas pendientes');
    console.log(process.argv[3])
    const estado = process.argv[3];
    tareas = archivoTareas.leerPorEstado(estado);

    tareas.forEach((tarea, index) => {
      console.log((index + 1) + '. ' + tarea.titulo + ' -> ' + tarea.estado);
    });

    break;

  case 'crear':
    console.log('Nueva tarea creada');

    let titulo = process.argv[3];
    let tarea = {
      titulo: titulo,
      estado: 'pendiente'
    }

    archivoTareas.guardarTarea(tarea);

    console.log(tarea.titulo + ' -> ' + tarea.estado);
    console.log()
    break;    

  case undefined:
    console.log('Tenés que pasarme una acción');
    break;

  default:
    console.log('No entiendo qué me estás pidiendo');
    console.log('Las acciones disponibles son: listar');
    break;
}
