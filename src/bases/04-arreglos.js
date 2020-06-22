// arreglos

// esta es la forma en la que se declara  un arreglo
// sin embargo para crear arreglos literales es mejor
// solo usar "[ ]"  ya que esta forma solo se usa
// para crear un arreglo con tamaño predefinido
// aunque se sigo pudiendo añadir elementos
// const arreglo = new Array();

// esta es la forma correcta de declarar un arreglo literal
// const arreglo= []

// para insertar valores en el arreglo se puede hacer
// mediante el operador spred que es la forma recomendada
// aunque tambien se puede hacer con los push
// arreglo.push(1)

// tambien se puede inicializar con valores el carreglo
const arreglo=[1,2,3,4]

// Esta es la forma incorrecto de agregar valores a un arreglo
// ya que aqui solo se esta referenciando el espacio de memoria
// const arreglo2=[arreglo, 5]

//Esta es la forma correcta de agregar valores a un nuevo
// arreglo haciendo uso del spred operator ya que de esta
// manera se crea un nuevo arreglo con los valores de
// primer arreglo mas el valor nuevo 
const arreglo2=[...arreglo, 5]
// Lo que realmente esta ocurriendo es que el operador spred
// extrae la informacion del arreglo y los manda cada uno
// individualmente al nuevo arreglo

// Metodo Map es fundamental para React
// el metodo map siempre recibe un callback (una funcion)
const arreglo3=[...arreglo,5]

// el metodo map tambien crea un nuevo arreglo
// el metodo map actua como un for que recorre todo el arreglo
const arreglo4 = arreglo3.map((numbero)=>{
    return numbero * 2
})

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo4)