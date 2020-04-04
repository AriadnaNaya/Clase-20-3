const fs = require ("fs");  //Libreria nativa de javaScript

module.exports  = {
    archivo: "tareas.json",
    leer: function () {
        return JSON.parse( fs.readFileSync (this.archivo,"utf-8"));
    },

    guardar: function (nuevaTarea) {
        let contenido = this.leer ();
        contenido.push ( {
            descripcion: nuevaTarea,
            estado: "Pendiente"
        
        })
        fs.writeFileSync (this.archivo , JSON.stringify(contenido, null , " ")) 
        
    },
    leerPorEstado: function (estado) {
        let tareas = this.leer ();
        console.log (estado)
        tareasFiltradas = tareas.filter ((tarea) => {
            return tarea.estado === estado 
        } )
        return tareasFiltradas
    } ,
    modificarEstado: function (tareaAModificar, nuevoEstado, nuevaDescripcion) {
        let tareas = this.leer ();
        tareas.forEach( (toDo, indice) => {
            if (indice == (tareaAModificar - 1)) {
                toDo.estado = nuevoEstado
            }
        });
        fs.writeFileSync (this.archivo , JSON.stringify(tareas, null , " ")) 
    }
}

