import "dotenv/config";
import "./conecctionDB.js";
import server from "./server.js";

server.listen(3000, () => {
	console.log("Running on port 3000");
});
