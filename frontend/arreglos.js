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
console.table(nombres)
for( let i = 0 ; i<nombres.length ; i+=1 ){
    console.log(nombres[i])
}
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
let productos = [...nombres, ...nombres2]
const elemento = "compas";
productos1 = [...productos , elemento]
const transportador = "transportador";
productos1 = [...productos1 , transportador]

console.table(productos)