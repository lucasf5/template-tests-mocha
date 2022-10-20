import { Request, Response, NextFunction } from "express";
import {UsuariosService} from "../api/services/usuarios.service";

export const ConfirmationUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { email } = req.body;

    const userExists = await UsuariosService.getUserByEmail(email);

    if (userExists.length > 0) {
        res.status(400).send("Usuário já cadastrado.");
    }

    next();
}