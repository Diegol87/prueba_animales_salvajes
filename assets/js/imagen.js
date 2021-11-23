import getDatos from "./consulta.js"

const getAnimal = document.querySelector("#animal")
const preview = document.querySelector("#preview")

getAnimal.addEventListener("change", async() => {
    const animales = await getDatos();
    const imagenAnimal = animales.find(
        (animal) => animal.name === getAnimal.value
    )
    const getImagen = `<img width = 200px src="/assets/imgs/${imagenAnimal.imagen}" alt="">`
    
    listaImagen.innerHTML = getImagen

    const Imagenes = document.querySelector("#listaImagen img")

        const direccionImagen = Imagenes.src

    preview.style.backgroundImage = `url(${direccionImagen})`
})