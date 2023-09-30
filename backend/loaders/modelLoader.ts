import { Sequelize } from "sequelize";
import defineUserModel from "../models/user.model";

export default function loadModels(sequelize: Sequelize) {
  const User = defineUserModel(sequelize);

  return { User };
}
