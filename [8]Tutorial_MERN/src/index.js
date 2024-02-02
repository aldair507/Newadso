const express = require("express"); //Aqui estamos llamando al modulo llamado express y lo estamos guardando en una variable
const morgan = require('morgan'); //Estoy llamando al modulo morgan y lo guardo en una variable.
const path = require('path')
const { mongoose } = require('./database');
const app = express(); //Lo ejecutamos pero sera almacenado en una variable

// [Configuracion] 
app.set('port', process.env.PORT || 3000) //Esta linea de comando me permite configurar el puerto por el cual la aplicacion se conectara, en este caso puede ser un puerto configurado desde la nube o mi puerto local (3000)

// [Funciones] (Que se ejecutan antes de que pasen por Rutas)
app.use(morgan('dev')); //Me da mas informacion con respecto a las peticiones que realiza el usuario
app.use(express.json()); //Me permite verificar si los datos ingresados en el servidor estan en formato JSON.

// [Rutas] (Urls del servidor)
app.use('/api/tasks',require('./routes/task.routes')); //Me permite usar la constante router, en cual enviara como respuesta un "hello word" o un archivo json.

// [Archivos estaticos] (html/css/js)
app.use(express.static(path.join(__dirname, 'public'))) //Busca la carpeta public y inicializa los formatos que contenga.
/* console.log(__dirname) //Esto indica por la terminal la ruta en donde se encuentra mi formato de archivo js llamada index 
console.log(__dirname + 'public') //Esto indica por la terminal la ruta en donde se encuentra mi carpeta public
console.log(path.join(__dirname, 'public')); //Esto realiza el mismo resultado de encontrar la ruta de la carpeta public pero de una manera diferente
*/

// [Empezando el servidor]
// -----------Local
/* app.listen(3000, () => { 
    //Al iniciar express le indico de que escuche al puerto 3000, en el cual es mi servidor
    console.log("Server on port 3000 Hola");
}) */

//-------Obteniendo el valor desde el set
app.listen(app.get('port'), () => {
    //El app.get me permite obtener el valor del puerto.
    console.log(`Estoy en el server ${app.get('port')}`) //Esta linea de codigo me permite imprimir en consola el puerto en el que estoy conectado
})