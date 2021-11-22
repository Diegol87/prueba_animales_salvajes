const getDatos = async() => {
    const url = 'http://127.0.0.1:5500/animales.json';
    const response = await fetch(url);
    const datos = await response.json();
    return datos.animales
}
export default getDatos