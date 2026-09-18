import mongoose from "mongoose"; // just to connect with server with database(db)
// database connected
export const connectDB = async () => {
  try {
 await mongoose.connect("mongodb://localhost:27017/employee");
    console.log("Database Connected Successfully !");
  } catch (err) {
    console.log("Database connection failed ! ERROR -" + err.message);
  }
};

// db connect - > db struture -> db model -> controllers -> routes -> server
