import { Sequelize, Options } from "sequelize";
// import loadModels from "./modelLoader";
import { DATABASE_CREDENTIALS } from "@/config";
import loadModels from "./modelLoader";

const sequelizeOptions: Options = {
  host: DATABASE_CREDENTIALS.host,
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    idle: 10000,
  },
  logging: false,
  port: Number.apply(DATABASE_CREDENTIALS.port) || 3306,
};

const sequelize = new Sequelize(
  DATABASE_CREDENTIALS.database,
  DATABASE_CREDENTIALS.user,
  DATABASE_CREDENTIALS.password,
  sequelizeOptions
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
