const ControladorUsuarios = {
	crearUsuario: async (solicitud, respuesta) => {
		try {
			console.log("solicitud body", solicitud.body);
			if (solicitud.body.identificacion === "") throw new Error("falta el identificacion");
			if (solicitud.body.nombre === "") throw new Error("falta el nombre");
			if (solicitud.body.apellido === "") throw new Error("falta el apellido");
			if (solicitud.body.email === "") throw new Error("falta el email");
			if (solicitud.body.telefono === "") throw new Error("falta el telefono");
			if (solicitud.body.contrasenia === "") throw new Error("falta el contraseña");
			if (solicitud.body.confirmarContrasenia === "") throw new Error("falta el confirmacion de contraseña");
			if (solicitud.body.genero === "") throw new Error("falta el genero");
			if (solicitud.body.foto === "") throw new Error("falta el foto");
			if (solicitud.body.pais === "") throw new Error("falta el pais");
			if (solicitud.body.ciudad === "") throw new Error("falta el ciudad");
			if (solicitud.body.direccion === "") throw new Error("falta el direccion");
			if (solicitud.body.preguntaSegura === "") throw new Error("falta el pregunta de seguridad");
			if (solicitud.body.respuestaSegura === "") throw new Error("falta el respuesta segura");
			respuesta.json({ mensaje: "Todo correcto" });
		} catch (error) {
			console.log(error);
			respuesta.json({ error: true, mensaje: "Error de datos faltantes" });
		}
	},
	leerUsuario: async (solicitud, respuesta) => {
		try {
			console.log(solicitud.params.id);
			respuesta.json({ mensaje: "GET usuario works!" });
		} catch (error) {
			console.log(error);
			respuesta.json({ error: true, mensaje: "Error al leer usuario" });
		}
	},
	leerUsuarios: async (solicitud, respuesta) => {
		try {
			respuesta.json({ mensaje: "GET 2 usuarios works!" });
		} catch (error) {
			console.log(error);
			respuesta.json({ error: true, mensaje: "Error al leer todos los usuarios" });
		}
	},
	actualizarUsuario: async (solicitud, respuesta) => {
		try {
			console.log("id: ", solicitud.params.id);
			console.log("solicitud body", solicitud.body);
			respuesta.json({ mensaje: "PUT usuario works!" });
		} catch (error) {
			console.log(error);
			respuesta.json({ error: true, mensaje: "Error al actualizar usuario" });
		}
	},
	eliminarUsuario: async (solicitud, respuesta) => {
		try {
			console.log("id: ", solicitud.params.id);
			respuesta.json({ mensaje: "DELETE usuario works!" });
		} catch (error) {
			console.log(error);
			respuesta.json({ error: true, mensaje: "Error al eliminar usuario" });
		}
	}
};

export default ControladorUsuarios;

/* const usuario = {
	identificacion: "12345678",
	nombre: "pepita",
	apellido: "perez",
	email: "pepita@bit.institute",
	telefono: "1234",
	contrasenia: "asd",
	confirmarContrasenia: "asd",
	genero: "femenino",
	foto: "https://www.lavanguardia.com/andro4all/hero/2024/02/pepita-de-oro-gigantesca.png?width=1200",
	pais: "colombia",
	ciudad: "cali",
	direccion: "calle 11",
	preguntaSegura: "primer apellido materno",
	respuestaSegura: "ramirez"
};
 */
