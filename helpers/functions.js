import jwt from "jsonwebtoken";

export function generateToken(payload) {
	return new Promise((solve, decline) => {
		jwt.sign(payload, "llave secreta", { expiresIn: "1h" }, (error, token) => {
			if (error) {
				decline(error);
			} else {
				solve(token);
			}
		});
	});
}
