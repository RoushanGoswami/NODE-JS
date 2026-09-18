import express from 'express'
import {connectDB} from './config/db.js'
import employee_routes  from './routes/employee_routes.js'

const app = express()
 
app.use(express.json())
connectDB()
app.use('/api/employee', employee_routes)

app.listen(4000,()=>{
    console.log("Server Started successfully !")
})