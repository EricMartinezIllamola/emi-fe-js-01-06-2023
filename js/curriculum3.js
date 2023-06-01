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
    let celda1 = document.createElement("th");
    celda1.textContent = "Empresa";
    fila1.appendChild(celda1);
    let celda2 = document.createElement("th");
    celda2.textContent = "Ubicacion";
    fila1.appendChild(celda2);
    let celda3 = document.createElement("th");
    celda3.textContent = "F_inicio";
    fila1.appendChild(celda3);
    let celda4 = document.createElement("th");
    celda4.textContent = "F_fin";
    fila1.appendChild(celda4);

    nombre.textContent = respuesta.nombre;
    email.textContent = respuesta.email;
    experiencia.textContent = "Experiencia";

    let elemento = document.getElementById("container");

    respuesta.works.forEach(element => {
        let fila = document.createElement("tr");
        tabla.appendChild(fila);
        let celda1 = document.createElement("td");
        celda1.textContent = element.empresa;
        fila.appendChild(celda1);
        let celda2 = document.createElement("td");
        celda2.textContent = element.ubicacion;
        fila.appendChild(celda2);
        let celda3 = document.createElement("td");
        celda3.textContent = element.f_inicio;
        fila.appendChild(celda3);
        let celda4 = document.createElement("td");
        celda4.textContent = element.f_fin;
        fila.appendChild(celda4);        
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