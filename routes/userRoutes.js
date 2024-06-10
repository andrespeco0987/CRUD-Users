import { Router } from "express";
import UserDrivers from "../drivers/userDrivers.js";

const userRoutes = Router();

userRoutes.post("/", UserDrivers.createUser);
userRoutes.get("/:id", UserDrivers.readUser);
userRoutes.get("/", UserDrivers.readUsers);
userRoutes.put("/:id", UserDrivers.updateUser);
userRoutes.delete("/:id", UserDrivers.deleteUser);

export default userRoutes;
