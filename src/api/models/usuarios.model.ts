import { IUser, IUsers } from "../interfaces/IUser";
import Connection from "../models/connection";

export class Usuarios {
    static async getUsuarios(): Promise<IUsers> {
        const [result] = await Connection.execute("SELECT * FROM usuarios");
        return result; 
    }

    static async createUser(user: IUser): Promise<IUser> {
        const { name, email, password } = user;
        const [result] = await Connection.execute(
            "INSERT INTO usuarios (name, email, password) VALUES (?, ?, ?)",
            [name, email, password]
        );
        return result;
    }

    static async getUserByEmail(email: string): Promise<IUser> {
        const [result] = await Connection.execute(
            "SELECT * FROM usuarios WHERE email = ?",
            [email]
        );
        return result;
    }
}