// desestructuracion de Arreglos
const personajes = ['Goku','Vegeta','Piccoro']

// si quereremos obtener elemento del arreglo
// para desestructurarlo  necesitamos hacer lo siguiente
const [p2] = personajes
// Nota: Para hacer la reasignacion de nombre con f2
// se hace una forma mas rapida y en todos los elementos 
// con ese nombre.

// Sin embargo esto solo retorna el primer elemento siempre
// si queremos algun otro elemento del arreglo necesitamos inducarlo con "," 
console.log(p2)

const [,,p]=personajes
console.log(p)

// una funcion que retorna un arreglo
const retornaArreglo = () => {
    return ['ABC', 123]
}
// verificamos que la funcion este retornando el arreglo
const arr= retornaArreglo()
console.log(arr)
// desestruturamos el arreglo que retorna la funcion 
// para obtener sus valores individualmente
const [letras, numeros] = retornaArreglo()
console.log(letras, numeros)

// desestructurando un arreglo que contiene una funcion
const useState = (valor) =>{
    return [valor, () => {
        console.log('Hola mundo')
    }]
}

const arr2 = useState('trunks')
console.log(arr2)
// desestructurando el arreglo
const [nombre, saludo] = useState('trunks2')
console.log(nombre)
// accediendo a la funcion del arreglo desestructurado
// se puede llamar como queramos pero debe ser el mismo
// nombre que le pasemos para desestructurar
saludo()