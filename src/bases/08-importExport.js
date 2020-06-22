// import y export 

// para importar se usa la palabra import
// entre las  "{ }" van todas las importaciones
// que no sean la importacion por default
import heroes, {owners} from './data/heroes'

console.log(owners)

const getHeroById = (id) => {
    //El find recibe como argumento una funcion (callback)
    // debemos ver a find como un tipo de for que va a ir
    // recorriendo todo el arreglo comparando el campo
    // que le pasemos 
    return heroes.find(heroe=>heroe.id===id)
}
// find solo retorna un valor
// esta es una forma optimizada de hacer la misma funcion
// const getHeroById = (id) => heroes.find(heroe=>heroe.id===id)

console.log(getHeroById(2))

// para retornar todos los valores que complan con una condicion
// se debe usar el metodo filter
const getHeroesByOwner = owner => heroes.filter(heroe => heroe.owner === owner)

console.log(getHeroesByOwner('Marvel'))