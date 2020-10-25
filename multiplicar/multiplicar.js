// requireds
const fs = require('fs');

const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('============================'.yellow);
    console.log(`\t TABLA DEL ${ base }`.yellow);
    console.log('============================'.yellow);
    console.log(`\t del 1 al ${ limite }`);
    console.log('============================'.yellow);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
}

let crearFile = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`EL valor introducido ${ base } no es un numero`.red);
            return
        } else if (!Number(limite)) {
            reject(`EL valor introducido ${ limite } no es un numero`);
            return
        }

        let datos = '';

        for (let i = 1; i <= limite; i++) {
            datos += `${ base } * ${ i } = ${ base * i }\n`;
        }
        fs.writeFile(`tablas/tabla-${ base }-${ limite }.txt`, datos, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-${ limite }.txt`.green)

        });
    });
}

module.exports = {
    listarTabla,
    crearArchivo: crearFile
        //Simplemente:
        //"crearArchivo" (Si el método se llamase igual y no crearFile)
}