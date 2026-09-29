import mongoose from "mongoose";

export const employeeSchema = new mongoose.Schema(
  {
    emp_id: { type: Number, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    age: { type: String, required: true },
    salary: { type: String, required: true },
  },
  { timestamps: true },
);

export const Employee = mongoose.model("employee", employeeSchema);
// 1 connect database in config folder
// 2 make the schema --> model folder
