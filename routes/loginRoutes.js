import { Router } from "express";
import LoginDrivers from "../drivers/loginDrivers.js";

const loginRoutes = Router();

loginRoutes.post("/", LoginDrivers.login);

export default loginRoutes;
