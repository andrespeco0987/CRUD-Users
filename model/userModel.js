import { Schema, model } from "mongoose";

const userSchema = new Schema({
	name: { type: String, require: true },
	lastName: { type: String, require: true },
	identification: { type: Number, require: true },
	email: { type: String, require: true },
	cellPhone: { type: Number, require: true },
	password: { type: String, require: true },
	passwordConfirm: { type: String, require: true },
	gender: { type: String, require: true },
	birthDay: { type: Date, require: true },
	age: { type: Number, require: true },
	Country: { type: String, require: true },
	city: { type: String, require: true },
	address: { type: Schema.Types.Mixed, require: true },
	safeQuestion: { type: String, require: true },
	safeAnswer: { type: String, require: true }
});

export default model("User", userSchema);
