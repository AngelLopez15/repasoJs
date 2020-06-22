// Promesas
// el concepto de promesas en Js es exatamente
// igual a la definicion literal de una promesa
// en el diccionario. Osea es un acontesimiento
// futuro que aseguramos que vamos hacer

// Las promesas en Js son asincronas por naturaleza
// es decir que primero se va a ejecutar todo el codigo sincrono
// todo lo que es secuencial y los resultados de las promesas se
// ejecutaran hasta que se termine todo lo sincrono.

// Las promesas reciben un callback y este callback a su vez
// recibe otros dos parametros resolve y reject (aunque en realidad puede ser los nombres que sean)
// resolver es otro callback que se va a ejecutar cuando el proceso sea exitoso
// reject se ejecuta cuando la promesa falle 

import {getHeroById} from './bases/APIheroes'
import heroes from './data/heroes';

// const promesa = new Promise ((resolve, reject)=>{
//     setTimeout(() => {
//         // la palabra heroes puede ser cualquier otra palabra
//         const heroe = getHeroById(2)
//         resolve(heroe)
//         reject('No se encontro el heroe')
//     }, 2000);
// })

// // el then esta relacionado con el resolve
// promesa.then((heroe)=>{
//     console.log('heroe',heroe)
// })
// //el catch esta relacionado con el reject 
// .catch(error => console.error(error))

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const h1 = getHeroById(id)
            if (h1) {
                resolve(h1)
            }else{
                reject('heroe no existe')
            }
        }, 2000);
    })
}

getHeroByIdAsync(3)
    // .then(heroe => console.log('heroe',heroe))
    // otra forma de recibir el elemnto
    .then(console.log)
    // .catch(error=>console.error(error))
    // si se va a enviar enviar el mismo argumento a la 
    // funcion es mas facil solo mandar la referencia
    .catch(console.warn)