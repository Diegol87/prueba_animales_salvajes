class Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentario = comentario;
        this._sonido = sonido;
    }

    get getNombre() {
        return this._nombre;
    }

    get getEdad() {
        return this._edad;
    }

    get getImg() {
        return this._img;
    }

    get getComentario() {
        return this._comentario;
    }

    get getSonido() {
        return this._sonido;
    }

    set setNombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    set setEdad(nuevaEdad) {
        this._edad = nuevaEdad;
    }

    set setImg(nuevaImg) {
        this._img = nuevaImg;
    }

    set setComentarios(nuevoComentario) {
        this._comentario = nuevoComentario;
    }

    set setSonido(nuevoSonido) {
        this._sonido =nuevoSonido;
    }

}



export default Animal;