import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";

const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use("/users", userRoutes);
server.use("/login", loginRoutes);

server.get("/", (req, res) => {
	res.status(404).send("No found");
});

export default server;
