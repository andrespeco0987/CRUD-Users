"use strict";
const express = require("express");

const servidor = express();

servidor.get("/", (solicitud, respuesta) => {
	respuesta.json({
		saludo: "Hola , que tal"
	});
});

/* servidor.get("/xx", (solicitud, respuesta) => {
	respuesta.redirect(301, "https://www.google.com/");
}); */

servidor.listen(3000);
