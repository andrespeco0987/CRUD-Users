import bcryptjs from "bcryptjs";
import { generateToken, verifyToken } from "../helpers/functions.js";
import userModel from "../model/userModel.js";

const LoginDrivers = {
	login: async (req, res) => {
		try {
			const { username, password } = req.body;
			const userFind = await userModel.findOne({
				email: username
			});
			const passwordValidated = bcryptjs.compare(password, userFind.password);
			if (passwordValidated) {
				const token = await generateToken({
					id: userFind._id,
					name: userFind.name
				});
				res.json({
					status: "well",
					message: "successfully access",
					data: token
				});
			} else {
				res.json({
					status: "wrong",
					message: "access denied",
					data: null
				});
			}
		} catch (error) {
			res.json({
				status: "wrong",
				message: "An error occurred while logging in",
				data: error
			});
		}
	},
	validateToken: async (req, res) => {
		try {
			const token = req.params.token;
			const decoded = await verifyToken(token);
			if (decoded.id) {
				res.json({
					status: "well",
					message: "token validated",
					data: decoded
				});
			} else {
				res.json({
					status: "wrong",
					message: "invalid token",
					data: null
				});
			}
		} catch (error) {
			res.json({
				status: "wrong",
				message: "An error occurred while validate token",
				data: error
			});
		}
	}
};

export default LoginDrivers;
