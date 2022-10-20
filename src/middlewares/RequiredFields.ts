import { Request, Response, NextFunction } from "express";

type IRequiredFields = ['name', 'email', 'password'];

export const RequiredFields = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const requiredFields: IRequiredFields = ['name', 'email', 'password'];

    for (const field of requiredFields) {
        if (!req.body[field]) {
            return res.status(400).send(`O campo ${field} é obrigatório.`);
        }
    }

    if (req.body.password.length < 6) {
        return res.status(400).send("A senha deve ter no mínimo 6 caracteres.");
    }

    next();

};
