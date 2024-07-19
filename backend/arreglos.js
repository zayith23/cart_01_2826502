/*definir un arrehlo de 
nombre de producto */

const nombres = ["lapiz HB", "resaltador",'borrador de nata'];

/*agregar elementos al arreglo */
nombres[3] = "micropuntas"

console.log(nombres[2])
/*agregar elementos al final */
nombres.push("corrector")

/**agregar elementos al principio */
nombres.unshift("borrador de miga")

/**eliminar elementos de una arreglo  */
delete nombres[3];

/**eliminar elemento del final  */
nombres.pop();

/**eliminar elementos del principio */
nombres.shift()
console.table(nombres)

for( let i = 0 ; i<nombres.length ; i+=1 ){
    console.log(nombres[i])
}

/* operador spread  con arreglos  */
const nombres2 =[
    "transportador",
    "regla 30 cm"
]
const productos = [...nombres, ...nombres2]
console.table(productos)
