import express from "express";
import { connectDB } from "./config/db.js";
import employee_routes from "./routes/employee_routes.js";

const app = express();

// mainly jo data server pe aayega use ye
//json form me convert kr dega
app.use(express.json());

connectDB();
// now set the route

app.use("/api/employee", employee_routes);

app.listen(5000, () => {
  console.log("server started successfully !");
});
