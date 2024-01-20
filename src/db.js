import { createPool } from "mysql2/promise";

//This is a example credentials to connect to your DB
//Database parameter is like use BBDD; in mysql
export const pool = createPool({
  host: "host@host.com",
  user: "User",
  password: "Password",
  port: 3306,
  database: "BBDD",
});
