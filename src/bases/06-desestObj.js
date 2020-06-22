// Desestructuracion o Asignacion desestructurante

const Persona = {
    nombre:'Tony',
    edad:45,
    clave:'Iron Man'
}
// esta es la forma en la que normalmente accedemos a las
// propiedades de un objeto sin embargo es muy tediosa
console.log(Persona.nombre)
console.log(Persona.edad)
console.log(Persona.clave)

// aqui estamos desestructurando un objeto
// del lado izquierdo estamos extrayendo las propiedades 
// del objeto que esta del lado derecho
const { edad, clave, nombre} = Persona
// y asi es como se mandaria a llamar el valor de la propiedad  
console.log(nombre)
console.log(clave)
console.log(edad)

// Otro uso de la desestructuracion es la de poder 
// retornar solo los valores que nos interesan haciendo 
// una desestructuracion directa. Ademas de poder poner
// nuevas propiedades e inicializarlas
// en caso de que el objeto si tena la propiedad tomara
// su valor original y si no tomara el valor por default
// que le asignamos

const retornaPersona = ({nombre, edad, rango ='ingeniero'}) =>{
    console.log(nombre, edad, rango)
}
// llamamos a la funcion y como parametro le pasamos el 
// objeto a desestructurar
retornaPersona(Persona)

const useContext = ({clave, nombre, edad, rango = 'ingeniero'}) =>{
    return {
        nombreClave: clave,
        anios:edad,
        latlong:{
            lat:54.51,
            long:-51.11
        }
    }
} 

// para desestructurar objetos anidados
const {nombreClave, anios, latlong:{lat,long}} = useContext(Persona)
// const {lat,long}=latlong <- esta seria otra forma 
console.log(nombreClave, anios)
console.log(lat, long)
