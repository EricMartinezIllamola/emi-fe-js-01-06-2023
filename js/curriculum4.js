fetch("../json/ejemplo.json")
.then(response => response.json())
.then(respuesta =>{
    let cabecera = document.createElement("header");
    let nombre = document.createElement("h1");
    let email = document.createElement("h3");
    let cuerpo = document.createElement("div");
    let experiencia = document.createElement("h3");
    let tabla = document.createElement("table");
    
    let fila1 = document.createElement("tr");
    tabla.appendChild(fila1);
    let keys = Object.keys(respuesta.works[0]);
    keys.forEach(element => {
        let celda = document.createElement("th");
        celda.textContent = element;
        fila1.appendChild(celda);
    });

    nombre.textContent = respuesta.nombre;
    email.textContent = respuesta.email;
    experiencia.textContent = "Experiencia:";

    let elemento = document.getElementById("container");

    respuesta.works.forEach(element => {
        let fila = document.createElement("tr");
        tabla.appendChild(fila);
        let values = Object.values(element);
        values.forEach(element2 => {
            let celda = document.createElement("td");
            celda.textContent = element2;
            fila.appendChild(celda);
        });
    });

    elemento.appendChild(cabecera);
    cabecera.appendChild(nombre);
    cabecera.appendChild(email);
    elemento.appendChild(cuerpo);
    cuerpo.appendChild(experiencia);
    cuerpo.appendChild(tabla);
})
.catch(error => {
    console.error("Error al cargar el archivo", error);
});