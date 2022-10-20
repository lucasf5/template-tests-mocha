import { UsuariosService } from "../services/usuarios.service";
import { Request, Response } from "express";

export class UsuariosController {
  static async getUsuarios(req: Request, res: Response): Promise<void> {
      const usuarios = await UsuariosService.getUsuarios();
      res.status(200).send(usuarios);
  }

  static async createUser(req: Request, res: Response): Promise<void> {
      const usuario = await UsuariosService.createUser(req.body);
      res.status(201).send(usuario);
  }
}
