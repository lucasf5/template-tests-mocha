import { IUser, IUsers } from "../interfaces/IUser";
import { Usuarios } from "../models/usuarios.model";

export class UsuariosService {
  static async getUsuarios(): Promise<IUsers> {
    const usuarios = await Usuarios.getUsuarios();
    return usuarios;
  }

  static async createUser(user: IUser): Promise<IUser> {
    const usuario = await Usuarios.createUser(user);
    return usuario;
  }

  static async getUserByEmail(email: string): Promise<IUser>{
    const usuario = await Usuarios.getUserByEmail(email);
    return usuario;
  }
}
