// templates Strings o backtiks
// Son la forma moderna de incrustar codigo js, css o html
// ademas respeta los espacios y saltos de linea

const nombre ='Angel';
const apellido='López';
const nombreCompleto=`Hola mundo de parte de ${nombre} ${apellido}`;
const nombreCompleto2=`Hola mundo 2
de parte de:
${nombre} ${apellido}`;

const getSaludo = (nombre) => `Hola: ${nombre}`;

console.log(nombreCompleto);
console.log(nombreCompleto2);
console.log(`Este es un saludo: ${getSaludo(nombre)}`);