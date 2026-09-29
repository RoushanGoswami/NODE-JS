import express from "express";
import {
  insertEmployee,
  displayEmployee,
  deleteEmployee,
  updateEmployee,
  searchByName,
  searchById,
  searchByRole,
} from "../controller/employee_controller.js";
const router = express.Router();

router.get("/", displayEmployee);
router.post("/", insertEmployee);
router.put("/", updateEmployee);
router.delete("/", deleteEmployee);

router.get("/name", searchByName);
router.get("/id", searchById);
router.get("/role", searchByRole);

export default router;
