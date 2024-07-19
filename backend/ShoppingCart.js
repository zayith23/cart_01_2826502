const carrito= [
    {
        nombre : "Lenovo Thinkpad",
        descripcion: "lapto para oficiona",
        tipoproducto: "computador portatil",
        modelo: "VG&",
        precio: {
            minimoVenta:3000000,
            compra:1000000
        },
        caractersiticas: {
            dimencion:{
                alto: 200 ,
                ancho: 50,
                largo: 30
            },
            fabricacion:{
                pais: "Taiwan",
                fecha: new Date('2017-05-02')
            }
        },
        obtenerPrecioCompra : function(){
            return this.precio.compra
        }
    },
    {
        nombre : "lenovo yoga",
        descripcion: "tablet de alto rendimiento",
        tipoproducto: "table",
        modelo: "ss2",
        precio: {
            minimoVenta:4500000,
            compra:2000000
        },
        caractersiticas: {
            dimencion:{
                alto: 200 ,
                ancho:35,
                largo: 43
            },
            fabricacion:{
                pais: "China",
                fecha: new Date('2018-03-06')
            }
        },
        obtenerPrecioCompra : function(){
            return this.precio.compra
        }
    },
    {
        nombre : "OnePlus 12",
        descripcion: "celular gamer de alto rendimiento",
        tipoproducto: "Movil",
        modelo: "QN95C&",
        precio: {
            minimoVenta:3000000,
            compra:1500000
        },
        caractersiticas: {
            dimencion:{
                alto: 23 ,	
                ancho:323,
                largo:22
            },
            fabricacion:{
                pais: "Europa",
                fecha: new Date('2023-08-25')
            }
        },
        obtenerPrecioCompra : function(){
            return this.precio.compra
        }
    },
    {
        nombre : "televiso Samsung QN95C",
        descripcion: "televisor pantalla plana",
        tipoproducto: "tv",
        modelo: "QN95C&",
        precio: {
            minimoVenta:2800000,
            compra:1000000
        },
        caractersiticas: {
            dimencion:{
                alto: 23 ,
                ancho: 2323,
                largo: 12
            },
            fabricacion:{
                pais: "EEUU",
                fecha: new Date('2023-04-01')
            }
        },
        obtenerPrecioCompra : function(){
            return this.precio.compra
        }
    }
]

//ejecutar el metodo de precio de compra
console.log(carrito[2].obtenerPrecioCompra())

//recorrer carrito de compras
//metofo forEach
//no retorna un nuevo arreglo
carrito.forEach (producto => {
    if(producto.caractersiticas.fabricacion.pais === "Taiwan")
    console.log(producto.nombre)
} )

//metodo de transformacion map
let preciosCompras = carrito.map((producto)=>{
    return producto.precio.compra
})
console.log(preciosCompras)

/*filter: recorre el areglo buscando elementos que concuerden con la condicinal 
establecida en el filtro creando un nuevo arreglo con los objetos que cumplen dicho criterio*/
let productoTaiwan = carrito.filter((producto)=>{
    return producto.caractersiticas.fabricacion.pais=== "Taiwan"
})
console.log(productoTaiwan)


/**calculodelt totad de inventario */
let total = 0;
carrito.forEach (producto => {
    //acumular el valor de compra de cada prodcuto en la variable total
    total += producto.precio.compra
} )
console.log(`el valor del inventario es: ${total}`)

/*utilizando la funcion del method reduce: 
reduce a un solo el valor del arreglo con base en una exprecion*/
let inventario = carrito.reduce((total, prodcuto)=>{
    return total + prodcuto.precio.compra
},0)

console.log(inventario)

for(producto of carrito){
    const{nombre, tipoproducto, modelo, caractersiticas:{dimencion:{largo}, fabricacion:{pais}}} =producto
    console.log(`nombre: ${nombre}, tipoproducto: ${tipoproducto}, modelo: ${modelo}, largo: ${largo}, pais ${pais}`);
}

let productoChina = carrito.filter((producto)=>{
    return producto.caractersiticas.fabricacion.pais=== "China"
})
console.log(productoChina)

carrito.forEach (producto => {
    if(producto.caractersiticas.dimencion.alto >= 200)
    console.log(producto.nombre)
} )