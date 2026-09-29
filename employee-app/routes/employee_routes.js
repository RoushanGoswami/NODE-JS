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
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

router.get("/name/:name", searchByName);
router.get("/id/:id", searchById);
router.get("/role/:role", searchByRole);

export default router;
