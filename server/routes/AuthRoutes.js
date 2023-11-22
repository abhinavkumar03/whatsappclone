import { Router } from "express";
import { checkUser } from "../controllers/AuthController.js";


const router = Router();

ruoter.post("/check-user",checkUser);

export default router