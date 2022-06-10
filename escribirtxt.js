

const fs = require('fs');
const archivo = 'lectura.txt';


const contenido = 'Que es node.js'
fs.writeFileSync(archivo,contenido);
console.log('Se ha escrito en el archivo');



const definicion = '\n es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.';

fs.appendFile(archivo,definicion, (err) =>{
    if (err) throw('No se puede adjuntar mas texto');
    console.log('Se ha añadido la informacion');
})

