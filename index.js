import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import ConnectDB from "./src/DbConfig/ConnectDB.js"

const app = express()
dotenv.config()



// Middlewares
app.use(cors())
app.use(express.json())

// Connect DB
ConnectDB()

// Routes
import RecipeRoutes from "./src/Routes/RecipeRoutes.js"

app.use("/api/v1/recipe", RecipeRoutes)



app.get("/", (req, res) => {
    res.status(200).send("Recipe's Server Running...")
})


app.listen(process.env.PORT, () => {
    console.log("Server Started...")
})