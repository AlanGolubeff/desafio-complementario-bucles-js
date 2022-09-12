class Producto {
    constructor(id, nombre, precio, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.categoria = categoria;
    }
}
const productosId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const nombres = ["remera", "carlo", "campera", "pantalon", "zapatillas", "gorra", "buzo", "camisa", "pantaloneta", "remera", "campera", "pantalon", "zapatillas", "gorra", "buzo", "camisa", "pantaloneta", "remera", "campera", "pantalon"];

const categoria = ["hombre", "mujer", "nino", "nina", "calzado", "accesorios"];

const alala = [];

for (let productoS of productosId) {
    alala.push(new Producto(productosId[productoS], nombres[Math.floor(Math.random() * 20)], Math.floor(Math.random() * 1000), categoria[Math.floor(Math.random() * 6)]));
}

function elegir() {
    let productoelegido = prompt("ingresar producto")
    console.log(alala[parseInt(productoelegido)])
}
for (let index = 0; index < 5; index++) {
    elegir();
}







/*let total = 0
function calculo() {
    let producto = prompt('Ingresar Producto')
    let valor = parseFloat(prompt('Ingresar Precio'))
    alert(asignarProducto(producto, valor));
    total = total + 0 + valor * 1.21;
    console.log(asignarProducto(producto, valor));
}
const iva = (precio) => { return precio * 1.21 }
const asignarProducto = (producto, precio) => " producto " + producto + " precio base " + precio + ' precio con iva ' + iva(precio);
for (let index = 0; index < 5; index++) {
    calculo();
}
alert(' Tu Total es de ' + total);
console.log(' Tu Total es de ' + total);
*/



/* for (i = 1; i <= 25; i++) {
    let ingresarNombre = prompt("Ingresar Nombre");
    alert("Turno Nro" + i + " Nombre " + ingresarNombre);
    console.log("Turno Nro" + i + " Nombre " + ingresarNombre);
    if (ingresarNombre == 'urgencia') {
        break;
    }
    if (i >= 25) {
        i = 0; continue;
    }
}
let numero = 0;
while (numero < 10) {
    numero++;
    document.write(numero + "<br>")
}

document.write("<br>")

for (let i = 0; i <= 6; ++i) {
    document.write(i)

}

document.write("<br>")

document.write("<br>")


let animales = ["perro", "gato", "hipopotamo"]

for (animal in animales) {
    document.write(animal + "<br>");
}

document.write("<br>")

for (animal of animales) {
    document.write(animal + "<br>");
}


document.write("<br>")


Array1 = ["zoe", "alan", "lucas"];
Array2 = ["matias", "giuliana", Array1];

for (let array in Array2) {
    if (array == 2) {
        for (let array of Array1) {
            document.write(array + "<br>")
        }
    } else {
        document.write(Array2[array] + "<br>")
    }
} 
*/
