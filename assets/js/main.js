import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/tipoAnimal.js"
import getDatos from "./consulta.js"

const Investigaciones = [];

const botonAgregar = document.querySelector("#btnRegistrar");
const nombreAnimal = document.querySelector("#animal");
const edadAnimal = document.querySelector("#edad");
const comentarioAnimal = document.querySelector("#comentarios");
const imgAnimal = document.querySelector("#preview");

botonAgregar.addEventListener("click", async(e) => {
    e.preventDefault();

    const fuenteImagen = imgAnimal.style.backgroundImage;
    const direccionImagen = fuenteImagen.slice(5, fuenteImagen.length -2)

    const animales = await getDatos()
    const animalObject = animales.find(
        animal => animal.name === nombreAnimal.value
    )
   
    let nuevaInvestigacion;

    if(nombreAnimal.value === "Leon") {
        nuevaInvestigacion = new Leon(nombreAnimal.value, edadAnimal.value, direccionImagen, comentarioAnimal.value, `./assets/sounds/${animalObject.sonido}`)

    }else if(nombreAnimal.value === "Lobo") {
        nuevaInvestigacion = new Lobo(nombreAnimal.value, edadAnimal.value, direccionImagen, comentarioAnimal.value, `./assets/sounds/${animalObject.sonido}`)

    }else if(nombreAnimal.value === "Oso") {
        nuevaInvestigacion = new Oso(nombreAnimal.value, edadAnimal.value, direccionImagen, comentarioAnimal.value, `./assets/sounds/${animalObject.sonido}`)

    }else if(nombreAnimal.value === "Serpiente") {
        nuevaInvestigacion = new Serpiente(nombreAnimal.value, edadAnimal.value, direccionImagen, comentarioAnimal.value, `./assets/sounds/${animalObject.sonido}`)

    }else if(nombreAnimal.value === "Aguila") {
        nuevaInvestigacion = new Aguila(nombreAnimal.value, edadAnimal.value, direccionImagen, comentarioAnimal.value, `./assets/sounds/${animalObject.sonido}`)

    }
    
    Investigaciones.push(nuevaInvestigacion)
    mostrarAnimales()

    document.querySelector("#animal").value = "Seleccione un animal"
    document.querySelector("#edad").value = "Seleccione un rango de años"
    document.querySelector("#comentarios").value = ""
})

const mostrarAnimales = () => {
    const animalesTemplate = document.querySelector("#Animales");
        animalesTemplate.innerHTML = "";
        Investigaciones.forEach((enInvestigacion) => {
        animalesTemplate.innerHTML += `
        <div class="card mt-2 mx-2" style="width: 12rem;">
        <img width = 12rem height = 200px  src="${enInvestigacion.getImg}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${enInvestigacion.getNombre}</h5>
            <p class="card-text">Rango de edad: ${enInvestigacion.getEdad}</p>
            <p class="card-text">Comentario: ${enInvestigacion.getComentario}</p>
        </div>
        <button id="btnAudio" style="width: 190px;" class="btn btn-secondary" onclick="activarSonido('${enInvestigacion.getSonido}')"></button>
        </div>`
    })
}

window.activarSonido = (nombreAnimal) => {
    const sonido = new Audio(nombreAnimal)
    sonido.play()
};


