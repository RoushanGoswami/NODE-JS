import { Employee } from "../models/employee_model.js";

export const insertEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.json({
      message: "Employee inserted successfully !",
    });
  } catch (err) {
    res.status(500).json({
      message: "Employee insertion failed !",
      err: err.message,
    });
  }
};
