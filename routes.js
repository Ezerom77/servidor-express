const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.ejs");
});

router.get("/login", (req, res) => {
  res.render("login");
});


module.exports = router;

// Orginal que viene de index.js

// //ejecutamos el metodo get para la escucha del requerimiento del browser, sus parametros son el roor '/'. y un callback con request/response
// //request (req) representa el objeto que vendra desde el navegador y response (res) lo que devolveremos, en este ejemplo un end para finalizar el
// // callback y devolver un "hello world"
// app.get("/", (req, res) => {
//   //res.end("Hello World"); //esta vista mostraba un mensaje
//   res.render("index.ejs"); //esto renderiza ese archivo en pantalla (tipo html)
// });
// //puedo agregar tantas rutas como necesite, representando los subdirectorios del sitio, ejemplo creando un subdirectorio para el login

// app.get("/login", (req, res) => {
//   res.render("login");
// });

// //se puede agregar AL FINAL una ruta generica para cuando el archivo/dir no existe
// app.get("*", (req, res) => {
//   res.end("esta ruta no existe");
// });
