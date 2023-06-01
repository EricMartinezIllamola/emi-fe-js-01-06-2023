fetch("../json/ejemplo.json")
.then(response => response.json())
.then(respuesta =>{
    let nombre = document.createElement("h1");
    let email = document.createElement("h3");
    let lista = document.createElement("ul");

    nombre.textContent = respuesta.nombre;
    email.textContent = respuesta.email;

    let elemento = document.getElementById("container");

    respuesta.works.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element.empresa+"-"+element.ubicacion+"-"+element.f_inicio+"-"+element.f_fin;
        lista.appendChild(li);
    });
    elemento.appendChild(nombre);
    elemento.appendChild(email);
    elemento.appendChild(lista);
})
.catch(error => {
    console.error("Error al cargar el archivo", error);
});