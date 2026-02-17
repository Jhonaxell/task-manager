// ===============================
// task-manager 1 - Gestor de Tareas (Consola)
// ===============================

/**
 * Este es el primer task-manager de practica aprendiendo JavaScript
 * 
 * 
 * Objetivos:
 * - Comprender conceptos básicos 
 * - practicar logica de programación usando la consola
 * 
 * Descripción:
 * Uso un array para almacenar tareas
 * Cada tarea es un objeto con texto y estado (si esta completada o no)
 * El programa permite:
 * - Agregar Tareas
 * - Mostrar una lista de tareas
 * - Marcar tareas hechas
 * - Eliminar tareas
 * 
 * A medida que avance en el aprendizaje, los proyectos van a ir aumentando en 
 * complejidad y aplicando mejores prácticas.
 */


let tareas = [];

//Funcion para agregar tareas
function addtask(text) {

    tareas.push({
        text: text,
        completada: false

    })
    console.log("Tarea agregada")

}
     


//se agregan las tareas
addtask("Aprender JavaScript");
addtask("Practicar Node.js");


//Mostrar tareas
console.log(tareas);

function showtask() {
    console.log("\nLista de tareas")


    tareas.forEach((tarea, index) => {
        let estado = tarea.completada ? "Si" : "No";
        console.log(`${index + 1}. ${tarea.text} - Completada:  ${estado} `)
    })
}
//tarea lista
function completeTask(number) {
  if (tareas[number - 1]) {
    tareas[number - 1].completada = true;
    console.log("Tarea completada");
  } else {
    console.log("Tarea no existe");
  }
}

//eliminar tareas
function delateTask(number) {

    if(tareas[number - 1]){
        tareas.splice(number - 1, 1)
        console.log("Tarea eliminada")
    }else{
        console.log("La tarea no Existe")
    }
}

completeTask(2);
delateTask();
showtask()