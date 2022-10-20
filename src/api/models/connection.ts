import dotenv from 'dotenv';
import mysql, { Pool } from 'mysql2/promise';

dotenv.config();

class Connection {
  private static connection: Pool;

  constructor() {
    Connection.connection = mysql.createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
    });
  }

  public async execute(sql: string, values: any[] = []): Promise<any> {
    const result = await Connection.connection.execute(sql, values);
    return result;
  }
}
export default new Connection();