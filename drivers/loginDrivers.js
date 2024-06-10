import bcryptjs from "bcryptjs";
import { generateToken } from "../helpers/functions.js";
import userModel from "../model/userModel.js";

const LoginDrivers = {
	login: async (req, res) => {
		try {
			const { username, password } = req.body;
			const userFind = await userModel.findOne({
				email: username
			});
			const passwordValidated = await bcryptjs.compare(password, userFind.password);
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
	}
};

export default LoginDrivers;
