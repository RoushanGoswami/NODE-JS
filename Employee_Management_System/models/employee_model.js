import mongoose from "mongoose"; // import mongoose then

// step 2 schema

const employeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    age: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
export const Employee = mongoose.model("employee", employeeSchema);
