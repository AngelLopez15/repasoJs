// Objetos literales (o diccionarios en otros lenguajes de programacion)
// Los objetos trabjan con pares de valores
const Persona = {
    nombre:'Angel',
    apellido:'López',
    // En Js dejar una "," al final de la ultima propiedad no 
    // genera un error y e considerada hasta un buena practica
    edad:29,
    direccion:{
        calle:'norte 1',
        cp:'56610',
        estado:'EdoMex'
    } 
};

console.log(Persona)
// para ver mejos las propiedades de un objeto es facil con
// console.table(Persona)

// Para hacer un clon del Objeto persona. La forma correcta es usando
// el spred operator
const Persona2 = {...Persona}
Persona2.nombre='Octavio'
console.log(Persona2)

// si son muchos los objetos que necesitamos hacer ya es mejor
// hacer un prototipo con una clase