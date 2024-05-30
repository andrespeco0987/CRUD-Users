import mongoose from "mongoose";

mongoose
	.connect(process.env.MONGODB_ATLAS_URI)
	.then((dato) => {
		console.log("conectado a mongo atlas");
	})
	.catch((error) => {
		console.log("ocurrio un error, no hay conexion con mongo atlas");
	});
