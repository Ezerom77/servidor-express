//requerimos express, el modulo instaldo previamente via npm
const express = require("express");
//instanciamos express en la constante app que será la que se ejecute
const app = express();

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

//acrita el sever en el puerto determinado, se puede pasar un callback con un console log indicando el status
app.listen(3000, () => {
  console.log("Server active");
});
