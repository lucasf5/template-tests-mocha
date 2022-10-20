import express, { Application } from "express"
import UserRoutes from "./UserRoutes"

export const router = (app: Application) => {
    app.get("/", (req, res) => {
        res.send("Hello World!")
    })
    
    app.use(express.json(), UserRoutes)
}