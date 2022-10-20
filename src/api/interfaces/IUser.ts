export interface IUser {
    length: number;
    id: number;
    name: string;
    email: string;
    password: string;
}

export interface IUsers {
    users: IUser[];
}