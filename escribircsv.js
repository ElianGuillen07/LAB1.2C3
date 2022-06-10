const fs = require('fs');
const archivo = ('lectura.csv');



const contenido = 'Que es Programacion'
fs.writeFileSync(archivo,contenido);
console.log('Se ha escrito en el archivo');

const texto = '\n La programación es el proceso de crear un conjunto de instrucciones que le dicen a una computadora como realizar algún tipo de tarea.';

fs.appendFile(archivo,texto, (err) => {
    if(err) throw('No se puede agregar mas informacion');

    console.log('Se ha añadido la informacion')
});
