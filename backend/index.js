//INICIACION DE NODE EXPRESS
const express = require("express");
const app = express();

//URL QUE RETORNA TODOS LOS USUARIOS
app.get('/users', function (request, resp) {
    let apiRequest = require("request");
    apiRequest('https://reqres.in/api/users', function (error, response, body) {
        //Si no hay error retorno la respuesta
        if (!error) {
            resp.send(JSON.parse(body));
        }
    });
});

//URL QUE RETORNA EL DETALLE DE UN USUARIO
app.get('/user/:id', (request, resp) => {
    const id = request.params.id;
    let apiRequest = require("request");
    apiRequest('https://reqres.in/api/users/' + id, function (error, response, body) {
        //Si no hay error retorno la respuesta
        if (!error) {
            resp.send(JSON.parse(body));
        }
    });
});

//SERVIDOR LANZDO EN EL PUERTO 3000
app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});