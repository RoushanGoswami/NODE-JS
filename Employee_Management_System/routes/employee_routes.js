import express from "express";
import { insertEmployee } from "../controllers/employee_controller.js";
const router = express.Router();

router.post("/", insertEmployee);

export default router;
