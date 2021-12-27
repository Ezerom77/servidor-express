//requerimos express, el modulo instaldo previamente via npm
const express = require("express");
//requerimos morgan, un middleware para logear actividad de requees
const morgan = require("morgan");
//instanciamos express en la constante app que será la que se ejecute
const app = express();
//requiriendo routes
const routes = require("./routes");
const routesApi = require("./routes-api");

//setings - con app.set y entre parentesis y comillas, se agregan los atributos, primero la variable y luego el contenido, en este ejemplo la variable es appName y el contenido es "mi primer server"
app.set("appName", "mi primer server");
//en settings se puede definir por ej, templates de html, como por ejemplo Handlebars, ejs, erb, jade, pug
//vamos a probar ejs
app.set("views", __dirname + "/views"); //aca defino la ruta de los archivos
app.set("view engine", "ejs"); //aca que el motor de plantillas será ejs, este modulo hubo que instalarlo pero NO requiere inicializar con un require

//middlewares uso de morgan para logear, en este caso con el atributo dev puedo ver que loguea la url pedida por el navegador, se puede usar combined o short, cada una tiene diferentes respuestas
app.use(morgan("dev"));

//middlewares - tratan informacion que reciben del navegador, se activan con app.use y llevan una funcion con req, res, y next, una vez ejecutado
// debe cerrarse con next() para que continue
// app.use((req, res, next) => {
//   console.log("request url: " + req.url);
//   next();
// });

//rutas
app.use(routes); //indica a donde debe ir a buscar las rutas, en caso de no encontrarla, continua en el siguiente de aca abajo
app.use("/api", routesApi); //en caso de no encotnrarla sigue abajo donde esta definido el app use * para el resto de las urls

app.get("*", (req, res) => {
  res.end("esta ruta no existe");
});

//activa el server en el puerto determinado, se puede pasar un callback con un console log indicando el status
app.listen(3000, () => {
  console.log("Server active");
  //este console log muestra el contenido creado en setting
  console.log("este app se llama: " + app.get("appName"));
});
