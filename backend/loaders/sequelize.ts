import { Sequelize } from "sequelize";
// import loadModels from "./modelLoader";
import { DATABASE_CREDENTIALS } from "@/config";
import loadModels from "./modelLoader";

const sequelize = new Sequelize(
  DATABASE_CREDENTIALS.database,
  DATABASE_CREDENTIALS.user,
  DATABASE_CREDENTIALS.password,
  {
    port: Number(DATABASE_CREDENTIALS.port),
    logging: DATABASE_CREDENTIALS.logging,
    dialect: "mysql",
    host: DATABASE_CREDENTIALS.host,
    pool: {
      max: 10,
      min: 0,
      idle: 10000,
    },
  }
);

export const models = loadModels(sequelize);

export const {
  User,
  Question,
  Alternative,
  Node,
  UserNode,
  StudentResponse,
  Course,
  Axis,
  Ability,
} = models;

export default sequelize;
