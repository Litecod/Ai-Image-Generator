import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import UserRouter from "./routes/userRoute.js"

// App config

const app = express()
const port = process.env.PORT || 4800

connectDB()

//middleware
app.use(express.json())
app.use(cors())


//api endpoint
app.use("/api/user", UserRouter)

app.get("/", (req, res) => {
    res.send("Api Working")
})


app.listen(port, () => console.log("server started on Port : " + port))