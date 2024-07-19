
/**sintaxis funcion arrow flecah */
/**reglas de la funtion flecha 
 *      1.si el bloque de codigo de a funtion 
 *      flecha solo tiene una linea no hace falta ponerle corchete
 * 
 *      2.si tienen un solo parametro, se puede omitir el parentecis  de los parametros
 * 
 *      3. si el bloque de codigo de la funtion flecha solo tiene  un a linea
 *      y esta linea debe retornar un valor es posible omitir el return, 
 *      pero solo si se aplica la regla 2 
 */

const saludo = nombre => `hola ${nombre} desde una funcion flecha`

// invocar la funcion flecha 
console.log(saludo("cristian"))