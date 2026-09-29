import { Employee } from "../model/employee_model.js";

export const insertEmployee = async (req, res) => {
  try {
    // yaha ek sath bahut sare employee add ho sakte
    //  hai issliye hum body ka use karenge
    const employee = req.body;
    const result = await Employee.create(employee);
    res.json({
      status: true,
      message: "employee inserted successfully !",
      result,
    });
  } catch (err) {
    res.status(401).json({
      status: false,
      message: "Employee not inserted !",
      err: err.message,
    });
  }
};

export const displayEmployee = async (req, res) => {
  try {
    const data = await Employee.find(); // employee db is find
    //  kar ke display karna
    res.json({
      status: true,
      message: "employee displayed successfully !",
      data,
    });
  } catch (err) {
    res.status(401).json({
      status: false,
      message: "Employee not displayed !",
      err: err.message,
    });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    // to delete we need id
    const id = req.params.id; // params issliye
    // qki only 1 thing is needed
    const result = await Employee.findByIdAndDelete(id);
    res.json({
      status: true,
      message: "employee deleted successfully !",
      result,
    });
  } catch (err) {
    res.status(401).json({
      status: false,
      message: "Employee not deleted !",
      err: err.message,
    });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    // to update employee we need employee id , and the employee
    //both will come from body -->req.body
    const employee = req.body;
    const id = req.body.id;
    const result = await Employee.findByIdAndUpdate(id, employee);
    res.json({
      status: true,
      message: "employee updated successfully !",
      result,
    });
  } catch (err) {
    res.status(401).json({
      status: false,
      message: "Employee not updated !",
      err: err.message,
    });
  }
};

export const searchByName = async (req, res) => {
  try {
    // it's searched by name so hame name to chahiye hoga
    const name = req.params.name;
    const data = await Employee.find({ name });
    res.json({
      status: true,
      message: "employee searched successfully !",
      data,
    });
  } catch (err) {
    res.status(401).json({
      status: false,
      message: "employee not found !",
      err: err.message,
    });
  }
};

export const searchById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Employee.find({ id });
    res.json({
      status: true,
      message: "employee searched successfully !",
      data,
    });
  } catch (err) {
    res.status(401).json({
      status: false,
      message: "employee not found !",
      err: err.message,
    });
  }
};

export const searchByRole = async (req, res) => {
  try {
    const role = req.params.role;
    const data = await Employee.find({ role });

    res.json({
      status: true,
      message: "employee searched successfully !",
      data,
    });
  } catch (err) {
    res.status(401).json({
      status: false,
      message: "employee not found !",
      err: err.message,
    });
  }
};
