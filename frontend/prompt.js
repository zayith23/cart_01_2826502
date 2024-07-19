alert("hola 2826502")
let nombre  = prompt("ingrese su nombre")
document.querySelector("div").innerText = nombre

const nombreProducto = String("Lenovo v4");
console.log(nombreProducto);

const precioProducto = 23;
const precioProductoStr = "23";
console.log(precioProducto)
console.log (precioProductoStr );


console.log(precioProducto === precioProductoStr)
/*objeto producto
objeto literal: */
const producto1 = {
    nombre : "lenovo thinkpad",
    modelo : "rdcs03",
    color : "red",
    descripcion : "laptop para trabajo liviano",
    precio : 2340000.89,
    getModelo: function(){
        console.log(this.modelo);
    }
}
console.log(producto1);

// acceder a los productos de los objrtos 
// --------console.log(producto1["modelo"]);

/*invocar metodo getmodelo */
producto1.getModelo();


/*sin destructuracion  */
nombresito = producto1.nombre;
console.log(nombresito);

/*con desestructuracion */
const {descripcion, precio} = producto1;
console.log(descripcion, precio);

/*object constructor: */

const producto = function (nombre , color, precio){
    this.nombre = nombre,
    this.color = color,
    this.precio = precio
};


/*2 instancias de producto */
const p1 = new producto("lapiz","azul","2000");


console.log(p1)

console.log("--------------------------------------------------------------------------------")

/*operador spread */
const medidas = {
    "peso" : "50kg",
    "altura" : "1m",
    "largo" : "50cm"
}
const nuevop = {...medidas, ...producto1 }

console.log(nuevop)