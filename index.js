import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import connectDB from "./src/db/index.js"
import todoRoutes from "./src/routes/todo.routes.js"

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

//routes
app.use('/api/v1', todoRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})



connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGO DB connection failed !!! ", err);
    });