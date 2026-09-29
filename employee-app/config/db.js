import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/employee_db");
    console.log("Database connected successfully !");
  } catch (err) {
    console.log("Database connection failed !", err.message);
  }
};
