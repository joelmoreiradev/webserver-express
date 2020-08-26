/* Todo esto es la forma de hacer un servidor http
   sin usar Express, usando el paquete incluído en
   Node llamado http. Hacer esto es mas complicado
   por lo que es mejor usar paquetes de terceros
   como Express para facilitar todo. */


const http = require('http');

http.createServer( (req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json'});

    let salida = {
        nombre: 'Joel',
        edad: 20,
        url: req.url
    }

    res.write( JSON.stringify(salida) );
    // res.write('Hola Mundo');
    res.end();

})
.listen(8080);

console.log('Escuchando el puerto 8080');