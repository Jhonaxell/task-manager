// ===============================
// task-manager 1 - Gestor de Tareas (Consola) --- Version mejorada
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

//Menu
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
function pausa(callback) {
  rl.question("\nPresiona ENTER para volver al menú...", function() {
    callback();
  });
}
function Menu(){
  console.log("\n=== MENÚ ===");
  console.log("1. Agregar tarea");
  console.log("2. Ver tareas agregadas");
  console.log("3. Ver tareas hechas");
  console.log("4. borrar tareas");
  console.log("0. Salir");


  rl.question("Elija una opcion: ", function(option){

    switch(option){
        case "1": rl.question("Escriba la tarea ", function(texto){
            addtask(texto);
            pausa(Menu)
        })
        break;
        case "2": showtask();
        pausa(Menu)
        break;
        case "3": 
        if(tareas.length === 0){
            console.log("No hay tareas");
            pausa(Menu)
        }else{
            showtask();
            rl.question("Que taerar quieres completar? ", function(number){
                completeTask(Number(number));
                pausa(Menu) 
            })

        }        
        break
        case "4":
        
        if(tareas.length === 0){
            console.log("No hay tareas");
            pausa(Menu)
        }else{
            showtask()
            rl.question("Que tarea quiere borarr", function(number){
                if(isNaN(Number(number) || Number(number) < 1 || Number(number) > tareas.length)){
                    console.log("numero invalido");
                    return pausa(Menu)
                }
                delateTask(Number(number));
                pausa(Menu)
            })
        }

        break;
        case "0": rl.close();
        pausa(Menu)
        break
        default: console.log("Opcion no valida");
        break;
    }
  })
}

//Funcion para agregar tareas
function addtask(text) {

    tareas.push({
        text: text,
        completada: false

    })
    console.log("Tarea agregada")
}
     

//Mostrar tareas
console.log(tareas);

function showtask() {
    console.log("\nLista de tareas")


    tareas.forEach((tarea, index) => {
        let estado = tarea.completada ? "Si" : "No";
        console.log(`${index + 1}. ${tarea.text} - Completada:  ${estado} `)
    })
    


}
//tarea lista/*
function completeTask(number) {


    if (number > 0 || number <= 0) {  
        tareas[number - 1].completada = true;
        console.log("Tarea marcada como completada.");
    } else {
        console.log("Número inválido.");
    }



}


   //eliminar tareas
function delateTask(number) {

    tareas.splice(number - 1, 1)
    console.log("Tarea eliminada")

 

}


Menu()
