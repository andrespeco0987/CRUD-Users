import ModeloUsuario from "../modelos/modeloUsuario.js";

const ControladorUsuarios = {
	crearUsuario: async (solicitud, respuesta) => {
		try {
			/* console.log("solicitud body", solicitud.body); */
			if (solicitud.body.nombre === "") throw new Error("falta el nombre");
			if (solicitud.body.apellido === "") throw new Error("falta el apellido");
			if (solicitud.body.identificacion === "") throw new Error("falta el identificacion");
			if (solicitud.body.email === "") throw new Error("falta el email");
			if (solicitud.body.telefono === "") throw new Error("falta el telefono");
			if (solicitud.body.contrasenia === "") throw new Error("falta el contraseña");
			if (solicitud.body.confirmarContrasenia === "") throw new Error("falta el confirmacion de contraseña");
			if (solicitud.body.genero === "") throw new Error("falta el genero");
			if (solicitud.body.nacimiento === "") throw new Error("falta su fecha de nacimiento");
			if (solicitud.body.edad === "") throw new Error("falta su edad");
			if (solicitud.body.pais === "") throw new Error("falta el pais");
			if (solicitud.body.ciudad === "") throw new Error("falta el ciudad");
			if (solicitud.body.direccion === "") throw new Error("falta el direccion");
			if (solicitud.body.preguntaSegura === "") throw new Error("falta el pregunta de seguridad");
			if (solicitud.body.respuestaSegura === "") throw new Error("falta el respuesta segura");
			const nuevoUsuario = new ModeloUsuario(solicitud.body);
			const usuarioCreado = await nuevoUsuario.save();
			if (usuarioCreado._id) {
				respuesta.json({
					resultado: "bien",
					mensaje: "usuario creado exitosamente",
					datos: usuarioCreado._id
				});
			}
		} catch (error) {
			respuesta.json({
				resultado: "mal",
				mensaje: "ocurrió un error al crear usuario",
				datos: error
			});
		}
	},
	leerUsuario: async (solicitud, respuesta) => {
		try {
			const usuarioEncontrado = await ModeloUsuario.findById(solicitud.params.id);
			if (usuarioEncontrado._id) {
				respuesta.json({
					resultado: "bien",
					mensaje: "usuario leído",
					datos: usuarioEncontrado
				});
			}
		} catch (error) {
			respuesta.json({
				resultado: "mal",
				mensaje: "ocurrió un error al leer usuario",
				datos: error
			});
		}
	},
	leerUsuarios: async (solicitud, respuesta) => {
		try {
			const todosLosUsuarios = await ModeloUsuario.find();
			respuesta.json({
				resultado: "bien",
				mensaje: "usuarios leídos",
				datos: todosLosUsuarios
			});
		} catch (error) {
			respuesta.json({
				resultado: "mal",
				mensaje: "ocurrió un error al leer todos los usuarios",
				datos: error
			});
		}
	},
	actualizarUsuario: async (solicitud, respuesta) => {
		try {
			const usuarioActualizado = await ModeloUsuario.findByIdAndUpdate(solicitud.params.id, solicitud.body);

			if (usuarioActualizado._id) {
				respuesta.json({
					resultado: "bien",
					mensaje: "usuario actualizado",
					datos: usuarioActualizado._id
				});
			}
		} catch (error) {
			respuesta.json({
				resultado: "mal",
				mensaje: "ocurrió un error al actualizar un usuario",
				datos: error
			});
		}
	},
	eliminarUsuario: async (solicitud, respuesta) => {
		try {
			const usuarioEliminado = await ModeloUsuario.findByIdAndDelete(solicitud.params.id);
			if (usuarioEliminado._id) {
				respuesta.json({
					resultado: "bien",
					mensaje: "usuario eliminado",
					datos: null
				});
			}
		} catch (error) {
			respuesta.json({
				resultado: "mal",
				mensaje: "ocurrió un error al eliminar usuario",
				datos: error
			});
		}
	}
};

export default ControladorUsuarios;
