let total = 0
function calculo() {
    let producto = prompt('Ingresar Producto')
    let valor = parseFloat(prompt('Ingresar Precio'))
    alert(asignarProducto(producto, valor));
    total = total + 0 + valor * 1.21;
    console.log(asignarProducto(producto, valor));
}
const iva = (precio) => { return precio * 1.21 }
const asignarProducto = (producto, precio) => "producto" + producto + "precio base" + precio + ' precio con iva ' + iva(precio);
for (let index = 0; index < 5; index++) {
    calculo();
}
alert(' Tu Total es de ' + total);
console.log(' Tu Total es de ' + total);





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
