for (i = 1; i <= 25; i++) {
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