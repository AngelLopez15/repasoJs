// funciones en Js
// funciones landa (flecha) es la forma moderna de hacer funciones

const saludar = (nombre) =>{
    return `Hola, señor ${nombre}`
}
// las funciones de flecha tiene varias ventajas
// Si solo retorna una sola linea se pueden omitir las {}
const saludar2 = (nombre) => `Hola, señor ${nombre}`

// si la funcion no recibe parametros
const saludar3 = () => `Hola Mundo`

console.log(saludar('goku'))
console.log(saludar2('piccoro'))
console.log(saludar3())

// para regresar un objeto de forma implicita debemos encerrar 
// el cuerpo de la funcion en "( )"
const getUSer = () =>({
    uid:'ABC123',
    usernane: 'Angel López'
})

const user = getUSer()
console.log(user)

const getUserActive = (nombre)=>({
    uid: 'ABC123',
    username:nombre
})

const usuarioActivo = getUserActive('Octavio Cruz')

console.log(usuarioActivo)