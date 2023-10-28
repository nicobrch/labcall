// export const API_PATH = "http://172.16.31.35/api";
export const API_PATH =
  process.env.LOCAL_API_PATH || "http://localhost:3000/api";
export const DATABASE_CREDENTIALS = {
  host: process.env.BD_HOST || "127.0.0.1",
  user: process.env.BD_USER || "root",
  password: process.env.BD_PASSWORD || "root",
  database: process.env.BD_DATABASE || "labcal",
  port: process.env.BD_PORT || 3309,
};
export const SALT_ROUNDS = process.env.SALT_ROUNDS || 10;
