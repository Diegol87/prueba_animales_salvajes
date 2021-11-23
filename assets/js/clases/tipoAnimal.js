import Animal from "./animal.js"

class Leon extends Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido)
    }

    Rugir() {
        let sonido = this.getSonido
        this.setSonido = sonido
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido)
    }

    Aullar() {
        let sonido = this.getSonido
        this.setSonido = sonido
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido)
    }

    Grunir() {
        let sonido = this.getSonido
        this.setSonido = sonido
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido)
    }

    Sisear() {
        let sonido = this.getSonido
        this.setSonido = sonido
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido)
    }

    Chillar() {
        let sonido = this.getSonido
        this.setSonido = sonido
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };