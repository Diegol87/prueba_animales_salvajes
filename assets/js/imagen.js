import getDatos from "./consulta.js"

const getAnimal = document.querySelector("#animal")
const preview = document.querySelector("#preview")

getAnimal.addEventListener("change", async() => {
    const animales = await getDatos();
    const imagenAnimal = animales.find(
        (animal) => animal.name === getAnimal.value
    )
    const getImagen = `<img width = 212px height = 200 src="/assets/imgs/${imagenAnimal.imagen}" alt="">`
    console.log(getImagen);
    
    preview.innerHTML = getImagen

    preview.style.backgroundImage = `url(${getImagen})`
})