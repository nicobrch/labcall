import { DataTypes, Model, Sequelize } from "sequelize";
import { IUser } from "../interfaces/user";

export interface UserModel extends Model<IUser, IUser> {}

export default function defineUserModel(sequelize: Sequelize) {
  const User = sequelize.define<UserModel, IUser>(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
      },
      rut: {
        type: DataTypes.STRING(13),
        allowNull: true,
      },
      firstname: {
        // Primer nombre
        type: DataTypes.STRING(180),
        allowNull: true,
      },
      lastname1: {
        // Primer apellido
        type: DataTypes.STRING(180),
        allowNull: true,
      },
      lastname2: {
        // Segundo apellido
        type: DataTypes.STRING(180),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING(120),
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING(80),
        allowNull: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return User;
}
