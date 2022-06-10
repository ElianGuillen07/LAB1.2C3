const fs = require('fs');
const archivo = ('lectura.html');


const contenido = 'Que es musica'
fs.writeFileSync(archivo,contenido);
console.log('Se ha escrito en el archivo');

const texto = '\n Es el arte del bien combinar sonidos y tiempo';

fs.appendFile(archivo,texto, (err) => {
    if(err) throw('No se puede agregar mas informacion');

    console.log('Se ha añadido la informacion')
});