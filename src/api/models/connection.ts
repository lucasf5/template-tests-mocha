import dotenv from 'dotenv';
import mysql, { Pool } from 'mysql2/promise';

dotenv.config();

class Connection {
  private static connection: Pool;

  constructor() {
    Connection.connection = mysql.createPool({
      host: process.env.MYSQLHOST,
      user: process.env.MYSQLUSER,
      password: process.env.MYSQLPASSWORD,
      database: process.env.MYSQLDATABASE,
    });
  }

  public async execute(sql: string, values: any[] = []): Promise<any> {
    const result = await Connection.connection.execute(sql, values);
    return result;
  }
}
export default new Connection();