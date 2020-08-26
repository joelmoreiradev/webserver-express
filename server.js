const express = require('express');
const { response } = require('express');
const app = express(); // declaro una variable para referirme a express cuando lo quiera usar
 
const hbs = require('hbs');


// requerir helpers del archivo helpers.js
require('./hbs/helpers');


const port = process.env.PORT || 3000;

// servir contenido estático como una web.
app.use( express.static (  __dirname + '/public') );



// especifico la ruta donde se encuentran los partials.
hbs.registerPartials(__dirname + '/views/partials');

// Express HBS engine
app.set('view engine', 'hbs');



app.get('/', (req, res) => {  // solicitud get cuando el path sea un /
  // res.send('Hello World')


  res.render('home', {
    // envío parámetros que puedo usar en el home.hbs con {{> nombre }}
    nombre: 'joel'
  });

});


app.get('/about', (req, res) => {  // solicitud get cuando el path sea un /
  // res.send('Hello World')


  res.render('about');

});

// app.get('/data', (req, res) => {  // solicitud get cuando el path sea /data
//   res.send('Hola Data')

// });
 
app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
})