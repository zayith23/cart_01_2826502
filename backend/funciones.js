/*Ejemplo
*Sintáxis: Declaracion de funcion
*/


function saludo (nombre){
    console.log(`hola ${nombre} como estas`);
}

/**invocar, llamar, ejecutar saludo */
saludo("cristian")//->argumento cristian

/**sintaxis; exprecion funcion: 
 * se le aigna a una constante
*/
const saludo2 = function (nombre = "pepit@"){//parametros por defecto
    console.log(`hola ${nombre} como estas`);
}

//invocar saludo2
saludo2();