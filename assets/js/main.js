import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/tipoAnimal.js"

const Investigaciones = [];

console.log(Investigaciones);

const botonAgregar = document.querySelector("#btnRegistrar");
const nombreAnimal = document.querySelector("#animal");
const edadAnimal = document.querySelector("#edad");
const comentarioAnimal = document.querySelector("#comentarios");
const imgAnimal = document.querySelector("#preview");
const sonidoAnimal = document.querySelector("#player");

botonAgregar.addEventListener("click", () => {
    const fuenteImagen = imgAnimal.style.backgroundImage;
    const direccionImagen = fuenteImagen.slice(5, fuenteImagen.length -2)
   
    let nuevaInvestigacion;
    if(nombreAnimal.value === "Leon") {
        nuevaInvestigacion = new Leon(nombreAnimal.value, edadAnimal.value, direccionImagen, comentarioAnimal.value, sonidoAnimal)
    }else if(nombreAnimal.value === "Lobo") {
        nuevaInvestigacion = new Lobo(nombreAnimal.value, edadAnimal.value, direccionImagen, comentarioAnimal.value, sonidoAnimal)
    }else if(nombreAnimal.value === "Oso") {
        nuevaInvestigacion = new Oso(nombreAnimal.value, edadAnimal.value, direccionImagen, comentarioAnimal.value, sonidoAnimal)
    }else if(nombreAnimal.value === "Serpiente") {
        nuevaInvestigacion = new Serpiente(nombreAnimal.value, edadAnimal.value, direccionImagen, comentarioAnimal.value, sonidoAnimal)
    }else if(nombreAnimal.value === "Aguila") {
        nuevaInvestigacion = new Aguila(nombreAnimal.value, edadAnimal.value, direccionImagen, comentarioAnimal.value, sonidoAnimal)
    }
    
    Investigaciones.push(nuevaInvestigacion)
    mostrarAnimales()
})

const mostrarAnimales = () => {
    const animalesTemplate = document.querySelector("#Animales");
        animalesTemplate.innerHTML = "";
        Investigaciones.forEach((enInvestigacion) => {
        animalesTemplate.innerHTML += `
        <div class="card mt-2 mx-2" style="width: 18rem;">
        <img width = 200px height = 300px src="${enInvestigacion.getImg}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${enInvestigacion.getNombre}</h5>
            <p class="card-text">Rango de edad: ${enInvestigacion.getEdad}</p>
            <p class="card-text">Comentario: ${enInvestigacion.getComentario}</p>
        </div>
        </div>`
    })
}