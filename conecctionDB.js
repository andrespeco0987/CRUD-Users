import mongoose from "mongoose";

mongoose
	.connect(process.env.MONGODB_ATLAS_URI)
	.then((dato) => {
		console.log("Connected to Mongo Atlas");
	})
	.catch((error) => {
		console.log("An error occurred, there is no connection to mongo atlas");
	});
