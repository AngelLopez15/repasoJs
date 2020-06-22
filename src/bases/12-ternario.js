// Operador ternario
// es una manera corta de hacer una descion (condicional)
// 

const activo = true

const mensaje = (activo) ? 'Activo' : 'Inactivo'
// Otra forma en como podriamos encontrar que se usa
// el operador ternario es que si la condicion es falsa
// mandar un null
// const mensaje = (!activo) ? 'Activo' : null
// Sin embargo una forma mas corta y correcta de hacer
// un "if" con el operador ternario
// cuando no queremos que haga nada si es falso
//  es de la siguiente manera
const mensaje2= (activo) && 'Activo'
// para ver la linea anterior mas claro es como si se hiciera
// de la siguiente manera
// const mensaje = (activo===true) && 'Activo'

console.log (mensaje)
console.log (mensaje2)