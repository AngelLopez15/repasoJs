// variables y constantes
// var ya no se usa hay que olvidar que existe
// Ahora se deben ocupar variables (let) y constantes (const)
// Un gran beneficio de const y let es que se crea un scope (alcance)
// cosa que no pasaba con var
const nombre='Angel';
const apellido='López';
let valorDado=5;

console.log(nombre,apellido,valorDado);

valorDado=6;
console.log(nombre,apellido,valorDado)

if (true) {
    // aqui si esta permitido repetir y reasignar el nombre y valor
    // de variables y constantes. Esto gracias al Scope ya que las variables
    // y constantes dentro del if solo "viven" dentro del if. Cuando termina
    // la condicional las variables mueren
    const nombre = 'Octavio';
    let valorDado= 3;
    console.log(nombre, valorDado)
}