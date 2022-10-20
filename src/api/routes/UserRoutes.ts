import express from "express"
import { RequiredFields } from "../../middlewares/RequiredFields"
import { UsuariosController } from "../controllers/usuarios.controller"
import { ConfirmationUser } from "../../middlewares/ConfirmationUser"

const UserRoutes = express.Router()

UserRoutes
    .get("/users", UsuariosController.getUsuarios)
    .post("/users", RequiredFields, ConfirmationUser,  UsuariosController.createUser)

export default UserRoutes