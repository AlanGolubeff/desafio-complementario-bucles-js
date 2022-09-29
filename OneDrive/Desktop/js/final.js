let productosElegidos = JSON.parse(localStorage.getItem("guardados"));

console.log(productosElegidos)

document.addEventListener("DOMContentLoaded", treceVerde);

function treceVerde() {
    const elBody = document.querySelector("#bodyFinal");
    elBody.innerHTML = "";

    if (productosElegidos.length > 0) {
        for (let final of productosElegidos) {


            const containerRandom = document.createElement("div");
            containerRandom.setAttribute(`class`, `containerrandom`);
            elBody.appendChild(containerRandom);
            containerRandom.innerHTML = `producto : ${final.nombre}`;

            const precioRandom = document.createElement('div');
            containerRandom.appendChild(precioRandom);
            precioRandom.innerHTML = `precio : ${final.precio}`;


            const nombreP = document.createElement("h5");
            nombreP.setAttribute(`class`, `nombreP`);

            const categoriaP = document.createElement("h5");
            categoriaP.setAttribute(`class`, `categoriaP`);
            categoriaP.innerHTML = `Categoria: ${final.categoria}`;
            (`Hola`)
            containerRandom.appendChild(categoriaP);

            const idP = document.createElement("h5");
            idP.setAttribute(`class`, `idP`);
            idP.innerHTML = `Id: ${final.id}`;
            containerRandom.appendChild(idP);

            const imgRandom = document.createElement("img")
            imgRandom.setAttribute(`src`, `./img/${final.imagen}.jpg`)
            containerRandom.appendChild(imgRandom)

            nombreP.innerHTML = `Nombre:`;

        }
    }
}
