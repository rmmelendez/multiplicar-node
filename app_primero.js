// requireds

const fs = require('fs');

let base = 2;
let datos = '';

for (let i = 1; i <= 10; i++) {
    datos += `${ base } * ${ i } = ${ base * i }\n`;
}

// ../  -> Significa que regresa al DIRECTOR ANTERIOR
// ./ -> Significa que regresa a la RAIZ

fs.writeFile(`tablas/tabla-${ base }.txt`, datos, (err) => {

    if (err) throw err;

    console.log(`El archivo tabla-${ base }.txt ha sido creado!`);
});