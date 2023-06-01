fetch("../json/ejemplo.json")
.then(response => response.json())
.then(respuesta =>{
    let elemento = document.getElementById("container");
    let codigoHTML = "";
    codigoHTML = "<h1>"+respuesta.nombre+"</h1>";
    codigoHTML += "<h3>"+respuesta.email+"</h3>";
    codigoHTML += "<h2>"+"Works:"+"</h2>";
    codigoHTML += "<ul>";
    respuesta.works.forEach(element => {
        codigoHTML += "<li>"+element.empresa+"-"+element.ubicacion+"-"+element.f_inicio+"-"+element.f_fin+"</li>";
    });
    codigoHTML += "</ul>"
    codigoHTML += "<h2>"+"Softskills:"+"</h2>";
    codigoHTML += "<ul>"+"<li>"+respuesta.softskills[0]+"</li>"+"<li>"+respuesta.softskills[1]+"</li>"+"<li>"+respuesta.softskills[2]+"</li>"+"</ul>";
    elemento.innerHTML = codigoHTML;
})
.catch(error => {
    console.error("Error al cargar el archivo", error);
});