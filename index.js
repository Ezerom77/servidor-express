//requerimos express, el modulo instaldo previamente via npm
const express = require("express");
//requerimos morgan, un middleware para logear actividad de requees
const morgan = require("morgan");
//instanciamos express en la constante app que será la que se ejecute
const app = express();

//setings - con app.set y entre parentesis y comillas, se agregan los atributos, primero la variable y luego el contenido, en este ejemplo la variable es appName y el contenido es "mi primer server"
app.set("appName", "mi primer server");
//en settings se puede definir por ej, templates de html, como por ejemplo Handlebars, ejs, erb, jade, pug

//middlewares uso de morgan para logear, en este caso con el atributo dev puedo ver que loguea la url pedida por el navegador, se puede usar combined o short, cada una tiene diferentes respuestas
app.use(morgan("dev"));

//middlewares - tratan informacion que reciben del navegador, se activan con app.use y llevan una funcion con req, res, y next, una vez ejecutado
// debe cerrarse con next() para que continue
// app.use((req, res, next) => {
//   console.log("request url: " + req.url);
//   next();
// });

//ejecutamos el metodo get para la escucha del requerimiento del browser, sus parametros son el roor '/'. y un callback con request/response
//request (req) representa el objeto que vendra desde el navegador y response (res) lo que devolveremos, en este ejemplo un end para finalizar el
// callback y devolver un "hello world"
app.get("/", (req, res) => {
  res.end("Hello World");
});
//puedo agregar tantas rutas como necesite, representando los subdirectorios del sitio, ejemplo creando un subdirectorio para el login

app.get("/login", (req, res) => {
  res.end("llegaste al login");
});

//se puede agregar AL FINAL una ruta generica para cuando el archivo/dir no existe
app.get("*", (req, res) => {
  res.end("esta ruta no existe");
});

//acrita el sever en el puerto determinado, se puede pasar un callback con un console log indicando el status
app.listen(3000, () => {
  console.log("Server active");
  //este console log muestra el contenido creado en setting
  console.log("este app se llama: " + app.get("appName"));
});
