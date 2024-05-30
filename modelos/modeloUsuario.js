import { Schema, model } from "mongoose";

const esquemaUsuario = new Schema({
	nombre: { type: String, require: true },
	apellido: { type: String, require: true },
	identificacion: { type: Number, require: true },
	email: { type: String, require: true },
	telefono: { type: Number, require: true },
	contrasenia: { type: String, require: true },
	confirmarContrasenia: { type: String, require: true },
	genero: { type: String, require: true },
	nacimiento: { type: Date, require: true },
	edad: { type: Number, require: true },
	pais: { type: String, require: true },
	ciudad: { type: String, require: true },
	direccion: { type: Schema.Types.Mixed, require: true },
	preguntaSegura: { type: String, require: true },
	respuestaSegura: { type: String, require: true }
});

export default model("Usuario", esquemaUsuario);
