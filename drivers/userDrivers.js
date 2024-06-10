import bcrypt from "bcryptjs";
import userModel from "../model/userModel.js";

const UserDrivers = {
	createUser: async (req, res) => {
		try {
			const { name, lastName, identification, email, cellPhone, password, passwordConfirm, gender, birthDay, age, country, city, address, safeQuestion, safeAnswer } = req.body;
			const encrypPassword = await bcrypt.hash(password, 10);
			const newUser = new userModel({
				name,
				lastName,
				identification,
				email,
				cellPhone,
				password: encrypPassword,
				passwordConfirm,
				gender,
				birthDay,
				age,
				country,
				city,
				address,
				safeQuestion,
				safeAnswer
			});
			const createdUser = await newUser.save();
			if (createdUser._id) {
				res.json({
					status: "well",
					message: "User created successfully",
					data: createdUser._id
				});
			}
		} catch (error) {
			res.json({
				status: "wrong",
				message: "An error occurred while creating user",
				data: error
			});
		}
	},
	readUser: async (req, res) => {
		try {
			const userFound = await userModel.findById(req.params.id);
			if (userFound._id) {
				res.json({
					status: "well",
					message: "user found",
					data: userFound
				});
			}
		} catch (error) {
			res.json({
				status: "wrong",
				message: "An error occurred while reading user",
				data: error
			});
		}
	},
	readUsers: async (req, res) => {
		try {
			const allUsers = await userModel.find();
			res.json({
				status: "well",
				message: "read users",
				data: allUsers
			});
		} catch (error) {
			res.json({
				status: "wrong",
				message: "An error occurred while reading all users",
				data: error
			});
		}
	},
	updateUser: async (req, res) => {
		try {
			const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body);

			if (updatedUser._id) {
				res.json({
					status: "well",
					message: "user updated",
					data: updatedUser._id
				});
			}
		} catch (error) {
			res.json({
				status: "wrong",
				message: "An error occurred while updating a user",
				data: error
			});
		}
	},
	deleteUser: async (req, res) => {
		try {
			const deletedUser = await userModel.findByIdAndDelete(req.params.id);
			if (deletedUser._id) {
				res.json({
					status: "well",
					message: "user deleted",
					data: null
				});
			}
		} catch (error) {
			res.json({
				status: "wrong",
				message: "An error occurred while deleting user",
				data: error
			});
		}
	}
};

export default UserDrivers;

/* console.log("solicitud body", solicitud.body);
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
			if (solicitud.body.respuestaSegura === "") throw new Error("falta el res segura"); */
