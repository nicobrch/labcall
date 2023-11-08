// export const API_PATH = "http://172.16.31.35/api";
export const BASE_PATH = process.env.BASE_PATH || `http://localhost:3000`;

export const QUESTION_SERVICE_PATH =
  process.env.QUESTION_SERVICE_PATH || `http://localhost:8000`;

export const API_PATH = `${BASE_PATH}/api`;

export const BASE_IMAGES_PATH = BASE_PATH + "/images";

export const DATABASE_CREDENTIALS = {
  host: process.env.BD_HOST || "127.0.0.1",
  user: process.env.BD_USER || "root",
  password: process.env.BD_PASSWORD || "root",
  database: process.env.BD_DATABASE || "labcal",
  port: process.env.BD_PORT || 3309,
  logging: process.env.BD_LOGGING === "true" ? true : false,
};
export const SALT_ROUNDS = process.env.SALT_ROUNDS || 10;
