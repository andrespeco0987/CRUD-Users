const ControladorUsuarios = {
	crearUsuario: (solicitud, respuesta) => {
		respuesta.json({ mensaje: "POST usuario works!" });
	},
	leerUsuario: (solicitud, respuesta) => {
		respuesta.json({ mensaje: "GET usuario works!" });
	},
	leerUsuarios: (solicitud, respuesta) => {
		respuesta.json({ mensaje: "GET 2 usuarios works!" });
	},
	actualizarUsuario: (solicitud, respuesta) => {
		respuesta.json({ mensaje: "PUT usuario works!" });
	},
	eliminarUsuario: (solicitud, respuesta) => {
		respuesta.json({ mensaje: "DELETE usuario works!" });
	}
};

export default ControladorUsuarios;
