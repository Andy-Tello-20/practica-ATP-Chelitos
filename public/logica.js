
let saludo = document.getElementsByClassName('FirstName')[0]
let initials = document.getElementsByClassName('initials')[0]

const userName = "qwerty michi"

const nombre = userName.trim()

console.log('nombre es:', nombre)

if (nombre) { 
    const palabras = nombre.split(' ')

    saludo.textContent = `Hola ${palabras[0].charAt(0).toUpperCase() + palabras[0].slice(1)}!`

    if (palabras.length > 0) {
        const inicialPrimeraPalabra = palabras[0].charAt(0).toUpperCase()

        initials.textContent = inicialPrimeraPalabra
    }
}