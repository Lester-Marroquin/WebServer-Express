const http = require('node:http');


http.createServer ( (req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json'})

    let salida = {
        nombre: 'Lester',
        edad: 27,
        url: req.url
    }
    res.write(JSON.stringify(salida ));
    //res.write('Hola Mundo');
    res.end();
})
.listen(8080);

console.log('Escuchando al puerto 8080');